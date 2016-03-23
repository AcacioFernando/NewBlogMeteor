// this is image_share.js


if (Meteor.isClient) {

    console.log("pesquisapage.js says: " + this.data);
    var noticais;

    Template.pesquisaPage.helpers({
        noticias: function() {
            return this;
        },
    });

    Template.pesquisaPage.events({

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