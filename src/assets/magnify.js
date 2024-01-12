(function( $ ) {
	$.fn.magnify = function( options ) {
		var settings = $.extend({
			original: '',
			magnifiedClass: '',
			magnifiedCSS: ''
		}, options);
		function getBackgroundColor(element) {
			var $e = $(element);
			var color = $e.css("background-color");
			if ((color !== 'rgba(0, 0, 0, 0)') && (color !== 'transparent') && (color !== '')) { return color; }
			else if ($e.is("body")) { return false; }
			else { return getBackgroundColor($e.parent()); }
		};
		this.filter('img').one("load", function() {
			// these variables are used in the mousemove listener
			var targetWidth = this.width;
			var targetHeight = this.height;
			var originalWidth = this.naturalWidth;
			var originalHeight = this.naturalHeight;
			var parent = document.createElement('div');
			parent.style.position = 'relative';
			this.parentNode.replaceChild(parent, this);
			parent.appendChild(this);
			var lens = document.createElement('div');
			lens.className = settings.magnifiedClass;
			lens.style.backgroundColor = getBackgroundColor(this);
			lens.style.backgroundImage = "url('" + this.src + "')";
			lens.style.backgroundRepeat = 'no-repeat';
			parent.appendChild(lens);
			parent.addEventListener('mouseleave', function() {
				this.querySelectorAll('div').forEach(function(lens){
					$(lens).fadeOut();
				});
			});
			parent.addEventListener('mousemove', function(e) {
				var rect = this.getBoundingClientRect();
				var targetLeft = rect.left + document.documentElement.scrollLeft;
				var targetTop = rect.top + document.documentElement.scrollTop;
				var originalX = Math.round((e.pageX - targetLeft)/targetWidth*originalWidth - lens.offsetWidth/2)*-1;
				var originalY = Math.round((e.pageY - targetTop)/targetHeight*originalHeight - lens.offsetHeight/2)*-1;

				$(lens).fadeIn('slow');
				lens.style.backgroundPosition = originalX + "px " + originalY + "px";
				// these two position the lens very close to the mouse
				// don't position the lens directly over the mouse,
				// or else the mouseleave function won't trigger and the lens won't go away
				lens.style.left = e.pageX - targetLeft + "px";
				lens.style.top = e.pageY - targetTop - lens.offsetHeight + "px";
			});
		}).each(function() {
			if(this.complete) {
				$(this).trigger('load'); // For jQuery >= 3.0
			}
		});
		return this;
	};
}( jQuery ));

$('.magnify-this').magnify({magnifiedClass:'magnify-lens'});

console.log('Magnify script loaded?')