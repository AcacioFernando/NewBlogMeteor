// this is image_share.js


if (Meteor.isClient) {

    console.log("adminHeader.js says: " + Noticias.find({}, {sort: {createdOn: -1}}, {limit: 5}).count());

    Template.adminHeader.helpers({
        categorias: Categorias.find({})
    });

    Template.adminHeader.events({

        'submit .js-search': function (event) {
            event.preventDefault();

            // Get value from form element
            var pesquisa = event.target.search_noticia.value;
            Router.go("/pesquisa/"+ pesquisa);
        }
    });

}