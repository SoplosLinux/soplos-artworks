<p align="center">
  <img src="splash.png" alt="Soplos Linux · Artwork — Apps 3.0: sixteen production icons, one family" width="100%">
</p>

# Soplos Linux · Artwork

🇬🇧 [English](README.md) · 🇪🇸 **Español**

Arte oficial de **Soplos Linux**: los dieciséis iconos de producción de las aplicaciones 3.0, la presentación animada que los acompaña y los fondos de pantalla de la distro.

Los iconos están pensados para usarse tal cual en el sistema: **no llevan placa** (el cuadrado redondeado oscuro de los iconos antiguos), son transparentes y comparten estilo, paleta y volumen.

## Iconos

Cada app tiene su propia carpeta con cuatro archivos:

| Archivo | Para qué sirve |
| --- | --- |
| `.svg` | Vector sin fondo. Es el formato de producción. |
| `.png` | 1254 × 1254 px con transparencia. |
| `.psd` | Capas para retocar en Photocraft o Photoshop. Los grupos con sombra o desenfoque están rasterizados. |
| `.vectorcraft` | Proyecto original de VectorCraft, para editar el dibujo. |

### Las dieciséis apps

| | App | Qué hace | Carpeta |
| :---: | --- | --- | --- |
| <img src="soplos-store/soplos-store.png" width="64" alt="Store"> | **Store** | Instala, actualiza y elimina aplicaciones de APT, Flatpak, Snap y AppImage, y aplica firmware con fwupd. | [`soplos-store`](soplos-store) |
| <img src="soplos-appimage-manager-3.0/soplos-appimage-manager.png" width="64" alt="AppImage Manager"> | **AppImage Manager** | Integra las AppImage en el escritorio y comprueba sus actualizaciones. | [`soplos-appimage-manager-3.0`](soplos-appimage-manager-3.0) |
| <img src="soplos-grub-editor-3.0/soplos-grub-editor.png" width="64" alt="GRUB Editor"> | **GRUB Editor** | Edita el cargador de arranque sin tocar archivos. | [`soplos-grub-editor-3.0`](soplos-grub-editor-3.0) |
| <img src="soplos-kernel-installer-3.0/soplos-kernel-installer.png" width="64" alt="Kernel Installer"> | **Kernel Installer** | Descarga, parchea e instala el kernel de Linux. | [`soplos-kernel-installer-3.0`](soplos-kernel-installer-3.0) |
| <img src="soplos-layout-switcher-3.0/soplos-layout-switcher.png" width="64" alt="Layout Switcher"> | **Layout Switcher** | Cuatro disposiciones de GNOME (Soplos, Dock, Tiling y GNOME) en un clic. | [`soplos-layout-switcher-3.0`](soplos-layout-switcher-3.0) |
| <img src="soplos-plymouth-manager-3.0/soplos-plymouth-manager.png" width="64" alt="Plymouth Manager"> | **Plymouth Manager** | Gestiona la pantalla de arranque, con vista previa real. | [`soplos-plymouth-manager-3.0`](soplos-plymouth-manager-3.0) |
| <img src="soplos-repo-selector-3.0/soplos-repo-selector.png" width="64" alt="Repo Selector"> | **Repo Selector** | Repositorios APT, mirrors y claves GPG bajo control. | [`soplos-repo-selector-3.0`](soplos-repo-selector-3.0) |
| <img src="soplos-sys-cleaner-3.0/soplos-sys-cleaner.png" width="64" alt="Sys Cleaner"> | **Sys Cleaner** | Recupera espacio borrando solo lo que confirmes. | [`soplos-sys-cleaner-3.0`](soplos-sys-cleaner-3.0) |
| <img src="soplos-system-service-3.0/soplos-system-service.png" width="64" alt="System Service"> | **System Service** | Servicios y temporizadores de systemd sin línea de comandos. | [`soplos-system-service-3.0`](soplos-system-service-3.0) |
| <img src="soplos-theme-manager-3.0/soplos-theme-manager.png" width="64" alt="Theme Manager"> | **Theme Manager** | Gestor de temas de Tyron (Xfce). | [`soplos-theme-manager-3.0`](soplos-theme-manager-3.0) |
| <img src="soplos-webapp-manager-3.0/soplos-webapp-manager.png" width="64" alt="WebApp Manager"> | **WebApp Manager** | Convierte cualquier web en una aplicación con perfil aislado. | [`soplos-webapp-manager-3.0`](soplos-webapp-manager-3.0) |
| <img src="soplos-welcome-3.0/soplos-welcome.png" width="64" alt="Welcome"> | **Welcome** | Bienvenida: actualizar, controladores, seguridad y gaming. | [`soplos-welcome-3.0`](soplos-welcome-3.0) |
| <img src="soplos-welcome-live-3.0/soplos-welcome-live.png" width="64" alt="Welcome Live"> | **Welcome Live** | Bienvenida de la ISO Live y rescate del sistema. | [`soplos-welcome-live-3.0`](soplos-welcome-live-3.0) |
| <img src="soplos-linux-installer/soplos-linux-installer.png" width="64" alt="SLI"> | **SLI** | Soplos Linux Installer, el instalador propio que sustituirá a Calamares. | [`soplos-linux-installer`](soplos-linux-installer) |
| <img src="soplos-gaming-panel/soplos-gaming-panel.png" width="64" alt="Gaming Panel"> | **Gaming Panel** | Panel superpuesto (Ctrl+Shift+G) que controla GameMode en vivo. | [`soplos-gaming-panel`](soplos-gaming-panel) |
| <img src="soplos-look-manager/soplos-look-manager.png" width="64" alt="Look Manager"> | **Look Manager** | Temas y disposición para Tyson (Plasma). | [`soplos-look-manager`](soplos-look-manager) |

