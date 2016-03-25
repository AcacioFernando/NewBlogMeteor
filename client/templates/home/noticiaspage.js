// this is image_share.js


if (Meteor.isClient) {

    console.log("noticiaspage.js says: " + Noticias.find().count());

    Template.noticiasPage.helpers({
        noticias: Noticias.find({}, {sort: {createdOn: -1}}),
        noticiasBanner: Noticias.find({}, {sort: {createdOn: -1}}, {limit: 3})
    });

    Template.noticiasPage.events({

        'click .js-gostei': function (event) {
            var gostei = this.gostei + 1;
            Noticias.update({_id: this._id}, {$set: {gostei: gostei}});

        },
        'click .js-nao-gostei': function (event) {
            var nao_gostei = this.nao_gostei + 1;
            Noticias.update({_id: this._id}, {$set: {nao_gostei: nao_gostei}});

        }
    });
    


    Template.noticiasPage.rendered = function () {
        // initiate the carousel

        $('.item').first().addClass('active');
        $('.indicadores').first().addClass('active');

      //  $("#myCarousel li:first").addClass("active");
       // $("#myCarousel .item:first").addClass("active");
    };
}