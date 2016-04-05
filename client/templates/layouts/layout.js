// this is image_share.js


if (Meteor.isClient) {

    Template.layoutTamplate.rendered = function () {
        console.log("layoutTamplate.js says: ");
        var myTime = window.performance.now();
        var now = new Date().getTime();
        var pageLoad = now - performance.timing.navigationStart;
        console.log("Layout loadEventEnd:" + myTime);
        console.log("Layout pageLoad:" + pageLoad);
    }

}