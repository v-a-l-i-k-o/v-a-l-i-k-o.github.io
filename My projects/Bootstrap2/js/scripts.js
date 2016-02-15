$(document).ready(function() {
// ------------------------------------------------------------------------------------
  
/* ===== INITIALIZATION OF THE PLUGINS: ===== */

/* ----- PLUGIN selectric ----- */

$('select').selectric();

/* ----- PLUGIN icheck ----- */

$('input[type="checkbox"]').iCheck({
	checkboxClass: 'icheckbox'
});

/* ----- PLUGIN scrollbar ----- */

$('.loans .custom-scroll').scrollbar({
	handleSize: 29
});
$('body').on('shown.bs.modal', function (e) {
  $('.loans .custom-scroll').scrollbar('resize');
})

$('.shares .custom-scroll').scrollbar({
	handleSize: 29
});
$('body').on('shown.bs.modal', function (e) {
  $('.shares .custom-scroll').scrollbar('resize');
});

$('.panel-family__transaction .custom-scroll').scrollbar({
	handleSize: 41
});

$('.panel-family__details .custom-scroll').scrollbar({
	handleSize: 29
});

$('body').on('shown.bs.modal', function (e) {
  $('.family .custom-scroll').scrollbar('resize');
});

/* ----- PLUGIN dateRangePicker ----- */

if ( $('#calendarik').length>0 ) $('#calendarik').dateRangePicker({
	autoClose: true,
	singleDate : true,
	showShortcuts: false,
	language: 'en',
	format: 'YYYY.MM.DD'
});

if ( $('#calend').length>0 ) $('#calend').dateRangePicker({
	autoClose: true,
	singleDate : true,
	showShortcuts: false,
	language: 'en',
	format: 'YYYY.MM.DD'
});

if ( $('#calendar-transaction').length>0 ) $('#calendar-transaction').dateRangePicker({
	autoClose: true,
	singleDate : true,
	showShortcuts: false,
	language: 'en',
	format: 'YYYY.MM.DD'
});

if ( $('#calendar-family').length>0 ) $('#calendar-family').dateRangePicker({
	autoClose: true,
	singleDate : true,
	showShortcuts: false,
	language: 'en',
	format: 'YYYY.MM.DD'
});

/* ===== CUSTOM CODE: ===== */
  
/* ----- toggle table ----- */

$('.panel-body_table').on('click', '.info, .sign', function(event) {
	event.preventDefault();
	var oldSign,
			newSign,
			panelTable = $(this).closest('.panel-body_table');
	panelTable.toggleClass('full');
	panelTable.find('.range').toggleClass('full');
	oldSign = panelTable.find('.sign').html();
	newSign = panelTable.find('.sign').data('sign');
	panelTable.find('.sign').html(newSign);
	panelTable.find('.sign').data('sign',oldSign);
});

/* ----- toggle class ----- */

$('.my-panel_filter').on('click', 'a', function(event) {
	event.preventDefault();
	if (!$(this).attr('id')) {
		$(this).closest('.my-panel_filter').find('a').removeClass('active');
		$(this).addClass('active');
	}
});

/* ----- striped color ----- */

var stripedElements = $('.panel-family__transaction .panel-list_item, .panel-family__transaction .panel-list_content.in');
stripedElements.each(function(index, el) {
	if (index % 2 == 0) {
		$(this).addClass('odd');
	} else {
		$(this).addClass('even');
	}
});

$('.panel-family__transaction').on('show.bs.collapse', function (event) {
  var target = event.target;
  var closestDiv = $(target).prev('div');
  stripedElements = $(target).add(closestDiv.nextAll().filter('.panel-list_item, .panel-list_content.in'));
	if (closestDiv.hasClass('even')) {
		stripedElements.each(function(index, el) {
			if (index % 2 == 0) {
			$(this).removeClass('odd, even').addClass('odd')
			} else {
			$(this).removeClass('odd, even').addClass('even');
			};
		});
	} else {
		stripedElements.each(function(index, el) {
			if (index % 2 == 0) {
			$(this).removeClass('odd, even').addClass('even')
			} else {
			$(this).removeClass('odd, even').addClass('odd');
			};
		});
	}
});

$('.panel-family__transaction').on('hide.bs.collapse', function (event) {
  var target = event.target;
  var closestDiv = $(target).prev('div');
  stripedElements = $(target).nextAll().filter('.panel-list_item, .panel-list_content.in');
	if (closestDiv.hasClass('even')) {
		stripedElements.each(function(index, el) {
			if (index % 2 == 0) {
			$(this).removeClass('odd, even').addClass('odd')
			} else {
			$(this).removeClass('odd, even').addClass('even');
			};
		});
	} else {
		stripedElements.each(function(index, el) {
			if (index % 2 == 0) {
			$(this).removeClass('odd, even').addClass('even')
			} else {
			$(this).removeClass('odd, even').addClass('odd');
			};
		});
	}
});

// -------------------------------------------------------------------------------------
});

