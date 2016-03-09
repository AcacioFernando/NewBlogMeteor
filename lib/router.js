Router.configure({
  // we use the  appBody template to define the layout for the entire app
  layoutTemplate: 'layoutTamplate',
  // the appNotFound template is used for unknown routes and missing lists
  notFoundTemplate: 'notFound',
});

/*Router.route('/noticia', function () {
  this.render('secondPage');

});*/


Router.route('/', function () {
  this.render('noticiasPage');
});

Router.route('noticiaPage', {
  path: '/noticia/:value',
  data: function () {
    console.log(this.params.value);
    console.log(Noticias.findOne(this.params.value))
    return Noticias.findOne(this.params.value);
  }

});