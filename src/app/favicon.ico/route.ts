export function GET() {
  return new Response(
    `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64">
      <circle cx="32" cy="32" r="29" fill="#191918" stroke="#ff7a00" stroke-width="4"/>
      <path d="M18 17h7v12.8L36.5 17h8.2L31.4 30.8 45 47h-8.4L25 34.2V47h-7V17Z" fill="#ff7a00"/>
      <circle cx="43.5" cy="45.5" r="2.2" fill="#fffdf9"/>
    </svg>`,
    {
      headers: {
        "Cache-Control": "public, max-age=86400",
        "Content-Type": "image/svg+xml",
      },
    },
  );
}
