import InternetExplorer from './InternetExplorer';
import Minesweeper from './Minesweeper';
import ErrorBox from './ErrorBox';
import MyComputer from './MyComputer';
import MyPerson from './MyPerson';
import InternetCamp from './InternetCamp';
import InternetYoutube from './InternetYoutube';
import BlueError from './BlueError';


import Notepad from './Notepad';
import Winamp from './Winamp';
import Paint from './Paint';
import iePaper from 'assets/windowsIcons/ie-paper.png';
import ie from 'assets/windowsIcons/ie.png';
import camp from 'assets/windowsIcons/camp.png';
import money from 'assets/money.png';
import mine from 'assets/minesweeper/mine-icon.png';
import error from 'assets/windowsIcons/897(16x16).png';
import computer from 'assets/windowsIcons/676(16x16).png';
import computerLarge from 'assets/windowsIcons/676(32x32).png';
import notepad from 'assets/windowsIcons/327(16x16).png';
import notepadLarge from 'assets/windowsIcons/327(32x32).png';
import winamp from 'assets/windowsIcons/winamp.png';
import paintLarge from 'assets/windowsIcons/680(32x32).png';
import paint from 'assets/windowsIcons/680(16x16).png';



const gen = () => {
  let id = -1;
  return () => {
    id += 1;
    return id;
  };
};
const genId = gen();
const genIndex = gen();
export const defaultAppState = [
  // {
  //   component: InternetExplorer,
  //   header: {
  //     title: 'Internet Explorer',
  //     icon: iePaper,
  //   },
  //   defaultSize: {
  //     width: 700,
  //     height: 500,
  //   },
  //   defaultOffset: {
  //     x: 130,
  //     y: 20,
  //   },
  //   resizable: true,
  //   minimized: false,
  //   maximized: window.innerWidth < 800,
  //   id: genId(),
  //   zIndex: genIndex(),
  // },
  // {
  //   component: Minesweeper,
  //   header: {
  //     title: 'Minesweeper',
  //     icon: mine,
  //   },
  //   defaultSize: {
  //     width: 0,
  //     height: 0,
  //   },
  //   defaultOffset: {
  //     x: 180,
  //     y: 170,
  //   },
  //   resizable: false,
  //   minimized: false,
  //   maximized: false,
  //   id: genId(),
  //   zIndex: genIndex(),
  // },

  // {
  //   component: MyComputer,
  //   header: {
  //     title: 'My Computer',
  //     icon: computer,
  //   },
  //   defaultSize: {
  //     width: 660,
  //     height: 500,
  //   },
  //   defaultOffset: {
  //     x: 250,
  //     y: 40,
  //   },
  //   resizable: true,
  //   minimized: false,
  //   maximized: window.innerWidth < 800,
  //   id: genId(),
  //   zIndex: genIndex(),
  // },
  {
    component: MyPerson,
    header: {
      title: 'Quem sou eu',
      icon: computer,
    },
    defaultSize: {
      width: 660,
      height: 500,
    },
    defaultOffset: {
      x: 260,
      y: 50,
    },
    resizable: true,
    minimized: false,
    maximized: window.innerWidth < 800,
    id: genId(),
    zIndex: genIndex(),
  },  {
    component: Winamp,
    header: {
      title: 'Winamp',
      icon: winamp,
      invisible: true,
    },
    defaultSize: {
      width: 0,
      height: 0,
    },
    defaultOffset: {
      x: 0,
      y: 0,
    },
    resizable: true,
    minimized: false,
    maximized: false,
    id: genId(),
    zIndex: genIndex(),
  },
];

export const defaultIconState = [
  {
    id: 0,
    icon: ie,
    title: 'Internet Explorer',
    component: InternetExplorer,
    isFocus: false,
  },
  {
    id: 1,
    icon: mine,
    title: 'Minesweeper',
    component: Minesweeper,
    isFocus: false,
  },
  {
    id: 2,
    icon: computerLarge,
    title: 'My Computer',
    component: MyComputer,
    isFocus: false,
  },
  {
    id: 3,
    icon: notepadLarge,
    title: 'Notepad',
    component: Notepad,
    isFocus: false,
  },
  {
    id: 4,
    icon: winamp,
    title: 'Winamp',
    component: Winamp,
    isFocus: false,
  },
  {
    id: 5,
    icon: paintLarge,
    title: 'Paint',
    component: Paint,
    isFocus: false,
  },
  {
    id: 6,
    icon: computerLarge,
    title: 'Quem sou eu',
    component: MyPerson,
    isFocus: false,
  },
  ,
  {
    id: 7,
    icon: camp,
    title: 'Camp Tecnologia',
    component: InternetCamp,
    isFocus: false,
  },
  {
    id: 8,
    icon: money,
    title: 'Pretensão Salarial',
    component: BlueError,
    isFocus: false,
  },
  {
    id: 9,
    icon: ie,
    title: 'Apresentação',
    component: InternetYoutube,
    isFocus: false,
  },
];

