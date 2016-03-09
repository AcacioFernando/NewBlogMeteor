// this is image_share.js


if (Meteor.isClient) {

    console.log("noticiaspage.js says: " + Noticias.find().count());

    Template.noticiasPage.helpers({
        noticias: Noticias.find({}, {sort: {createdOn: -1}})
    });
}