var size = 0;
var placement = 'point';

var style_LimiteProvincial_1 = function(feature, resolution){
    var context = {
        feature: feature,
        variables: {}
    };
    var value = ""
    var labelText = "";
    size = 0;
    var labelFont = "15.600000000000001px \'Comic Sans MS\', sans-serif";
    var labelFill = "#d1d1d1";
    var bufferColor = "";
    var bufferWidth = 0;
    var textAlign = "left";
    var offsetX = 8;
    var offsetY = 3;
    var placement = 'point';
    if (feature.get("PROVINCIA") !== null && resolution > 84 && resolution < 560) {
        labelText = String(feature.get("PROVINCIA"));
    }
    var style = [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(176,174,171,1.0)', lineDash: [10.45,2.09,4.18,2.09,4.18,2.09], lineCap: 'butt', lineJoin: 'miter', width: 2.09}),fill: new ol.style.Fill({color: 'rgba(230,245,201,0.0)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];

    return style;
};
