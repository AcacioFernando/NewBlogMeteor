Router.configure({
    // we use the  appBody template to define the layout for the entire app
    layoutTemplate: 'layoutTamplate',
    // the appNotFound template is used for unknown routes and missing lists
    notFoundTemplate: 'notFound',
});

/*Router.route('/noticia', function () {
 this.render('secondPage');

 });*/

var noticia;
Router.route('/', function () {
    this.render('noticiasPage');
});

//Router.onBeforeAction('loading');

Router.route('/noticia/:value', function () {
    var noticia = Noticias.findOne({_id: this.params.value});
    this.render('noticiaPage', {data: noticia});
});


Router.route('/categoria/:value', function () {
    var noticias = Noticias.find({category: this.params.value}).fetch();
    this.render('categoriaPage', {data: noticias});
});

Router.route('/busca', function () {
    var busca = this.params.query.search_noticia;
    var noticias = Noticias.find({content: {$regex: busca}}).fetch();
    this.render('pesquisaPage', {data: noticias});
});

Router.route('/admin', function () {
    this.render('homeAdmin');
    this.layout('adminLayoutTamplate');
});
Router.route('/admin/deletarnoticia', function () {
    this.render('deletarAdmin');
    this.layout('adminLayoutTamplate');
});
Router.route('/admin/cadastrarnoticia', function () {
    this.render('cadastrarAdmin');
    this.layout('adminLayoutTamplate');
});
