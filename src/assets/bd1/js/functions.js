function bd1Main(){

    clearProcess();

	function Garden(ctx, element) {
		this.blooms = [];
		this.element = element;
		this.ctx = ctx;
	}
	Garden.prototype = {
		render: function () {
			for (var i = 0; i < this.blooms.length; i++) {
				this.blooms[i].draw();
			}
		},
		addBloom: function (b) {
			this.blooms.push(b);
		},
		removeBloom: function (b) {
			var bloom;
			for (var i = 0; i < this.blooms.length; i++) {
				bloom = this.blooms[i];
				if (bloom === b) {
					this.blooms.splice(i, 1);
					return this;
				}
			}
		},
		createRandomBloom: function (x, y) {
			this.createBloom(x, y, Garden.randomInt(Garden.options.bloomRadius.min, Garden.options.bloomRadius.max), Garden.randomrgba(Garden.options.color.rmin, Garden.options.color.rmax, Garden.options.color.gmin, Garden.options.color.gmax, Garden.options.color.bmin, Garden.options.color.bmax, Garden.options.color.opacity), Garden.randomInt(Garden.options.petalCount.min, Garden.options.petalCount.max));
		},
		createBloom: function (x, y, r, c, pc) {
			new Bloom(new Vector(x, y), r, c, pc, this);
		},
		clear: function () {
			this.blooms = [];
			this.ctx.clearRect(0, 0, this.element.width, this.element.height);
		}
	}

	Garden.options = {
		petalCount: {
			min: 8,
			max: 15
		},
		petalStretch: {
			min: 0.1,
			max: 3
		},
		growFactor: {
			min: 0.1,
			max: 1
		},
		bloomRadius: {
			min: 4,
			max: 7
		},
		density: 10,
		growSpeed: 1500 / 60,
		color: {
			rmin: 128,
			rmax: 255,
			gmin: 0,
			gmax: 128,
			bmin: 0,
			bmax: 128,
			opacity: 0.1
		},
		tanAngle: 60
	};
	Garden.random = function (min, max) {
		return Math.random() * (max - min) + min;
	};
	Garden.randomInt = function (min, max) {
		return Math.floor(Math.random() * (max - min + 1)) + min;
	};
	Garden.circle = 2 * Math.PI;
	Garden.degrad = function (angle) {
		return Garden.circle / 360 * angle;
	};
	Garden.raddeg = function (angle) {
		return angle / Garden.circle * 360;
	};
	Garden.rgba = function (r, g, b, a) {
		return 'rgba(' + r + ',' + g + ',' + b + ',' + a + ')';
	};
	Garden.randomrgba = function (rmin, rmax, gmin, gmax, bmin, bmax, a) {
		var r = Math.round(Garden.random(rmin, rmax));
		var g = Math.round(Garden.random(gmin, gmax));
		var b = Math.round(Garden.random(bmin, bmax));
		var limit = 5;
		if (Math.abs(r - g) <= limit && Math.abs(g - b) <= limit && Math.abs(b - r) <= limit) {
			return Garden.rgba(rmin, rmax, gmin, gmax, bmin, bmax, a);
		} else {
			return Garden.rgba(r, g, b, a);
		}
	};



	// variables
	var $window = $(window), gardenCtx, gardenCanvas, $garden, garden;
	var clientWidth = $(window).width();
	var clientHeight = $(window).height();

	$(function () {
	    // setup garden
		$loveHeart = $("#loveHeart");
		var offsetX = $loveHeart.width() / 2;
		var offsetY = $loveHeart.height() / 2 - 50;
	    $garden = $("#garden");
	    gardenCanvas = $garden[0];
		gardenCanvas.width = $("#loveHeart").width();
	    gardenCanvas.height = $("#loveHeart").height()
	    gardenCtx = gardenCanvas.getContext("2d");
	    gardenCtx.globalCompositeOperation = "lighter";
	    garden = new Garden(gardenCtx, gardenCanvas);

		$("#content").css("width", $loveHeart.width() + $("#code").width());
		$("#content").css("height", Math.max($loveHeart.height(), $("#code").height()));
		$("#content").css("margin-top", Math.max(($window.height() - $("#content").height()) / 2, 10));
		$("#content").css("margin-left", Math.max(($window.width() - $("#content").width()) / 2, 10));

	    // renderLoop
	    setInterval(function () {
	        garden.render();
	    }, Garden.options.growSpeed);
	});

	$(window).resize(function() {
	    var newWidth = $(window).width();
	    var newHeight = $(window).height();
	    if (newWidth != clientWidth && newHeight != clientHeight) {
	        location.replace(location);
	    }
	});

	function getHeartPoint(angle) {

		var xs = [-223, -221, -216, -214, -211, -207, -198, -191, -184, -177, -165, -159, -154, -145, -138, -131, -119, -108, -94, -85, -78, -69, -62, -55, -48, -39, -32, -25, -18, -7, 0, 12, 18, 28, 32, 39, 46, 53, 60, 67, 71, 78, 85, 92, 97, 104, 113, 120, 124, 134, 138, 145, 152, 159, 166, 173, 177, 184, 191, 196, 200, 207, 209, 214, 214, 216, -218, -223, -228, -234, -239, -244, -248, -251, -255, -257, -260, -262, -262, -260, -255, -251, -248, -239, -234, -232, -225, -218, -211, -205, -200, -193, -188, -182, -172, -165, -159, -152, -145, -140, -133, -126, -119, -110, -103, -97, -87, -80, -74, -67, -62, -55, -46, -39, -32, -23, -14, -7, 0, 7, 14, 18, 28, 37, 44, 51, 58, 65, 71, 78, 85, 92, 99, 106, 113, 120, 127, 134, 138, 143, 150, 157, 163, 170, 177, 184, 191, 198, 205, 209, 219, 223, 230, 235, 239, 246, 251, 251, 258, 260, 260, 262, 260, 255, 248, 242, 237, 230, 225, 219, -216, -223, -228, -228, -230, -232, -232, -228, -223, -218, -216, -209, -207, -202, -198, -195, -188, -182, -172, -165, -159, -149, -142, -136, -131, -126, -119, -113, -106, -99, -94, -90, -83, -78, -71, -67, -60, -53, -44, -37, -25, -16, -9, -5, 2, 9, 16, 25, 32, 37, 44, 48, 55, 65, 69, 76, 83, 90, 99, 106, 115, 122, 127, 134, 140, 145, 150, 157, 161, 166, 168, 175, 182, 186, 193, 198, 205, 209, 214, 219, 221, 225, 225, 225, 225, 221, 216, 212, -209, -202, -200, -195, -191, -188, -186, -179, -172, -165, -159, -152, -145, -138, -133, -129, -124, -117, -110, -103, -97, -90, -83, -78, -71, -64, -57, -50, -44, -37, -30, -25, -18, -9, -2, 5, 14, 21, 28, 37, 41, 51, 58, 67, 71, 78, 85, 94, 101, 111, 117, 124, 131, 136, 140, 145, 154, 159, 163, 168, 175, 182, 186, 196, 200, 209, 209, -216, -216, -216, -216, -216, -216, -216, -216, -216, -216, -214, -214, -214, -214, -211, -211, 212, 212, 212, 212, 214, 214, 214, 214, 214, 214, 214, 214, 214, 214, 214, 214, -218, -223, -225, -230, -232, -232, -230, -228, -223, -218, -214, -207, -205, -200, -193, -186, -182, -177, -170, -165, -161, -154, -147, -142, -136, -129, -119, -113, -103, -97, -90, -83, -76, -69, -62, -57, -50, -44, -37, -30, -23, -16, -9, -2, 5, 12, 18, 25, 30, 39, 46, 55, 62, 69, 76, 83, 92, 99, 106, 115, 122, 127, 129, 136, 145, 152, 159, 166, 175, 179, 184, 191, 191, 193, 198, 202, 209, 214, 221, 225, 230, 230, 228, 221, 219, -218, -216, -209, -200, -191, -184, -177, -170, -165, -159, -154, -147, -140, -136, -129, -119, -113, -103, -97, -90, -83, -74, -67, -60, -57, -50, -41, -34, -30, -23, -16, -7, 0, 7, 14, 21, 25, 32, 37, 44, 51, 58, 65, 71, 81, 88, 94, 101, 106, 113, 117, 122, 127, 131, 138, 147, 154, 163, 170, 179, 182, 184, 193, 200, 205, 209, -214, -214, -216, -216, -216, -216, -216, -216, -216, -216, -214, -214, -214, -214, -214, -214, -214, -214, -214, 212, 212, 212, 214, 214, 214, 214, 214, 214, 214, 214, 214, 214, 214, 214, 214, 214, 214, 214, -124, -129, -133, -138, -145, -154, -161, -170, -177, -184, -188, -193, -195, -198, -202, -205, -209, -216, -221, -225, -225, -225, -223, -218, -216, -205, -200, -191, -184, -177, -170, -165, -159, -154, -145, -138, -131, -124, -117, -110, -103, -97, -90, -83, -76, -69, -60, -53, -46, -39, -34, -27, -21, -11, -2, 5, 12, 18, 23, 30, 35, 44, 51, 60, 67, 74, 81, 88, 94, 104, 111, 120, 124, 131, 136, 140, 145, 152, 159, 168, 175, 179, 186, 191, 196, 198, 200, 205, 212, 219, 221, 223, 223, 219, 212, 205, 198, 193, 186, 173, 166, 161, 157, 152, 147, 138, 129, 117, 69, 62, 55, 48, 37, 32, 25, -27, -32, -39, -46, -53, -62, -69, -122, -126, -133, -138, -145, -152, -159, -165, -172, -177, -179, -184, -186, -188, -195, -200, -202, -205, -202, -198, -188, -182, -172, -163, -159, -149, -142, -133, -124, -115, -106, -94, -85, -78, -69, -62, -53, -44, -34, -25, -16, -9, -2, 7, 14, 21, 28, 35, 41, 51, 58, 65, 81, 88, 94, 104, 113, 117, 124, 129, 134, 140, 152, 159, 168, 173, 177, 182, 184, 189, 196, 200, 202, 200, 196, 191, 184, 179, 173, 166, 159, 152, 147, 140, 134, 129, 122, 115, 69, 62, 55, 46, 41, 35, 28, -25, -30, -37, -44, -48, -55, -62, -71, -129, -122, -115, -108, -106, -101, -99, -94, -87, -80, -74, -67, -117, -117, -117, -117, -117, -117, -117, -117, -117, -117, -117, -117, -117, -117, -119, -119, -76, -76, -78, -78, -78, -78, -78, -78, -78, -78, -78, -78, -78, -78, -78, -78, -115, -110, -103, -97, -92, -85, -117, -115, -108, -101, -97, -90, -83, -99, -99, -99, -106, -108, -110, -110, -108, -103, -103, -99, -97, -94, -92, -92, -94, -21, -21, -23, -23, -23, -23, -23, -23, -23, -21, -21, -21, -21, -21, -21, -21, -21, -30, -23, -16, -7, 0, 5, 9, 16, 23, 30, 21, 18, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 18, 18, -16, -11, -7, 2, 7, 12, 18, 14, 9, 2, -5, -14, -18, -21, 0, 0, -7, -11, -11, -9, -5, 0, 2, 5, 9, 9, 9, 9, 67, 74, 81, 88, 94, 99, 99, 104, 113, 120, 127, 74, 74, 74, 74, 74, 74, 74, 74, 74, 74, 71, 71, 74, 74, 74, 74, 108, 108, 108, 108, 108, 108, 108, 108, 108, 108, 108, 108, 108, 108, 106, 99, 92, 85, 81, 74, 78, 85, 92, 97, 101, 104, 92, 92, 90, 85, 85, 85, 88, 90, 97, 99, 101, 101, 101, 101, 97];
		var ys = [289, 296, 301, 303, 310, 312, 315, 317, 317, 319, 319, 319, 324, 324, 326, 328, 331, 331, 333, 333, 335, 335, 335, 335, 335, 335, 335, 335, 338, 338, 338, 338, 338, 338, 338, 338, 338, 338, 338, 338, 335, 335, 335, 333, 333, 333, 331, 328, 326, 326, 326, 324, 324, 324, 321, 321, 321, 319, 319, 317, 315, 315, 310, 303, 298, 292, 211, 213, 216, 218, 220, 223, 225, 229, 232, 236, 243, 248, 255, 262, 266, 271, 273, 275, 280, 285, 289, 289, 292, 294, 294, 296, 298, 301, 305, 305, 308, 308, 308, 310, 310, 310, 312, 312, 312, 315, 315, 317, 319, 319, 321, 321, 321, 321, 321, 321, 321, 321, 321, 321, 321, 319, 321, 321, 321, 321, 321, 319, 317, 317, 317, 317, 315, 315, 315, 315, 315, 312, 312, 308, 308, 308, 305, 303, 303, 301, 301, 298, 296, 294, 292, 289, 287, 285, 282, 278, 275, 269, 266, 259, 255, 248, 243, 236, 229, 225, 223, 220, 218, 216, 213, 213, 218, 223, 227, 234, 241, 246, 248, 252, 257, 259, 264, 271, 273, 278, 282, 285, 285, 285, 285, 285, 287, 289, 292, 294, 296, 296, 298, 298, 301, 303, 301, 301, 298, 296, 296, 296, 296, 298, 303, 303, 305, 305, 305, 308, 308, 308, 305, 303, 301, 298, 298, 296, 294, 294, 294, 294, 294, 294, 294, 294, 292, 289, 289, 289, 285, 282, 280, 275, 271, 271, 269, 269, 269, 264, 264, 262, 257, 255, 248, 246, 239, 232, 225, 220, 216, 211, 232, 234, 236, 243, 246, 250, 255, 262, 262, 262, 262, 262, 262, 262, 266, 269, 273, 275, 275, 278, 278, 278, 278, 275, 275, 275, 275, 275, 275, 278, 278, 280, 282, 285, 287, 287, 287, 287, 287, 285, 282, 282, 278, 275, 273, 273, 273, 273, 273, 273, 273, 273, 273, 271, 269, 264, 262, 259, 255, 252, 250, 250, 248, 248, 246, 241, 234, 126, 133, 140, 144, 151, 158, 165, 172, 179, 186, 193, 200, 204, 213, 220, 227, 119, 128, 138, 142, 149, 156, 163, 170, 177, 184, 190, 197, 207, 213, 220, 227, 73, 75, 80, 82, 89, 96, 103, 108, 110, 115, 117, 121, 124, 126, 128, 128, 131, 135, 138, 140, 144, 147, 149, 151, 154, 154, 154, 154, 154, 154, 154, 154, 154, 156, 158, 161, 161, 165, 167, 167, 170, 170, 170, 170, 170, 170, 167, 165, 163, 161, 161, 158, 158, 158, 158, 158, 158, 158, 158, 158, 156, 154, 149, 147, 147, 147, 147, 147, 147, 144, 140, 135, 131, 124, 121, 119, 115, 112, 110, 108, 103, 96, 91, 87, 82, 91, 98, 101, 103, 103, 103, 105, 108, 110, 115, 119, 126, 131, 133, 133, 133, 133, 133, 133, 133, 133, 133, 133, 135, 138, 140, 142, 142, 142, 144, 147, 147, 147, 147, 147, 144, 144, 142, 142, 140, 140, 140, 140, 140, 140, 140, 140, 138, 135, 133, 133, 128, 126, 124, 124, 124, 124, 124, 121, 119, 115, 112, 110, 108, 105, 103, -37, -28, -24, -14, -7, -0, 6, 13, 20, 27, 32, 39, 45, 55, 62, 68, 75, 82, 89, -44, -35, -28, -21, -12, -5, 2, 9, 18, 25, 32, 39, 45, 52, 59, 66, 75, 82, 91, -113, -111, -106, -104, -102, -102, -104, -104, -104, -104, -99, -97, -92, -88, -83, -79, -76, -74, -72, -65, -60, -53, -47, -42, -37, -37, -37, -35, -30, -26, -21, -19, -14, -12, -10, -10, -10, -10, -7, -7, -7, -7, -7, -7, -5, -5, -5, -0, -0, 2, 4, 4, 6, 6, 6, 6, 6, 6, 4, 2, -0, -0, -0, -0, -0, -3, -3, -3, -3, -3, -3, -3, -3, -5, -10, -12, -17, -19, -19, -19, -19, -21, -24, -26, -30, -35, -40, -47, -49, -51, -56, -63, -72, -76, -83, -86, -88, -90, -90, -90, -92, -97, -102, -106, -109, -111, -111, -113, -115, -115, -118, -120, -122, -125, -125, -122, -120, -118, -118, -118, -118, -115, -102, -99, -97, -95, -95, -92, -92, -92, -92, -90, -86, -81, -76, -69, -67, -65, -63, -56, -51, -51, -51, -51, -51, -44, -40, -33, -30, -28, -28, -28, -28, -28, -26, -26, -26, -24, -21, -17, -17, -17, -17, -17, -14, -14, -14, -17, -19, -19, -21, -21, -21, -21, -21, -21, -21, -21, -24, -26, -28, -33, -35, -35, -35, -35, -37, -40, -42, -44, -51, -53, -56, -58, -63, -69, -69, -74, -74, -76, -79, -81, -81, -86, -90, -95, -99, -102, -102, -102, -102, -102, -104, -106, -106, -109, -111, -113, -111, -111, -109, -106, -106, -106, -106, -74, -76, -76, -76, -72, -67, -69, -72, -74, -74, -74, -74, -81, -88, -95, -102, -109, -115, -122, -129, -136, -143, -150, -157, -164, -171, -178, -184, -81, -88, -92, -99, -106, -115, -125, -132, -138, -145, -152, -161, -168, -175, -180, -187, -187, -182, -182, -182, -184, -187, -189, -194, -194, -194, -196, -194, -189, -191, -198, -207, -201, -205, -212, -219, -224, -230, -235, -233, -228, -224, -219, -210, -205, -189, -182, -175, -168, -161, -152, -148, -141, -134, -127, -120, -113, -106, -99, -90, -83, -76, -72, -72, -72, -72, -69, -72, -74, -74, -74, -74, -83, -90, -95, -104, -111, -118, -125, -132, -138, -148, -152, -159, -168, -175, -182, -187, -184, -182, -182, -182, -182, -184, -187, -191, -194, -194, -194, -194, -191, -191, -201, -210, -207, -214, -221, -228, -233, -240, -237, -233, -228, -221, -214, -207, -79, -76, -76, -74, -72, -67, -74, -74, -76, -76, -76, -79, -88, -95, -104, -113, -120, -129, -136, -143, -150, -155, -161, -168, -175, -182, -189, -86, -92, -99, -109, -115, -122, -132, -141, -148, -155, -161, -168, -175, -182, -184, -184, -182, -184, -184, -189, -194, -194, -194, -191, -189, -182, -201, -205, -203, -207, -214, -221, -230, -235, -235, -230, -226, -219, -212, -205, -203];
		return new Array(offsetX + xs[angle], offsetY + ys[angle]);
	}

	function startHeartAnimation() {
		var interval = 19;
		var angle = 0;
		var heart = new Array();
		var animationTimer = setInterval(function () {
			var bloom = getHeartPoint(angle);
			var draw = true;
			for (var i = 0; i < heart.length; i++) {
				var p = heart[i];
				var distance = Math.sqrt(Math.pow(p[0] - bloom[0], 2) + Math.pow(p[1] - bloom[1], 2));
				if (distance < Garden.options.bloomRadius.max * 1.3) {
					draw = false;
					break;
				}
			}
			if (draw) {
				heart.push(bloom);
				garden.createRandomBloom(bloom[0], bloom[1]);
			}

			if (angle >= 982) {
				clearInterval(animationTimer);
				showMessages();
			} else {
				angle ++;
			}
		}, interval);
	}

	(function($) {
		$.fn.typewriter = function() {
			this.each(function() {
				var $ele = $(this), str = $ele.html(), progress = 0;
				$ele.html('');
				var timer = setInterval(function() {
					var current = str.substr(progress, 1);
					if (current == '<') {
						progress = str.indexOf('>', progress) + 1;
					} else {
						progress++;
					}
					$ele.html(str.substring(0, progress) + (progress & 1 ? '_' : ''));
					if (progress >= str.length) {
						clearInterval(timer);
					}
				}, 60);
			});
			return this;
		};
	})(jQuery);

	function timeElapse(date){
		var current = Date();
		var seconds = (Date.parse(current) - Date.parse(date)) / 1000;
		var days = Math.floor(seconds / (3600 * 24));
		seconds = seconds % (3600 * 24);
		var hours = Math.floor(seconds / 3600);
		if (hours < 10) {
			hours = "0" + hours;
		}
		seconds = seconds % 3600;
		var minutes = Math.floor(seconds / 60);
		if (minutes < 10) {
			minutes = "0" + minutes;
		}
		seconds = seconds % 60;
		if (seconds < 10) {
			seconds = "0" + seconds;
		}
		var result = " ";
		$("#elapseClock").html(result);
	}

	function showMessages() {
		adjustWordsPosition();
		$('#messages').fadeIn(5000, function() {
			showLoveU();
		});
	}

	function adjustWordsPosition() {
		$('#words').css("position", "absolute");
		$('#words').css("top", $("#garden").position().top + 195);
		$('#words').css("left", $("#garden").position().left + 70);
	}



	function adjustCodePosition() {
		$('#code').css("margin-top", ($("#garden").height() - $("#code").height()) / 2);
	}

	function showLoveU() {
		$('#loveu').fadeIn(3000);
	}


	function Vector(x, y) {
		this.x = x;
		this.y = y;
	};

	Vector.prototype = {
		rotate: function (theta) {
			var x = this.x;
			var y = this.y;
			this.x = Math.cos(theta) * x - Math.sin(theta) * y;
			this.y = Math.sin(theta) * x + Math.cos(theta) * y;
			return this;
		},
		mult: function (f) {
			this.x *= f;
			this.y *= f;
			return this;
		},
		clone: function () {
			return new Vector(this.x, this.y);
		},
		length: function () {
			return Math.sqrt(this.x * this.x + this.y * this.y);
		},
		subtract: function (v) {
			this.x -= v.x;
			this.y -= v.y;
			return this;
		},
		set: function (x, y) {
			this.x = x;
			this.y = y;
			return this;
		}
	};

	function Petal(stretchA, stretchB, startAngle, angle, growFactor, bloom) {
		this.stretchA = stretchA;
		this.stretchB = stretchB;
		this.startAngle = startAngle;
		this.angle = angle;
		this.bloom = bloom;
		this.growFactor = growFactor;
		this.r = 1;
		this.isfinished = false;
		//this.tanAngleA = Garden.random(-Garden.degrad(Garden.options.tanAngle), Garden.degrad(Garden.options.tanAngle));
		//this.tanAngleB = Garden.random(-Garden.degrad(Garden.options.tanAngle), Garden.degrad(Garden.options.tanAngle));
	}
	Petal.prototype = {
		draw: function () {
			var ctx = this.bloom.garden.ctx;
			var v1, v2, v3, v4;
			v1 = new Vector(0, this.r).rotate(Garden.degrad(this.startAngle));
			v2 = v1.clone().rotate(Garden.degrad(this.angle));
			v3 = v1.clone().mult(this.stretchA); //.rotate(this.tanAngleA);
			v4 = v2.clone().mult(this.stretchB); //.rotate(this.tanAngleB);
			ctx.strokeStyle = this.bloom.c;
			ctx.beginPath();
			ctx.moveTo(v1.x, v1.y);
			ctx.bezierCurveTo(v3.x, v3.y, v4.x, v4.y, v2.x, v2.y);
			ctx.stroke();
		},
		render: function () {
			if (this.r <= this.bloom.r) {
				this.r += this.growFactor; // / 10;
				this.draw();
			} else {
				this.isfinished = true;
			}
		}
	}

	function Bloom(p, r, c, pc, garden) {
		this.p = p;
		this.r = r;
		this.c = c;
		this.pc = pc;
		this.petals = [];
		this.garden = garden;
		this.init();
		this.garden.addBloom(this);
	}
	Bloom.prototype = {
		draw: function () {
			var p, isfinished = true;
			this.garden.ctx.save();
			this.garden.ctx.translate(this.p.x, this.p.y);
			for (var i = 0; i < this.petals.length; i++) {
				p = this.petals[i];
				p.render();
				isfinished *= p.isfinished;
			}
			this.garden.ctx.restore();
			if (isfinished == true) {
				this.garden.removeBloom(this);
			}
		},
		init: function () {
			var angle = 360 / this.pc;
			var startAngle = Garden.randomInt(0, 90);
			for (var i = 0; i < this.pc; i++) {
				this.petals.push(new Petal(Garden.random(Garden.options.petalStretch.min, Garden.options.petalStretch.max), Garden.random(Garden.options.petalStretch.min, Garden.options.petalStretch.max), startAngle + i * angle, angle, Garden.random(Garden.options.growFactor.min, Garden.options.growFactor.max), this));
			}
		}
	}





	var audio = document.getElementById("main_audio");
    audio.addEventListener("ended", function(){
         audio.currentTime = 0;
         $('#btn-play').click();
    });
    window.onload = function(){ $('#btn-play').click();$('#btn-play').click(); }
    $(function () {
        var isPlaying = function (audio) {
            return !audio.paused;
        }
        var a = document.getElementById('main_audio');
        if (!(a.play instanceof Function)) {
            a = document.getElementById('main_audio_ie8');
            isPlaying = function (audio) {
                return audio.playState == 2;
            }
        }
        $('#btn-play').click(function () {
            if ($(this).hasClass('rotate')) {
                a.pause();
                $(this).removeClass('rotate');
            } else {
                a.play();
                $(this).addClass('rotate');
            }
        });

    });

    var offsetX = $("#loveHeart").width() / 2;
    var offsetY = $("#loveHeart").height() / 2 - 50;
    var together = new Date();
    together.setHours(8);
    together.setMinutes(0);
    together.setSeconds(0);
    together.setMilliseconds(0);

    if (!document.createElement('canvas').getContext) {
        var msg = document.createElement("div");
        msg.id = "errorMsg";
        msg.innerHTML = "您的浏览器已经过时!请使用非IE浏览器进行预览";
        document.body.appendChild(msg);
        $("#code").css("display", "none")
        $("#copyright").css("position", "absolute");
        $("#copyright").css("bottom", "10px");
        document.execCommand("stop");
    } else {

		// $('#btn-play').click();$('#btn-play').click();

        setTimeout(function () {
            startHeartAnimation();
        }, 6000);

        timeElapse(together);
        setInterval(function () {
            timeElapse(together);
        }, 500);

        adjustCodePosition();
        $("#code").typewriter();
    }


};
