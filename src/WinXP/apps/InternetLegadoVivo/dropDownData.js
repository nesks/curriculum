export const File = [
  {
    type: 'menu',
    text: 'New',
    position: {
      left: 'calc(100% - 4px)',
      top: '-3px',
    },
    items: [
      {
        type: 'item',
        text: 'Window',
        hotkey: 'Ctrl+N',
      },
      { type: 'separator' },
      {
        type: 'item',
        text: 'Message',
      },
      {
        type: 'item',
        text: 'Post',
      },
      {
        type: 'item',
        text: 'Contact',
      },
      {
        type: 'item',
        text: 'Internet Call',
      },
    ],
  },
  {
    type: 'item',
    text: 'Open...',
    hotkey: 'Ctrl+O',
  },
  {
    type: 'item',
    text: 'Edit',
    disable: true,
  },
  {
    type: 'item',
    disable: true,
    text: 'Save',
    hotkey: 'Ctrl+S',
  },
  {
    type: 'item',
    text: 'Save As...',
  },
  {
    type: 'separator',
  },
  {
    type: 'item',
    text: 'Page Setup...',
  },
  {
    type: 'item',
    text: 'Print...',
    hotkey: 'Ctrl+P',
  },
  {
    type: 'item',
    text: 'Print Preview...',
  },
  {
    type: 'separator',
  },
  {
    type: 'menu',
    text: 'Send',
    position: {
      left: 'calc(100% - 4px)',
      top: '-3px',
    },
    items: [
      {
        type: 'item',
        text: 'Page by E-mail...',
      },
      {
        type: 'item',
        text: 'Link by E-mail...',
      },
      {
        type: 'item',
        text: 'Shortcut to Desktop',
      },
    ],
  },
  {
    type: 'item',
    text: 'Import and Export...',
  },
  {
    type: 'separator',
  },
  {
    type: 'item',
    text: 'Properties',
  },
  {
    type: 'item',
    text: 'Work Offline',
  },
  {
    type: 'item',
    text: 'Close',
  },
];

const Edit = [
  {
    type: 'item',
    disable: true,
    text: 'Cut',
    hotkey: 'Ctrl+X',
  },
  {
    type: 'item',
    disable: true,
    text: 'Copy',
    hotkey: 'Ctrl+C',
  },
  {
    type: 'item',
    disable: true,
    text: 'Paste',
    hotkey: 'Ctrl+V',
  },
  {
    type: 'separator',
  },
  {
    type: 'item',
    text: 'Select All',
    hotkey: 'Ctrl+A',
  },
  {
    type: 'separator',
  },
  {
    type: 'item',
    text: 'Find (on This Page)...',
    hotkey: 'Ctrl+F',
  },
];

const View = [
  {
    type: 'menu',
    position: {
      left: 'calc(100% - 4px)',
      top: '-3px',
    },
    text: 'Toolbars',
    items: [
      {
        type: 'item',
        symbol: 'check',
        text: 'Standard Buttons',
      },
      {
        type: 'item',
        symbol: 'check',
        text: 'Address Bar',
      },
      {
        type: 'item',
        symbol: 'check',
        text: 'Links',
      },
      {
        type: 'separator',
      },
      {
        type: 'item',
        symbol: 'check',
        text: 'Lock the Toolbars',
      },
      {
        type: 'item',
        text: 'Customize...',
      },
    ],
  },
  {
    type: 'item',
    symbol: 'check',
    text: 'Status Bar',
  },
  {
    type: 'separator',
  },
  {
    type: 'item',
    text: 'Stop',
    hotkey: 'Esc',
  },
  {
    type: 'item',
    text: 'Refresh',
    hotkey: 'F5',
  },
  {
    type: 'separator',
  },
  {
    type: 'item',
    text: 'Full Screen',
    hotkey: 'F11',
  },
];

const Favorites = [
  {
    type: 'item',
    text: 'Add to Favorites...',
  },
  {
    type: 'item',
    text: 'Organize Favorites...',
  },
];

const Tools = [
  {
    type: 'item',
    text: 'Internet Options...',
  },
];

const Help = [
  {
    type: 'item',
    text: 'About Internet Explorer',
  },
];

export default { File, Edit, View, Favorites, Tools, Help };
