/**
 * ---------------------------------------
 * This demo was created using amCharts 4.
 * ---------------------------------------
 */
/**
 * Created by Antti Lipponen and Bianca Swidler
 */

function am4themes_myTheme(target) {
  if (target instanceof am4core.ColorSet) {
    target.list = [
      //am4core.color("#F7F8F8"),
      am4core.color("#D6DBE0"),
      am4core.color("#B9356B"),
      am4core.color("#6B1050"),
      am4core.color("#C4820E"),
      am4core.color("#FDB515"),
      am4core.color("#DDD5C7"),
      am4core.color("#32BCAD"),
      am4core.color("#197F87"),
      //am4core.color("#2483C5"),
      //am4core.color("#1D3D70"),
      am4core.color("#212429"),
    ];
  }
 
};

var population = {
  "ANNAPISI": [["", 0, 15.6, 16.1, 0, 32.8, 21.1, 13.1, 17.0, 15.1, 14.4]], 
                  
  "ANNH": [["       ", 0, 0, 0, 0, 34.1, 0, 0, 0, 0, 0]], 
                  
  "HSI":[["      ", 0, 48.0, 79.3, 37.8, 48.4, 43.6, 37.9, 36.6, 30.7, 40.5]], 
                  
  "NASNTI":[["     ",0, 21.6, 19.9, 21.0, 19.5, 0, 28.4, 0, 0, 8.9]], 
                  
  "TOTAL": [["average % rep",0, 0, 0, 0, 0, 0, 0, 0, 0, 0]], 
                  
  "PBI":[["    ", 0, 44.6, 50.4, 0, 35.2, 0, 0, 47.8, 59.3, 58.8]],
                  
  "HBCU":[["   ", 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]], 
                  
  "TCU":[["  ", 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]],
                  
  "SIP":[[" ", 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]], 
                 
}; 
//"#F7F8F8", "D6DBE0", "B9356B", "6B1050", "C4820E", "FDB515", "DDD5C7","32BCAD","197F87","2483C5", "1D3D70", "212429"
//am4core.useTheme(am4themes_myTheme);
am4core.useTheme(am4themes_animated); //dynamic data visuals
am4core.useTheme(am4themes_myTheme);

