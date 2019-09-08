const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const routerConifg = require('../server/router/router.config');
const resultList = new Map();
const apiList = require('../server/api/index');
function isHaveSon(value) {
    const key = Object.keys(value);
    if (key.length == 1) {
        if (key[0].indexOf('/') == -1) {
            return false
        } else {
            return true;
        }
    } else {
        return true;
    }
}
function getSonKeyValue(key, value) {
    if (isHaveSon(value)) {
        Object.entries(value).forEach(item => {
            getSonKeyValue(key + item[0], item[1])
        })
    } else {
        resultList.set(key, value)
    }
}
async function start() {
    const app = express();
    //app.use(express.static('/template/client'));
    app.use(express.static('template'))
    Object.entries(routerConifg).forEach(item => {
        getSonKeyValue(item[0], item[1]);
    })
    app.get('/', function (req, res) {
        res.sendFile(
            path.resolve('./template/client/page/index.html')
        )
    })
    for (let i of resultList) {
        app.get(i[0], function (req, res) {
            res.sendFile(
                path.resolve(`./template/client/page${i[0]}/index.html`)
            )
        })
    }
    app.use('/api',apiList)
    app.listen(3500, function () {
        console.log('run 3500')
    })
}
start();
