(function() {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
templates['about'] = template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "<!-- about -->\n<div class=\"about\">\n	<div class=\"intro intro--about\">\n		<div class=\"intro__container\">\n			<h1 class=\"about__heading ani ani--fade-in\">\n				"
    + ((stack1 = ((helper = (helper = helpers.title || (depth0 != null ? depth0.title : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"title","hash":{},"data":data}) : helper))) != null ? stack1 : "")
    + "\n			</h1>\n			<p class=\"intro__description ani ani--fade-in ani--delay-short\">\n				"
    + alias4(((helper = (helper = helpers.p1 || (depth0 != null ? depth0.p1 : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"p1","hash":{},"data":data}) : helper)))
    + "\n			</p>\n			<div class=\"js-scrll-section ani ani--fade-in\">\n				<p class=\"intro__description intro__description--small tr-stag\">\n					"
    + alias4(((helper = (helper = helpers.p2 || (depth0 != null ? depth0.p2 : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"p2","hash":{},"data":data}) : helper)))
    + "\n				</p>\n			</div>\n			<div class=\"js-scrll-section ani ani--fade-in\">\n				<p class=\"intro__description intro__description--small tr-stag\">\n					"
    + alias4(((helper = (helper = helpers.p3 || (depth0 != null ? depth0.p3 : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"p3","hash":{},"data":data}) : helper)))
    + "\n				</p>\n			</div>\n			<div class=\"js-scrll-section ani ani--fade-in\">\n				<img data-src=\"media/"
    + alias4(((helper = (helper = helpers.img || (depth0 != null ? depth0.img : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"img","hash":{},"data":data}) : helper)))
    + "\" class=\"img-responsive about__img js-about-img tr tr--scale-in\" />\n			</div>\n			<div class=\"js-scrll-section ani ani--fade-in\">\n				<p class=\"intro__description intro__description--small tr-stag\">\n					"
    + alias4(((helper = (helper = helpers.p4 || (depth0 != null ? depth0.p4 : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"p4","hash":{},"data":data}) : helper)))
    + "\n					"
    + alias4(((helper = (helper = helpers.contact || (depth0 != null ? depth0.contact : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"contact","hash":{},"data":data}) : helper)))
    + " <a href=\"mailto:"
    + alias4(((helper = (helper = helpers.email || (depth0 != null ? depth0.email : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"email","hash":{},"data":data}) : helper)))
    + "\" target=\"_blank\" class=\"link link--about\"><b>"
    + alias4(((helper = (helper = helpers.email || (depth0 != null ? depth0.email : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"email","hash":{},"data":data}) : helper)))
    + "</b></a>\n				</p>\n			</div>\n		</div>\n	</div>\n</div>\n\n<!-- socials footer -->\n<footer class=\"sfi sfi--about ani ani--fade-in-up ani--delay-medium\">\n	<a href=\"https://www.behance.net/tk305\" target=\"_blank\" class=\"sfi__icon\" include=\"../assets/img/behance.svg\"></a>\n	<a href=\"https://www.instagram.com/tdenheld/\" target=\"_blank\" class=\"sfi__icon\" include=\"../assets/img/insta.svg\"></a>\n	<a href=\"https://twitter.com/tdenheld\" target=\"_blank\" class=\"sfi__icon\" include=\"../assets/img/twitter.svg\"></a>\n	<a href=\"https://soundcloud.com/tiborkocsis\" target=\"_blank\" class=\"sfi__icon\" include=\"../assets/img/soundcloud.svg\"></a>\n</footer>";
},"useData":true});
templates['app'] = template({"1":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "			<li class=\"navbar__list-item navbar__list-item--"
    + alias4(((helper = (helper = helpers.item || (depth0 != null ? depth0.item : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"item","hash":{},"data":data}) : helper)))
    + " js-nav js-nav--"
    + alias4(((helper = (helper = helpers.item || (depth0 != null ? depth0.item : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"item","hash":{},"data":data}) : helper)))
    + " opacity-hover\">\n				"
    + alias4(((helper = (helper = helpers.item || (depth0 != null ? depth0.item : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"item","hash":{},"data":data}) : helper)))
    + "\n			</li>\n";
},"3":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "	<div id=\""
    + alias4(((helper = (helper = helpers.page || (depth0 != null ? depth0.page : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"page","hash":{},"data":data}) : helper)))
    + "\" class=\"js-page js-page--"
    + alias4(((helper = (helper = helpers.page || (depth0 != null ? depth0.page : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"page","hash":{},"data":data}) : helper)))
    + "\"></div>\n";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {});

  return "<!-- navbar -->\n<header class=\"navbar ani ani--fade-in-down ani--delay-short\" id=\"js-navbar\">\n	<a href=\"/\">\n		<span include=\"../assets/img/logo-tk305.svg\" class=\"opacity-hover\"></span>\n	</a>\n	<ul class=\"navbar__list\">\n"
    + ((stack1 = helpers.each.call(alias1,((stack1 = (depth0 != null ? depth0.app : depth0)) != null ? stack1.navbar : stack1),{"name":"each","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "	</ul>\n</header>\n\n<div class=\"lines\">\n	<div class=\"lines__line js-line\"><span></span></div>\n	<div class=\"lines__line js-line\"><span></span></div>\n	<div class=\"lines__line js-line\"><span></span></div>\n	<div class=\"lines__line js-line\"><span></span></div>\n	<div class=\"lines__line js-line\"><span></span></div>\n</div>\n\n<!-- pages -->\n"
    + ((stack1 = helpers.each.call(alias1,((stack1 = (depth0 != null ? depth0.app : depth0)) != null ? stack1.pages : stack1),{"name":"each","hash":{},"fn":container.program(3, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "");
},"useData":true});
templates['case'] = template({"1":function(container,depth0,helpers,partials,data) {
    var helper;

  return "					<h1 class=\"intro__title txt-xxxl ani ani--fade-in\">"
    + container.escapeExpression(((helper = (helper = helpers.title || (depth0 != null ? depth0.title : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"title","hash":{},"data":data}) : helper)))
    + "</h1>\n";
},"3":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "				<div class=\"case__hero-gradient tr tr--fade-in js-hero-gradient\"></div>\n				<div class=\"case__specs\">\n					<div class=\"case__specs-grid\">\n"
    + ((stack1 = helpers.each.call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0.specs : depth0),{"name":"each","hash":{},"fn":container.program(4, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "					</div>\n				</div>\n";
},"4":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3="function";

  return "							<div class=\"case__specs-item tr-stag tr-stag--delay js-specs\">\n								<h3 class=\"case__specs-title tr-stag tr-stag--delay js-specs\">"
    + ((stack1 = ((helper = (helper = helpers.title || (depth0 != null ? depth0.title : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"title","hash":{},"data":data}) : helper))) != null ? stack1 : "")
    + "</h3>\n								<p class=\"case__specs-description tr-stag tr-stag--delay js-specs\">"
    + ((stack1 = ((helper = (helper = helpers.description || (depth0 != null ? depth0.description : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"description","hash":{},"data":data}) : helper))) != null ? stack1 : "")
    + "</p>\n							</div>\n";
},"6":function(container,depth0,helpers,partials,data,blockParams,depths) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "				<div class=\"case__item case__item--"
    + alias4(((helper = (helper = helpers.modifier || (depth0 != null ? depth0.modifier : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"modifier","hash":{},"data":data}) : helper)))
    + " js-case\" id=\"js-case-item-"
    + alias4(container.lambda((depths[1] != null ? depths[1].page : depths[1]), depth0))
    + "-"
    + alias4(((helper = (helper = helpers.index || (data && data.index)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"index","hash":{},"data":data}) : helper)))
    + "\">\n"
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.text : depth0),{"name":"if","hash":{},"fn":container.program(7, data, 0, blockParams, depths),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.img : depth0),{"name":"if","hash":{},"fn":container.program(9, data, 0, blockParams, depths),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "				</div>\n";
},"7":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=container.lambda, alias2=container.escapeExpression;

  return "						<div class=\"case__text-container\">\n							<div class=\"case__line tr-stag js-case-item\"></div>\n							<h2 class=\"txt-xl tr-stag js-case-item\">"
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.text : depth0)) != null ? stack1.title : stack1), depth0))
    + "</h2>\n							<p class=\"case__description tr-stag js-case-item\">"
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.text : depth0)) != null ? stack1.description : stack1), depth0))
    + "</p>\n						</div>\n";
},"9":function(container,depth0,helpers,partials,data,blockParams,depths) {
    var helper, alias1=container.escapeExpression;

  return "					<div class=\"img-container tr tr--scale-in js-case-item\">\n						<img data-src=\"media/"
    + alias1(((helper = (helper = helpers.img || (depth0 != null ? depth0.img : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"img","hash":{},"data":data}) : helper)))
    + "\" src=\"\" class=\"img-responsive js-loader-item-"
    + alias1(container.lambda((depths[1] != null ? depths[1].page : depths[1]), depth0))
    + "\" />\n					</div>\n";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data,blockParams,depths) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "<div class=\"case case--"
    + alias4(((helper = (helper = helpers.page || (depth0 != null ? depth0.page : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"page","hash":{},"data":data}) : helper)))
    + "\">\n	<div class=\"case__intro-container js-parallax\">\n		<div class=\"intro intro--detail\">\n			<div class=\"intro__container\">\n				<img src=\"media/"
    + alias4(((helper = (helper = helpers.page || (depth0 != null ? depth0.page : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"page","hash":{},"data":data}) : helper)))
    + "/logo.svg\" class=\"case__logo ani ani--fade-in\" />\n"
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.title : depth0),{"name":"if","hash":{},"fn":container.program(1, data, 0, blockParams, depths),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "				<p class=\"intro__description txt-l ani ani--fade-in ani--delay-short\">"
    + alias4(((helper = (helper = helpers.intro || (depth0 != null ? depth0.intro : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"intro","hash":{},"data":data}) : helper)))
    + "</p>\n			</div>\n			<div class=\"scroll-down scroll-down--bottom ani ani--fade-in-up ani--delay-medium\">\n				<div class=\"scroll-down__icon\">\n					<div class=\"scroll-down__icon-circle\"></div>\n				</div>\n				<p class=\"scroll-down__label\">scroll down to discover</p>\n			</div>\n		</div>\n	</div>\n	\n	<div class=\"case__content ani ani--fade-in\">\n		<div class=\"case__hero-container\" id=\"js-hero-"
    + alias4(((helper = (helper = helpers.page || (depth0 != null ? depth0.page : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"page","hash":{},"data":data}) : helper)))
    + "\">\n			<img data-src=\"media/"
    + alias4(((helper = (helper = helpers.hero || (depth0 != null ? depth0.hero : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"hero","hash":{},"data":data}) : helper)))
    + "\" src=\"\" class=\"case__hero-img js-loader-hero-"
    + alias4(((helper = (helper = helpers.page || (depth0 != null ? depth0.page : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"page","hash":{},"data":data}) : helper)))
    + "\" />\n"
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.specs : depth0),{"name":"if","hash":{},"fn":container.program(3, data, 0, blockParams, depths),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "		</div>\n		<div class=\"container\">\n"
    + ((stack1 = helpers.each.call(alias1,(depth0 != null ? depth0.item : depth0),{"name":"each","hash":{},"fn":container.program(6, data, 0, blockParams, depths),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "		</div>\n	</div>\n</div>";
},"useData":true,"useDepths":true});
templates['home'] = template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    return "<!-- animation of little objects -->\n<div class=\"ao\">\n	<div class=\"ao__particle ao--move-up-down ao--v-70\"></div>\n	<div class=\"ao__particle ao--move-up-down ao--v-20 ao--delay-2s\"></div>\n	<div class=\"ao__particle ao--move-up-down ao--v-22 ao--delay-3s ao--dur-11s\"></div>\n	<div class=\"ao__particle ao--move-up-down ao--v-30 ao--delay-5s\"></div>\n	<div class=\"ao__particle ao--move-up-down ao--v-50 ao--delay-7s ao--dur-10s\"></div>\n	<div class=\"ao__particle ao--move-up-down ao--v-80 ao--delay-6s ao--dur-13s\"></div>	\n</div>\n\n<!-- intro -->\n<div class=\"intro ani ani--fade-in\">\n	<div class=\"intro__container\">\n		<h1 class=\"intro__title txt-xxxxl\">\n			Creating digital experiences to engage people.\n		</h1>\n		<button class=\"button txt-m js-checkout-button\">check out latest work</button>\n	</div>\n</div>\n\n<!-- socials footer -->\n<footer class=\"sfi ani ani--fade-in-up ani--delay-medium\">\n	<a href=\"https://www.behance.net/tk305\"  target=\"_blank\" class=\"sfi__icon\" include=\"../assets/img/behance.svg\"></a>	\n	<a href=\"https://www.instagram.com/tdenheld/\" target=\"_blank\" class=\"sfi__icon\" include=\"../assets/img/insta.svg\"></a>	\n	<a href=\"https://twitter.com/tdenheld\" target=\"_blank\" class=\"sfi__icon\" include=\"../assets/img/twitter.svg\"></a>	\n	<a href=\"https://soundcloud.com/tiborkocsis\" target=\"_blank\" class=\"sfi__icon\" include=\"../assets/img/soundcloud.svg\"></a>	\n</footer>";
},"useData":true});
templates['work'] = template({"1":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "			<div class=\"tile tile--"
    + alias4(((helper = (helper = helpers.page || (depth0 != null ? depth0.page : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"page","hash":{},"data":data}) : helper)))
    + " js-case--"
    + alias4(((helper = (helper = helpers.page || (depth0 != null ? depth0.page : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"page","hash":{},"data":data}) : helper)))
    + " ani ani--fade-in\">\n				<div class=\"tile__link\"></div>\n				<h2 class=\"tile__title\">"
    + alias4(((helper = (helper = helpers.title || (depth0 != null ? depth0.title : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"title","hash":{},"data":data}) : helper)))
    + "</h2>\n				<p class=\"tile__description\">"
    + alias4(((helper = (helper = helpers.description || (depth0 != null ? depth0.description : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"description","hash":{},"data":data}) : helper)))
    + "</p>\n			</div>\n";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {});

  return "<div class=\"work\">\n	<h1 class=\"work__title\">"
    + container.escapeExpression(((helper = (helper = helpers.title || (depth0 != null ? depth0.title : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(alias1,{"name":"title","hash":{},"data":data}) : helper)))
    + "</h1>\n	<div class=\"work__grid\">\n"
    + ((stack1 = helpers.each.call(alias1,(depth0 != null ? depth0.work : depth0),{"name":"each","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "	</div>\n</div>";
},"useData":true});
})();