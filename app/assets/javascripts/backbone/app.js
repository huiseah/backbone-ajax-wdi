// control the include order of our backbone app

//= require_tree ./models
//= require_tree ./collections
//= require_tree ./views
//= require_tree ./routers

var app = app || {};

  // Object to hold the template HTML
app.templates = {
  appView: '<h1>Recent Posts</h1><ul id="posts"></ul>',
  blogList: '{{title}}',
  blogView: '<div class="post"><h1 class="title">{{title}}</h1><h3 class="slug">{{slug}}</h3><div class="content">{{{content}}}</div></div>'
};



$(document).ready(function () {
	//we start here
	app.router = new app.AppRouter();
	Backbone.history.start({pushState: Modernizr.history})
});


