var AppRouter = Backbone.Router.extend({
	routes: {
		"": "Home",
		"about": "About",
		"portfolio": "Portfolio",
		"contact": "Contact",
		"admin": "Admin"
	},

	initialize:function(){
		// handel session //
		this.LOGINMODEL = new loginModel();
		console.log(this.LOGINMODEL);
	},

	Home: function () {
		var homeView = new K_HomeView();
	},
	About: function () {
		var aboutView = new K_AboutView();
	},
	Portfolio: function () {
		var portfolioView = new K_PortfolioView();
	},
	Contact: function () {
		var contactView = new K_ContactView();
	},
	Admin: function(){
		var adminView = new K_AdminView({model:this.LOGINMODEL});
	}
});

var APP = new AppRouter();

$(function() {
	Backbone.history.start();
});