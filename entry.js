#! /usr/bin/env node
const fs = require('fs');
const path = require('path');
const processPath = process.cwd();
function copyTemplate(from) {
    const to = path.join(processPath,'template',from);
    from = path.join(__dirname, 'template', from);
    console.log(to)
    write(to, fs.readFileSync(from), 'utf-8');
}
function copyToolFile(from, to) {
    from = path.join(__dirname, from);
    write(to, fs.readFileSync(from), 'utf-8');
}
function write(path, str, mode) {
    fs.writeFileSync(path, str)
}

function mkdir(path, fn) {
    fs.mkdir(path, function (err) {
        fn && fn();
    })
}

mkdir(processPath + '/template', function () {
    mkdir(processPath + '/template/server', function () {
        copyTemplate("server/index.js");
        mkdir(processPath + '/template/server/api', function () {
            copyTemplate("server/api/index.js")
            mkdir(processPath+'/template/server/api/demo',function(){
                copyTemplate("server/api/demo/index.js")
            })
        })
        mkdir(processPath + '/template/server/router', function () {
            copyTemplate('server/router/router.config.js');
        })
        mkdir(processPath + '/template/server/mock', function () {
            copyTemplate('server/mock/test.json')
        })
    })
    mkdir(processPath + '/template/lib', function () {
        mkdir(processPath + '/template/lib/components', function () {
            copyTemplate("lib/components/index.html");
        })
        mkdir(processPath + '/template/lib/css', function () {
            copyTemplate("lib/css/swiper.min.css");
            copyTemplate("lib/css/bootstrap.min.css");
        })
        mkdir(processPath + '/template/lib/js', function () {
            copyTemplate("lib/js/swiper.min.js");
            copyTemplate("lib/js/bootstrap.min.js");
            copyTemplate("lib/js/jquery-3.3.1.min.js");
            copyTemplate("lib/js/promiseAjax.js");
        })
    })
    mkdir(processPath + '/template/client', function () {
        mkdir(processPath + '/template/client/css', function () {
            copyTemplate("client/css/index.css")
        })
        mkdir(processPath + '/template/client/img', function () { })
        mkdir(processPath + '/template/client/js', function () {
            copyTemplate("client/js/index.js")
        })
        mkdir(processPath + '/template/client/page', function () {
            copyTemplate("client/page/index.html")
            mkdir(processPath+'/template/client/page/demo',function(){
                copyTemplate("client/page/demo/index.html");
            })
        })
    })
})
copyToolFile("package.json", processPath + "/package.json");
copyToolFile("webpack.config.js", processPath + "/webpack.config.js");
copyToolFile("cli-readme.md", processPath + "/ReadMe.md");
