#! /usr/bin/env node

const notifier = require("node-notifier");

var args = process.argv.slice(2);
if( args && args.length > 0 ){
    if( args.length > 1 ){
        var title = args.slice(0,1);
        var notification = args.slice(1).join(" ");
        fireNotification(notification, title);
    } else {
        fireNotification(args[0]);
    }
} else {
    showUsage();
}

function showUsage(){
    console.log( "Usage : notify [<notification-title>] <notification-message>");
    process.exit(0);
}

function fireNotification(msg, title){
    if( msg ){
        notifier.notify({
            'title' : title || 'Node Notification',
            'message' : msg
        });
    } else {
        showUsage();
    }
}
