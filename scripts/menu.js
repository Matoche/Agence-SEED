function changeMenu(){
	$('div#rondmenu').click(function() {
		$('div#listemenu').toggleClass('active');
		$('div#rondmenu').toggleClass('active');
		$('div#barmenu1').toggleClass('active');
	    $('div#barmenu2').toggleClass('active');
	    $('div#barmenu3').toggleClass('active');
	    $('div#listemenu2').removeClass('active');

	});
}
changeMenu();

function projets(){
	$('li#projets').click(function() {
		$('div#listemenu2').toggleClass('active');

	});
}
projets();


function toggleImage() {
	$('ul#listemenu3 li').click(function() {
		var image = $(this).attr('data-image');
		$('img#logo').attr('src', 'images/'+image);

		var text1 = $(this).attr('data-text1');
		$('p#ctxt').html(text1);

		var text2 = $(this).attr('data-text2');
		$('p#dmd').html(text2);
	});
}
toggleImage();
