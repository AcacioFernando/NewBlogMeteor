// this is image_share.js


if (Meteor.isClient) {

    console.log("categoriapage.js says: " + this.data);
    var noticais;

    Template.categoriaPage.helpers({
        noticias: function() {
            return this;
        },
    });

    Template.categoriaPage.events({

        'click .js-gostei': function (event) {
            var gostei = this.gostei + 1;
            Noticias.update({_id: this._id}, {$set: {gostei: gostei}});

        },
        'click .js-nao-gostei': function (event) {
            var nao_gostei = this.nao_gostei + 1;
            Noticias.update({_id: this._id}, {$set: {nao_gostei: nao_gostei}});

        }
    });


}