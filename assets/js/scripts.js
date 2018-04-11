var x = 0;
$(function(){
	$('.btn-holder button').click(function(){
		$('.writer button').fadeIn('fast');
		var no = $(this).attr('data-no');
		var val = $('#input span').text();
		val = val.concat(no);
		$('#input span').text(val);
		decreaseFontSize();
		scrollToEnd();
	});

	$('#backspace').click(function() {
		var val = $('#input span').text();
		val = val.slice(0,-1);
		$('#input span').text(val);
		
		if($('#input span').text().length == 0) {
			$('.writer button').fadeOut('fast');
		}
		increaseFontSize();
		scrollToEnd();
	});

	$('#call').click(function() {
		var val = $('#input span').text();
		window.location.href = 'tel:' + val;
	});

	function scrollToEnd() {
		$('#input').scrollLeft($('#input span').width());
	}

	function decreaseFontSize() {
		var spanWidth = $('#input span').width();
		var inputWidth = $('#input').width();
		var fontSize = parseInt($('#input').css('font-size'));
		if(spanWidth > inputWidth && fontSize > 27) {
			fontSize = fontSize - 2 + 'px';
			$('#input').css('font-size', fontSize);
		}
		if(fontSize == 27) {
			x++;
			console.log(x);
			if(x == 1) {
				console.log('show dots');
			}
		}
	}

	function increaseFontSize() {
		var spanWidth = $('#input span').width();
		var inputWidth = $('#input').width();
		var fontSize = parseInt($('#input').css('font-size'));
		if(fontSize == 27) {
			x--;
			console.log(x);
			if(x == 1) {
				console.log('hide dots');
			}
		}
		if(spanWidth < inputWidth && fontSize < 35) {
			fontSize = fontSize + 2 + 'px';
			$('#input').css('font-size', fontSize);
		}
	}
});