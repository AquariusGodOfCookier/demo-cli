#! /usr/bin/env node
console.log('yes');
const fs = require('fs');
const path = require('path');
const processPath = process.cwd();
function copyTemplate(from, to) {
    from = path.join(__dirname, 'template', from);
    write(to, fs.readFileSync(from), 'utf-8');
}
function copyToolFile(from,to){
    from = path.join(__dirname,from);
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

mkdir(processPath+'/template',function(){
    mkdir(processPath+'/template/server',function(){
        copyTemplate("server/index.js",processPath+"/template/server/index.js");
    })
    mkdir(processPath+'/template/lib',function(){
        mkdir(processPath+'/template/lib/components',function(){
            copyTemplate("lib/components/index.html",processPath+'/template/lib/components/index.html');
        })
        mkdir(processPath+'/template/lib/css',function(){
            copyTemplate("lib/css/swiper.min.css",processPath+'/template/lib/css/swiper.min.css');
            copyTemplate("lib/css/bootstrap.min.css",processPath+'/template/lib/css/bootstrap.min.css');
        })
        mkdir(processPath+'/template/lib/js',function(){
            copyTemplate("lib/js/swiper.min.js",processPath+'/template/lib/js/swiper.min.js');
            copyTemplate("lib/js/bootstrap.min.js",processPath+'/template/lib/js/bootstrap.min.js');
            copyTemplate("lib/js/jquery-3.3.1.min.js",processPath+'/template/lib/js/jquery-3.3.1.min.js');
        })
    })
    mkdir(processPath+'/template/client',function(){
        mkdir(processPath+'/template/client/css',function(){
            copyTemplate("client/css/index.css",processPath+"/template/client/css/index.css")
        })
        mkdir(processPath+'/template/client/img',function(){})
        mkdir(processPath+'/template/client/js',function(){
            copyTemplate("client/js/index.js",processPath+"/template/client/js/index.js") 
        })
        copyTemplate("client/index.html",processPath+"/template/client/index.html")
    })
})
copyToolFile("package.json",processPath+"/package.json");
copyToolFile("webpack.config.js",processPath+"/webpack.config.js");
copyToolFile("cli-readme.md",processPath+"/ReadMe.md");
