var dataset = ee.ImageCollection('NOAA/DMSP-OLS/NIGHTTIME_LIGHTS').filter(ee.Filter.date('2013-01-01', '2013-12-31'));
var nighttimeLights = dataset.select('avg_vis');
var nighttimeLightsVis = {
  min: 3.0,
  max: 60.0,
};
Map.setCenter(140.82, 38.1, 5);
Map.addLayer(nighttimeLights, nighttimeLightsVis, 'Nighttime Lights');