$(document).ready(function() {
// ------------------------------------------------------------------------------------
  
/* ===== INITIALIZATION OF THE PLUGINS: ===== */

/* ----- PLUGIN selectric ----- */

$('select').selectric();

/* ----- PLUGIN icheck ----- */

$('input[type="checkbox"]').iCheck({
	checkboxClass: 'icheckbox'
});

/* ----- PLUGIN dateRangePicker ----- */

if ( $('#cal').length>0 ) $('#cal').dateRangePicker({
	getValue: function() {
		return $('#date').text();
	},
	setValue: function(s) {
		if(s != $('#date').text()) {
			$('#date').html(s);
		}
	},
	autoClose: true,
	singleDate : true,
	showShortcuts: false,
	language: 'en',
	format: 'YYYY.MM.DD'
});

(function () {

	if ( !$('#birth').length>0 ) return;

	var ico = $('#birth').closest('.form-group').find('div.hover');

	if ( ico.length>0 )
		$('#birth').closest('.form-group').find('div.hover').on('click', function(event) {
			event.preventDefault();
			event.stopPropagation();
			if ( $(this).data('datepicker-opened') ) 
				$('#birth').data('dateRangePicker').close();
			else $('#birth').data('dateRangePicker').open();
		}).data('datepicker-opened', false);

	$('#birth').dateRangePicker({
		autoClose: true,
		singleDate : true,
		showShortcuts: false,
		language: 'en',
		format: 'DD.MM.YYYY'
	}).bind('datepicker-opened',function(){
		var ico = $('#birth').closest('.form-group').find('div.hover');
		if ( ico.length>0 ) ico.data('datepicker-opened', true);
	}).bind('datepicker-closed',function(){
		var ico = $('#birth').closest('.form-group').find('div.hover');
		if ( ico.length>0 ) ico.data('datepicker-opened', false);
	});

})()

/* ----- PLUGIN scrollbar ----- */

$('#custom-scroll').scrollbar({
	handleSize: 29
});
$('body').on('shown.bs.modal', function (e) {
  $('#custom-scroll').scrollbar("resize");
})

/* ===== CUSTOM CODE: ===== */
  
/* ----- toggle class ----- */

$('.my-panel_filter').on('click', 'a', function(event) {
	event.preventDefault();
	if (!$(this).attr('id')) {
		$(this).closest('.my-panel_filter').find('a').removeClass('active');
		$(this).addClass('active');
	}
});

// -------------------------------------------------------------------------------------
});

/* ----- PLUGIN nouislider ----- */

var Slider = document.getElementById('slider');

if ( Slider )
noUiSlider.create(Slider, {
	start: 75,
	range: {
		min: 0,
		max: 100
	}
});