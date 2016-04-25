// this is image_share.js


if (Meteor.isClient) {

    console.log("noticiaspage.js says: " + Noticias.find().count());

    Template.noticiasPage.helpers({
        noticiasBanner: Noticias.find({}, {sort: {createdOn: -1}}, {limit: 2}),
        noticias: Noticias.find({}, {sort: {createdOn: -1}})
    });

    Template.noticiasPage.events({
        'click .js-gostei': function (event) {
            startTime();
            var gostei = this.gostei + 1;
            Noticias.update({_id: this._id}, {$set: {gostei: gostei}}, function( error, result) {
                endTime();
            });

        },
        'click .js-nao-gostei': function (event) {
            var nao_gostei = this.nao_gostei + 1;
            Noticias.update({_id: this._id}, {$set: {nao_gostei: nao_gostei}});

        }
    });


    Template.carouselItem.helpers({
        isActive: function () {
            return (this.index === 0) ? 'active': '';
        }
    });

    Template.carouselIndicators.helpers({
        isActive: function () {
            return (this.index === 0) ? 'active': ' ';
        }
    });

    Template.carouselIndicators.rendered = function () {
        console.log("carouselIndicators");
    };

}