/* ----- PLUGIN nouislider ----- */

var Ssslider = document.getElementById('funds-slider');

if ( Ssslider )
noUiSlider.create(Ssslider, {
	start: 50,
	range: {
		min: 0,
		max: 100
	}
});

var Sslider = document.getElementById('shares-slider');

if ( Sslider )
noUiSlider.create(Sslider, {
	start: 50,
	range: {
		min: 0,
		max: 100
	}
});

/* ----- amCharts javascript code -----*/

var chart = document.getElementsByClassName('panel-body_graph');

if (chart.length > 0) { AmCharts.makeChart("chartdiv",
	{
	"type": "serial",
	"categoryField": "category",
	"columnWidth": 0,
	"autoMarginOffset": 0,
	"autoMargins": false,
	"marginLeft": 40,
	"marginRight": 5,
	"marginTop": 25,
	"sequencedAnimation": false,
	"startEffect": "easeInSine",
	"backgroundAlpha": 1,
	"backgroundColor": "#323234",
	"borderColor": "#323234",
	"fontFamily": "Roboto",
	"fontSize": 12,
	"theme": "default",
	"categoryAxis": {
		"gridPosition": "start",
		"color": "#ABABAE",
		"fontSize": 8,
		"titleColor": ""
	},
	"trendLines": [],
	"graphs": [
		{
			"balloonText": "[[title]] of [[category]]:[[value]]",
			"bullet": "round",
			"bulletColor": "#68819E",
			"bulletSize": 3,
			"fillAlphas": 0.7,
			"fillColors": "#68819E",
			"id": "AmGraph-1",
			"lineAlpha": 0,
			"minDistance": 0,
			"switchable": false,
			"title": "graph 1",
			"valueField": "column-1"
		},
		{
			"balloonText": "[[title]] of [[category]]:[[value]]",
			"bullet": "round",
			"bulletColor": "#C55253",
			"bulletSize": 3,
			"fillAlphas": 0.73,
			"fillColors": "#C55253",
			"id": "AmGraph-2",
			"lineAlpha": 0,
			"title": "graph 2",
			"valueField": "column-2"
		},
		{
			"balloonText": "[[title]] of [[category]]:[[value]]",
			"bullet": "round",
			"bulletAlpha": 0.65,
			"bulletBorderThickness": 1,
			"bulletSize": 3,
			"color": "",
			"columnWidth": 0,
			"fillAlphas": 0.66,
			"fillColors": "#7AC06D",
			"fixedColumnWidth": -1,
			"fontSize": -7,
			"id": "AmGraph-3",
			"legendAlpha": 0.7,
			"legendColor": "#7AC06D",
			"lineAlpha": 0,
			"lineThickness": 0,
			"showBalloon": false,
			"title": "graph 3",
			"valueField": "column-3"
		},
		{
			"balloonText": "[[title]] of [[category]]:[[value]]",
			"bullet": "round",
			"bulletColor": "#2E7A79",
			"bulletSize": 3,
			"fillAlphas": 0.66,
			"fillColors": "#2E7A79",
			"id": "AmGraph-4",
			"legendAlpha": 0.73,
			"legendColor": "#2E7A79",
			"title": "graph 4",
			"valueField": "column-4"
		},
		{
			"bullet": "round",
			"bulletColor": "#AAEEEE",
			"bulletSize": 3,
			"fillColors": "#AAEEEE",
			"id": "AmGraph-5",
			"legendAlpha": 0.7,
			"legendColor": "#AAEEEE",
			"title": "graph 5"
		}
	],
	"guides": [],
	"valueAxes": [
		{
			"duration": "mm",
			"id": "ValueAxis-1",
			"maximum": 10,
			"stackType": "regular",
			"totalText": "",
			"zeroGridAlpha": 0,
			"autoGridCount": false,
			"axisColor": "#323234",
			"color": "#B3AE9D",
			"gridAlpha": 1,
			"gridColor": "#474749",
			"gridThickness": 2,
			"labelOffset": 5,
			"minorGridAlpha": 0,
			"offset": -15,
			"title": "Axis title",
			"titleBold": false,
			"titleColor": "#B3AE9D",
			"titleFontSize": 8
		}
	],
	"allLabels": [],
	"balloon": {},
	"legend": {
		"enabled": true,
		"align": "center",
		"color": "#ABABAE",
		"fontSize": 8,
		"labelText": "America",
		"marginLeft": 10,
		"marginRight": 10,
		"markerSize": 8,
		"maxColumns": 5,
		"periodValueText": "",
		"reversedOrder": true,
		"rollOverGraphAlpha": 0,
		"spacing": 0,
		"switchable": false,
		"valueAlign": "left",
		"valueText": ""
	},
	"titles": [
		{
			"color": "#9EA6A8",
			"id": "Title-1",
			"size": 10,
			"text": "HISTORIC AND ESTIMATED WORLDWIDE POPULATION GROWTH BY REGION"
		},
		{
			"color": "#9EA6A8",
			"id": "Title-2",
			"size": 8,
			"text": "SOURCE: WWW.POPULATION.COM"
		}
	],
	"dataProvider": [
		{
			"category": "1950",
			"column-1": "0.2",
			"column-2": "0.2",
			"column-3": "0.1",
			"column-4": "0.3",
			"column-5": "0"
		},
		{
			"category": "1960",
			"column-1": "0.2",
			"column-2": "0.2",
			"column-3": "0.1",
			"column-4": "0.4",
			"column-5": "0"
		},
		{
			"category": "1970",
			"column-1": "0.5",
			"column-2": "0.2",
			"column-3": "0.1",
			"column-4": "0.5",
			"column-5": "0"
		},
		{
			"category": "1980",
			"column-1": "0.5",
			"column-2": "0.3",
			"column-3": "0.1",
			"column-4": "0.5",
			"column-5": "0"
		},
		{
			"category": "1990",
			"column-1": "1",
			"column-2": "0.5",
			"column-3": "0.1",
			"column-4": "1.2",
			"column-5": "0"
		},
		{
			"category": "2000",
			"column-1": "1",
			"column-2": "1",
			"column-3": "1",
			"column-4": "3.5",
			"column-5": "0"
		},
		{
			"category": "2010",
			"column-1": "1.5",
			"column-2": "1",
			"column-3": "2",
			"column-4": "5.5",
			"column-5": "0"
		}
	]
}
);
};

