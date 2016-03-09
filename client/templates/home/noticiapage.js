// this is image_share.js


if (Meteor.isClient) {

    //console.log("noticiapage.js says: " + Noticias.find().count());

    Template.noticiaPage.helpers({
        //noticias: Noticias.find({}, {sort: {createdOn: -1}})
    });
}