var schools = {
    "ANNAPISI": [
        ["", 0, 8, 7, 1, 67, 44, 14, 34, 6, 20],
        //["Avg M %_", 0, 15.6, 16.1, 0, 32.8, 21.1, 13.1, 17.0, 15.1, 14.4],
        //["Total $_", 1000, 900, 300, 400, 500, 700, 300, 400, 1000],
       // ["Extra metric_", 12.03, 0.06, -0.12, 0.48, -0.58, 0.07, -0.65, 0.41, -0.46,],
  
    ],
    "ANNH": [
        ["       ", 0, 0, 0, 0, 12, 0, 9, 0, 0, 0],
       // ["_Avg M %", 0, 0, 0, 0, 34.1, 0, 0, 0, 0, 0],
       // ["_Total $", 21.64, 0.33, -1.11, -0.36, -0.7, -0.1, -0.26, 0.24, -0.92,],
       // ["_Extra Metric", 24.36, 0.16, -0.32, -0.6, -0.31, 0.01, 0.09, 0.22, 0.18,],
        
    ],
    "HSI": [
        ["      ", 0, 121, 96, 18, 120, 66, 15, 72, 3, 34],
        //["Avg M %", 0, 48.0, 79.3, 37.8, 48.4, 43.6, 37.9, 36.6, 30.7, 40.5],
       // ["Total $", 21.84, -2.32, -1.07, -1.07, 2.28, -0.61, -0.92, -0.14, -0.33,],
       // ["Extra Metric", 25.75, 0.43, -1.64, -0.21, 0.72, 0.73, 0.14, -1.11, 0.01,],
       
    ],
    "NASNTI": [
        ["     ", 0, 19, 4, 3, 2, 0, 6, 0, 0, 1],
      //  ["*Avg M %", 0, 21.6, 19.9, 21.0, 19.5, 0, 28.4, 0, 0, 8.9],
      //  ["*Total $", 25.69, -0.13, 0.29, -0.57, -0.67, 0.08, -0.53, -0.38, 0.47,],
     //   ["*Extra Metric", 9.47, 0.16, -0.31, 0.38, -0.59, -0.11, 0.13, 0.04, -0.24,],
        
    ],
   
  "Total": [ ["school count", 0, 427,	103,	420,	122,	157,	301,	107,	534,	356
], ],
  "PBI": [
        ["    ", 0, 9, 42, 0, 1, 0, 0, 9, 4, 7],
     //   ["Avg M %*", 0, 44.6, 50.4, 0, 35.2, 0, 0, 47.8, 59.3, 58.8],
     //   ["Total $*", 25.11, 0, 0, 0, 1.14, 1.14, 1.14, -0.19, 0.03,],
     //   ["Extra Metric*", 12.39, 0.27, 0.47, 0.43, -0.27, -0.31, 0.44, -0.16, -0.18,],
        
    ],
   "HBCU": [
        ["   ", 0, 20, 57, 0, 1, 0, 0, 2, 14, 6],
    //    ["-Avg M %", 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    //    ["-Total $", 25.11, 0, 0, 0, 1.14, 1.14, 1.14, -0.19, 0.03,],
    //    ["-Extra Metric", 12.39, 0.27, 0.47, 0.43, -0.27, -0.31, 0.44, -0.16, -0.18,],
        
    ],
  "TCU": [
        ["  ", 0, 4, 0, 11, 2, 0, 9, 0, 0, 9],
    //    ["Avg M %-", 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    //    ["Total $-", 25.11, 0, 0, 0, 1.14, 1.14, 1.14, -0.19, 0.03,],
    //    ["Extra Metric-", 12.39, 0.27, 0.47, 0.43, -0.27, -0.31, 0.44, -0.16, -0.18,],
    
    ], "SIP": [
        [" ", 0, 175, 328, 74, 96, 47, 69, 303, 76, 350],
    //    [" Avg M % ", 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    //    [" Total $ ", 25.11, 0, 0, 0, 1.14, 1.14, 1.14, -0.19, 0.03,],
    //    [" Extra Metric ", 12.39, 0.27, 0.47, 0.43, -0.27, -0.31, 0.44, -0.16, -0.18,],
         ],
}


//kept indices as "year" for simplicity in code changing
var startYear = 2015;
var endYear = 2023;
var currentYear = 2019;
var colorSet = new am4core.ColorSet();

var chart = am4core.create("chartdiv", am4charts.RadarChart);

var title = chart.titles.create();
title.text = "US MSIs by NSIN region";
title.fontSize = 25;
title.marginBottom = 30; 
title.align = "center";
title.isMeasured = false;
title.x = 135;
//title.y = 20;

//chart.numberFormatter.numberFormat = "+#.0°C|#.0°C|0.0°C";
//chart.numberFormatter.numberFormat = "+#.0%|#.0%|0.0%";
chart.hiddenState.properties.opacity = 0;

chart.startAngle = 270 - 180;
chart.endAngle = 270 + 180;

chart.radius = am4core.percent(80);
chart.innerRadius = am4core.percent(60);

const regions = ["Midwest","National Capital", "Northeast","Northwest", "Pacific North","Pacific South","Rocky Mountain", "Southeast", "Southwest"];
// year label goes in the middle
var yearLabel = chart.radarContainer.createChild(am4core.Label);
yearLabel.horizontalCenter = "middle";
yearLabel.verticalCenter = "middle";
yearLabel.fill = am4core.color("#212429");
yearLabel.fontSize = 30;
yearLabel.text = regions[4]

// zoomout button
var zoomOutButton = chart.zoomOutButton;
zoomOutButton.dx = 0;
zoomOutButton.dy = 0;
zoomOutButton.marginBottom = 15;
zoomOutButton.parent = chart.rightAxesContainer;

// scrollbar
chart.scrollbarX = new am4core.Scrollbar();
chart.scrollbarX.parent = chart.rightAxesContainer;
chart.scrollbarX.orientation = "vertical";
chart.scrollbarX.align = "center";

