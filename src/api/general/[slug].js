import { readFileSync } from 'fs';
import { join } from 'path';

export async function GET(req, { params }) {
  const { slug } = params;

  if (!slug) {
    return new Response('Not found', { status: 404 });
  }

  try {
    const dbPath = join(process.cwd(), 'src/api/staticData/db.json');
    const dbJson = JSON.parse(readFileSync(dbPath, 'utf-8'));

    if (dbJson.homepage.data.widgets.some(widget => widget.data.title === slug)) {
      return new Response(JSON.stringify(dbJson.homepage.data.widgets.find(widget => widget.data.title === slug)), { status: 200 });
    } else {
      return new Response('Not found', { status: 404 });
    }
  } catch (error) {
    console.error("Error:", error);
    return new Response('Internal Server Error', { status: 500 });
  }
}
