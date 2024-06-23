const ANIMATIONS = [
  {
    name: "circle",
    css: `
      ::view-transition-group(root) { 
        animation-timing-function: var(--expo-out); 
      }
      ::view-transition-old(root), .dark::view-transition-old(root) { 
        animation: none; 
        z-index: -1; 
      }
      ::view-transition-new(root) {
        mask: url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 40 40"><circle cx="20" cy="20" r="20" fill="white"/></svg>') center / 0 no-repeat;
        animation: scale 1s;
      }
      @keyframes scale { 
        to { 
          mask-size: 200vmax; 
        } 
      }
    `,
  },
  {
    name: "circle-with-blur",
    css: `
      ::view-transition-group(root) {
        animation-timing-function: var(--expo-out);
      }
      ::view-transition-new(root) {
        mask: url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 40 40"><defs><filter id="blur"><feGaussianBlur stdDeviation="2"/></filter></defs><circle cx="20" cy="20" r="18" fill="white" filter="url(%23blur)"/></svg>') center / 0 no-repeat;
        animation: scale 1s;
      }
      ::view-transition-old(root),
      .dark::view-transition-old(root) {
        animation: none;
        z-index: -1;
      }
      .dark::view-transition-new(root) {
        animation: scale 1s;
      }
      @keyframes scale {
        to {
          mask-size: 200vmax;
        }
      }
    `,
  },
  {
    name: "circle-blur-top-left",
    css: `
      ::view-transition-group(root) {
        animation-timing-function: var(--expo-out);
      }
      ::view-transition-new(root) {
        mask: url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 40 40"><defs><filter id="blur"><feGaussianBlur stdDeviation="2"/></filter></defs><circle cx="0" cy="0" r="18" fill="white" filter="url(%23blur)"/></svg>') top left / 0 no-repeat;
        mask-origin: content-box;
        animation: scale 1s;
        transform-origin: top left;
      }
      ::view-transition-old(root),
      .dark::view-transition-old(root) {
        animation: scale 1s;
        transform-origin: top left;
        z-index: -1;
      }
      @keyframes scale {
        to {
          mask-size: 350vmax;
        }
      }
    `,
  },
  {
    name: "polygon",
    css: `
      ::view-transition-group(root) {
        animation-duration: 0.7s;
        animation-timing-function: var(--expo-out);
      }
      ::view-transition-new(root) {
        animation-name: reveal-light;
      }
      ::view-transition-old(root),
      .dark::view-transition-old(root) {
        animation: none;
        z-index: -1;
      }
      .dark::view-transition-new(root) {
        animation-name: reveal-dark;
      }
      @keyframes reveal-dark {
        from {
          clip-path: polygon(50% -71%, -50% 71%, -50% 71%, 50% -71%);
        }
        to {
          clip-path: polygon(50% -71%, -50% 71%, 50% 171%, 171% 50%);
        }
      }
      @keyframes reveal-light {
        from {
          clip-path: polygon(171% 50%, 50% 171%, 50% 171%, 171% 50%);
        }
        to {
          clip-path: polygon(171% 50%, 50% 171%, -50% 71%, 50% -71%);
        }
      }
    `,
  },
  {
    name: "polygon-gradient",
    css: `
      ::view-transition-group(root) {
        animation-timing-function: var(--expo-out);
      }
      ::view-transition-new(root) {
        mask: url('assets/custom-svg.svg') top left / 0 no-repeat;
        mask-origin: top left;
        animation: scale 1.5s;
      }
      ::view-transition-old(root),
      .dark::view-transition-old(root) {
        animation: scale 1.5s;
        z-index: -1;
        transform-origin: top left;
      }
      @keyframes scale {
        to {
          mask-size: 200vmax;
        }
      }
    `,
  },
  {
    name: "gif-1",
    css: `
      ::view-transition-group(root) {
        animation-timing-function: var(--expo-in);
      }
      ::view-transition-new(root) {
        mask: url('https://media.tenor.com/cyORI7kwShQAAAAi/shigure-ui-dance.gif') center / 0 no-repeat;
        animation: scale 3s;
      }
      ::view-transition-old(root),
      .dark::view-transition-old(root) {
        animation: scale 3s;
      }
      @keyframes scale {
        0% {
          mask-size: 0;
        }
        10% {
          mask-size: 50vmax;
        }
        90% {
          mask-size: 50vmax;
        }
        100% {
          mask-size: 2000vmax;
        }
      }
    `,
  },
  {
    name: "gif-2",
    css: `
      ::view-transition-group(root) {
        animation-timing-function: var(--expo-in);
      }
      ::view-transition-new(root) {
        mask: url('https://media.tenor.com/Jz0aSpk9VIQAAAAi/i-love-you-love.gif') center / 0 no-repeat;
        animation: scale 2s;
      }
      ::view-transition-old(root),
      .dark::view-transition-old(root) {
        animation: scale 2s;
      }
      @keyframes scale {
        0% {
          mask-size: 0;
        }
        10% {
          mask-size: 50vmax;
        }
        90% {
          mask-size: 50vmax;
        }
        100% {
          mask-size: 2000vmax;
        }
      }
    `,
  },
];