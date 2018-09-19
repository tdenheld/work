// tibor.work data template

var context = {	

	// navbar
	// --------------------------------
	"navbar" : [
		{"item" : "work"},
		{"item" : "about"},
	],
	

	// pages
	// --------------------------------
	"pages" : [
		{"page" : "home"},
		{"page" : "work"},
		{"page" : "about"},
		{"page" : "ns"},
		{"page" : "wn"},
		{"page" : "ar"},
		{"page" : "cg"},
	],

	// home
	// --------------------------------
	"home": {
		"intro": "Creating digital experiences to engage people.",
		"button": "checkout lastest work"
	},


	// work
	// --------------------------------
	"work": {
		"title": "Selected work of TK305",
		"items": [
			{
				"page" : "ns",
				"title" : "Dutch Railways",
				"description" : "Lead Visual Design",
			},{
				"page" : "wn",
				"title" : "Waternet",
				"description" : "Visual Design",
			},{
				"page" : "ar",
				"title" : "Askja Reizen",
				"description" : "Visual Design / UX",
			},{
				"page" : "cg",
				"title" : "Circle of Gentlemen",
				"description" : "Visual Design / UX",
			},
		],
	},


	// about
	// --------------------------------
	"about" : {
		"title" : "Hoi.<br>It’s me,<br>Tibor!",
		"p1" : "I'm an Utrecht based digital designer creating experiences for humans and companies. Mostly intrigued with visual design, prototyping, UX and branding.",
		"p2" : "Working with large online platforms as well as tasteful campaign websites. If possible I implement my designs in code.",
		"p3" : "I moved pixels for brands such as Dutch Railways (NS), KPN, Greenpeace, KLM, Mitsubishi, Capgemini, SnappCar, Adformatie, Endemol and more.",
		"img" : "portret.jpg",
		"p4" : "In any case, I also love to play with cameras and synthesizers.",
		"contact" : "Mail me at",
		"email" : "hoi@tk305.com",
	},
};

var ns_context = {	
	"page" : "ns",
	"title" : "Dutch Railways",
	"intro" : "NS is the leading railway company of The Netherlands, transporting over 600.000 people who between them travel over 1.1 million times a day. As their Lead Visual Designer, I continually assist NS in optimizing their online services.",
	"hero" : "ns/hero.jpg",
	"specs" : [
		{
			"title" : "Client",
			"description" : "Nederlandse Spoorwegen",
		},{
			"title" : "Role",
			"description" : "Lead Visual Design",
		},{
			"title" : "Technologies",
			"description" : "Sketch <br>HTML5 / CSS3 / JS <br>Adobe",
		},
	],
	"item" : [
		{	
			"text" : {
				"title" : "Travel planner",
				"description" : "I designed various functionalities such as displaying weather forecast at an arrival location, showing the train composition of all train types, adding several personalized planning options and more.",
			},
		},{
			"img" : "ns/reisplanner1.jpg",	
		},{
			"img" : "ns/reisplanner2.jpg",
			"modifier" : "more-margin",	
		},{
			"text" : {
				"title" : "Spoordeelwinkel",
				"description" : "I participated in modernising the NS railway shop, a platform for the best deals for a day out by train. I was free to introduce a new design direction separate from the regular NS styling. Although it had to remain family of the NS brand. I took a bolder and more active approach to ensuring the feeling of being on offer.",
			},
		},{
			"img" : "ns/spoordeelwinkel.jpg",
			"modifier" : "more-margin",
		},{
			"text" : {	
				"title" : "Season tickets",
				"description" : "The aim was to make NS subscriptions more transparent for all customers. I was involved with the visual design and the final delivery of specs for development.",
			},
		},{
			"img" : "ns/abonnementen.jpg",
			"modifier" : "more-margin",
		},{
			"text" : {
				"title" : "Mijn NS",
				"description" : "I took part in redesigning the logged-in passengers environment of NS. This application contains a complicated backend to which numerous systems are linked. For me, the challenge was to present all information as clearly as possible while product owners were constantly scoping down functionality.",
			},
		},{
			"img" : "ns/mijn-ns.jpg",
			"modifier" : "more-margin",
		},
	],
};

var wn_context = {
	"page" : "wn",	
	"title" : false,
	"intro" : "Uselab asked me to collaborate to produce a web application for everyone who sails, lives, works and party on and around the Amsterdam canals. I visually designed a canal platform where anybody can find practical information and share experiences, photos and videos about the canals.",
	"hero" : "wn/hero.jpg",
	"specs" : [
		{
			"title" : "Client",
			"description" : "Uselab",
		},{
			"title" : "Deliverables",
			"description" : "Website Design <br>Icons",
		},{
			"title" : "Technologies",
			"description" : "Adobe Photoshop <br>Adobe Illustrator",
		},
	],
	"item" : [
		{
			"text" : {
				"title" : "Sailing the canals",
				"description" : "This HTML5 application has an extensive sailing chart and information about obstructions on the canals and opening hours of bridges and locks. In addition, visitors can view boat locations of other users and add content themselves.",
			},
		},{
			"img" : "wn/wn1.jpg",
		},{
			"img" : "wn/wn2.svg",
		},{
			"img" : "wn/wn3.jpg",
		},{
			"img" : "wn/wn4.jpg",
		},{
			"img" : "wn/wn5.jpg",
		},{
			"img" : "wn/wn6.jpg",
		},
	],
}