if (chart.length > 0) { AmCharts.makeChart("chartdiv2",
	{
	"type": "serial",
	"categoryField": "category",
	"columnWidth": 0,
	"autoMarginOffset": 0,
	"autoMargins": false,
	"marginLeft": 40,
	"marginRight": 5,
	"marginTop": 25,
	"sequencedAnimation": false,
	"startEffect": "easeInSine",
	"backgroundAlpha": 1,
	"backgroundColor": "#323234",
	"borderColor": "#323234",
	"fontFamily": "Roboto",
	"fontSize": 12,
	"theme": "default",
	"categoryAxis": {
		"gridPosition": "start",
		"color": "#ABABAE",
		"fontSize": 8,
		"titleColor": ""
	},
	"trendLines": [],
	"graphs": [
		{
			"balloonText": "[[title]] of [[category]]:[[value]]",
			"bullet": "round",
			"bulletColor": "#68819E",
			"bulletSize": 3,
			"fillAlphas": 0.7,
			"fillColors": "#68819E",
			"id": "AmGraph-1",
			"lineAlpha": 0,
			"minDistance": 0,
			"switchable": false,
			"title": "graph 1",
			"valueField": "column-1"
		},
		{
			"balloonText": "[[title]] of [[category]]:[[value]]",
			"bullet": "round",
			"bulletColor": "#C55253",
			"bulletSize": 3,
			"fillAlphas": 0.73,
			"fillColors": "#C55253",
			"id": "AmGraph-2",
			"lineAlpha": 0,
			"title": "graph 2",
			"valueField": "column-2"
		},
		{
			"balloonText": "[[title]] of [[category]]:[[value]]",
			"bullet": "round",
			"bulletAlpha": 0.65,
			"bulletBorderThickness": 1,
			"bulletSize": 3,
			"color": "",
			"columnWidth": 0,
			"fillAlphas": 0.66,
			"fillColors": "#7AC06D",
			"fixedColumnWidth": -1,
			"fontSize": -7,
			"id": "AmGraph-3",
			"legendAlpha": 0.7,
			"legendColor": "#7AC06D",
			"lineAlpha": 0,
			"lineThickness": 0,
			"showBalloon": false,
			"title": "graph 3",
			"valueField": "column-3"
		},
		{
			"balloonText": "[[title]] of [[category]]:[[value]]",
			"bullet": "round",
			"bulletColor": "#2E7A79",
			"bulletSize": 3,
			"fillAlphas": 0.66,
			"fillColors": "#2E7A79",
			"id": "AmGraph-4",
			"legendAlpha": 0.73,
			"legendColor": "#2E7A79",
			"title": "graph 4",
			"valueField": "column-4"
		},
		{
			"bullet": "round",
			"bulletColor": "#AAEEEE",
			"bulletSize": 3,
			"fillColors": "#AAEEEE",
			"id": "AmGraph-5",
			"legendAlpha": 0.7,
			"legendColor": "#AAEEEE",
			"title": "graph 5"
		}
	],
	"guides": [],
	"valueAxes": [
		{
			"duration": "mm",
			"id": "ValueAxis-1",
			"maximum": 10,
			"stackType": "regular",
			"totalText": "",
			"zeroGridAlpha": 0,
			"autoGridCount": false,
			"axisColor": "#323234",
			"color": "#B3AE9D",
			"gridAlpha": 1,
			"gridColor": "#474749",
			"gridThickness": 2,
			"labelOffset": 5,
			"minorGridAlpha": 0,
			"offset": -15,
			"title": "Axis title",
			"titleBold": false,
			"titleColor": "#B3AE9D",
			"titleFontSize": 8
		}
	],
	"allLabels": [],
	"balloon": {},
	"legend": {
		"enabled": true,
		"align": "center",
		"color": "#ABABAE",
		"fontSize": 8,
		"labelText": "America",
		"marginLeft": 10,
		"marginRight": 10,
		"markerSize": 8,
		"maxColumns": 5,
		"periodValueText": "",
		"reversedOrder": true,
		"rollOverGraphAlpha": 0,
		"spacing": 0,
		"switchable": false,
		"valueAlign": "left",
		"valueText": ""
	},
	"titles": [
		{
			"color": "#9EA6A8",
			"id": "Title-1",
			"size": 10,
			"text": "HISTORIC AND ESTIMATED WORLDWIDE POPULATION GROWTH BY REGION"
		},
		{
			"color": "#9EA6A8",
			"id": "Title-2",
			"size": 8,
			"text": "SOURCE: WWW.POPULATION.COM"
		}
	],
	"dataProvider": [
		{
			"category": "1950",
			"column-1": "0.2",
			"column-2": "0.2",
			"column-3": "0.1",
			"column-4": "0.3",
			"column-5": "0"
		},
		{
			"category": "1960",
			"column-1": "0.2",
			"column-2": "0.2",
			"column-3": "0.1",
			"column-4": "0.4",
			"column-5": "0"
		},
		{
			"category": "1970",
			"column-1": "0.5",
			"column-2": "0.2",
			"column-3": "0.1",
			"column-4": "0.5",
			"column-5": "0"
		},
		{
			"category": "1980",
			"column-1": "0.5",
			"column-2": "0.3",
			"column-3": "0.1",
			"column-4": "0.5",
			"column-5": "0"
		},
		{
			"category": "1990",
			"column-1": "1",
			"column-2": "0.5",
			"column-3": "0.1",
			"column-4": "1.2",
			"column-5": "0"
		},
		{
			"category": "2000",
			"column-1": "1",
			"column-2": "1",
			"column-3": "1",
			"column-4": "3.5",
			"column-5": "0"
		},
		{
			"category": "2010",
			"column-1": "1.5",
			"column-2": "1",
			"column-3": "2",
			"column-4": "5.5",
			"column-5": "0"
		}
	]
}
);
};

