import type { APIRoute } from 'astro';
import { readFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';

// Serves the PDF directly at the clean /company-profile URL (no .pdf in the
// address bar) so the browser's native PDF viewer opens it in place — no
// custom HTML wrapper, no iframe/embed, nothing for a download-manager
// extension to hijack.
const pdfPath = fileURLToPath(new URL('../../public/company-profile.pdf', import.meta.url));

export const GET: APIRoute = () => {
  const file = readFileSync(pdfPath);
  return new Response(file, {
    status: 200,
    headers: {
      'Content-Type': 'application/pdf',
      'Content-Disposition': 'inline; filename="Cardi-Company-Profile.pdf"',
    },
  });
};
