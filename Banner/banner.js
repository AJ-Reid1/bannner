(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [
		{name:"banner_atlas_1", frames: [[0,0,793,798],[0,800,927,559]]}
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



(lib.CachedBmp_4 = function() {
	this.initialize(ss["banner_atlas_1"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_3 = function() {
	this.initialize(ss["banner_atlas_1"]);
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.visit_btn = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Label
	this.text = new cjs.Text("Visit", "35px 'Futura'");
	this.text.lineHeight = 44;
	this.text.lineWidth = 68;
	this.text.parent = this;
	this.text.setTransform(-25.75,-21.55);

	this.timeline.addTween(cjs.Tween.get(this.text).wait(4));

	// Skin
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FF99CC").ss(4,1,1,3,true).p("Am3izINvAAQA8AAAAA8IAADvQAAA8g8AAItvAAQg8AAAAg8IAAjvQAAg8A8AAg");

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFCCFF").s().p("Am3C0Qg8AAAAg8IAAjvQAAg8A8AAINvAAQA8AAAAA8IAADvQAAA8g8AAg");

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#FFBFDD").ss(4,1,1,3,true).p("Am3izINvAAQA8AAAAA8IAADvQAAA8g8AAItvAAQg8AAAAg8IAAjvQAAg8A8AAg");

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFDBFB").s().p("Am3C0Qg8AAAAg8IAAjvQAAg8A8AAINvAAQA8AAAAA8IAADvQAAA8g8AAg");

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#FF66CC").ss(4,1,1,3,true).p("Am3izINvAAQA8AAAAA8IAADvQAAA8g8AAItvAAQg8AAAAg8IAAjvQAAg8A8AAg");

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FF99CC").s().p("Am3C0Qg8AAAAg8IAAjvQAAg8A8AAINvAAQA8AAAAA8IAADvQAAA8g8AAg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_3},{t:this.shape_2}]},1).to({state:[{t:this.shape_5},{t:this.shape_4}]},1).to({state:[{t:this.shape_1},{t:this.shape}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-52,-23.5,104,47.9);


(lib.Symbol21 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.CachedBmp_4();
	this.instance.setTransform(1.4,0,0.2841,0.2841);

	this.instance_1 = new lib.CachedBmp_3();
	this.instance_1.setTransform(0,25.25,0.2841,0.2841);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,263.4,226.7);


(lib.Spreadswf = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.Symbol21("synched",0);
	this.instance.setTransform(182.85,120.7,0.7,0.7);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({scaleX:0.8359,scaleY:0.8347,x:164.95,y:105.45},0).wait(1).to({scaleX:0.9541,scaleY:0.9523,x:149.4,y:92.1},0).wait(1).to({scaleX:1.06,scaleY:1.0577,x:135.45,y:80.2},0).wait(1).to({scaleX:1.1553,scaleY:1.1528,x:122.9,y:69.4},0).wait(1).to({scaleX:1.2412,scaleY:1.2386,x:111.6,y:59.7},0).wait(1).to({scaleX:1.3184,scaleY:1.3156,x:101.45,y:51},0).wait(1).to({scaleX:1.3878,scaleY:1.3853,x:92.35,y:43.1},0).wait(1).to({scaleX:1.4514,scaleY:1.4492,x:83.95,y:35.8},0).wait(1).to({scaleX:1.5105,scaleY:1.5087,x:76.2,y:29.15},0).wait(1).to({scaleX:1.566,scaleY:1.5646,x:68.9,y:22.75},0).wait(1).to({scaleX:1.6185,scaleY:1.6175,x:61.95,y:16.8},0).wait(1).to({scaleX:1.6683,scaleY:1.6676,x:55.4,y:11.15},0).wait(1).to({scaleX:1.7155,scaleY:1.7152,x:49.15,y:5.75},0).wait(1).to({scaleX:1.76,scaleY:1.76,x:43.3,y:0.65},0).wait(1).to({scaleX:1.7089,scaleY:1.7066,x:50,y:6.7},0).wait(1).to({scaleX:1.6547,scaleY:1.6497,x:57.2,y:13.15},0).wait(1).to({scaleX:1.5974,scaleY:1.5896,x:64.75,y:19.95},0).wait(1).to({scaleX:1.5366,scaleY:1.5257,x:72.75,y:27.15},0).wait(1).to({scaleX:1.4713,scaleY:1.4574,x:81.35,y:34.95},0).wait(1).to({scaleX:1.3999,scaleY:1.3833,x:90.75,y:43.3},0).wait(1).to({scaleX:1.3189,scaleY:1.3011,x:101.4,y:52.6},0).wait(1).to({scaleX:1.2233,scaleY:1.2054,x:113.95,y:63.45},0).wait(1).to({scaleX:1.1103,scaleY:1.0926,x:128.85,y:76.2},0).wait(1).to({scaleX:0.9736,scaleY:0.959,x:146.85,y:91.4},0).wait(1).to({scaleX:0.7941,scaleY:0.7941,x:170.45,y:110.05},0).wait(1).to({scaleX:0.8845,scaleY:0.8695,x:158.6,y:101.5},0).wait(1).to({scaleX:0.9574,scaleY:0.9392,x:148.95,y:93.65},0).wait(1).to({scaleX:1.0169,scaleY:1.0031,x:141.1,y:86.4},0).wait(1).to({scaleX:1.0638,scaleY:1.06,x:134.95,y:79.95},0).wait(1).to({scaleX:1.1024,scaleY:1.106,x:129.9,y:74.75},0).wait(1).to({scaleX:1.1359,scaleY:1.1403,x:125.5,y:70.85},0).wait(1).to({scaleX:1.1652,scaleY:1.1652,x:121.6,y:68},0).wait(1).to({scaleX:1.1376,scaleY:1.1376,x:125.25,y:71.15},0).wait(1).to({scaleX:1.1033,scaleY:1.1065,x:129.75,y:74.65},0).wait(1).to({scaleX:1.06,scaleY:1.0709,x:135.45,y:78.7},0).wait(1).to({scaleX:1.0046,scaleY:1.0276,x:142.75,y:83.6},0).wait(1).to({scaleX:0.9398,scaleY:0.9666,x:151.3,y:90.5},0).wait(1).to({scaleX:0.8656,scaleY:0.8656,x:161.05,y:101.95},0).wait(1).to({scaleX:0.9172,scaleY:0.925,x:154.25,y:95.25},0).wait(1).to({scaleX:0.9497,scaleY:0.96,x:150,y:91.25},0).wait(1).to({scaleX:0.9797,scaleY:0.9862,x:146.05,y:88.3},0).wait(1).to({scaleX:1.0239,scaleY:1.02,x:140.25,y:84.45},0).wait(1).to({scaleX:0.9572,scaleY:0.9936,x:149,y:87.45},0).wait(1).to({scaleX:0.9097,scaleY:0.96,x:155.25,y:91.25},0).wait(1).to({scaleX:0.8599,scaleY:0.8732,x:161.8,y:101.1},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(43.3,0.7,463.5,399);


// stage content:
(lib.banner = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = false; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	this.actionFrames = [58];
	// timeline functions:
	this.frame_58 = function() {
		var _this = this;
		/*
		Clicking on the specified symbol instance executes a function.
		*/
		_this.visit.on('click', function(){
		/*
		Loads the URL in a new browser window.
		*/
		window.open('http://www.adobe.com', '_blank');
		});
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(58).call(this.frame_58).wait(1));

	// Button
	this.visit = new lib.visit_btn();
	this.visit.name = "visit";
	this.visit.setTransform(412,29.6);
	this.visit._off = true;
	new cjs.ButtonHelper(this.visit, 0, 1, 2, false, new lib.visit_btn(), 3);

	this.timeline.addTween(cjs.Tween.get(this.visit).wait(58).to({_off:false},0).wait(1));

	// ER_txt
	this.text = new cjs.Text("Spread the Joy!", "41px 'Alisha'");
	this.text.lineHeight = 77;
	this.text.lineWidth = 438;
	this.text.parent = this;
	this.text.setTransform(471,-12.35);
	this.text._off = true;

	this.timeline.addTween(cjs.Tween.get(this.text).wait(30).to({_off:false},0).to({x:86},19).wait(10));

	// Spread
	this.instance = new lib.Spreadswf();
	this.instance.setTransform(530,30,0.3026,0.3026,0,0,0,275.1,200);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(9).to({_off:false},0).to({x:40},20).wait(30));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,911,64.3);
// library properties:
lib.properties = {
	id: '1B66000022E84D478D24476B7EFAF4C3',
	width: 468,
	height: 60,
	fps: 24,
	color: "#66CCFF",
	opacity: 1.00,
	manifest: [
		{src:"images/banner_atlas_1.png", id:"banner_atlas_1"}
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
an.compositions['1B66000022E84D478D24476B7EFAF4C3'] = {
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


})(createjs = createjs||{}, AdobeAn = AdobeAn||{});
var createjs, AdobeAn;