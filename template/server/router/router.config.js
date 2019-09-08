const path = require('path');

module.exports = {
    '/demo': { label: "demo" },
    '/test': {
        '/': { label: "这是测试首页" },
        '/edit': { label: '这是test目录下的edit子目录' },
        '/home': { label: '这是demo目录下的home子目录' },
    },
    '/aaa': {
        '/bbb': { label: '这是bbb' },
    }
}