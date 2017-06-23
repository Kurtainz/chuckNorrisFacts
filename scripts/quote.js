$(document).ready(function() {
	const getData = () => {
		$.ajax({
			url : 'http://api.icndb.com/jokes/random',
			dataType : 'json',
			success : function(result) {
				let data = result.value.joke;
				if (data.includes('&quot;')) {
					data = data.replace(/&quot;/g, '"');
				}
				checkLen(data);
				$('.quote').text(data);
			},
			error : function(error) {
				console.log('Error state' ,error);
			}
		})
	};

	const checkLen = (data) => {
		if ($(window).width() < 768 && data.length > 170) {
			$('.quote').css('font-size', '1.3em');
		}
	};

	$('button').click(function() {
		getData();
	});

	getData();

});