// this is image_share.js


if (Meteor.isClient) {
    
    Template.layoutTamplate.rendered = function () {
        console.log("layoutTamplate.js says: ");
        var myTime = window.performance.now();

        console.log("Layout loadEventEnd:" + myTime);

    }

}