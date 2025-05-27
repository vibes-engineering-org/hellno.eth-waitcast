import { PROJECT_TITLE } from "~/lib/constants";

export async function GET() {
  const appUrl =
    process.env.NEXT_PUBLIC_URL ||
    `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`;

  const config = {
    accountAssociation: {
      header:
        "eyJmaWQiOjg2OTk5OSwidHlwZSI6ImN1c3RvZHkiLCJrZXkiOiIweDc2ZDUwQjBFMTQ3OWE5QmEyYkQ5MzVGMUU5YTI3QzBjNjQ5QzhDMTIifQ",
      payload:
        "eyJkb21haW4iOiJoZWxsbm9ldGgtd2FpdGNhc3QudmVyY2VsLmFwcCJ9",
      signature:
        "MHg0MDVlMGY3YThiZTE0ZTg3ZDc4NGIzYTQ3NGNiNDliZTQwYmIyMDg4NmQyNTcxZWM1OTljZTY5OTUxOTE0ZDU1NDZkZjZkMTBjMzNiZmNjNWI5MjU4ODYyYWI3NWVmMTBjZmEzMTQ4YzhiY2QzYzNiMzJlZGNkMWU0MzliNTEwZjFj",
    },
    frame: {
      version: "1",
      name: PROJECT_TITLE,
      iconUrl: `${appUrl}/icon.png`,
      homeUrl: appUrl,
      imageUrl: `${appUrl}/frames/hello/opengraph-image`,
      ogImageUrl: `${appUrl}/frames/hello/opengraph-image`,
      buttonTitle: "Launch Frame",
      splashImageUrl: `${appUrl}/splash.png`,
      splashBackgroundColor: "#f7f7f7",
      webhookUrl: `${appUrl}/api/webhook`,
    },
  };

  return Response.json(config);
}
