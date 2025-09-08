export async function GET() {
  return new Response(
    JSON.stringify({
      status: 'OK',
      message: 'CloudFi Labs Frontend API is running',
      timestamp: new Date().toISOString(),
    }),
    {
      status: 200,
      headers: {
        'Content-Type': 'application/json',
      },
    }
  );
}