// vertical orientation for zoom out button and scrollbar to be positioned properly
chart.rightAxesContainer.layout = "vertical";
chart.rightAxesContainer.padding(120, 20, 120, 20);

// category axis
var categoryAxis = chart.xAxes.push(new am4charts.CategoryAxis());
categoryAxis.renderer.grid.template.location = 0;
categoryAxis.dataFields.category = "country";

var categoryAxisRenderer = categoryAxis.renderer;
var categoryAxisLabel = categoryAxisRenderer.labels.template;
categoryAxisLabel.location = 0.5;
categoryAxisLabel.radius = 28;
categoryAxisLabel.relativeRotation = 0;

categoryAxisRenderer.minGridDistance = 13;
categoryAxisRenderer.grid.template.radius = -25;
categoryAxisRenderer.grid.template.strokeOpacity = 0.05;
categoryAxisRenderer.grid.template.interactionsEnabled = false;

categoryAxisRenderer.ticks.template.disabled = true;
categoryAxisRenderer.axisFills.template.disabled = true;
categoryAxisRenderer.line.disabled = true;

categoryAxisRenderer.tooltipLocation = 0.5;
categoryAxis.tooltip.defaultState.properties.opacity = 0;

// value axis
var valueAxis = chart.yAxes.push(new am4charts.ValueAxis());
valueAxis.min = -3;
valueAxis.max = 430;
valueAxis.strictMinMax = true;
valueAxis.tooltip.defaultState.properties.opacity = 0;
valueAxis.tooltip.animationDuration = 0;
valueAxis.cursorTooltipEnabled = true;
valueAxis.zIndex = 10;
//disabled number label
valueAxis.renderer.labels.template.disabled = true

var valueAxisRenderer = valueAxis.renderer;
valueAxisRenderer.axisFills.template.disabled = true;
valueAxisRenderer.ticks.template.disabled = true;
valueAxisRenderer.minGridDistance = 30;
valueAxisRenderer.grid.template.strokeOpacity = 0.05;

// Create value axis break

var axisBreak2 = valueAxis.axisBreaks.create();
axisBreak2.startValue = 20;
axisBreak2.endValue = 425; // if this value is greater than valueAxis.max, get interesting special effect 
axisBreak2.breakSize = 0.05;
// Add axis break events
axisBreak2.events.on("over", () => {
  axisBreak2.animate(
    [{ property: "breakSize", to: 1 }, { property: "opacity", to: 0.1 }],
    1500,
    am4core.ease.sinOut
  );
});
axisBreak2.events.on("out", () => {
  axisBreak2.animate(
    [{ property: "breakSize", to: 0.05 }, { property: "opacity", to: 1 }],
    1000,
    am4core.ease.quadOut
  );
});
/*
var axisBreak = valueAxis.axisBreaks.create();
axisBreak.startValue = 1;
axisBreak.endValue = 90;
axisBreak.breakSize = 0.05;
// Add axis break events
axisBreak.events.on("over", () => {
  axisBreak.animate(
    [{ property: "breakSize", to: 1 }, { property: "opacity", to: 0.1 }],
    1500,
    am4core.ease.sinOut
  );
});
axisBreak.events.on("out", () => {
  axisBreak.animate(
    [{ property: "breakSize", to: 0.05 }, { property: "opacity", to: 1 }],
    1000,
    am4core.ease.quadOut
  );
});*/

// series
var series = chart.series.push(new am4charts.RadarColumnSeries());
series.columns.template.width = am4core.percent(90);
series.columns.template.strokeOpacity = 0;
series.dataFields.valueY = "value" + currentYear;
series.dataFields.categoryX = "country";
series.tooltipText = "{categoryX}:{valueY.value}";

// this makes columns to be of a different color, depending on value
/*series.heatRules.push({ target: series.columns.template, property: "fill", minValue: -3, maxValue: 6, min: am4core.color("#673AB7"), max: am4core.color("#F44336"), dataField: "valueY" });*/

