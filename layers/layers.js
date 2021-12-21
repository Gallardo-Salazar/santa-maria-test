var wms_layers = [];


        var lyr_GoogleSatellite_0 = new ol.layer.Tile({
            'title': 'Google Satellite',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'http://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });
var format_OSAVI_1 = new ol.format.GeoJSON();
var features_OSAVI_1 = format_OSAVI_1.readFeatures(json_OSAVI_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_OSAVI_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_OSAVI_1.addFeatures(features_OSAVI_1);
var lyr_OSAVI_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_OSAVI_1, 
                style: style_OSAVI_1,
                interactive: false,
    title: 'OSAVI<br />\
    <img src="styles/legend/OSAVI_1_0.png" /> 0.2 - 0.277<br />\
    <img src="styles/legend/OSAVI_1_1.png" /> 0.277 - 0.29<br />\
    <img src="styles/legend/OSAVI_1_2.png" /> 0.29 - 0.303<br />\
    <img src="styles/legend/OSAVI_1_3.png" /> 0.303 - 0.483<br />'
        });
var format_NDRE_2 = new ol.format.GeoJSON();
var features_NDRE_2 = format_NDRE_2.readFeatures(json_NDRE_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_NDRE_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_NDRE_2.addFeatures(features_NDRE_2);
var lyr_NDRE_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_NDRE_2, 
                style: style_NDRE_2,
                interactive: false,
    title: 'NDRE<br />\
    <img src="styles/legend/NDRE_2_0.png" /> 0.2 - 0.254<br />\
    <img src="styles/legend/NDRE_2_1.png" /> 0.254 - 0.265<br />\
    <img src="styles/legend/NDRE_2_2.png" /> 0.265 - 0.278<br />\
    <img src="styles/legend/NDRE_2_3.png" /> 0.278 - 0.345<br />'
        });
var format_NDVI_3 = new ol.format.GeoJSON();
var features_NDVI_3 = format_NDVI_3.readFeatures(json_NDVI_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_NDVI_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_NDVI_3.addFeatures(features_NDVI_3);
var lyr_NDVI_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_NDVI_3, 
                style: style_NDVI_3,
                interactive: false,
    title: 'NDVI<br />\
    <img src="styles/legend/NDVI_3_0.png" /> 0.403 - 0.55<br />\
    <img src="styles/legend/NDVI_3_1.png" /> 0.55 - 0.569<br />\
    <img src="styles/legend/NDVI_3_2.png" /> 0.569 - 0.7<br />\
    <img src="styles/legend/NDVI_3_3.png" /> 0.7 - 0.807<br />'
        });
var format_Tablas_4 = new ol.format.GeoJSON();
var features_Tablas_4 = format_Tablas_4.readFeatures(json_Tablas_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Tablas_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Tablas_4.addFeatures(features_Tablas_4);
var lyr_Tablas_4 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Tablas_4, 
                style: style_Tablas_4,
                interactive: true,
                title: '<img src="styles/legend/Tablas_4.png" /> Tablas'
            });

lyr_GoogleSatellite_0.setVisible(true);lyr_OSAVI_1.setVisible(true);lyr_NDRE_2.setVisible(true);lyr_NDVI_3.setVisible(true);lyr_Tablas_4.setVisible(true);
var layersList = [lyr_GoogleSatellite_0,lyr_OSAVI_1,lyr_NDRE_2,lyr_NDVI_3,lyr_Tablas_4];
lyr_OSAVI_1.set('fieldAliases', {'id': 'id', 'left': 'left', 'top': 'top', 'right': 'right', 'bottom': 'bottom', 'osavi_mean': 'osavi_mean', });
lyr_NDRE_2.set('fieldAliases', {'id': 'id', 'left': 'left', 'top': 'top', 'right': 'right', 'bottom': 'bottom', 'NDREmean': 'NDREmean', });
lyr_NDVI_3.set('fieldAliases', {'id': 'id', 'left': 'left', 'top': 'top', 'right': 'right', 'bottom': 'bottom', 'ndvi_mean': 'ndvi_mean', });
lyr_Tablas_4.set('fieldAliases', {'id': 'id', 'area': 'area', });
lyr_OSAVI_1.set('fieldImages', {'id': 'Hidden', 'left': 'Hidden', 'top': 'Hidden', 'right': 'Hidden', 'bottom': 'Hidden', 'osavi_mean': 'Hidden', });
lyr_NDRE_2.set('fieldImages', {'id': 'Hidden', 'left': 'Hidden', 'top': 'Hidden', 'right': 'Hidden', 'bottom': 'Hidden', 'NDREmean': 'Hidden', });
lyr_NDVI_3.set('fieldImages', {'id': '', 'left': '', 'top': '', 'right': '', 'bottom': '', 'ndvi_mean': '', });
lyr_Tablas_4.set('fieldImages', {'id': 'Hidden', 'area': 'TextEdit', });
lyr_OSAVI_1.set('fieldLabels', {});
lyr_NDRE_2.set('fieldLabels', {});
lyr_NDVI_3.set('fieldLabels', {'id': 'no label', 'left': 'no label', 'top': 'no label', 'right': 'no label', 'bottom': 'no label', 'ndvi_mean': 'no label', });
lyr_Tablas_4.set('fieldLabels', {'area': 'inline label', });
lyr_Tablas_4.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});