$(document).ready(function() {

/*CHANGE IMAGE DE CHAINAZIK  */
$('#chaina').mouseover(
  function() { $( this ).addClass("festival"); })
  .mouseout(
  function() {$( this ).removeClass("festival")});

/*CHANGE IMAGE DE COM  */
$('#com').mouseover(
  function() { $( this ).addClass("communication"); })
  .mouseout(
  function() {$( this ).removeClass("communication")});

/*CHANGE IMAGE DE AFS  */
$('#afs').mouseover(
  function() { $( this ).addClass("international"); })
  .mouseout(
  function() {$( this ).removeClass("international")});

/*CHANGE IMAGE DE EFFICIENCE  */
$('#efficience').mouseover(
  function() { $( this ).addClass("psychologie"); })
  .mouseout(
  function() {$( this ).removeClass("psychologie")});

/*CHANGE IMAGE DE PONEY  */
$('#poney').mouseover(
  function() { $( this ).addClass("equestre"); })
  .mouseout(
  function() {$( this ).removeClass("equestre")});





 function toggleImage() {
 	$('div#chaina').click(function() {
 		var image = $(this).attr('data-image');
 		$('img#logo').attr('src', 'images/'+image);

 		var text1 = $(this).attr('data-text1');
 		$('p#ctxt').html(text1);

 		var text2 = $(this).attr('data-text2');
 		$('p#dmd').html(text2);
 	});
 }

 toggleImage();



});
