# Changelog

All notable changes to this repository are documented in this file.

The format follows [Keep a Changelog](https://keepachangelog.com/en/1.1.0/).

## [3.0.0] - 2026-10-28

First version of the repository: the production icons for the Soplos Linux 3.0 apps, their presentation and the distro wallpapers.

### Added

- Sixteen production icons, with no backplate, each in its own folder with `.svg`, `.png` (1254 × 1254, transparent), layered `.psd` and `.vectorcraft`:
  - Existing apps: Store, AppImage Manager, GRUB Editor, Kernel Installer, Layout Switcher, Plymouth Manager, Repo Selector, Sys Cleaner, System Service, Theme Manager, WebApp Manager, Welcome and Welcome Live.
  - New apps: **SLI** (Soplos Linux Installer, the Calamares replacement), **Gaming Panel** and **Look Manager** (themes and layout for Tyson/Plasma).
- Animated HTML presentation, in `presentación/`:
  - `index.html`, horizontal version.
  - `vertical.html`, 9:16 version for recording video for social media.
  - `textos.js`, texts of the vertical version, split by language.
  - `imagenes/`, the sixteen icons as PNG.
- `wallpapers/`, the 29 Soplos Linux wallpapers (`001.jpg` to `029.jpg`, 3840 × 2160), copied from `/usr/share/backgrounds/soplos`.
- `splash.png`, header image showing the sixteen icons.
- `README.md` (English), `README.es.md` (Spanish) and this `CHANGELOG.md`.

### Changed

- The working folder is now called `soplos-artwork` and lives in `Documentos/Projects`.
- The Software Center folder is now called `soplos-store`.

### Notes

- The presentation is available in Spanish only. It still has to be translated into English, German, French, Italian, Portuguese, Romanian and Russian when it is integrated into the official website.
- `index.html` keeps its texts inside the file itself; when it is integrated into the website they will have to be moved to `textos.js`.
- The icons have not yet been checked at 32 px or on real light and dark backgrounds.
