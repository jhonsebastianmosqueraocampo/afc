// Convierte las fotos de image-sources/ a WebP optimizado en public/assets/.
// Uso: npm run images   (vuelve a generar todo; los originales quedan en image-sources/)
import { readdir, mkdir } from "node:fs/promises";
import path from "node:path";
import sharp from "sharp";

const SRC = "image-sources";
const OUT = "public/assets";
const MAX_WIDTH = 1920;

await mkdir(OUT, { recursive: true });
for (const file of await readdir(SRC)) {
  if (!/\.(png|jpe?g)$/i.test(file)) continue;
  const name = file.replace(/\.(png|jpe?g)$/i, ".webp");
  const info = await sharp(path.join(SRC, file))
    .resize({ width: MAX_WIDTH, withoutEnlargement: true })
    .webp({ quality: 78 })
    .toFile(path.join(OUT, name));
  console.log(`${file} -> ${name} (${Math.round(info.size / 1024)} KB)`);
}
