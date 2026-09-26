import { NextResponse } from "next/server";

const MAX_PHOTO_SIZE = 5 * 1024 * 1024;
const ALLOWED_PHOTO_TYPES = new Set(["image/jpeg", "image/png", "image/webp"]);

function textValue(formData: FormData, key: string) {
  const value = formData.get(key);
  return typeof value === "string" ? value.trim() : "";
}

export async function POST(request: Request) {
  let formData: FormData;

  try {
    formData = await request.formData();
  } catch {
    return NextResponse.json({ message: "Please check the form and try again." }, { status: 400 });
  }

  const name = textValue(formData, "name");
  const email = textValue(formData, "email");
  const enquiryType = textValue(formData, "enquiryType");
  const message = textValue(formData, "message");
  const consent = formData.get("consent");
  const photo = formData.get("photo");

  if (!name || name.length > 120 || !email || email.length > 254 || !enquiryType || !message || message.length > 5000) {
    return NextResponse.json(
      { message: "Please complete the required fields and keep your message under 5,000 characters." },
      { status: 400 },
    );
  }

  if (consent !== "on") {
    return NextResponse.json(
      { message: "Please confirm that K.Style may use your details to reply." },
      { status: 400 },
    );
  }

  if (photo instanceof File && photo.size > 0) {
    if (!ALLOWED_PHOTO_TYPES.has(photo.type) || photo.size > MAX_PHOTO_SIZE) {
      return NextResponse.json(
        { message: "Please upload a JPG, PNG or WebP image smaller than 5 MB." },
        { status: 400 },
      );
    }
  }

  const endpoint = process.env.CONTACT_FORM_ENDPOINT;
  if (!endpoint) {
    return NextResponse.json(
      { message: "The enquiry form is being connected. Please call K.Style for now." },
      { status: 503 },
    );
  }

  try {
    const endpointUrl = new URL(endpoint);
    if (endpointUrl.protocol !== "https:") {
      throw new Error("Contact endpoint must use HTTPS.");
    }

    const forwardedData = new FormData();
    forwardedData.set("name", name);
    forwardedData.set("email", email);
    forwardedData.set("phone", textValue(formData, "phone"));
    forwardedData.set("enquiryType", enquiryType);
    forwardedData.set("message", message);
    if (photo instanceof File && photo.size > 0) {
      forwardedData.set("photo", photo, photo.name);
    }

    const response = await fetch(endpointUrl, {
      body: forwardedData,
      method: "POST",
    });

    if (!response.ok) {
      throw new Error(`Contact endpoint returned ${response.status}`);
    }

    return NextResponse.json({ message: "Thank you. Your enquiry has been sent." });
  } catch {
    return NextResponse.json(
      { message: "We could not send your enquiry just now. Please call K.Style instead." },
      { status: 502 },
    );
  }
}
