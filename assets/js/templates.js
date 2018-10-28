(function() {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
templates['about'] = template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=container.lambda, alias2=container.escapeExpression;

  return "<!-- about -->\n<section class=\"about\">\n	<div class=\"intro intro--about\">\n		<div class=\"intro__container\">\n			<h1 class=\"about__heading a a-fi js-split-txt-about\">\n				"
    + ((stack1 = alias1(((stack1 = (depth0 != null ? depth0.about : depth0)) != null ? stack1.title : stack1), depth0)) != null ? stack1 : "")
    + "\n			</h1>\n            <h2 class=\"intro__description intro__description--smaller fw-200 a a-fi a-del-150 mb-1 mb-2-sm\">\n                "
    + ((stack1 = alias1(((stack1 = (depth0 != null ? depth0.about : depth0)) != null ? stack1.subtitle : stack1), depth0)) != null ? stack1 : "")
    + "\n            </h2>\n			<p class=\"intro__description fw-700 a a-fi a-del-250 about__margin\">\n				"
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.about : depth0)) != null ? stack1.p1 : stack1), depth0))
    + "\n			</p>\n			<div class=\"js-scrll-section a a-fi a-del-350 about__margin\">\n				<p class=\"intro__description intro__description--small\">\n					"
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.about : depth0)) != null ? stack1.p2 : stack1), depth0))
    + "\n				</p>\n			</div>\n			<div class=\"js-scrll-section a a-fi about__margin\">\n				<p class=\"intro__description intro__description--small tr-stag js-tr\">\n					"
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.about : depth0)) != null ? stack1.p3 : stack1), depth0))
    + "\n				</p>\n			</div>\n			<div class=\"js-scrll-section a a-fi about__margin\">\n				<img data-src=\"media/"
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.about : depth0)) != null ? stack1.img : stack1), depth0))
    + "\" class=\"img-responsive js-about-img tr-si tr-400 js-tr\" />\n			</div>\n			<div class=\"js-scrll-section a a-fi mb-7\">\n				<p class=\"intro__description intro__description--small tr-400 tr-stag js-tr\">\n					"
    + ((stack1 = alias1(((stack1 = (depth0 != null ? depth0.about : depth0)) != null ? stack1.p4 : stack1), depth0)) != null ? stack1 : "")
    + "\n				</p>\n			</div>\n			<div class=\"js-scrll-section a a-fi about__margin\">\n                <h3 class=\"intro__description intro__description--smaller fw-800 mb-0 tr-stag js-tr\">\n                    "
    + alias2(alias1(((stack1 = ((stack1 = (depth0 != null ? depth0.about : depth0)) != null ? stack1.p5 : stack1)) != null ? stack1.title : stack1), depth0))
    + "\n                </h3>\n				<p class=\"intro__description intro__description--smaller tr-stag js-tr\">\n					"
    + ((stack1 = alias1(((stack1 = ((stack1 = (depth0 != null ? depth0.about : depth0)) != null ? stack1.p5 : stack1)) != null ? stack1.description : stack1), depth0)) != null ? stack1 : "")
    + "\n				</p>\n			</div>\n		</div>\n	</div>\n</section>\n\n<!-- socials footer -->\n<footer class=\"sfi sfi--about a a-fi-up a-del-500\">\n	<a href=\"https://www.behance.net/tk305\" target=\"_blank\" class=\"sfi__icon\" include=\"../assets/img/behance.svg\"></a>\n	<a href=\"https://www.instagram.com/tdenheld/\" target=\"_blank\" class=\"sfi__icon\" include=\"../assets/img/insta.svg\"></a>\n	<a href=\"https://twitter.com/tdenheld\" target=\"_blank\" class=\"sfi__icon\" include=\"../assets/img/twitter.svg\"></a>\n	<a href=\"https://soundcloud.com/tiborkocsis\" target=\"_blank\" class=\"sfi__icon\" include=\"../assets/img/soundcloud.svg\"></a>\n</footer>";
},"useData":true});
templates['app'] = template({"1":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "        <li class=\"navbar__list-item navbar__list-item--"
    + alias4(((helper = (helper = helpers.item || (depth0 != null ? depth0.item : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"item","hash":{},"data":data}) : helper)))
    + " js-nav js-nav--"
    + alias4(((helper = (helper = helpers.item || (depth0 != null ? depth0.item : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"item","hash":{},"data":data}) : helper)))
    + "\">\n            <span class=\"opacity-hover\">\n                "
    + alias4(((helper = (helper = helpers.item || (depth0 != null ? depth0.item : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"item","hash":{},"data":data}) : helper)))
    + "\n            </span>\n        </li>\n";
},"3":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "<div id=\""
    + alias4(((helper = (helper = helpers.page || (depth0 != null ? depth0.page : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"page","hash":{},"data":data}) : helper)))
    + "\" class=\"js-page js-page--"
    + alias4(((helper = (helper = helpers.page || (depth0 != null ? depth0.page : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"page","hash":{},"data":data}) : helper)))
    + "\"></div>\n";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {});

  return "<!-- navbar -->\n<header class=\"navbar a a-fi-down a-del-500\" id=\"js-navbar\">\n    <a href=\"/\">\n        <span include=\"../assets/img/logo-tk305.svg\" class=\"opacity-hover js-logo\"></span>\n    </a>\n    <ul class=\"navbar__list\">\n"
    + ((stack1 = helpers.each.call(alias1,(depth0 != null ? depth0.navbar : depth0),{"name":"each","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "    </ul>\n</header>\n\n<!-- animation of lines -->\n<div class=\"lines\">\n    <div class=\"lines__line js-line\"><span></span></div>\n    <div class=\"lines__line js-line\"><span></span></div>\n    <div class=\"lines__line js-line\"><span></span></div>\n    <div class=\"lines__line js-line\"><span></span></div>\n    <div class=\"lines__line js-line\"><span></span></div>\n</div>\n\n<!-- animation of little objects -->\n<div class=\"ao js-ao\">\n    <div class=\"ao__particle ao--move-up-down ao--v-70\"></div>\n    <div class=\"ao__particle ao--move-up-down ao--v-20 ao--delay-2s\"></div>\n    <div class=\"ao__particle ao--move-up-down ao--v-22 ao--delay-3s ao--dur-11s\"></div>\n    <div class=\"ao__particle ao--move-up-down ao--v-30 ao--delay-5s\"></div>\n    <div class=\"ao__particle ao--move-up-down ao--v-50 ao--delay-7s ao--dur-10s\"></div>\n    <div class=\"ao__particle ao--move-up-down ao--v-80 ao--delay-6s ao--dur-13s\"></div>\n</div>\n\n<!-- pages -->\n"
    + ((stack1 = helpers.each.call(alias1,(depth0 != null ? depth0.pages : depth0),{"name":"each","hash":{},"fn":container.program(3, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "");
},"useData":true});
templates['case'] = template({"1":function(container,depth0,helpers,partials,data) {
    var helper;

  return "				<h1 class=\"intro__title txt-xxxl a a-fi js-split-txt\">"
    + container.escapeExpression(((helper = (helper = helpers.title || (depth0 != null ? depth0.title : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"title","hash":{},"data":data}) : helper)))
    + "</h1>\n";
},"3":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "			<div class=\"case__hero-gradient tr-fi tr-650 js-hero-gradient\"></div>\n			<div class=\"case__specs\">\n				<div class=\"case__specs-grid\">\n"
    + ((stack1 = helpers.each.call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0.specs : depth0),{"name":"each","hash":{},"fn":container.program(4, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "				</div>\n			</div>\n";
},"4":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3="function";

  return "					<div class=\"case__specs-item tr-400 tr-stag tr-stag-del js-specs\">\n						<h3 class=\"case__specs-title tr-400 tr-stag tr-stag-del js-specs\">"
    + ((stack1 = ((helper = (helper = helpers.title || (depth0 != null ? depth0.title : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"title","hash":{},"data":data}) : helper))) != null ? stack1 : "")
    + "</h3>\n						<p class=\"case__specs-description tr-400 tr-stag tr-stag-del js-specs\">"
    + ((stack1 = ((helper = (helper = helpers.description || (depth0 != null ? depth0.description : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"description","hash":{},"data":data}) : helper))) != null ? stack1 : "")
    + "</p>\n					</div>\n";
},"6":function(container,depth0,helpers,partials,data,blockParams,depths) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {});

  return "			<div class=\"case__item case__item--"
    + container.escapeExpression(((helper = (helper = helpers.modifier || (depth0 != null ? depth0.modifier : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(alias1,{"name":"modifier","hash":{},"data":data}) : helper)))
    + " js-scrll-section\">\n"
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.text : depth0),{"name":"if","hash":{},"fn":container.program(7, data, 0, blockParams, depths),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.img : depth0),{"name":"if","hash":{},"fn":container.program(9, data, 0, blockParams, depths),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "			</div>\n";
},"7":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=container.lambda;

  return "				<div class=\"case__text-container\">\n					<div class=\"case__line tr-400 tr-stag js-tr\"></div>\n					<h2 class=\"txt-xl tr-stag tr-400 js-tr\">"
    + container.escapeExpression(alias1(((stack1 = (depth0 != null ? depth0.text : depth0)) != null ? stack1.title : stack1), depth0))
    + "</h2>\n					<p class=\"case__description tr-400 tr-stag js-tr\">"
    + ((stack1 = alias1(((stack1 = (depth0 != null ? depth0.text : depth0)) != null ? stack1.description : stack1), depth0)) != null ? stack1 : "")
    + "</p>\n				</div>\n";
},"9":function(container,depth0,helpers,partials,data,blockParams,depths) {
    var helper, alias1=container.escapeExpression;

  return "				<div class=\"img-container tr-si tr-400 js-tr\">\n					<img data-src=\"media/"
    + alias1(((helper = (helper = helpers.img || (depth0 != null ? depth0.img : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"img","hash":{},"data":data}) : helper)))
    + "\" src=\"\" class=\"img-responsive js-loader-item-"
    + alias1(container.lambda((depths[1] != null ? depths[1].page : depths[1]), depth0))
    + "\" />\n				</div>\n";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data,blockParams,depths) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "<section class=\"case case--"
    + alias4(((helper = (helper = helpers.page || (depth0 != null ? depth0.page : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"page","hash":{},"data":data}) : helper)))
    + "\">\n	<div class=\"case__intro-container js-parallax\">\n		<div class=\"intro intro--detail\">\n			<div class=\"intro__container\">\n				<img src=\"media/"
    + alias4(((helper = (helper = helpers.page || (depth0 != null ? depth0.page : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"page","hash":{},"data":data}) : helper)))
    + "/logo.svg\" class=\"case__logo a a-fi a-del-350\" />\n"
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.title : depth0),{"name":"if","hash":{},"fn":container.program(1, data, 0, blockParams, depths),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "				<p class=\"intro__description txt-l a a-fi a-del-500\">"
    + alias4(((helper = (helper = helpers.intro || (depth0 != null ? depth0.intro : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"intro","hash":{},"data":data}) : helper)))
    + "</p>\n			</div>\n			<div class=\"scroll-down scroll-down--bottom a a-fi-up a-del-500\">\n				<div class=\"scroll-down__icon\">\n					<div class=\"scroll-down__icon-circle\"></div>\n				</div>\n				<p class=\"scroll-down__label\">scroll down to discover</p>\n			</div>\n		</div>\n	</div>\n\n	<div class=\"case__content a a-fi\">\n		<div class=\"case__hero-container\" id=\"js-hero-"
    + alias4(((helper = (helper = helpers.page || (depth0 != null ? depth0.page : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"page","hash":{},"data":data}) : helper)))
    + "\">\n			<img data-src=\"media/"
    + alias4(((helper = (helper = helpers.hero || (depth0 != null ? depth0.hero : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"hero","hash":{},"data":data}) : helper)))
    + "\" src=\"\" class=\"case__hero-img js-loader-hero-"
    + alias4(((helper = (helper = helpers.page || (depth0 != null ? depth0.page : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"page","hash":{},"data":data}) : helper)))
    + "\" />\n"
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.specs : depth0),{"name":"if","hash":{},"fn":container.program(3, data, 0, blockParams, depths),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "		</div>\n		<div class=\"container\">\n"
    + ((stack1 = helpers.each.call(alias1,(depth0 != null ? depth0.item : depth0),{"name":"each","hash":{},"fn":container.program(6, data, 0, blockParams, depths),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "		</div>\n	</div>\n</section>\n\n<section class=\"hbs-work-cf work--case work--"
    + alias4(((helper = (helper = helpers.page || (depth0 != null ? depth0.page : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"page","hash":{},"data":data}) : helper)))
    + "\">\n	<div class=\"container\">\n		<div class=\"work-cf js-scrll-section\">\n			<h2 class=\"work-cf__title txt-xl tr-si tr-400 js-tr\">View more cases</h2>\n		</div>\n	</div>\n</section>";
},"useData":true,"useDepths":true});
templates['home'] = template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=container.lambda, alias2=container.escapeExpression;

  return "<!-- intro -->\n<section class=\"intro\">\n    <div class=\"intro__container\">\n        <h1 class=\"home__heading js-split-txt\">\n            "
    + ((stack1 = alias1(((stack1 = (depth0 != null ? depth0.home : depth0)) != null ? stack1.title : stack1), depth0)) != null ? stack1 : "")
    + "\n        </h1>\n        <p class=\"home__description a a-fi a-del-500\">"
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.home : depth0)) != null ? stack1.subtitle : stack1), depth0))
    + "</p>\n        <div class=\"a a-fi a-del-700\">\n            <button class=\"button txt-m js-checkout-button\">"
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.home : depth0)) != null ? stack1.button : stack1), depth0))
    + "</button>\n        </div>\n    </div>\n</section>\n\n<!-- socials footer -->\n<footer class=\"sfi a a-fi-up a-del-800\">\n    <a href=\"https://www.behance.net/tk305\" target=\"_blank\" class=\"sfi__icon\" include=\"../assets/img/behance.svg\"></a>\n    <a href=\"https://www.instagram.com/tdenheld/\" target=\"_blank\" class=\"sfi__icon\" include=\"../assets/img/insta.svg\"></a>\n    <a href=\"https://twitter.com/tdenheld\" target=\"_blank\" class=\"sfi__icon\" include=\"../assets/img/twitter.svg\"></a>\n    <a href=\"https://soundcloud.com/tiborkocsis\" target=\"_blank\" class=\"sfi__icon\" include=\"../assets/img/soundcloud.svg\"></a>\n</footer>";
},"useData":true});
templates['work'] = template({"1":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "		<div class=\"tile tile--animation tile--"
    + alias4(((helper = (helper = helpers.page || (depth0 != null ? depth0.page : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"page","hash":{},"data":data}) : helper)))
    + " js-case--"
    + alias4(((helper = (helper = helpers.page || (depth0 != null ? depth0.page : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"page","hash":{},"data":data}) : helper)))
    + " js-scrll-section a a-fi\">\n			<div class=\"tile__container tr-si tr-400 js-tr\">\n				<h2 class=\"tile__title tr-stag tr-400 js-tr\">"
    + alias4(((helper = (helper = helpers.title || (depth0 != null ? depth0.title : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"title","hash":{},"data":data}) : helper)))
    + "</h2>\n				<p class=\"tile__description tr-stag tr-400 js-tr\">"
    + alias4(((helper = (helper = helpers.description || (depth0 != null ? depth0.description : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"description","hash":{},"data":data}) : helper)))
    + "</p>\n				<div class=\"tile__hover\" include=\"../media/thumbs/"
    + alias4(((helper = (helper = helpers.page || (depth0 != null ? depth0.page : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"page","hash":{},"data":data}) : helper)))
    + ".svg\"></div>\n			</div>\n		</div>\n";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "<div class=\"work\">\n	<h1 class=\"work__title\">"
    + container.escapeExpression(container.lambda(((stack1 = (depth0 != null ? depth0.work : depth0)) != null ? stack1.title : stack1), depth0))
    + "</h1>\n	<div class=\"work__grid\">\n"
    + ((stack1 = helpers.each.call(depth0 != null ? depth0 : (container.nullContext || {}),((stack1 = (depth0 != null ? depth0.work : depth0)) != null ? stack1.items : stack1),{"name":"each","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "	</div>\n</div>";
},"useData":true});
})();