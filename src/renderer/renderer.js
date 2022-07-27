const { ipcRenderer } = require('electron');

window.onload = () => {
    window.addEventListener('contextmenu', event => {
        console.info('contextmenu');
        ipcRenderer.send('showContextmenu');
    }, false);
}