if (chart.length > 0) { AmCharts.makeChart("chartdiv3",
	{
	"type": "serial",
	"categoryField": "category",
	"columnWidth": 0,
	"autoMarginOffset": 0,
	"autoMargins": false,
	"marginLeft": 40,
	"marginRight": 5,
	"marginTop": 25,
	"sequencedAnimation": false,
	"startEffect": "easeInSine",
	"backgroundAlpha": 1,
	"backgroundColor": "#323234",
	"borderColor": "#323234",
	"fontFamily": "Roboto",
	"fontSize": 12,
	"theme": "default",
	"categoryAxis": {
		"gridPosition": "start",
		"color": "#ABABAE",
		"fontSize": 8,
		"titleColor": ""
	},
	"trendLines": [],
	"graphs": [
		{
			"balloonText": "[[title]] of [[category]]:[[value]]",
			"bullet": "round",
			"bulletColor": "#68819E",
			"bulletSize": 3,
			"fillAlphas": 0.7,
			"fillColors": "#68819E",
			"id": "AmGraph-1",
			"lineAlpha": 0,
			"minDistance": 0,
			"switchable": false,
			"title": "graph 1",
			"valueField": "column-1"
		},
		{
			"balloonText": "[[title]] of [[category]]:[[value]]",
			"bullet": "round",
			"bulletColor": "#C55253",
			"bulletSize": 3,
			"fillAlphas": 0.73,
			"fillColors": "#C55253",
			"id": "AmGraph-2",
			"lineAlpha": 0,
			"title": "graph 2",
			"valueField": "column-2"
		},
		{
			"balloonText": "[[title]] of [[category]]:[[value]]",
			"bullet": "round",
			"bulletAlpha": 0.65,
			"bulletBorderThickness": 1,
			"bulletSize": 3,
			"color": "",
			"columnWidth": 0,
			"fillAlphas": 0.66,
			"fillColors": "#7AC06D",
			"fixedColumnWidth": -1,
			"fontSize": -7,
			"id": "AmGraph-3",
			"legendAlpha": 0.7,
			"legendColor": "#7AC06D",
			"lineAlpha": 0,
			"lineThickness": 0,
			"showBalloon": false,
			"title": "graph 3",
			"valueField": "column-3"
		},
		{
			"balloonText": "[[title]] of [[category]]:[[value]]",
			"bullet": "round",
			"bulletColor": "#2E7A79",
			"bulletSize": 3,
			"fillAlphas": 0.66,
			"fillColors": "#2E7A79",
			"id": "AmGraph-4",
			"legendAlpha": 0.73,
			"legendColor": "#2E7A79",
			"title": "graph 4",
			"valueField": "column-4"
		},
		{
			"bullet": "round",
			"bulletColor": "#AAEEEE",
			"bulletSize": 3,
			"fillColors": "#AAEEEE",
			"id": "AmGraph-5",
			"legendAlpha": 0.7,
			"legendColor": "#AAEEEE",
			"title": "graph 5"
		}
	],
	"guides": [],
	"valueAxes": [
		{
			"duration": "mm",
			"id": "ValueAxis-1",
			"maximum": 10,
			"stackType": "regular",
			"totalText": "",
			"zeroGridAlpha": 0,
			"autoGridCount": false,
			"axisColor": "#323234",
			"color": "#B3AE9D",
			"gridAlpha": 1,
			"gridColor": "#474749",
			"gridThickness": 2,
			"labelOffset": 5,
			"minorGridAlpha": 0,
			"offset": -15,
			"title": "Axis title",
			"titleBold": false,
			"titleColor": "#B3AE9D",
			"titleFontSize": 8
		}
	],
	"allLabels": [],
	"balloon": {},
	"legend": {
		"enabled": true,
		"align": "center",
		"color": "#ABABAE",
		"fontSize": 8,
		"labelText": "America",
		"marginLeft": 10,
		"marginRight": 10,
		"markerSize": 8,
		"maxColumns": 5,
		"periodValueText": "",
		"reversedOrder": true,
		"rollOverGraphAlpha": 0,
		"spacing": 0,
		"switchable": false,
		"valueAlign": "left",
		"valueText": ""
	},
	"titles": [
		{
			"color": "#9EA6A8",
			"id": "Title-1",
			"size": 10,
			"text": "HISTORIC AND ESTIMATED WORLDWIDE POPULATION GROWTH BY REGION"
		},
		{
			"color": "#9EA6A8",
			"id": "Title-2",
			"size": 8,
			"text": "SOURCE: WWW.POPULATION.COM"
		}
	],
	"dataProvider": [
		{
			"category": "1950",
			"column-1": "0.2",
			"column-2": "0.2",
			"column-3": "0.1",
			"column-4": "0.3",
			"column-5": "0"
		},
		{
			"category": "1960",
			"column-1": "0.2",
			"column-2": "0.2",
			"column-3": "0.1",
			"column-4": "0.4",
			"column-5": "0"
		},
		{
			"category": "1970",
			"column-1": "0.5",
			"column-2": "0.2",
			"column-3": "0.1",
			"column-4": "0.5",
			"column-5": "0"
		},
		{
			"category": "1980",
			"column-1": "0.5",
			"column-2": "0.3",
			"column-3": "0.1",
			"column-4": "0.5",
			"column-5": "0"
		},
		{
			"category": "1990",
			"column-1": "1",
			"column-2": "0.5",
			"column-3": "0.1",
			"column-4": "1.2",
			"column-5": "0"
		},
		{
			"category": "2000",
			"column-1": "1",
			"column-2": "1",
			"column-3": "1",
			"column-4": "3.5",
			"column-5": "0"
		},
		{
			"category": "2010",
			"column-1": "1.5",
			"column-2": "1",
			"column-3": "2",
			"column-4": "5.5",
			"column-5": "0"
		}
	]
}
);
};

