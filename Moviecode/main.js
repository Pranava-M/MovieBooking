const { app, BrowserWindow, Menu } = require('electron'); // Added 'Menu'
let mainWindow;

app.whenReady().then(() => {
  mainWindow = new BrowserWindow({
    width: 2240,
    height: 1400,
    webPreferences: {
      nodeIntegration: true,
    },
  });
  mainWindow.loadFile('TS Home.html'); // Load the default home page

  // Create the top menu
  const menuTemplate = [
    {
      label: 'File',
      submenu: [
        { label: 'Exit', role: 'quit' },
      ],
    },
    {
      label: 'Edit',
      submenu: [
        { label: 'Undo', role: 'undo' },
        { label: 'Redo', role: 'redo' },
        { type: 'separator' },
        { label: 'Cut', role: 'cut' },
        { label: 'Copy', role: 'copy' },
        { label: 'Paste', role: 'paste' },
      ],
    },
    {
      label: 'View',
      submenu: [
        { label: 'Reload', role: 'reload' },
        { label: 'Toggle Full Screen', role: 'togglefullscreen' },
        { label: 'Developer Tools', role: 'toggleDevTools' },
      ],
    },
    {
      label: 'Window',
      submenu: [
        { label: 'Minimize', role: 'minimize' },
        { label: 'Close', role: 'close' },
      ],
    },
    {
      label: 'Help',
      submenu: [
        {
          label: 'Learn More',
          click: () => {
            require('electron').shell.openExternal('https://electronjs.org');
          },
        },
      ],
    },
    {
      label: 'Code', // Updated 'Code' menu
      submenu: [
        {
          label: 'Home',
          click: () => {
            mainWindow.loadFile('TS Home.html'); // Load the Home page
          },
        },
        {
          label: 'About',
          click: () => {
            mainWindow.loadFile('TS About.html'); // Load the About page
          },
        },
        {
          label: 'Contact',
          click: () => {
            mainWindow.loadFile('TS Contact.html'); // Load the Contact page
          },
        },
        {
          label: 'Sign-In',
          click: () => {
            mainWindow.loadFile('newsignin.html'); // Load the Sign-In page
          },
        },
        {
          label: 'Movie',
          click: () => {
            mainWindow.loadFile('TS Moviepage.html'); // Load the Sign-In page
          },
        },
        {
          label: 'Restaurant',
          click: () => {
            mainWindow.loadFile('TS Restaurent.html'); // Load the Restaurant page
          },
        },
      ],
    },
  ];

  const menu = Menu.buildFromTemplate(menuTemplate);
  Menu.setApplicationMenu(menu); // Set the application menu

  // Create a custom context menu
  const contextMenu = Menu.buildFromTemplate([
    {
      label: 'Reload Page',
      click: () => {
        mainWindow.reload(); // Reload the current page
      },
    },
    {
      label: 'Go to Home',
      click: () => {
        mainWindow.loadFile('TS Home.html'); // Load the Home page
      },
    },
    {
      label: 'Open Developer Tools',
      click: () => {
        mainWindow.webContents.openDevTools(); // Open DevTools
      },
    },
    {
      label: 'Close Window',
      click: () => {
        mainWindow.close(); // Close the window
      },
    },
    {
      label: 'Login in ',
      click: () => {
        mainWindow.loadFile('newsignin.html'); // Close the window
      },
    },
  ]);

  // Attach the context menu to the window
  mainWindow.webContents.on('context-menu', () => {
    contextMenu.popup(); // Display the custom context menu on right-click
  });
});
