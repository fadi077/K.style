import { permanentRedirect } from "next/navigation";

export default function VisitUsRedirect() {
  permanentRedirect("/contact-us");
}
