#!/usr/bin/node

var fashopAdminPath = '/fashop-admin-code/project/fashop-admin';
var fs= require("fs")

fs.exists(fashopAdminPath, function(exists) {
    if(!exists){
        var exec = require('child_process').exec;
        var cmdStr = `git clone https://github.com/mojisrc/fashop-admin.git ${fashopAdminPath}`;
        console.log('download waiting....'+stderr);
        exec(cmdStr, function(err,stdout,stderr){
            if(err) {
                console.log('download https://github.com/mojisrc/fashop-admin.git fail，reson：'+stderr);
            } else {
                console.log("download https://github.com/mojisrc/fashop-admin.git ....");
                console.log(stdout);
                console.log("download fashop-admin success");
            }
        });
    }
});


fs.exists(`${fashopAdminPath}/node_modules`, function(exists) {
    if(!exists){
        var exec = require('child_process').exec;
        var cmdStr = `cd ${fashopAdminPath} && npm install`;
        exec(cmdStr, function(err,stdout,stderr){
            if(err) {
                console.log('node install，reson：'+stderr);
            } else {
                console.log("node install ....");
                console.log(stdout);
                console.log("node install success");
            }
        });
    }
});

fs.exists(`${fashopAdminPath}/dist`, function(exists) {
    if(!exists){
        var exec = require('child_process').exec;
        var cmdStr = `cd ${fashopAdminPath} && npm run build`;
        exec(cmdStr, function(err,stdout,stderr){
            if(err) {
                console.log('node build fail，reson：'+stderr);
            } else {
                console.log("node  build ....");
                console.log(stdout);
                console.log("node build success");
            }
        });
    }
});

