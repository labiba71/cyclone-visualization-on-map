mapWidth = 1024;
mapHeight = 700;
mapLongitudeStart = 90.412521; 
mapLatitudeStart = 23.810331;
mapLongitude = 94.01-mapLongitudeStart;
mapLatitude = mapLatitudeStart-20.5;
var vartices = [];

function getPositionOnScreen(longitude, latitude){
	longitude = longitude - mapLongitudeStart;
	latitude = latitude-mapLatitudeStart;
	
	 x =(mapWidth*(longitude/mapLongitude));
     y = (mapHeight*(latitude/mapLatitude));
	
	//console.log('value of x= ');
	//console.log(x);
	//console.log('value of y= ');
	//console.log(y);
	
	x = x /799.61279;
	y = y/630.7586;
	console.log('value of x= ');
	console.log(x);
	console.log('value of y= ');
	console.log(y);
	vartices.push(x,y,0);
	console.log(vartices);
}



getPositionOnScreen(90.412521, 23.810331);//Dhaka
//x=0,y=0

getPositionOnScreen(92.294665, 20.861237);//Teknaf
//x = 535.740571661431 , y = -623.6131069672491

getPositionOnScreen(91.832369, 24.854341);//sylet
//x = 404.1508934451039, y= 220.76553673937735





























/*getPositionOnScreen(90.412521, 23.810331);//Dhaka
//x=0,y=0,
getPositionOnScreen(91.832369, 24.854341);//sylet
//x = 414.49399426654116, y= 229.3484548826077
getPositionOnScreen(91.783180, 22.356852);//chittagong
//x = 390.14955083824 , y= -307.35153070795655
getPositionOnScreen(92.203995, 21.055664);//teknaf
//x = 509.9319206588849, y= -582.4997258582299
getPositionOnScreen(88.679893, 22.000990);//sundarban
//x = -493.1817731250099, y= -382.60183045139575


/*function latLonToXyz (lat, lon, out) {
  out = out || [0, 0, 0];
  const phi = (lon + 90) / 180 * Math.PI;
  const theta = (90 - lat) / 180 * Math.PI;
  out[0] = Math.sin(theta) * Math.sin(phi);
  out[1] = Math.cos(theta);
  out[2] = Math.sin(theta) * Math.cos(phi);
  console.log(out[0]);
  console.log(out[1]);
  console.log(out[2]);



  return out

}

module.exports = latLonToXyz

var latLonToXyz = require('latlon-to-xyz')

var pos = latLonToXyz(51.507222, -0.1275)


function calcPosFromLatLonRad(radius,lat,lon){

    var phi   = (90-lat)*(Math.PI/180)
    var theta = (lon+180)*(Math.PI/180)

    x = -( Math.sin(phi)*Math.cos(theta) * radius)
    z = ( Math.sin(phi)*Math.sin(theta) * radius)
    y = ( Math.cos(phi) * radius)
	
	console.log(x);
	console.log(y);
	console.log(z);

    return [x,y,z]

}

calcPosFromLatLonRad(6378, 39.059479, -80.873016); //Teknaf
//x = 785.5756607968916 , y= 4018.9487969801 , z = 4889.765377644999
//x= 827.5874905 , y = 1444.08472,

calcPosFromLatLonRad(6378, 23.810331, 90.412521); //Dhaka
//x= -42.01182970815189,y = 2574.8640774232895,z = -5834.997342669461,
//x = 0.0,y = 0.0,z = 0.0,
calcPosFromLatLonRad(6378,24.894930, 91.868706); //sylet
//x = -188.65662540087965,y = 2684.854491734654,z = -5782.287526222179,
//x = -146.64479259,y = 109.9904,z = 52.70981645,
calcPosFromLatLonRad(6378, 22.356852, 91.783180); //chittagong
//x = -183.54821001801324,y = 2426.02547509626,z = -5895.726795636238,
//x = -141.5363803,y = 2426.02547509626,z = -60.72945297,
calcPosFromLatLonRad(6378, 21.055664, 92.203995); //teknaf
//x = -228.90480948436735,y = 2291.4544984018134,z = -5947.749395355273,
//x = -186.8929798,y = 2291.4544984018134,z = -112.7519969,
calcPosFromLatLonRad(6378, 22.000990, 88.679893); //sundarban
//x = 136.23710926667906,y = 2389.3430317534175,z = -5911.967804941942
//x = 136.23710926667906,y = 2389.3430317534175,z = -76.97046227*/