Los escritorios de Soplos son **Boro** (GNOME), **Tyron** (Xfce) y **Tyson** (Plasma). SLI y Look Manager son apps nuevas y la presentación las marca como «Próximamente».

## Presentación

En [`presentación/`](presentaci%C3%B3n) hay una presentación animada, en HTML, que recorre las dieciséis apps con su icono. No necesita instalar nada: se abre en el navegador.

> **Por ahora la presentación solo está en español.** Está previsto integrarla en la web oficial de Soplos y traducirla a los idiomas de las distros: inglés, alemán, francés, italiano, portugués, rumano y ruso.

| Archivo | Contenido |
| --- | --- |
| [`index.html`](presentaci%C3%B3n/index.html) | Versión horizontal (16:9). Navegación con `←` `→`, `Espacio` para pausar, `G` para el índice y `F` para pantalla completa. |
| [`vertical.html`](presentaci%C3%B3n/vertical.html) | Versión vertical (9:16), pensada para grabarla en vídeo para redes sociales. Tecla `R` para el modo grabación. |
| [`textos.js`](presentaci%C3%B3n/textos.js) | Textos de la versión vertical, separados por idioma (hoy solo `es`). |
| [`imagenes/`](presentaci%C3%B3n/imagenes) | Los dieciséis iconos en PNG, compartidos por las dos versiones. |

`vertical.html` ya lee sus textos de `textos.js` y acepta `?lang=xx`, con español como idioma de reserva. `index.html` sigue con los textos dentro del propio archivo.

## Fondos de pantalla

La carpeta [`wallpapers/`](wallpapers) contiene los 29 fondos de pantalla que lleva Soplos Linux, numerados de `001.jpg` a `029.jpg`. Todos son JPG de 3840 × 2160 px (4K, 16:9). Son copias de los instalados en `/usr/share/backgrounds/soplos`.

## Estructura

```
soplos-artwork/
├── splash.png               imagen de cabecera de este README
├── soplos-<app>/            una carpeta por app: .svg, .png, .psd y .vectorcraft
├── wallpapers/              los 29 fondos de pantalla de Soplos (001.jpg … 029.jpg)
├── presentación/            presentación en HTML (horizontal y vertical)
├── README.md
└── CHANGELOG.md
```

Los nombres de las apps (Store, GRUB Editor, Kernel Installer…) son marca y no se traducen.

## Cómo se hicieron

1. Se dibuja el icono en **VectorCraft** y se exporta como SVG sin fondo.
2. Se abre ese SVG en **Photocraft**, que genera el PSD con capas y el PNG.

## Historial de cambios

Consulta el [CHANGELOG](CHANGELOG.md) (en inglés).
