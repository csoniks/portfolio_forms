(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [
		{name:"практика3_atlas_1", frames: [[0,0,800,800],[1289,852,492,652],[0,802,580,695],[802,0,485,1024],[582,1026,600,326],[1289,0,530,850]]},
		{name:"практика3_atlas_2", frames: [[0,1149,1280,720],[1002,0,800,953],[0,0,1000,1147]]},
		{name:"практика3_atlas_3", frames: [[0,0,1600,1200]]}
];


(lib.AnMovieClip = function(){
	this.actionFrames = [];
	this.ignorePause = false;
	this.gotoAndPlay = function(positionOrLabel){
		cjs.MovieClip.prototype.gotoAndPlay.call(this,positionOrLabel);
	}
	this.play = function(){
		cjs.MovieClip.prototype.play.call(this);
	}
	this.gotoAndStop = function(positionOrLabel){
		cjs.MovieClip.prototype.gotoAndStop.call(this,positionOrLabel);
	}
	this.stop = function(){
		cjs.MovieClip.prototype.stop.call(this);
	}
}).prototype = p = new cjs.MovieClip();
// symbols:



(lib.Растровоеизображение1 = function() {
	this.initialize(ss["практика3_atlas_2"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.Растровоеизображение9 = function() {
	this.initialize(ss["практика3_atlas_3"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.блум = function() {
	this.initialize(ss["практика3_atlas_2"]);
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.колесо = function() {
	this.initialize(ss["практика3_atlas_1"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.крылья_лев = function() {
	this.initialize(ss["практика3_atlas_1"]);
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.крылья_прав = function() {
	this.initialize(ss["практика3_atlas_1"]);
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.лейла = function() {
	this.initialize(ss["практика3_atlas_1"]);
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.машина = function() {
	this.initialize(ss["практика3_atlas_1"]);
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.стелла = function() {
	this.initialize(ss["практика3_atlas_1"]);
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.флора = function() {
	this.initialize(ss["практика3_atlas_2"]);
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();
// helper functions:

function mc_symbol_clone() {
	var clone = this._cloneProps(new this.constructor(this.mode, this.startPosition, this.loop, this.reversed));
	clone.gotoAndStop(this.currentFrame);
	clone.paused = this.paused;
	clone.framerate = this.framerate;
	return clone;
}

function getMCSymbolPrototype(symbol, nominalBounds, frameBounds) {
	var prototype = cjs.extend(symbol, cjs.MovieClip);
	prototype.clone = mc_symbol_clone;
	prototype.nominalBounds = nominalBounds;
	prototype.frameBounds = frameBounds;
	return prototype;
	}


(lib.Символ3 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Слой_1
	this.instance = new lib.крылья_прав();
	this.instance.setTransform(0,0,0.1907,0.1907);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Символ3, new cjs.Rectangle(0,0,110.6,132.5), null);


(lib.Символ2 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Слой_1
	this.instance = new lib.колесо();
	this.instance.setTransform(0,0,0.1386,0.1386);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Символ2, new cjs.Rectangle(0,0,110.9,110.9), null);


(lib.Символ1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Слой_1
	this.instance = new lib.крылья_лев();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Символ1, new cjs.Rectangle(0,0,492,652), null);


(lib.wheel = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Слой_1
	this.instance = new lib.Символ2();
	this.instance.setTransform(55.5,55.5,1,1,0,0,0,55.5,55.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({regX:55.4,regY:55.4,rotation:-8.3571,x:55.4,y:55.35},0).wait(1).to({rotation:-16.7143},0).wait(1).to({rotation:-25.0714,x:55.45,y:55.4},0).wait(1).to({rotation:-33.4286,x:55.4,y:55.45},0).wait(1).to({rotation:-41.7857},0).wait(1).to({rotation:-50.1428,y:55.4},0).wait(1).to({rotation:-58.5,y:55.45},0).wait(1).to({rotation:-66.8571,y:55.4},0).wait(1).to({rotation:-75.2143,y:55.5},0).wait(1).to({rotation:-83.5714,y:55.45},0).wait(1).to({rotation:-93.5715},0).wait(1).to({rotation:-103.5715,y:55.5},0).wait(1).to({rotation:-113.5716,x:55.45,y:55.45},0).wait(1).to({rotation:-123.5717,x:55.4,y:55.5},0).wait(1).to({rotation:-133.5717,y:55.45},0).wait(1).to({rotation:-143.5718,x:55.45,y:55.5},0).wait(1).to({rotation:-153.5719},0).wait(1).to({rotation:-163.5719},0).wait(1).to({rotation:-173.572},0).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-22.9,-23,156.8,156.8);


(lib.kr_prav = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Слой_1
	this.instance = new lib.Символ3();
	this.instance.setTransform(0,66.2,1,1,0,0,0,0,66.2);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({regX:55.3,regY:66.3,scaleX:0.9576,x:52.95,y:66.3},0).wait(1).to({scaleX:0.9152,x:50.6},0).wait(1).to({scaleX:0.8729,x:48.25},0).wait(1).to({scaleX:0.8305,x:45.9},0).wait(1).to({scaleX:0.7881,x:43.6},0).wait(1).to({scaleX:0.7457,x:41.25},0).wait(1).to({scaleX:0.7033,x:38.9},0).wait(1).to({scaleX:0.6609,x:36.55},0).wait(1).to({scaleX:0.701,x:38.75},0).wait(1).to({scaleX:0.7411,x:41},0).wait(1).to({scaleX:0.7812,x:43.2},0).wait(1).to({scaleX:0.8213,x:45.4},0).wait(1).to({scaleX:0.8614,x:47.65},0).wait(1).to({scaleX:0.9015,x:49.85},0).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,110.6,132.5);


(lib.kr_lev = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Слой_1
	this.instance = new lib.Символ1();
	this.instance.setTransform(491.95,326,0.7403,0.7403,0,0,0,491.9,326);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({regX:246,scaleX:0.7165,x:315.75,y:325.95},0).wait(1).to({scaleX:0.6926,x:321.65},0).wait(1).to({scaleX:0.6687,x:327.5},0).wait(1).to({scaleX:0.6449,x:333.4},0).wait(1).to({scaleX:0.621,x:339.2},0).wait(1).to({scaleX:0.5971,x:345.1},0).wait(1).to({scaleX:0.5733,x:351},0).wait(1).to({scaleX:0.5986,x:344.75},0).wait(1).to({scaleX:0.6239,x:338.55},0).wait(1).to({scaleX:0.6492,x:332.3},0).wait(1).to({scaleX:0.6745,x:326.1},0).wait(1).to({scaleX:0.6999,x:319.85},0).wait(1).to({scaleX:0.7252,x:313.65},0).wait(1).to({scaleX:0.7505,x:307.35},0).wait(1).to({scaleX:0.7758,x:301.15},0).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(110.4,84.6,381.70000000000005,482.79999999999995);


(lib.all = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// wheel
	this.instance = new lib.wheel();
	this.instance.setTransform(153.85,265.45,1.2507,1.2507,0,0,0,55.5,55.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// wheel
	this.instance_1 = new lib.wheel();
	this.instance_1.setTransform(602.9,306.1,1.2507,1.2507,0,0,0,55.5,55.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// машина_png
	this.instance_2 = new lib.машина();
	this.instance_2.setTransform(36.6,46.2,1.1727,1.1727,5.4926);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

	// флора_png
	this.instance_3 = new lib.флора();
	this.instance_3.setTransform(629.55,22,0.2035,0.2417,0,0,180);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(1));

	// блум_png
	this.instance_4 = new lib.блум();
	this.instance_4.setTransform(533.9,0,0.2974,0.3215,0,0,180);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.all, new cjs.Rectangle(0,0,737,494.1), null);


(lib.stella = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Слой_1
	this.instance = new lib.стелла();
	this.instance.setTransform(135.7,79.6,0.4265,0.4265);

	this.instance_1 = new lib.kr_lev();
	this.instance_1.setTransform(357.05,163.95,0.4578,0.4576,0,0,180,246.1,326);

	this.instance_2 = new lib.kr_lev();
	this.instance_2.setTransform(118.2,156.6,0.4803,0.4803,0,0,0,246.1,326.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.stella, new cjs.Rectangle(61.4,40.7,349.8,401.5), null);


(lib.leyla = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Слой_1
	this.instance = new lib.лейла();
	this.instance.setTransform(43.65,15.65,0.363,0.363);

	this.instance_1 = new lib.kr_prav();
	this.instance_1.setTransform(74.5,86.65,1.3473,1.3072,0,0,180,55.3,66.3);

	this.instance_2 = new lib.kr_prav();
	this.instance_2.setTransform(218.8,89.7,1.2596,1.2596,0,0,0,55.4,66.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.leyla, new cjs.Rectangle(0,0,288.3,387.4), null);


// stage content:
(lib.практика3 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// лейла_2
	this.instance = new lib.leyla();
	this.instance.setTransform(619.2,154.4,0.3056,0.3056,0,0,0,144.1,193.7);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(32).to({_off:false},0).wait(1).to({regX:144.2,scaleX:0.3078,scaleY:0.3078,x:613.7,y:157.9},0).wait(1).to({scaleX:0.3099,scaleY:0.3099,x:608.05,y:161.4},0).wait(1).to({scaleX:0.312,scaleY:0.312,x:602.3,y:164.9},0).wait(1).to({scaleX:0.3141,scaleY:0.3141,x:596.45,y:168.4},0).wait(1).to({scaleX:0.3162,scaleY:0.3162,x:590.6,y:171.9},0).wait(1).to({scaleX:0.3183,scaleY:0.3183,x:584.75,y:175.4},0).wait(1).to({scaleX:0.3204,scaleY:0.3204,x:578.95,y:179},0).wait(1).to({scaleX:0.3225,scaleY:0.3225,x:573.25,y:182.6},0).wait(1).to({scaleX:0.3246,scaleY:0.3246,x:567.65,y:186.35},0).wait(1).to({scaleX:0.3267,scaleY:0.3267,x:562.15,y:190.15},0).wait(1).to({scaleX:0.3288,scaleY:0.3288,x:556.9,y:194.05},0).wait(1).to({scaleX:0.3309,scaleY:0.3309,x:551.85,y:198.05},0).wait(1).to({scaleX:0.333,scaleY:0.333,x:547.05,y:202.2},0).wait(1).to({scaleX:0.3351,scaleY:0.3351,x:542.6,y:206.45},0).wait(1).to({scaleX:0.3372,scaleY:0.3372,x:538.4,y:210.9},0).wait(1).to({scaleX:0.3393,scaleY:0.3393,x:534.6,y:215.6},0).wait(1).to({scaleX:0.3414,scaleY:0.3414,x:531.2,y:220.4},0).wait(1).to({scaleX:0.3436,scaleY:0.3436,x:528.25,y:225.4},0).wait(1).to({scaleX:0.3457,scaleY:0.3457,x:525.75,y:230.65},0).wait(1).to({scaleX:0.3478,scaleY:0.3478,x:523.8,y:236.1},0).wait(1).to({scaleX:0.3499,scaleY:0.3499,x:522.35,y:241.8},0).wait(1).to({scaleX:0.352,scaleY:0.352,x:521.5,y:247.8},0).wait(22));

	// all_idn
	this.instance_1 = new lib.all();
	this.instance_1.setTransform(1457.75,607.2,1,1,-2.741,0,0,368.2,247);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(32).to({_off:false},0).wait(1).to({regX:368.5,scaleX:0.9971,scaleY:0.9971,rotation:-2.4758,x:1434.75,y:606.95},0).wait(1).to({scaleX:0.9943,scaleY:0.9943,rotation:-2.2102,x:1410.95,y:606.8},0).wait(1).to({scaleX:0.9914,scaleY:0.9914,rotation:-1.9446,x:1386.8,y:606.65},0).wait(1).to({scaleX:0.9885,scaleY:0.9885,rotation:-1.6791,x:1362.3,y:606.55},0).wait(1).to({scaleX:0.9857,scaleY:0.9857,rotation:-1.4135,x:1337.4,y:606.5},0).wait(1).to({scaleX:0.9828,scaleY:0.9828,rotation:-1.1479,x:1312.2,y:606.4},0).wait(1).to({scaleX:0.9799,scaleY:0.9799,rotation:-0.8823,x:1286.8,y:606.3},0).wait(1).to({scaleX:0.977,scaleY:0.977,rotation:-0.6168,x:1261.2,y:606.2},0).wait(1).to({scaleX:0.9742,scaleY:0.9742,rotation:-0.3512,x:1235.35,y:606.05},0).wait(1).to({scaleX:0.9713,scaleY:0.9713,rotation:-0.0856,x:1209.4,y:605.9},0).wait(1).to({scaleX:0.9684,scaleY:0.9684,rotation:0.18,x:1183.4,y:605.7},0).wait(1).to({scaleX:0.9655,scaleY:0.9655,rotation:0.4455,x:1157.25,y:605.5},0).wait(1).to({scaleX:0.9627,scaleY:0.9627,rotation:0.7111,x:1131.1,y:605.15},0).wait(1).to({scaleX:0.9598,scaleY:0.9598,rotation:0.9767,x:1104.95,y:604.8},0).wait(1).to({scaleX:0.9569,scaleY:0.9569,rotation:1.2422,x:1078.9,y:604.3},0).wait(1).to({scaleX:0.9541,scaleY:0.9541,rotation:1.5078,x:1052.85,y:603.75},0).wait(1).to({scaleX:0.9512,scaleY:0.9512,rotation:1.7734,x:1026.95,y:603.05},0).wait(1).to({scaleX:0.9483,scaleY:0.9483,rotation:2.039,x:1001.15,y:602.35},0).wait(1).to({scaleX:0.9454,scaleY:0.9454,rotation:2.3045,x:975.65,y:601.4},0).wait(1).to({scaleX:0.9425,scaleY:0.9425,rotation:2.5701,x:950.35,y:600.3},0).wait(1).to({scaleX:0.9397,scaleY:0.9397,rotation:2.8357,x:925.3,y:599.2},0).wait(1).to({scaleX:0.9368,scaleY:0.9368,rotation:3.1013,x:900.6,y:597.85},0).wait(1).to({scaleX:0.9339,scaleY:0.9339,rotation:3.3668,x:876.2,y:596.4},0).wait(1).to({scaleX:0.9311,scaleY:0.9311,rotation:3.6324,x:852.25,y:594.75},0).wait(1).to({scaleX:0.9282,scaleY:0.9282,rotation:3.898,x:828.65,y:592.9},0).wait(1).to({scaleX:0.9253,scaleY:0.9253,rotation:4.1635,x:805.6,y:590.85},0).wait(1).to({scaleX:0.9224,scaleY:0.9224,rotation:4.4291,x:782.95,y:588.65},0).wait(1).to({scaleX:0.9196,scaleY:0.9196,rotation:4.6947,x:760.85,y:586.2},0).wait(1).to({scaleX:0.9167,scaleY:0.9167,rotation:4.9603,x:739.35,y:583.5},0).wait(1).to({scaleX:0.9138,scaleY:0.9138,rotation:5.2258,x:718.5,y:580.6},0).wait(1).to({scaleX:0.911,scaleY:0.911,rotation:5.4914,x:698.25,y:577.45},0).wait(1).to({scaleX:0.9081,scaleY:0.9081,rotation:5.757,x:678.7,y:574.1},0).wait(1).to({scaleX:0.9052,scaleY:0.9052,rotation:6.0226,x:659.9,y:570.5},0).wait(1).to({scaleX:0.9023,scaleY:0.9023,rotation:6.2881,x:641.8,y:566.55},0).wait(1).to({scaleX:0.8995,scaleY:0.8995,rotation:6.5537,x:624.55,y:562.35},0).wait(1).to({scaleX:0.8966,scaleY:0.8966,rotation:6.8193,x:608.1,y:557.9},0).wait(1).to({scaleX:0.8937,scaleY:0.8937,rotation:7.0848,x:592.55,y:553.05},0).wait(1).to({scaleX:0.8909,scaleY:0.8909,rotation:7.3504,x:577.95,y:548},0).wait(1).to({scaleX:0.888,scaleY:0.888,rotation:7.616,x:564.3,y:542.55},0).wait(1).to({scaleX:0.8851,scaleY:0.8851,rotation:7.8816,x:551.5,y:536.8},0).wait(1).to({scaleX:0.8822,scaleY:0.8822,rotation:8.1471,x:539.85,y:530.7},0).wait(1).to({scaleX:0.8794,scaleY:0.8794,rotation:8.4127,x:529.3,y:524.25},0).wait(1).to({scaleX:0.8765,scaleY:0.8765,rotation:8.6783,x:519.85,y:517.45},0).wait(1));

	// стелла_2
	this.instance_2 = new lib.stella();
	this.instance_2.setTransform(1169,40.7,0.1847,0.1847,0,0,0,234.5,220.2);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(32).to({_off:false},0).wait(1).to({regX:236.1,regY:241.4,x:1164,y:46.95},0).wait(1).to({x:1158.75,y:49.35},0).wait(1).to({x:1153.55,y:51.8},0).wait(1).to({x:1148.45,y:54.25},0).wait(1).to({x:1143.35,y:56.8},0).wait(1).to({x:1138.35,y:59.35},0).wait(1).to({x:1133.4,y:62},0).wait(1).to({x:1128.5,y:64.65},0).wait(1).to({x:1123.65,y:67.35},0).wait(1).to({x:1118.85,y:70.15},0).wait(1).to({x:1114.1,y:72.95},0).wait(1).to({x:1109.4,y:75.8},0).wait(1).to({x:1104.8,y:78.7},0).wait(1).to({x:1100.25,y:81.65},0).wait(1).to({x:1095.7,y:84.65},0).wait(1).to({x:1091.25,y:87.7},0).wait(1).to({x:1086.85,y:90.8},0).wait(1).to({x:1082.5,y:93.95},0).wait(1).to({x:1078.2,y:97.1},0).wait(1).to({x:1073.95,y:100.35},0).wait(1).to({x:1069.75,y:103.65},0).wait(1).to({x:1065.65,y:106.95},0).wait(1).to({x:1061.55,y:110.35},0).wait(1).to({x:1057.55,y:113.75},0).wait(1).to({x:1053.6,y:117.2},0).wait(1).to({x:1049.65,y:120.75},0).wait(1).to({x:1045.8,y:124.3},0).wait(1).to({x:1042,y:127.9},0).wait(1).to({x:1038.25,y:131.55},0).wait(1).to({x:1034.55,y:135.3},0).wait(1).to({x:1030.95,y:139.05},0).wait(1).to({x:1027.35,y:142.85},0).wait(1).to({x:1023.85,y:146.7},0).wait(1).to({x:1020.35,y:150.6},0).wait(1).to({x:1016.95,y:154.5},0).wait(1).to({x:1013.55,y:158.5},0).wait(1).to({x:1010.25,y:162.55},0).wait(1).to({x:1007,y:166.65},0).wait(1).to({x:1003.8,y:170.75},0).wait(1).to({x:1000.65,y:174.95},0).wait(1).to({x:997.6,y:179.15},0).wait(1).to({x:994.55,y:183.45},0).wait(1).to({x:991.55,y:187.75},0).wait(1));

	// фон_2
	this.instance_3 = new lib.Растровоеизображение9();
	this.instance_3.setTransform(0,-83,0.805,0.6689);
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(32).to({_off:false},0).wait(44));

	// стелла_png
	this.instance_4 = new lib.stella();
	this.instance_4.setTransform(923,432.3,1,1,0,0,0,234.8,221.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(1).to({regX:236.1,regY:241.4,scaleX:0.9938,scaleY:0.9938,x:918.65,y:443.7},0).wait(1).to({scaleX:0.9876,scaleY:0.9876,x:912.9,y:434.85},0).wait(1).to({scaleX:0.9814,scaleY:0.9814,x:907.25,y:426.05},0).wait(1).to({scaleX:0.9752,scaleY:0.9752,x:901.5,y:417.2},0).wait(1).to({scaleX:0.969,scaleY:0.969,x:895.75,y:408.45},0).wait(1).to({scaleX:0.9628,scaleY:0.9628,x:889.85,y:399.7},0).wait(1).to({scaleX:0.9567,scaleY:0.9567,x:884,y:390.95},0).wait(1).to({scaleX:0.9505,scaleY:0.9505,x:878,y:382.2},0).wait(1).to({scaleX:0.9443,scaleY:0.9443,x:872,y:373.5},0).wait(1).to({scaleX:0.9381,scaleY:0.9381,x:865.85,y:364.8},0).wait(1).to({scaleX:0.9319,scaleY:0.9319,x:859.6,y:356.1},0).wait(1).to({scaleX:0.9257,scaleY:0.9257,x:853.25,y:347.45},0).wait(1).to({scaleX:0.9195,scaleY:0.9195,x:846.8,y:338.8},0).wait(1).to({scaleX:0.9133,scaleY:0.9133,x:840.2,y:330.15},0).wait(1).to({scaleX:0.9071,scaleY:0.9071,x:833.45,y:321.55},0).wait(1).to({scaleX:0.9009,scaleY:0.9009,x:826.6,y:312.95},0).wait(1).to({scaleX:0.8947,scaleY:0.8947,x:819.6,y:304.4},0).wait(1).to({scaleX:0.8885,scaleY:0.8885,x:812.4,y:295.8},0).wait(1).to({scaleX:0.8823,scaleY:0.8823,x:805.05,y:287.25},0).wait(1).to({scaleX:0.8761,scaleY:0.8761,x:797.5,y:278.7},0).wait(1).to({scaleX:0.87,scaleY:0.87,x:789.8,y:270.2},0).wait(1).to({scaleX:0.8638,scaleY:0.8638,x:781.9,y:261.7},0).wait(1).to({scaleX:0.8576,scaleY:0.8576,x:773.7,y:253.2},0).wait(1).to({scaleX:0.8514,scaleY:0.8514,x:765.4,y:244.7},0).wait(1).to({scaleX:0.8452,scaleY:0.8452,x:756.85,y:236.3},0).wait(1).to({scaleX:0.839,scaleY:0.839,x:748.05,y:227.85},0).wait(1).to({scaleX:0.8328,scaleY:0.8328,x:738.95,y:219.45},0).wait(1).to({scaleX:0.8266,scaleY:0.8266,x:729.65,y:211.05},0).wait(1).to({scaleX:0.8204,scaleY:0.8204,x:720.1,y:202.65},0).wait(1).to({scaleX:0.8142,scaleY:0.8142,x:710.25,y:194.3},0).wait(1).to({scaleX:0.808,scaleY:0.808,x:700.1,y:185.9},0).to({_off:true},1).wait(44));

	// фон_1
	this.instance_5 = new lib.Растровоеизображение1();

	this.timeline.addTween(cjs.Tween.get(this.instance_5).to({_off:true},32).wait(44));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(640,277,1198,594.7);
// library properties:
lib.properties = {
	id: '6ACE2D75BFECE045BF9DE00255BF749D',
	width: 1280,
	height: 720,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/практика3_atlas_1.png", id:"практика3_atlas_1"},
		{src:"images/практика3_atlas_2.png", id:"практика3_atlas_2"},
		{src:"images/практика3_atlas_3.png", id:"практика3_atlas_3"}
	],
	preloads: []
};



// bootstrap callback support:

(lib.Stage = function(canvas) {
	createjs.Stage.call(this, canvas);
}).prototype = p = new createjs.Stage();

p.setAutoPlay = function(autoPlay) {
	this.tickEnabled = autoPlay;
}
p.play = function() { this.tickEnabled = true; this.getChildAt(0).gotoAndPlay(this.getTimelinePosition()) }
p.stop = function(ms) { if(ms) this.seek(ms); this.tickEnabled = false; }
p.seek = function(ms) { this.tickEnabled = true; this.getChildAt(0).gotoAndStop(lib.properties.fps * ms / 1000); }
p.getDuration = function() { return this.getChildAt(0).totalFrames / lib.properties.fps * 1000; }

p.getTimelinePosition = function() { return this.getChildAt(0).currentFrame / lib.properties.fps * 1000; }

an.bootcompsLoaded = an.bootcompsLoaded || [];
if(!an.bootstrapListeners) {
	an.bootstrapListeners=[];
}

an.bootstrapCallback=function(fnCallback) {
	an.bootstrapListeners.push(fnCallback);
	if(an.bootcompsLoaded.length > 0) {
		for(var i=0; i<an.bootcompsLoaded.length; ++i) {
			fnCallback(an.bootcompsLoaded[i]);
		}
	}
};

an.compositions = an.compositions || {};
an.compositions['6ACE2D75BFECE045BF9DE00255BF749D'] = {
	getStage: function() { return exportRoot.stage; },
	getLibrary: function() { return lib; },
	getSpriteSheet: function() { return ss; },
	getImages: function() { return img; }
};

an.compositionLoaded = function(id) {
	an.bootcompsLoaded.push(id);
	for(var j=0; j<an.bootstrapListeners.length; j++) {
		an.bootstrapListeners[j](id);
	}
}

an.getComposition = function(id) {
	return an.compositions[id];
}


an.makeResponsive = function(isResp, respDim, isScale, scaleType, domContainers) {		
	var lastW, lastH, lastS=1;		
	window.addEventListener('resize', resizeCanvas);		
	resizeCanvas();		
	function resizeCanvas() {			
		var w = lib.properties.width, h = lib.properties.height;			
		var iw = window.innerWidth, ih=window.innerHeight;			
		var pRatio = window.devicePixelRatio || 1, xRatio=iw/w, yRatio=ih/h, sRatio=1;			
		if(isResp) {                
			if((respDim=='width'&&lastW==iw) || (respDim=='height'&&lastH==ih)) {                    
				sRatio = lastS;                
			}				
			else if(!isScale) {					
				if(iw<w || ih<h)						
					sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==1) {					
				sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==2) {					
				sRatio = Math.max(xRatio, yRatio);				
			}			
		}
		domContainers[0].width = w * pRatio * sRatio;			
		domContainers[0].height = h * pRatio * sRatio;
		domContainers.forEach(function(container) {				
			container.style.width = w * sRatio + 'px';				
			container.style.height = h * sRatio + 'px';			
		});
		stage.scaleX = pRatio*sRatio;			
		stage.scaleY = pRatio*sRatio;
		lastW = iw; lastH = ih; lastS = sRatio;            
		stage.tickOnUpdate = false;            
		stage.update();            
		stage.tickOnUpdate = true;		
	}
}
an.handleSoundStreamOnTick = function(event) {
	if(!event.paused){
		var stageChild = stage.getChildAt(0);
		if(!stageChild.paused || stageChild.ignorePause){
			stageChild.syncStreamSounds();
		}
	}
}
an.handleFilterCache = function(event) {
	if(!event.paused){
		var target = event.target;
		if(target){
			if(target.filterCacheList){
				for(var index = 0; index < target.filterCacheList.length ; index++){
					var cacheInst = target.filterCacheList[index];
					if((cacheInst.startFrame <= target.currentFrame) && (target.currentFrame <= cacheInst.endFrame)){
						cacheInst.instance.cache(cacheInst.x, cacheInst.y, cacheInst.w, cacheInst.h);
					}
				}
			}
		}
	}
}


})(createjs = createjs||{}, AdobeAn = AdobeAn||{});
var createjs, AdobeAn;