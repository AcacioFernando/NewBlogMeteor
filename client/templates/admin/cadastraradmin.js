// this is image_share.js


if (Meteor.isClient) {

    console.log("cadastrarAdmin.js says: " + Noticias.find().count());

    $.cloudinary.config({
        cloud_name: "hlrpvlno9"
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

        "click button.clickme":function(){
            self = this;
            var files = $("input.click_target")[0].files
            Cloudinary._upload_file(files,function(res){
                console.log(res);
                console.log(self);
            });
        }
    });
}
if (Meteor.isServer) {
    Meteor.startup(function () {

        Cloudinary.config({
            cloud_name: 'hlrpvlno9',
            api_key: '233981594891625',
            api_secret: '95VDJfIMfT_10QuSBvqkoAl24xc'
        });

    });
}