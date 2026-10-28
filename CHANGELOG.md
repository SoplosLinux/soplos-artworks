# Changelog

Todos los cambios importantes de este repositorio se documentan en este archivo.

El formato sigue [Keep a Changelog](https://keepachangelog.com/es-ES/1.1.0/).

## [3.0.0] - 2026-10-28

Primera versión del repositorio: los iconos de producción de las apps de Soplos Linux 3.0 y su presentación.

### Añadido

- Dieciséis iconos de producción, sin placa, cada uno en su carpeta con `.svg`, `.png` (1254 × 1254, con transparencia), `.psd` con capas y `.vectorcraft`:
  - Apps existentes: Store, AppImage Manager, GRUB Editor, Kernel Installer, Layout Switcher, Plymouth Manager, Repo Selector, Sys Cleaner, System Service, Theme Manager, WebApp Manager, Welcome y Welcome Live.
  - Apps nuevas: **SLI** (Soplos Linux Installer, sustituto de Calamares), **Gaming Panel** y **Look Manager** (temas y disposición para Tyson/Plasma).
- Presentación animada en HTML, en `presentación/`:
  - `index.html`, versión horizontal.
  - `vertical.html`, versión 9:16 para grabar en vídeo para redes sociales.
  - `textos.js`, textos de la versión vertical separados por idioma.
  - `imagenes/`, los dieciséis iconos en PNG.
- `splash.png`, imagen de cabecera con los dieciséis iconos.
- `README.md` y este `CHANGELOG.md`.

### Cambiado

- La carpeta de trabajo pasa a llamarse `soplos-artwork` y se mueve a `Documentos/Projects`.
- La carpeta de Software Center pasa a llamarse `soplos-store`.

### Notas

- La presentación solo está disponible en español. Queda pendiente traducirla a inglés, alemán, francés, italiano, portugués, rumano y ruso cuando se integre en la web oficial.
- `index.html` mantiene sus textos dentro del propio archivo; al integrarla en la web habrá que pasarlos a `textos.js`.
- Los iconos no se han comprobado todavía a 32 px ni sobre fondos claros y oscuros reales.
