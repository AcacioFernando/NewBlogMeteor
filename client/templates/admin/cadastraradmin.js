// this is image_share.js


if (Meteor.isClient) {

    console.log("cadastrarAdmin.js says: " + Noticias.find().count());

    var dir = "http://res.cloudinary.com/hxnp2atgn/image/upload/v1459107694/";
    $.cloudinary.config({
        cloud_name: "hu7oelzes"
    });


    Template.cadastrarAdmin.helpers({
        categorias: Categorias.find({}, {sort: {createdOn: -1}}),
    });

    Template.cadastrarAdmin.rendered = function () {
        $('#content').ckeditor();
    }; 

    Template.cadastrarAdmin.events({

        'click .js-deletar': function (event) {
            console.log(this._id);
            Noticias.remove({_id: this._id});

        },

        "submit .js_formnoticia": function (event) {
            event.preventDefault();
            var textTitle = event.target.title.value;
            var textSub_title = event.target.sub_title.value;
            var textCategoria = event.target.category.value;
            var textContent = event.target.content.value;

            var files = [];
            var headerfile = $("input.click_target")[0].files
            files.push(headerfile);

            var cloudinary_id;
            _.each(files,function(file){
                var reader = new FileReader;

                reader.onload = function () {

                    Meteor.call("cloudinary_upload",reader.result,function(err,res){
                        if(err){
                            console.log(err);
                        }
                        console.log("Upaloda");
                    });
                };

                reader.readAsDataURL(file);
            });
            // end of Cloudinary management of Header Image
            Cloudinary.upload(files[0], function (res) {
                Noticias.insert(
                    {
                        title: textTitle,
                        title_sub: textSub_title,
                        content: textContent,
                        category: textCategoria,
                        sub_title: "Prepare seu Pip-boy: o apocalipse nunca foi tão bom",
                        date: new Date(),
                        img: dir + files[0].name,
                        numero_clicks: 0,
                        gostei: 0,
                        nao_gostei: 0,
                        comments: [],
                        createdAt: new Date()
                    });

                console.log(res);
            });

            event.target.title.value = "";
            event.target.sub_title.value = "";
            event.target.category.value = "";
            event.target.content.value = "";
        },

        "submit .js_savecategoria": function (event) {
            event.preventDefault();
            // Get value from form element
            var textCategoria = event.target.inputCategoria.value;
            if (textCategoria) {
                Categorias.insert(
                    {
                        "nome_categoria": textCategoria
                    }
                );
            }
            event.target.inputCategoria.value = "";
            $(".modal").modal('hide');
        }
    });

}
if (Meteor.isServer) {
    Meteor.startup(function () {

        Cloudinary.config({
            cloud_name: 'hu7oelzes',
            api_key: '935797948774166',
            api_secret: 'Q7FcdhYJlWNi_3oMIAeNl0pifE0'
        });

    });
}