var cg_context = {	
	"page" : "cg",	
	"title" : "Circle of Gentlemen",
	"intro" : "Fashion by Circle of Gentlemen stands for beautiful qualities and sophisticated style brought together in elegant collections. In 2010, I was invited to a website design pitch and won. Untill 2016, we have been working closely together to display a beautiful online collection every six months.",
	"hero" : "cg/hero.jpg",
	"specs" : [
		{
			"title" : "Clients",
			"description" : "Circle of Gentlemen <br>Tweede Golf",
		},{
			"title" : "Deliverables",
			"description" : "Visual Design <br>UX design",
		},{
			"title" : "Technologies",
			"description" : "Adobe Photoshop <br>Adobe Illustrator",
		},
	],
	"item" : [
		{
			"text" : {
				"title" : "The Circle",
				"description" : "Concept of the winning design was a menu in the shape of a circle. Which can rotated and clicked to navigate through the website. Besides, the models were clickable and served as a shortcut to the collection page.",
			},
		},{
			"img" : "cg/cg1.jpg",
			
		},{
			"img" : "cg/cg2.jpg",
			"modifier" : "more-margin",
		},{
			"text" : {
				"title" : "Bright Side",
				"description" : "In the summer of 2012 we made some style changes. We have moved away from circular navigation. Also, I took the opportunity to make the website lighter.",
			},
		},{
			"img" : "cg/cg3.jpg",
			
		},{
			"img" : "cg/cg4.jpg",
			"modifier" : "more-margin",
		},{
			"text" : {
				"title" : "Transition",
				"description" : "During the first years of our collaboration the website was implemented in Flash. By the end of 2012 we made the transition to HTML5. Thanks to development agency Tweede Golf this was a very smooth one.",
			},
		},{
			"img" : "cg/cg5.jpg",
		},{
			"img" : "cg/cg6.jpg",
		},{
			"img" : "cg/cg7.jpg",
		},{
			"img" : "cg/cg8.jpg",
		},{
			"img" : "cg/cg9.jpg",
		},{
			"img" : "cg/cg10.jpg",
		},
	],
}

var ar_context = {	
	"page" : "ar",	
	"title" : false,
	"intro" : "Space, silence and impressive nature have been the basis of Askja Reizen for more than twenty years. It is a concept that appeals to more and more people. No wonder, because an active nature holiday is a relief to counterbalance the hustle and bustle of everyday life.",
	"hero" : "ar/hero.jpg",
	"specs" : [
		{
			"title" : "Client",
			"description" : "Askja Reizen",
		},{
			"title" : "Deliverables",
			"description" : "Visual Design <br>UX Design",
		},{
			"title" : "Technologies",
			"description" : "Adobe <br>Marvel app <br>HTML5, CSS3, JS",
		},
	],
	"item" : [
		{
			"text" : {
				"title" : "Plentiful visuals",
				"description" : "TK305 was asked to renew the website from head to toe, in which the richly filled product database of visual material and travel experiences of Askja was an important starting point. An extensive session in which Askja, developing agency Tweede Golf and TK305 have valued the content components has served as the basis of the user experience.",
			},
		},{
			"img" : "ar/ar1.jpg",
		},{
			"img" : "ar/ar2.jpg",
		},{
			"img" : "ar/ar3.svg",
		},{
			"img" : "ar/ar4.svg",
		},{
			"img" : "ar/ar5.jpg",
		},{
			"img" : "ar/ar6.jpg",
		},{
			"img" : "ar/ar7.jpg",
		},{
			"img" : "ar/ar8.jpg",
		},{
			"img" : "ar/ar9.jpg",
		},
	],
};



// put data into html
// ------------------------------------------------------------------

$("#app").append(Handlebars.templates.app(context));
$("#home").append(Handlebars.templates.home(context));
$("#work").append(Handlebars.templates.work(context));
$("#about").append(Handlebars.templates.about(context));

$("#ns").append(Handlebars.templates.case(ns_context));
$("#wn").append(Handlebars.templates.case(wn_context));
$("#cg").append(Handlebars.templates.case(cg_context));
$("#ar").append(Handlebars.templates.case(ar_context));

// add project tiles in foorer of case
$(".hbs-work-cf").append(Handlebars.templates.work(context));