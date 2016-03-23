// this is image_share.js


if (Meteor.isClient) {

    console.log("deletarAdmin.js says: " + Noticias.find().count());

    Template.deletarAdmin.helpers({
        noticias: Noticias.find({}, {sort: {createdOn: -1}}),
    });

    Template.deletarAdmin.events({

        'click .js-deletar': function (event) {
            console.log(this._id);
            Noticias.remove({_id: this._id});

        }
    });
}