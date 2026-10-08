# AFC – Avivamiento Faith College

Sitio web de afc.education. React 19 + Vite + TypeScript + Material UI.

## Comandos

```bash
npm install       # instalar dependencias
npm run dev       # servidor de desarrollo
npm run build     # compilar para producción (genera dist/)
npm run images    # re-optimizar fotos de image-sources/ a WebP en public/assets/
```

Para publicar, se sube el contenido de `dist/` (incluye `_redirects` para que las rutas funcionen al recargar).

## Dónde cambiar cada cosa

| Qué | Archivo |
| --- | --- |
| Costos (presencial y virtual) y PDFs del plan de curso | `src/data/costs.ts` |
| Menú y enlaces del footer | `src/components/layout/menuData.ts` |
| Secciones del buscador | `src/components/layout/searchData.ts` |
| Mosca de inscripciones | `src/components/RegistrationFloat.tsx` |
| Paso a paso de inscripción | `src/pages/admissions/RegistrationSteps.tsx` |
| Requisitos virtual (Avivamiento / otra congregación) | `src/pages/admissions/VirtualRequirements.tsx` |
| Preguntas frecuentes | `src/pages/admissions/AdmissionsPresencial.tsx` y `AdmissionsVirtual.tsx` |

## Imágenes

Las fotos originales están en `image-sources/`. Para agregar o cambiar una, ponla ahí y ejecuta
`npm run images`; en el código se referencia como `/assets/<nombre>.webp`.