// NSIN colors array
const nsinColors = ["#F7F8F8", "#D6DBE0", "#B9356B", "#6B1050", "#C4820E", "#FDB515", "#DDD5C7","#32BCAD","#197F87","#2483C5", "#1D3D70", "#212429"];

series.heatRules.push({ target: series.columns.template, property: "fill", minValue: -3, maxValue: 1, min: am4core.color(nsinColors[9]), max: am4core.color(nsinColors[9]), dataField: "valueY" });
/*
series.heatRules.push({ target: series.columns.template, property: "fill", minValue: 1, maxValue: 530, min: am4core.color(nsinColors[3]), max: am4core.color(nsinColors[3]), dataField: "valueY" });

series.heatRules.push({ target: series.columns.template, property: "fill", minValue:530, maxValue: 2000, min: am4core.color(nsinColors[4]), max: am4core.color(nsinColors[4]), dataField: "valueY" });*/

// cursor
var cursor = new am4charts.RadarCursor();
chart.cursor = cursor;
cursor.behavior = "zoomX";

cursor.xAxis = categoryAxis;
cursor.innerRadius = am4core.percent(40);
cursor.lineY.disabled = true;

cursor.lineX.fillOpacity = 0.2;
cursor.lineX.fill = am4core.color("#000000");
cursor.lineX.strokeOpacity = 0;
cursor.fullWidthLineX = true;

// year slider
var yearSliderContainer = chart.createChild(am4core.Container);
yearSliderContainer.layout = "vertical";
yearSliderContainer.padding(0, 38, 0, 38);
yearSliderContainer.width = am4core.percent(100);

var yearSlider = yearSliderContainer.createChild(am4core.Slider);
yearSlider.events.on("rangechanged", function () {
    updateRadarData(startYear + Math.round(yearSlider.start * (endYear - startYear)));
})
yearSlider.orientation = "horizontal";
yearSlider.start = 0.5;

//dataSlider 
//comment out as needed
//so far: slider updates position but does not update data based on that position.
/*
var dataSliderContainer = chart.createChild(am4core.Container);
dataSliderContainer.layout = "horizontal";
dataSliderContainer.padding(38, 30, 38, 30);
dataSliderContainer.width = am4core.percent(100);

var dataSlider = dataSliderContainer.createChild(am4core.Slider);

dataSlider.events.on("rangechanged", function () { 
  chart.data = whichData2();                                                  
})

function whichData2() {
  if (dataSlider.pixelX < 900) {
    chart.data = generateRadarData();
  } else {
    chart.data = generateRadarData2();
  }
return chart.data;
}

chart.data = whichData2(); 

dataSlider.orientation = "horizontal";
dataSlider.start = 0.5;

dataSlider.x = 900;
dataSlider.y = 200;

*/

chart.legend = new am4charts.Legend();
chart.legend.position = "right"; 

//switch button for data set to use
//current issue: category axis draws and does not renew after data invalidated

var chartSwitchButton = chart.chartContainer.createChild(am4core.SwitchButton);
chartSwitchButton.cursorOverStyle = am4core.MouseCursorStyle.pointer;
chartSwitchButton.leftLabel.text = 'Population share %';
chartSwitchButton.rightLabel.text = 'Schools';
chartSwitchButton.scale = 1;

chartSwitchButton.events.on("toggled", function (event) {
  chart.data = whichData();  
});

// current problem: seems to draw and not erase previous updated graph (title labels overlapped)

function whichData() {
  if (chartSwitchButton.isActive) {
    chart.data = generateRadarData();
  } else {
    chart.data = generateRadarData2();
  }
return chart.data;
}

chart.data = whichData();

//attempt to fix axes overlapping:

chart.events.on("beforedatavalidated", function() {
  for(var i = 0; i < chart.data.length; i++) {
    chart.data[i].category += " (" + i + ")";
  }
});

