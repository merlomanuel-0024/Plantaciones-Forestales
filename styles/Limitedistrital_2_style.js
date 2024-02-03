var size = 0;
var placement = 'point';

var style_Limitedistrital_2 = function(feature, resolution){
    var context = {
        feature: feature,
        variables: {}
    };
    var value = ""
    var labelText = "";
    size = 0;
    var labelFont = "14.3px \'Arial\', sans-serif";
    var labelFill = "#faf31e";
    var bufferColor = "";
    var bufferWidth = 0;
    var textAlign = "left";
    var offsetX = 8;
    var offsetY = 3;
    var placement = 'point';
    if (feature.get("DISTRITO") !== null && resolution > 0 && resolution < 140) {
        labelText = String(feature.get("DISTRITO"));
    }
    var style = [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(249,225,103,1.0)', lineDash: [4.18,2.09], lineCap: 'butt', lineJoin: 'miter', width: 2.09}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];

    return style;
};
