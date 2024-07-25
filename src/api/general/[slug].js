import { readFileSync } from 'fs';
import { join } from 'path';

export default function handler(req, res) {
  const { slug } = req.query;

  if (!slug) {
    return res.status(404).send('Not found');
  }

  try {
    // Assuming your static data is in the "public" directory or accessible at build time
    const dbPath = join(process.cwd(), 'src/api/staticData/db.json');
    const dbJson = JSON.parse(readFileSync(dbPath, 'utf-8'));

    if (dbJson.hasOwnProperty(slug)) {
      return res.status(200).json(dbJson[slug]);
    } else {
      return res.status(404).send('Not found');
    }
  } catch (error) {
    return res.status(500).send('Internal server error');
  }
}
