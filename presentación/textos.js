/*
 * Textos de la presentación de Soplos Linux Apps 3.0.
 *
 * Hoy lo usa solo vertical.html (9:16). index.html (horizontal) conserva sus textos
 * escritos dentro del propio archivo, a propósito, para no tocarlo. Al integrar la
 * presentación en la web habrá que pasar también index.html a este archivo, para que
 * un texto se cambie o se traduzca una sola vez.
 *
 * - `apps` guarda lo que no depende del idioma: carpeta del icono (imagenes/<slug>.png),
 *   nombre comercial (no se traduce), colores y si la app está marcada como "próximamente".
 * - `i18n` guarda los textos por idioma. Hoy solo existe `es`.
 *
 * Para añadir un idioma: copiar el bloque `es` completo, cambiar la clave (en, de, fr, it,
 * pt, ro, ru) y traducir los valores. Lo que falte en un idioma se toma de `es`.
 * Se elige con ?lang=xx en la URL (por ejemplo vertical.html?lang=de).
 * Los textos admiten <b>…</b> para resaltar la parte destacada del titular.
 */
window.SOPLOS = {
  apps: [
    { slug: 'store',            name: 'Store',            a1: '#ffc21f', a2: '#ff6a12' },
    { slug: 'appimage-manager', name: 'AppImage Manager', a1: '#ffb52e', a2: '#ff7a12' },
    { slug: 'grub-editor',      name: 'GRUB Editor',      a1: '#ff9a1f', a2: '#ff5a14' },
    { slug: 'kernel-installer', name: 'Kernel Installer', a1: '#ffc21f', a2: '#ff7a12' },
    { slug: 'layout-switcher',  name: 'Layout Switcher',  a1: '#ffd23f', a2: '#ff6a12' },
    { slug: 'plymouth-manager', name: 'Plymouth Manager', a1: '#ffb52e', a2: '#ff5a14' },
    { slug: 'repo-selector',    name: 'Repo Selector',    a1: '#ffc21f', a2: '#ff6a12' },
    { slug: 'sys-cleaner',      name: 'Sys Cleaner',      a1: '#ffa21f', a2: '#ff4a14' },
    { slug: 'system-service',   name: 'System Service',   a1: '#ffc21f', a2: '#ff6a12' },
    { slug: 'theme-manager',    name: 'Theme Manager',    a1: '#ffb52e', a2: '#ff5a14' },
    { slug: 'webapp-manager',   name: 'WebApp Manager',   a1: '#ffc21f', a2: '#ff6a12' },
    { slug: 'welcome',          name: 'Welcome',          a1: '#ffd23f', a2: '#ff7a12' },
    { slug: 'welcome-live',     name: 'Welcome Live',     a1: '#ffb52e', a2: '#ff4a14' },
    { slug: 'sli',              name: 'SLI',              a1: '#ffc21f', a2: '#ff5a14', soon: true },
    { slug: 'gaming-panel',     name: 'Gaming Panel',     a1: '#ffd23f', a2: '#ff4a14' },
    { slug: 'look-manager',     name: 'Look Manager',     a1: '#ffb52e', a2: '#ff6a12', soon: true },
  ],
  i18n: {
    es: {
      ui: {
        kicker: 'Presentación',
        tagline: 'Dieciséis herramientas, <b>una sola familia</b>.',
        start: 'Comenzar',
        outroTitle: 'Una familia.',
        again: 'Volver a empezar',
        soon: 'Próximamente',
        prev: 'Anterior', pause: 'Pausa', next: 'Siguiente', index: 'Índice',
        hint: '<kbd>←</kbd><kbd>→</kbd> navegar · <kbd>Espacio</kbd> pausa · <kbd>G</kbd> índice · <kbd>F</kbd> pantalla completa',
        hintVertical: '<kbd>←</kbd><kbd>→</kbd> navegar · <kbd>Espacio</kbd> pausa · <kbd>R</kbd> modo grabación',
      },
      apps: {
        'store': { cat: 'Software', tag: 'Todo el software, <b>en un solo lugar</b>.',
          desc: 'Encuentra, instala, actualiza y elimina aplicaciones de APT, Flatpak, Snap y AppImage, y aplica actualizaciones de firmware con fwupd.',
          chips: ['APT · Flatpak · Snap', 'AppStream y Flathub', 'Firmware con fwupd'] },
        'appimage-manager': { cat: 'Software', tag: 'Tus AppImage, <b>integradas en el escritorio</b>.',
          desc: 'Las mueve a ~/AppImages, extrae su icono, crea la entrada de menú y comprueba actualizaciones en GitHub, GitLab o Codeberg.',
          chips: ['Entrada de menú', 'Icono y metadatos', 'Actualizaciones'] },
        'grub-editor': { cat: 'Arranque', tag: 'El cargador de arranque, <b>sin tocar un archivo</b>.',
          desc: 'Elige la entrada por defecto y el tiempo de espera, edita los parámetros del kernel y cambia el aspecto del menú.',
          chips: ['Parámetros del kernel', 'Temas y fondos', 'Colores y fuentes'] },
        'kernel-installer': { cat: 'Sistema', tag: 'Descarga, parchea <b>e instala el kernel</b>.',
          desc: 'Un asistente gráfico para llevar el kernel de Linux desde el código fuente hasta tu arranque.',
          chips: ['Descargar', 'Parchear', 'Compilar e instalar'] },
        'layout-switcher': { cat: 'Escritorio · Boro', tag: 'Cuatro escritorios GNOME, <b>un solo clic</b>.',
          desc: 'Soplos, Dock, Tiling y GNOME. Instala las extensiones que faltan y aplica los ajustes de cada disposición.',
          chips: ['Soplos', 'Dock', 'Tiling', 'GNOME'] },
        'plymouth-manager': { cat: 'Arranque', tag: 'La pantalla de arranque, <b>a tu gusto</b>.',
          desc: 'Galería de temas con vista previa real, instalación desde archivo y borrado de los que ya no quieres.',
          chips: ['Vista previa real', 'Instalar desde archivo', 'X11 y Wayland'] },
        'repo-selector': { cat: 'Sistema', tag: 'Repositorios APT <b>bajo control</b>.',
          desc: 'Activa o desactiva repositorios, moderniza los .list a DEB822, encuentra el mirror más rápido con una prueba real y gestiona las claves GPG.',
          chips: ['DEB822', 'Prueba de velocidad', 'Claves GPG'] },
        'sys-cleaner': { cat: 'Mantenimiento', tag: 'Recupera espacio, <b>solo lo que confirmes</b>.',
          desc: 'Busca cachés, registros, temporales, restos de Flatpak y Snap y kernels antiguos, y te explica qué es cada cosa antes de borrar.',
          chips: ['Cachés y logs', 'Kernels antiguos', 'Tú decides'] },
        'system-service': { cat: 'Sistema', tag: 'Servicios systemd, <b>sin línea de comandos</b>.',
          desc: 'Inicia, detiene y habilita servicios y temporizadores, lee los registros, descubre qué ralentiza el arranque. Cada cambio se puede deshacer.',
          chips: ['Servicios y timers', 'Registros', 'Deshacer cambios'] },
        'theme-manager': { cat: 'Escritorio · Tyron', tag: 'Temas completos <b>para Tyron</b>.',
          desc: 'El gestor de temas de Xfce: aplica, crea, exporta e importa temas de escritorio, explora fondos de pantalla y configura el panel.',
          chips: ['Galería de temas', 'Fondos', 'Panel'] },
        'webapp-manager': { cat: 'Escritorio', tag: 'Cualquier web, <b>como aplicación</b>.',
          desc: 'Convierte un sitio en su propia app: ventana propia, icono propio en la barra y perfil de navegador aislado.',
          chips: ['Ventana propia', 'Perfil aislado', 'Tu navegador'] },
        'welcome': { cat: 'Bienvenida', tag: 'Tu equipo, <b>puesto a punto</b>.',
          desc: 'Un único lugar para actualizar el sistema, instalar controladores y kernels, reforzar la seguridad y optimizar para juegos.',
          chips: ['Actualizar', 'Controladores', 'Seguridad', 'Gaming'] },
        'welcome-live': { cat: 'ISO Live', tag: 'Bienvenida y <b>rescate del sistema</b>.',
          desc: 'La puerta de entrada del entorno Live: instala Soplos y reúne herramientas de recuperación con soporte completo de BTRFS.',
          chips: ['Instalar', 'Recuperación', 'BTRFS'] },
        'sli': { cat: 'Instalación', tag: 'El instalador <b>de Soplos Linux</b>.',
          desc: 'Soplos Linux Installer: un asistente propio, paso a paso, que sustituirá a Calamares.',
          chips: ['Asistente paso a paso', 'Sustituye a Calamares', 'Hecho para Soplos'] },
        'gaming-panel': { cat: 'Gaming', tag: 'Rendimiento, <b>al instante</b>.',
          desc: 'Un panel superpuesto que se abre con Ctrl+Shift+G y controla GameMode en vivo mientras juegas.',
          chips: ['Ctrl+Shift+G', 'GameMode en vivo', 'Boro · Tyson · Tyron'] },
        'look-manager': { cat: 'Escritorio · Tyson', tag: 'El aspecto de Plasma, <b>a tu manera</b>.',
          desc: 'Temas y disposición del escritorio para Tyson: lo que Theme Manager y Layout Switcher hacen en Xfce y GNOME, ahora en Plasma.',
          chips: ['Temas', 'Disposición', 'Plasma'] },
      },
    },
  },
};
