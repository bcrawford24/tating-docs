// @ts-check
// One sidebar, ordered the way a new drummer meets the app: what it is, writing,
// practising, checking, keeping, paying, then the reference pages.

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  docs: [
    'index',
    {
      type: 'category',
      label: 'Using Tating',
      collapsed: false,
      items: ['writing-grooves', 'metronome-and-practice', 'pocketcheck', 'reading-saving-sharing'],
    },
    'free-and-paid',
    {
      type: 'category',
      label: 'Reference',
      collapsed: false,
      items: ['accessibility', 'release-notes', 'privacy'],
    },
  ],
};

export default sidebars;
