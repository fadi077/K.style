export function GET() {
  return new Response(
    '<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32"/>',
    {
      headers: {
        "Cache-Control": "public, max-age=86400",
        "Content-Type": "image/svg+xml",
      },
    },
  );
}
