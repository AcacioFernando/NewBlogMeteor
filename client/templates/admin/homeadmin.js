// this is image_share.js


if (Meteor.isClient) {

    console.log("homeAdmin.js says: " + Noticias.find().count());

    Template.homeAdmin.helpers({
        noticias: Noticias.find({}, {sort: {createdOn: -1}}),
    });
}