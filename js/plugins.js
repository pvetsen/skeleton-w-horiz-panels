// Avoid `console` errors in browsers that lack a console.
(function() {
    var method;
    var noop = function () {};
    var methods = [
        'assert', 'clear', 'count', 'debug', 'dir', 'dirxml', 'error',
        'exception', 'group', 'groupCollapsed', 'groupEnd', 'info', 'log',
        'markTimeline', 'profile', 'profileEnd', 'table', 'time', 'timeEnd',
        'timeStamp', 'trace', 'warn'
    ];
    var length = methods.length;
    var console = (window.console = window.console || {});

    while (length--) {
        method = methods[length];

        // Only stub undefined methods.
        if (!console[method]) {
            console[method] = noop;
        }
    }
}());

// Place any jQuery/helper plugins in here.

// SLIDE TO

jQuery(function( $ ){
	
		var $paneTarget = $('#scroll-container');
	
		$('#scroll1').click(function(){
			$paneTarget.stop().scrollTo( { top:0,left:0} , 800 );
            document.body.scrollTop = 0;
			return false;
		});
		$('#scroll2').click(function(){
			$paneTarget.stop().scrollTo( { top:2358,left:0} , 800 );
            document.body.scrollTop = 0;
			return false;
		});
		$('#scroll3').click(function(){
			$paneTarget.stop().scrollTo( { top:4716,left:0} , 800 );
            document.body.scrollTop = 0;
			return false;
		});
		$('#nextpanel').click(function(){
				$paneTarget.stop().scrollTo(  '+=960px', 800 );
				return false;
			});
		$('#prevpanel').click(function(){
				$paneTarget.stop().scrollTo(  '-=960px', 800 );
				return false;
			});
});