export const appSettings = {
  'Internet Explorer': {
    header: {
      icon: iePaper,
      title: 'InternetExplorer',
    },
    component: InternetExplorer,
    defaultSize: {
      width: 700,
      height: 500,
    },
    defaultOffset: {
      x: 140,
      y: 30,
    },
    resizable: true,
    minimized: false,
    maximized: window.innerWidth < 800,
    multiInstance: true,
  },
  Minesweeper: {
    header: {
      icon: mine,
      title: 'Minesweeper',
    },
    component: Minesweeper,
    defaultSize: {
      width: 0,
      height: 0,
    },
    defaultOffset: {
      x: 190,
      y: 180,
    },
    resizable: false,
    minimized: false,
    maximized: false,
    multiInstance: true,
  },
  Error: {
    header: {
      icon: error,
      title: 'C:\\',
      buttons: ['close'],
      noFooterWindow: true,
    },
    component: ErrorBox,
    defaultSize: {
      width: 380,
      height: 0,
    },
    defaultOffset: {
      x: window.innerWidth / 2 - 190,
      y: window.innerHeight / 2 - 60,
    },
    resizable: false,
    minimized: false,
    maximized: false,
    multiInstance: true,
  },
  'Quem sou eu': {
    header: {
      icon: computer,
      title: 'Quem sou eu',
    },
    component: MyPerson,
    defaultSize: {
      width: 660,
      height: 500,
    },
    defaultOffset: {
      x: 290,
      y: 50,
    },
    resizable: true,
    minimized: false,
    maximized: window.innerWidth < 800,
    multiInstance: false,
  },
  'My Computer': {
    header: {
      icon: computer,
      title: 'My Computer',
    },
    component: MyComputer,
    defaultSize: {
      width: 660,
      height: 500,
    },
    defaultOffset: {
      x: 260,
      y: 50,
    },
    resizable: true,
    minimized: true,
    maximized: window.innerWidth < 800,
    multiInstance: false,
  },
  Notepad: {
    header: {
      icon: notepad,
      title: 'Untitled - Notepad',
    },
    component: Notepad,
    defaultSize: {
      width: 660,
      height: 500,
    },
    defaultOffset: {
      x: 270,
      y: 60,
    },
    resizable: true,
    minimized: true,
    maximized: window.innerWidth < 800,
    multiInstance: true,
  },
  Winamp: {
    header: {
      icon: winamp,
      title: 'Winamp',
      invisible: true,
    },
    component: Winamp,
    defaultSize: {
      width: 0,
      height: 0,
    },
    defaultOffset: {
      x: 0,
      y: 0,
    },
    resizable: true,
    minimized: false,
    maximized: false,
    multiInstance: false,
  },
  Paint: {
    header: {
      icon: paint,
      title: 'Untitled - Paint',
    },
    component: Paint,
    defaultSize: {
      width: 660,
      height: 500,
    },
    defaultOffset: {
      x: 280,
      y: 70,
    },
    resizable: true,
    minimized: false,
    maximized: window.innerWidth < 800,
    multiInstance: true,
  },
  'Youtube': {
    header: {
      icon: iePaper,
      title: 'Youtube',
    },
    component: InternetYoutube,
    defaultSize: {
      width: window.innerWidth,
      height: window.innerHeight,
    },
    defaultOffset: {
      x: 0,
      y: 0,
    },
    resizable: true,
    minimized: false,
    maximized: window.innerWidth < 800,
    multiInstance: true,
  },
  'Camp Tecnologia': {
    header: {
      icon: iePaper,
      title: 'Camp Tecnologia',
    },
    component: InternetCamp,
    defaultSize: {
      width: 700,
      height: 500,
    },
    defaultOffset: {
      x: 160,
      y: 50,
    },
    resizable: true,
    minimized: false,
    maximized: window.innerWidth < 800,
    multiInstance: true,
  },
  BlueError: {
    header: {
      icon: error,
      title: 'C:\\',
      buttons: ['close'],
      noFooterWindow: true,
    },
    component: BlueError,
    defaultSize: {
      width: 380,
      height: 0,
    },
    defaultOffset: {
      x: window.innerWidth / 2 - 190,
      y: window.innerHeight / 2 - 60,
    },
    resizable: false,
    minimized: false,
    maximized: false,
    multiInstance: true,
  },
};

export { InternetExplorer, Minesweeper, ErrorBox, BlueError, MyComputer,MyPerson, Notepad, Winamp, InternetCamp};
