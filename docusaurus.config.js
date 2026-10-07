// @ts-check
// Tating's user documentation: Docusaurus, docs-only, published to GitHub Pages by
// .github/workflows/deploy.yml on every push to main.

import {themes as prismThemes} from 'prism-react-renderer';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Tating Docs',
  tagline: 'Drum notation, built for a touchscreen',
  favicon: 'img/favicon.png',

  future: {
    v4: true,
    // The SWC/Rspack 'faster' toolchain refuses Windows cache folders whose ACLs it
    // doesn't trust; webpack + babel builds identically everywhere, so keep it off.
    faster: false,
  },

  url: 'https://bcrawford24.github.io',
  baseUrl: '/tating-docs/',
  organizationName: 'bcrawford24',
  projectName: 'tating-docs',
  trailingSlash: false,

  onBrokenLinks: 'throw',
  markdown: {
    hooks: {
      onBrokenMarkdownLinks: 'throw',
    },
  },

  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          routeBasePath: '/',
          sidebarPath: './sidebars.js',
          editUrl: 'https://github.com/bcrawford24/tating-docs/tree/main/',
          showLastUpdateTime: true,
        },
        blog: false,
        theme: {
          customCss: './src/css/custom.css',
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      image: 'img/tating-icon.png',
      colorMode: {
        respectPrefersColorScheme: true,
      },
      navbar: {
        title: 'Tating Docs',
        logo: {
          alt: 'Tating',
          src: 'img/tating-icon.png',
        },
        items: [
          {type: 'docSidebar', sidebarId: 'docs', position: 'left', label: 'Guide'},
          {to: '/release-notes', label: 'Release notes', position: 'left'},
          {href: 'https://github.com/bcrawford24/tating-docs', label: 'GitHub', position: 'right'},
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Guide',
            items: [
              {label: 'What Tating is', to: '/'},
              {label: 'Accessibility', to: '/accessibility'},
              {label: 'Privacy policy', to: '/privacy'},
            ],
          },
          {
            title: 'Get Tating',
            items: [
              {label: 'App Store', href: 'https://apps.apple.com/app/id6802107801'},
              {label: 'Google Play', href: 'https://play.google.com/store/apps/details?id=com.tating.app'},
            ],
          },
          {
            title: 'Contact',
            items: [{label: 'tatingapp@gmail.com', href: 'mailto:tatingapp@gmail.com'}],
          },
        ],
        copyright: `© ${new Date().getFullYear()} Robert Benjamin Crawford. Built with Docusaurus.`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }),
};

export default config;
