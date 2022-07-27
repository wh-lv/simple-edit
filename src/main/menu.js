const { BrowserWindow, Menu, ipcMain, shell } = require('electron');

const isMac = process.platform === 'darwin';

const menuTemplate = [
    {
        label: '文件',
        submenu: [
            {
                label: '新建',
                click: () => {

                }
            },
            {
                label: '打开',
                click: () => {

                }
            },
            {
                label: '保存',
                click: () => {

                }
            },
            { type: 'separator' },
            {
                label: '打印',
                click: () => {

                }
            },
            {
                label: '退出',
                role: isMac ? 'close': 'quit'
            },
        ]
    },
    {
        label: '编辑',
        submenu: [
            {
                label: '撤销',
                role: 'undo'
            },
            {
                label: '恢复',
                role: 'redo'
            },
            { type: 'separator' },
            {
                label: '剪切',
                role: 'cut'
            },
            {
                label: '复制',
                role: 'copy'
            },
            {
                label: '粘贴',
                role: 'paste'
            },
            {
                label: '删除',
                role: 'delete'
            },
            {
                label: '全选',
                role: 'selectall'
            },
        ]
    },
    {
        label: '试图',
        submenu: [
            {
                label: '缩小',
                role: 'zoomout'
            },
            {
                label: '放大',
                role: 'zoomin'
            },
            {
                label: '重置缩放',
                role: 'resetzoom'
            },
            { type: 'separator' },
            {
                label: '全屏',
                role: 'togglefullscreen'
            }
        ]
    },
    {
        label: '帮助',
        submenu: [
            {
                label: '关于',
                click: () => {
                    shell.openExternal('https://www.baidu.com')
                }
            }
        ]
    }
];

const menuBuilder = Menu.buildFromTemplate(menuTemplate);
Menu.setApplicationMenu(menuBuilder)

// 右键菜单
const contextMenuTemplate = [
    {
        label: '撤销',
        role: 'undo'
    },
    {
        label: '恢复',
        role: 'redo'
    },
    { type: 'separator' },
    {
        label: '剪切',
        role: 'cut'
    },
    {
        label: '复制',
        role: 'copy'
    },
    { type: 'separator' },
    {
        label: '全选',
        role: 'selectall'
    },
];
const contextMenu = Menu.buildFromTemplate(contextMenuTemplate);

ipcMain.on('showContextmenu', (evt, data) => {
    console.info(evt);
    contextMenu.popup({
        window: BrowserWindow.getFocusedWindow()
    });
});