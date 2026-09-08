import type { APIRoute } from 'astro';
import { readFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';

// Serves the Pricing PDF directly at the clean URL so the browser's native
// PDF viewer opens it in place — same pattern as /company-profile.
const pdfPath = fileURLToPath(new URL('../../public/Cardi.co.id - Pricing_compressed.pdf', import.meta.url));

export const GET: APIRoute = () => {
  const file = readFileSync(pdfPath);
  return new Response(file, {
    status: 200,
    headers: {
      'Content-Type': 'application/pdf',
      'Content-Disposition': 'inline; filename="Cardi-Pricing.pdf"',
    },
  });
};