if (chart.length > 0) { AmCharts.makeChart("chartdiv4",
	{
	"type": "serial",
	"categoryField": "category",
	"columnWidth": 0,
	"autoMarginOffset": 0,
	"autoMargins": false,
	"marginLeft": 40,
	"marginRight": 5,
	"marginTop": 25,
	"sequencedAnimation": false,
	"startEffect": "easeInSine",
	"backgroundAlpha": 1,
	"backgroundColor": "#323234",
	"borderColor": "#323234",
	"fontFamily": "Roboto",
	"fontSize": 12,
	"theme": "default",
	"categoryAxis": {
		"gridPosition": "start",
		"color": "#ABABAE",
		"fontSize": 8,
		"titleColor": ""
	},
	"trendLines": [],
	"graphs": [
		{
			"balloonText": "[[title]] of [[category]]:[[value]]",
			"bullet": "round",
			"bulletColor": "#68819E",
			"bulletSize": 3,
			"fillAlphas": 0.7,
			"fillColors": "#68819E",
			"id": "AmGraph-1",
			"lineAlpha": 0,
			"minDistance": 0,
			"switchable": false,
			"title": "graph 1",
			"valueField": "column-1"
		},
		{
			"balloonText": "[[title]] of [[category]]:[[value]]",
			"bullet": "round",
			"bulletColor": "#C55253",
			"bulletSize": 3,
			"fillAlphas": 0.73,
			"fillColors": "#C55253",
			"id": "AmGraph-2",
			"lineAlpha": 0,
			"title": "graph 2",
			"valueField": "column-2"
		},
		{
			"balloonText": "[[title]] of [[category]]:[[value]]",
			"bullet": "round",
			"bulletAlpha": 0.65,
			"bulletBorderThickness": 1,
			"bulletSize": 3,
			"color": "",
			"columnWidth": 0,
			"fillAlphas": 0.66,
			"fillColors": "#7AC06D",
			"fixedColumnWidth": -1,
			"fontSize": -7,
			"id": "AmGraph-3",
			"legendAlpha": 0.7,
			"legendColor": "#7AC06D",
			"lineAlpha": 0,
			"lineThickness": 0,
			"showBalloon": false,
			"title": "graph 3",
			"valueField": "column-3"
		},
		{
			"balloonText": "[[title]] of [[category]]:[[value]]",
			"bullet": "round",
			"bulletColor": "#2E7A79",
			"bulletSize": 3,
			"fillAlphas": 0.66,
			"fillColors": "#2E7A79",
			"id": "AmGraph-4",
			"legendAlpha": 0.73,
			"legendColor": "#2E7A79",
			"title": "graph 4",
			"valueField": "column-4"
		},
		{
			"bullet": "round",
			"bulletColor": "#AAEEEE",
			"bulletSize": 3,
			"fillColors": "#AAEEEE",
			"id": "AmGraph-5",
			"legendAlpha": 0.7,
			"legendColor": "#AAEEEE",
			"title": "graph 5"
		}
	],
	"guides": [],
	"valueAxes": [
		{
			"duration": "mm",
			"id": "ValueAxis-1",
			"maximum": 10,
			"stackType": "regular",
			"totalText": "",
			"zeroGridAlpha": 0,
			"autoGridCount": false,
			"axisColor": "#323234",
			"color": "#B3AE9D",
			"gridAlpha": 1,
			"gridColor": "#474749",
			"gridThickness": 2,
			"labelOffset": 5,
			"minorGridAlpha": 0,
			"offset": -15,
			"title": "Axis title",
			"titleBold": false,
			"titleColor": "#B3AE9D",
			"titleFontSize": 8
		}
	],
	"allLabels": [],
	"balloon": {},
	"legend": {
		"enabled": true,
		"align": "center",
		"color": "#ABABAE",
		"fontSize": 8,
		"labelText": "America",
		"marginLeft": 10,
		"marginRight": 10,
		"markerSize": 8,
		"maxColumns": 5,
		"periodValueText": "",
		"reversedOrder": true,
		"rollOverGraphAlpha": 0,
		"spacing": 0,
		"switchable": false,
		"valueAlign": "left",
		"valueText": ""
	},
	"titles": [
		{
			"color": "#9EA6A8",
			"id": "Title-1",
			"size": 10,
			"text": "HISTORIC AND ESTIMATED WORLDWIDE POPULATION GROWTH BY REGION"
		},
		{
			"color": "#9EA6A8",
			"id": "Title-2",
			"size": 8,
			"text": "SOURCE: WWW.POPULATION.COM"
		}
	],
	"dataProvider": [
		{
			"category": "1950",
			"column-1": "0.2",
			"column-2": "0.2",
			"column-3": "0.1",
			"column-4": "0.3",
			"column-5": "0"
		},
		{
			"category": "1960",
			"column-1": "0.2",
			"column-2": "0.2",
			"column-3": "0.1",
			"column-4": "0.4",
			"column-5": "0"
		},
		{
			"category": "1970",
			"column-1": "0.5",
			"column-2": "0.2",
			"column-3": "0.1",
			"column-4": "0.5",
			"column-5": "0"
		},
		{
			"category": "1980",
			"column-1": "0.5",
			"column-2": "0.3",
			"column-3": "0.1",
			"column-4": "0.5",
			"column-5": "0"
		},
		{
			"category": "1990",
			"column-1": "1",
			"column-2": "0.5",
			"column-3": "0.1",
			"column-4": "1.2",
			"column-5": "0"
		},
		{
			"category": "2000",
			"column-1": "1",
			"column-2": "1",
			"column-3": "1",
			"column-4": "3.5",
			"column-5": "0"
		},
		{
			"category": "2010",
			"column-1": "1.5",
			"column-2": "1",
			"column-3": "2",
			"column-4": "5.5",
			"column-5": "0"
		}
	]
}
);
};