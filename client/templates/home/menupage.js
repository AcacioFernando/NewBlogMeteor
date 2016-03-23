// this is image_share.js


if (Meteor.isClient) {

    console.log("menupage.js says: " + Noticias.find({}, {sort: {createdOn: -1}},{limit:5}).count());

    Template.menuPage.helpers({
        noticias: Noticias.find({}, {sort: {createdOn: -1}},{limit:5})
    });
}