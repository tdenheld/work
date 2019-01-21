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
    + "\n				</p>\n			</div>\n		</div>\n	</div>\n</section>\n\n<!-- socials footer -->\n<footer class=\"sfi sfi--about a a-fi-up a-del-800\">\n    <a href=\"https://www.behance.net/tk305\" target=\"_blank\" class=\"sfi__icon\"><svg class=\"icon\" xmlns=\"http://www.w3.org/2000/svg\" width=\"27\" height=\"17\" viewBox=\"0 0 27 17\"><path class=\"a\" d=\"M10.9,7.6a2.9,2.9,0,0,0,2.555-3.166C13.452,1.454,11.361,0,8.713,0H0V16.648H8.713s5.32.166,5.32-4.915c0,0,.232-4.134-3.137-4.134M3.84,2.958H8.713S9.9,2.958,9.9,4.69,9.2,6.674,8.411,6.674H3.84ZM8.489,13.689H3.84V9.239H8.713s1.765-.022,1.765,2.287c0,1.925-1.291,2.144-1.99,2.163\"/><path class=\"a\" d=\"M21.128,4.235c-6.44,0-6.435,6.4-6.435,6.4S14.251,17,21.128,17c0,0,5.729.326,5.729-4.427H23.91s.1,1.79-2.685,1.79a2.718,2.718,0,0,1-2.946-2.9h8.676s.949-7.227-5.827-7.227m-2.883,5a2.985,2.985,0,0,1,2.947-2.565,2.481,2.481,0,0,1,2.553,2.565Z\"/><rect class=\"a\" x=\"17.525\" y=\"0.98\" width=\"6.909\" height=\"2.051\"/></svg></a>\n    <a href=\"https://www.instagram.com/tdenheld/\" target=\"_blank\" class=\"sfi__icon\"><svg class=\"icon\" xmlns=\"http://www.w3.org/2000/svg\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\"><path class=\"a\" d=\"M17.169,24H6.831A6.838,6.838,0,0,1,0,17.169V6.83A6.838,6.838,0,0,1,6.831,0H17.169A6.839,6.839,0,0,1,24,6.83V17.169A6.839,6.839,0,0,1,17.169,24ZM6.831,2.057A4.779,4.779,0,0,0,2.057,6.83V17.169a4.779,4.779,0,0,0,4.774,4.774H17.169a4.779,4.779,0,0,0,4.774-4.774V6.83a4.779,4.779,0,0,0-4.774-4.773Z\"/><path class=\"a\" d=\"M12,18.145A6.145,6.145,0,1,1,18.145,12,6.152,6.152,0,0,1,12,18.145ZM12,7.912A4.088,4.088,0,1,0,16.088,12,4.093,4.093,0,0,0,12,7.912Z\"/><circle class=\"a\" cx=\"18.409\" cy=\"5.503\" r=\"1.477\"/></svg></a>\n    <a href=\"https://twitter.com/tdenheld\" target=\"_blank\" class=\"sfi__icon\"><svg class=\"icon\" xmlns=\"http://www.w3.org/2000/svg\" width=\"22\" height=\"18\" viewBox=\"0 0 22 18\"><path class=\"a\" d=\"M21.392.332a8.98,8.98,0,0,1-2.866,1.1,4.51,4.51,0,0,0-7.808,3.109,4.578,4.578,0,0,0,.116,1.036A12.786,12.786,0,0,1,1.531.831,4.567,4.567,0,0,0,2.928,6.9,4.464,4.464,0,0,1,.884,6.33v.056A4.539,4.539,0,0,0,4.5,10.843,4.44,4.44,0,0,1,3.315,11a4.528,4.528,0,0,1-.85-.081,4.523,4.523,0,0,0,4.217,3.156,9.014,9.014,0,0,1-5.606,1.945A9,9,0,0,1,0,15.959,12.7,12.7,0,0,0,6.919,18,12.8,12.8,0,0,0,19.761,5.07c0-.2,0-.393-.012-.587A9.224,9.224,0,0,0,22,2.13a8.968,8.968,0,0,1-2.592.715A4.55,4.55,0,0,0,21.392.332\"/></svg></a>\n    <a href=\"https://soundcloud.com/tiborkocsis\" target=\"_blank\" class=\"sfi__icon\"><svg class=\"icon\" xmlns=\"http://www.w3.org/2000/svg\" width=\"25\" height=\"14\" viewBox=\"0 0 25 14\"><path class=\"a\" d=\"M.849,7.211a.814.814,0,0,0-.6.253A.843.843,0,0,0,0,8.08v3.406a.817.817,0,0,0,.337.711.913.913,0,0,0,.722.171.813.813,0,0,0,.506-.259,1.035,1.035,0,0,0,.145-.622V8.08a.843.843,0,0,0-.249-.616.829.829,0,0,0-.611-.253\"/><path class=\"a\" d=\"M6.212,5.191a.837.837,0,0,0-.616.258.853.853,0,0,0-.256.623v7.247a.581.581,0,0,0,.245.511,1.075,1.075,0,0,0,.628.17,1.03,1.03,0,0,0,.611-.17.588.588,0,0,0,.237-.511V6.072a.862.862,0,0,0-.25-.623.808.808,0,0,0-.6-.258\"/><path class=\"a\" d=\"M3.525,4.146a.814.814,0,0,0-.6.253.824.824,0,0,0-.249.6v7.94a.588.588,0,0,0,.237.511,1.03,1.03,0,0,0,.612.17,1.049,1.049,0,0,0,.622-.17.587.587,0,0,0,.239-.511V5a.858.858,0,0,0-.861-.857\"/><path class=\"a\" d=\"M21.057,6.072a3.783,3.783,0,0,0-1.512.305,6.925,6.925,0,0,0-1.1-3.224A6.854,6.854,0,0,0,15.961.845,6.76,6.76,0,0,0,12.646,0,6.578,6.578,0,0,0,11.1.188q-.361.117-.361.728V13.694a.351.351,0,0,0,.053.165.277.277,0,0,0,.157.129L21.069,14a3.778,3.778,0,0,0,2.774-1.163A3.834,3.834,0,0,0,25,10.03a3.819,3.819,0,0,0-1.157-2.795,3.789,3.789,0,0,0-2.786-1.163\"/><path class=\"a\" d=\"M9.144.493a.829.829,0,0,0-.755.223,1.109,1.109,0,0,0-.373.893V13.354q0,.646.861.645t.861-.645V1.609q0-.986-.593-1.116\"/></svg></a>\n</footer>";
},"useData":true});
templates['app'] = template({"1":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "        <span class=\"opacity-hover\">\n            <li class=\"navbar__list-item navbar__list-item--"
    + alias4(((helper = (helper = helpers.item || (depth0 != null ? depth0.item : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"item","hash":{},"data":data}) : helper)))
    + " js-nav js-nav--"
    + alias4(((helper = (helper = helpers.item || (depth0 != null ? depth0.item : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"item","hash":{},"data":data}) : helper)))
    + "\">\n                "
    + alias4(((helper = (helper = helpers.item || (depth0 != null ? depth0.item : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"item","hash":{},"data":data}) : helper)))
    + "\n            </li>\n        </span>\n";
},"3":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "<div id=\""
    + alias4(((helper = (helper = helpers.page || (depth0 != null ? depth0.page : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"page","hash":{},"data":data}) : helper)))
    + "\" class=\"js-page js-page--"
    + alias4(((helper = (helper = helpers.page || (depth0 != null ? depth0.page : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"page","hash":{},"data":data}) : helper)))
    + "\"></div>\n";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {});

  return "<!-- navbar -->\n<header class=\"navbar a a-fi-down a-del-500\" id=\"js-navbar\">\n    <a href=\"/\">\n        <span class=\"opacity-hover js-logo\">\n            <svg class=\"logo\" xmlns=\"http://www.w3.org/2000/svg\" width=\"69\" height=\"77\" viewBox=\"0 0 69 77\"><path d=\"M69,77H0V29H7.1L8.016,0H21.979L22,.479,23.225,29h1.723L26.026,9H39.974l1.079,20H69ZM1,76H68V30H40.105L39.026,10H26.974L25.895,30H22.268l-.021-.479L21.021,1H8.984L8.067,30H1Z\"/><path d=\"M10.5,42A3.5,3.5,0,1,1,14,38.5,3.5,3.5,0,0,1,10.5,42Zm0-6A2.5,2.5,0,1,0,13,38.5,2.5,2.5,0,0,0,10.5,36Z\"/><path d=\"M22.5,42A3.5,3.5,0,1,1,26,38.5,3.5,3.5,0,0,1,22.5,42Zm0-6A2.5,2.5,0,1,0,25,38.5,2.5,2.5,0,0,0,22.5,36Z\"/><path d=\"M34.5,42A3.5,3.5,0,1,1,38,38.5,3.5,3.5,0,0,1,34.5,42Zm0-6A2.5,2.5,0,1,0,37,38.5,2.5,2.5,0,0,0,34.5,36Z\"/><path d=\"M46.5,42A3.5,3.5,0,1,1,50,38.5,3.5,3.5,0,0,1,46.5,42Zm0-6A2.5,2.5,0,1,0,49,38.5,2.5,2.5,0,0,0,46.5,36Z\"/><path d=\"M58.5,42A3.5,3.5,0,1,1,62,38.5,3.5,3.5,0,0,1,58.5,42Zm0-6A2.5,2.5,0,1,0,61,38.5,2.5,2.5,0,0,0,58.5,36Z\"/></svg>\n        </span>\n    </a>\n    <ul class=\"navbar__list\">\n"
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
    + "\">\n			<img src=\"media/"
    + alias4(((helper = (helper = helpers.page || (depth0 != null ? depth0.page : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"page","hash":{},"data":data}) : helper)))
    + "/hero.jpg\" class=\"case__hero-img\" />\n"
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
    + "</button>\n        </div>\n    </div>\n</section>\n\n<!-- socials footer -->\n<footer class=\"sfi a a-fi-up a-del-800\">\n    <a href=\"https://www.behance.net/tk305\" target=\"_blank\" class=\"sfi__icon\"><svg class=\"icon\" xmlns=\"http://www.w3.org/2000/svg\" width=\"27\" height=\"17\" viewBox=\"0 0 27 17\"><path class=\"a\" d=\"M10.9,7.6a2.9,2.9,0,0,0,2.555-3.166C13.452,1.454,11.361,0,8.713,0H0V16.648H8.713s5.32.166,5.32-4.915c0,0,.232-4.134-3.137-4.134M3.84,2.958H8.713S9.9,2.958,9.9,4.69,9.2,6.674,8.411,6.674H3.84ZM8.489,13.689H3.84V9.239H8.713s1.765-.022,1.765,2.287c0,1.925-1.291,2.144-1.99,2.163\"/><path class=\"a\" d=\"M21.128,4.235c-6.44,0-6.435,6.4-6.435,6.4S14.251,17,21.128,17c0,0,5.729.326,5.729-4.427H23.91s.1,1.79-2.685,1.79a2.718,2.718,0,0,1-2.946-2.9h8.676s.949-7.227-5.827-7.227m-2.883,5a2.985,2.985,0,0,1,2.947-2.565,2.481,2.481,0,0,1,2.553,2.565Z\"/><rect class=\"a\" x=\"17.525\" y=\"0.98\" width=\"6.909\" height=\"2.051\"/></svg></a>\n    <a href=\"https://www.instagram.com/tdenheld/\" target=\"_blank\" class=\"sfi__icon\"><svg class=\"icon\" xmlns=\"http://www.w3.org/2000/svg\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\"><path class=\"a\" d=\"M17.169,24H6.831A6.838,6.838,0,0,1,0,17.169V6.83A6.838,6.838,0,0,1,6.831,0H17.169A6.839,6.839,0,0,1,24,6.83V17.169A6.839,6.839,0,0,1,17.169,24ZM6.831,2.057A4.779,4.779,0,0,0,2.057,6.83V17.169a4.779,4.779,0,0,0,4.774,4.774H17.169a4.779,4.779,0,0,0,4.774-4.774V6.83a4.779,4.779,0,0,0-4.774-4.773Z\"/><path class=\"a\" d=\"M12,18.145A6.145,6.145,0,1,1,18.145,12,6.152,6.152,0,0,1,12,18.145ZM12,7.912A4.088,4.088,0,1,0,16.088,12,4.093,4.093,0,0,0,12,7.912Z\"/><circle class=\"a\" cx=\"18.409\" cy=\"5.503\" r=\"1.477\"/></svg></a>\n    <a href=\"https://twitter.com/tdenheld\" target=\"_blank\" class=\"sfi__icon\"><svg class=\"icon\" xmlns=\"http://www.w3.org/2000/svg\" width=\"22\" height=\"18\" viewBox=\"0 0 22 18\"><path class=\"a\" d=\"M21.392.332a8.98,8.98,0,0,1-2.866,1.1,4.51,4.51,0,0,0-7.808,3.109,4.578,4.578,0,0,0,.116,1.036A12.786,12.786,0,0,1,1.531.831,4.567,4.567,0,0,0,2.928,6.9,4.464,4.464,0,0,1,.884,6.33v.056A4.539,4.539,0,0,0,4.5,10.843,4.44,4.44,0,0,1,3.315,11a4.528,4.528,0,0,1-.85-.081,4.523,4.523,0,0,0,4.217,3.156,9.014,9.014,0,0,1-5.606,1.945A9,9,0,0,1,0,15.959,12.7,12.7,0,0,0,6.919,18,12.8,12.8,0,0,0,19.761,5.07c0-.2,0-.393-.012-.587A9.224,9.224,0,0,0,22,2.13a8.968,8.968,0,0,1-2.592.715A4.55,4.55,0,0,0,21.392.332\"/></svg></a>\n    <a href=\"https://soundcloud.com/tiborkocsis\" target=\"_blank\" class=\"sfi__icon\"><svg class=\"icon\" xmlns=\"http://www.w3.org/2000/svg\" width=\"25\" height=\"14\" viewBox=\"0 0 25 14\"><path class=\"a\" d=\"M.849,7.211a.814.814,0,0,0-.6.253A.843.843,0,0,0,0,8.08v3.406a.817.817,0,0,0,.337.711.913.913,0,0,0,.722.171.813.813,0,0,0,.506-.259,1.035,1.035,0,0,0,.145-.622V8.08a.843.843,0,0,0-.249-.616.829.829,0,0,0-.611-.253\"/><path class=\"a\" d=\"M6.212,5.191a.837.837,0,0,0-.616.258.853.853,0,0,0-.256.623v7.247a.581.581,0,0,0,.245.511,1.075,1.075,0,0,0,.628.17,1.03,1.03,0,0,0,.611-.17.588.588,0,0,0,.237-.511V6.072a.862.862,0,0,0-.25-.623.808.808,0,0,0-.6-.258\"/><path class=\"a\" d=\"M3.525,4.146a.814.814,0,0,0-.6.253.824.824,0,0,0-.249.6v7.94a.588.588,0,0,0,.237.511,1.03,1.03,0,0,0,.612.17,1.049,1.049,0,0,0,.622-.17.587.587,0,0,0,.239-.511V5a.858.858,0,0,0-.861-.857\"/><path class=\"a\" d=\"M21.057,6.072a3.783,3.783,0,0,0-1.512.305,6.925,6.925,0,0,0-1.1-3.224A6.854,6.854,0,0,0,15.961.845,6.76,6.76,0,0,0,12.646,0,6.578,6.578,0,0,0,11.1.188q-.361.117-.361.728V13.694a.351.351,0,0,0,.053.165.277.277,0,0,0,.157.129L21.069,14a3.778,3.778,0,0,0,2.774-1.163A3.834,3.834,0,0,0,25,10.03a3.819,3.819,0,0,0-1.157-2.795,3.789,3.789,0,0,0-2.786-1.163\"/><path class=\"a\" d=\"M9.144.493a.829.829,0,0,0-.755.223,1.109,1.109,0,0,0-.373.893V13.354q0,.646.861.645t.861-.645V1.609q0-.986-.593-1.116\"/></svg></a>\n</footer>";
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