categoryAxis.renderer.labels.template.adapter.add("textOutput", function(text) {
  return text.replace(/ \(.*/, "");
});

//to test, if event listener and whichData also commented out: can uncomment one of these at a time
//chart.data = generateRadarData(); for school counts
//chart.data = generateRadarData2(); for population share % 

//original radar data generator
//tried to use an if-else for "schools" and "population" in order to not have two separate functions, but did not compile. 
function generateRadarData() {
    var data = [];
    var i = 0;
    for (var continent in schools) {
        var continentData = schools[continent];

        continentData.forEach(function (country) {
            var rawDataItem = { "country": country[0] }

            for (var y = 2; y < country.length; y++) {
                rawDataItem["value" + (startYear + y - 2)] = country[y];
            }

            data.push(rawDataItem);
        });

        createRange(continent, continentData, i);
        i++;

    }
    return data;
}

function generateRadarData2() {
    var data = [];
    var i = 0;
    for (var continent in population) {
        var continentData = population[continent];

        continentData.forEach(function (country) {
            var rawDataItem = { "country": country[0] }

            for (var y = 2; y < country.length; y++) {
                rawDataItem["value" + (startYear + y - 2)] = country[y];
            }

            data.push(rawDataItem);
        });

        createRange(continent, continentData, i);
        i++;

    }
    return data;
}

//separate from the commented sections


function updateRadarData(year) {
    if (currentYear != year) {
        currentYear = year;
        //yearLabel.text = String(currentYear);
       yearLabel.text = regions[endYear - currentYear];
        series.dataFields.valueY = "value" + currentYear;
        chart.invalidateRawData();
    }
}

function createRange(name, continentData, index) {

    var axisRange = categoryAxis.axisRanges.create();
    axisRange.axisFill.interactionsEnabled = true;
    axisRange.text = name;
    // first country
    axisRange.category = continentData[0][0];
    // last country
    axisRange.endCategory = continentData[continentData.length - 1][0];

    // every 3rd color for a bigger contrast
    axisRange.axisFill.fill = colorSet.getIndex(index);
    axisRange.grid.disabled = true;
    axisRange.label.interactionsEnabled = false;

    var axisFill = axisRange.axisFill;
    axisFill.innerRadius = -0.001; // almost the same as 100%, we set it in pixels as later we animate this property to some pixel value
    axisFill.radius = -20; // negative radius means it is calculated from max radius
    axisFill.disabled = false; // as regular fills are disabled, we need to enable this one
    axisFill.fillOpacity = 1;
    axisFill.togglable = true;

    axisFill.showSystemTooltip = true;
    axisFill.readerTitle = "click to zoom";
    axisFill.cursorOverStyle = am4core.MouseCursorStyle.pointer;

    axisFill.events.on("hit", function (event) {
        var dataItem = event.target.dataItem;
        if (!event.target.isActive) {
            categoryAxis.zoom({ start: 0, end: 1 });
        }
        else {
            categoryAxis.zoomToCategories(dataItem.category, dataItem.endCategory);
        }
    })

    // hover state
    var hoverState = axisFill.states.create("hover");
    hoverState.properties.innerRadius = -10;
    hoverState.properties.radius = -25;

    var axisLabel = axisRange.label;
    axisLabel.location = 0.5;
    axisLabel.fill = am4core.color("#ffffff");
    axisLabel.radius = 0;
    axisLabel.relativeRotation = 0;
}

var slider = yearSliderContainer.createChild(am4core.Slider);
slider.start = 1;
slider.events.on("rangechanged", function () {
    var start = slider.start;

    chart.startAngle = 270 - start * 179 - 1;
    chart.endAngle = 270 + start * 179 + 1;

    valueAxis.renderer.axisAngle = chart.startAngle;
})


var label = chart.createChild(am4core.Label);
label.text = "Legend \n ANNAPISI: Asian American and Native American Pacific Islander \n ANNH: Alaskan Native and Native Hawaiian \n HSI: Hispanic-Serving Institution \n NASNTI: Native American- Serving Non-Tribal Instituion \n PBI: Predominantly Black Institutions \n HBCU: Historically Black Colleges and Universitites \n TCU: Tribal Colleges and Universities \n SIP: Strengthening Insitutions Program";
label.fontSize = 10;
label.align = "center";
label.isMeasured = false;
label.x = 800;
label.y = 330;