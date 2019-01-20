#!/usr/bin/node

var execSync = require('child_process').execSync;

try {
    execSyncS("cnpm -v");
} catch (ex) {
    console.log('install cnpm...');
    execSync("yarn global add cnpm");
}

try {
    execSyncS("umi -v");
} catch (ex){
    console.log('install umi...');
    execSync("cnpm install -g umi");
}


var fashopAdminPath = '/fashop-admin/project/fashop-admin';
var fs = require("fs")

if(!fs.existsSync(fashopAdminPath)){
    console.log('git fashop-admin...');
    execSync(`git clone https://github.com/mojisrc/fashop-admin.git ${fashopAdminPath}`);
}


if(!fs.existsSync(`${fashopAdminPath}/node_modules`)){
    console.log('fashop-admin install...');
    execSync(`cd ${fashopAdminPath} && cnpm install`);
}

if(!fs.existsSync(`${fashopAdminPath}/dist`)){
    console.log('fashop-admin build ...');
    console.log('前端代码构建需要5-10分钟，请耐心等待...');
    execSync(`cd ${fashopAdminPath} && npm run build`);
}


