# OwlByte Web

Sitio web completo para la agencia digital **OwlByte** construido con Astro + TypeScript + Tailwind CSS.

## Requisitos
- Node.js 18+
- npm (o pnpm/yarn)

## Instalación
```bash
npm install
```

## Desarrollo
```bash
npm run dev
```

## Build
```bash
npm run build
```

## Preview
```bash
npm run preview
```

## Deploy en Cloudflare Pages
1. Crea un nuevo proyecto en Cloudflare Pages.
2. Conecta este repositorio desde GitHub.
3. Configura los comandos:
   - **Build command:** `npm run build`
   - **Build output directory:** `dist`
4. Define la versión de Node en 18 o superior.
5. Guarda y despliega.

## Conectar dominio Namecheap → Cloudflare
1. Compra o selecciona tu dominio en Namecheap.
2. En Cloudflare, agrega el dominio y copia los nameservers asignados.
3. En Namecheap, ve a **Domain List → Manage → Nameservers** y selecciona **Custom DNS**.
4. Pega los nameservers de Cloudflare y guarda.
5. Espera la propagación (puede tardar hasta 24 horas).
6. En Cloudflare Pages, asigna el dominio al proyecto.

## Formulario de contacto
El formulario actual es un mock que muestra un mensaje de éxito en el front-end.

Opciones para hacerlo funcional:
- **Formspree:** crea un endpoint y reemplaza el handler del formulario con el `action` y `method` sugeridos por Formspree.
- **Cloudflare Workers:** crea un Worker para recibir el POST, validar datos y enviar un correo o guardar en un servicio externo.

## Estructura de contenido
El contenido editable está en `src/data/` con archivos TypeScript:
- `services.ts`
- `packages.ts`
- `projects.ts`
- `faqs.ts`
- `testimonials.ts`
