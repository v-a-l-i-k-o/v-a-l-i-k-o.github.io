$(document).ready(function() {
// ------------------------------------------------------------------------------------
  
/* ===== INITIALIZATION OF THE PLUGINS: ===== */

	/* ----- name of the plugin ----- */



/* ===== CUSTOM CODE: ===== */
  
	/* ----- toggle steps ----- */

$('body').on('click', '.btn__buy, .btn__submit', function (event) {
	$(this).closest('.catalog-item').fadeOut(0);
  if ($(this).hasClass('btn__buy')) {
  	$('.catalog-item2').fadeIn(600);
	} else {
    $('.catalog-item3').fadeIn(600);
  }
  return false;
});

	/* ----- redirect ----- */

$('body').on('click', '.products-items_item a', function (event) {
	var imgPath = $(this).find('img').attr('src');
	var price = $(this).find('.price').text();
	$('.products').fadeOut(0);
	$('body').removeClass('shop-page');
	$('.catalog').fadeIn(500).find('.catalog-item_pic img').attr('src', imgPath);
	$('.catalog').find('.price').text(price);
	return false;
});


// -------------------------------------------------------------------------------------
});