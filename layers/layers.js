ol.proj.proj4.register(proj4);
ol.proj.get("EPSG:32717").setExtent([344775.591360, 9012244.168702, 1287512.996733, 9525078.065659]);
var wms_layers = [];


        var lyr_ESRISatellite_0 = new ol.layer.Tile({
            'title': 'ESRI Satellite',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}'
            })
        });
var format_LimiteProvincial_1 = new ol.format.GeoJSON();
var features_LimiteProvincial_1 = format_LimiteProvincial_1.readFeatures(json_LimiteProvincial_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32717'});
var jsonSource_LimiteProvincial_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_LimiteProvincial_1.addFeatures(features_LimiteProvincial_1);
var lyr_LimiteProvincial_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_LimiteProvincial_1, 
                style: style_LimiteProvincial_1,
                interactive: false,
                title: '<img src="styles/legend/LimiteProvincial_1.png" /> Limite Provincial'
            });
var format_Limitedistrital_2 = new ol.format.GeoJSON();
var features_Limitedistrital_2 = format_Limitedistrital_2.readFeatures(json_Limitedistrital_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32717'});
var jsonSource_Limitedistrital_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Limitedistrital_2.addFeatures(features_Limitedistrital_2);
var lyr_Limitedistrital_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Limitedistrital_2, 
                style: style_Limitedistrital_2,
                interactive: true,
                title: '<img src="styles/legend/Limitedistrital_2.png" /> Limite distrital'
            });
var format_Plantaciones2023_3 = new ol.format.GeoJSON();
var features_Plantaciones2023_3 = format_Plantaciones2023_3.readFeatures(json_Plantaciones2023_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32717'});
var jsonSource_Plantaciones2023_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Plantaciones2023_3.addFeatures(features_Plantaciones2023_3);
var lyr_Plantaciones2023_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Plantaciones2023_3, 
                style: style_Plantaciones2023_3,
                interactive: false,
                title: '<img src="styles/legend/Plantaciones2023_3.png" /> Plantaciones 2023'
            });

lyr_ESRISatellite_0.setVisible(true);lyr_LimiteProvincial_1.setVisible(true);lyr_Limitedistrital_2.setVisible(true);lyr_Plantaciones2023_3.setVisible(true);
var layersList = [lyr_ESRISatellite_0,lyr_LimiteProvincial_1,lyr_Limitedistrital_2,lyr_Plantaciones2023_3];
lyr_LimiteProvincial_1.set('fieldAliases', {'PROV_ID': 'PROV_ID', 'PROVINCIA': 'PROVINCIA', 'AREA_Km2': 'AREA_Km2', 'AREA_Ha': 'AREA_Ha', });
lyr_Limitedistrital_2.set('fieldAliases', {'IDDPTO': 'IDDPTO', 'DEPART': 'DEPART', 'PROV_ID': 'PROV_ID', 'PROVINCIA': 'PROVINCIA', 'DIST_ID': 'DIST_ID', 'DISTRITO': 'DISTRITO', 'AREA_Km2': 'AREA_Km2', 'AREA_Ha': 'AREA_Ha', });
lyr_Plantaciones2023_3.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'Año': 'Año', 'Fecha': 'Fecha', 'Departam': 'Departam', 'Provincia': 'Provincia', 'Distrito': 'Distrito', 'Localidad': 'Localidad', 'Técn_Camp': 'Técn_Camp', 'Nomb_benef': 'Nomb_benef', 'DNI': 'DNI', 'Celular': 'Celular', 'Áreas__ha': 'Áreas__ha', 'N°_Planta': 'N°_Planta', 'Avanca_ha': 'Avanca_ha', 'Especie': 'Especie', 'X': 'X', 'Y': 'Y', 'Macizo_f': 'Macizo_f', 'Agroforest': 'Agroforest', 'F_Plantn': 'F_Plantn', 'N°_F': 'N°_F', 'Shape_Length': 'Shape_Length', 'Shape_Area': 'Shape_Area', });
lyr_LimiteProvincial_1.set('fieldImages', {'PROV_ID': 'TextEdit', 'PROVINCIA': 'TextEdit', 'AREA_Km2': 'TextEdit', 'AREA_Ha': 'TextEdit', });
lyr_Limitedistrital_2.set('fieldImages', {'IDDPTO': 'TextEdit', 'DEPART': 'TextEdit', 'PROV_ID': 'TextEdit', 'PROVINCIA': 'TextEdit', 'DIST_ID': 'TextEdit', 'DISTRITO': 'TextEdit', 'AREA_Km2': 'TextEdit', 'AREA_Ha': 'TextEdit', });
lyr_Plantaciones2023_3.set('fieldImages', {'OBJECTID': 'TextEdit', 'Año': 'TextEdit', 'Fecha': 'TextEdit', 'Departam': 'TextEdit', 'Provincia': 'TextEdit', 'Distrito': 'TextEdit', 'Localidad': 'TextEdit', 'Técn_Camp': 'TextEdit', 'Nomb_benef': 'TextEdit', 'DNI': 'TextEdit', 'Celular': 'TextEdit', 'Áreas__ha': 'TextEdit', 'N°_Planta': 'TextEdit', 'Avanca_ha': 'TextEdit', 'Especie': 'TextEdit', 'X': 'TextEdit', 'Y': 'TextEdit', 'Macizo_f': 'TextEdit', 'Agroforest': 'TextEdit', 'F_Plantn': 'TextEdit', 'N°_F': 'TextEdit', 'Shape_Length': 'TextEdit', 'Shape_Area': 'TextEdit', });
lyr_LimiteProvincial_1.set('fieldLabels', {'PROV_ID': 'no label', 'PROVINCIA': 'inline label - visible with data', 'AREA_Km2': 'no label', 'AREA_Ha': 'no label', });
lyr_Limitedistrital_2.set('fieldLabels', {'IDDPTO': 'no label', 'DEPART': 'no label', 'PROV_ID': 'no label', 'PROVINCIA': 'no label', 'DIST_ID': 'no label', 'DISTRITO': 'inline label - always visible', 'AREA_Km2': 'no label', 'AREA_Ha': 'no label', });
lyr_Plantaciones2023_3.set('fieldLabels', {'OBJECTID': 'hidden field', 'Año': 'inline label - always visible', 'Fecha': 'hidden field', 'Departam': 'inline label - always visible', 'Provincia': 'inline label - always visible', 'Distrito': 'inline label - always visible', 'Localidad': 'inline label - visible with data', 'Técn_Camp': 'inline label - always visible', 'Nomb_benef': 'inline label - always visible', 'DNI': 'inline label - always visible', 'Celular': 'inline label - always visible', 'Áreas__ha': 'inline label - always visible', 'N°_Planta': 'inline label - always visible', 'Avanca_ha': 'inline label - always visible', 'Especie': 'inline label - always visible', 'X': 'inline label - always visible', 'Y': 'inline label - always visible', 'Macizo_f': 'inline label - always visible', 'Agroforest': 'inline label - always visible', 'F_Plantn': 'inline label - always visible', 'N°_F': 'hidden field', 'Shape_Length': 'hidden field', 'Shape_Area': 'hidden field', });
lyr_Plantaciones2023_3.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});