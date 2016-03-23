// this is image_share.js


if (Meteor.isClient) {
    console.log("noticiapage.js says: Estou aqui");
    var contador_clicks = false;
    Template.noticiaPage.helpers({});

    Template.noticiaPage.events({

        'click .js-gostei': function (event) {
            var gostei = this.gostei + 1;
            Noticias.update({_id: this._id}, {$set: {gostei: gostei}});

        },
        'click .js-nao-gostei': function (event) {
            var nao_gostei = this.nao_gostei + 1;
            Noticias.update({_id: this._id}, {$set: {nao_gostei: nao_gostei}});

        },
        'submit .js-comentario': function (event) {

            // Prevent default browser form submit
            event.preventDefault();

            // Get value from form element
            var textComentario = event.target.textComentario.value;
            var userComentario = event.target.userComentario.value;

            var comments = {
                postid: this._id,
                name: userComentario,
                comment: textComentario,
                date: new Date()
            };

            // Insert a task into the collection
            Noticias.update({_id: this._id}, {$push: {comments: comments}});


            // Clear form
            event.target.userComentario.value = "";
            event.target.textComentario.value = "";
        }

    });

    Template.noticiaPage.rendered = function () {

        if (this.data)
            Noticias.update({_id: this.data._id}, {$inc: {numero_clicks: 1}});
    }
}