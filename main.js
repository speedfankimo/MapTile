function myFun() {
  var zoomInpt = prompt("請輸入縮放比例，min=1;Max=20:", 15),
    latInput = prompt("請輸入地點的緯度： ", 25.0359625), //預設
    lonInput = prompt("請輸入地點的經度： ", 121.568674); //預設
  var z = parseFloat(zoomInpt), // Zoom level
    lat = parseFloat(latInput), // Latitude
    lon = parseFloat(lonInput); // Longitude
  console.log("Lat=" + lat);
  var
    latRad,
    n,
    xTile,
    yTile;

  latRad = lat * Math.PI / 180;
  console.log(latRad);
  n = Math.pow(2, z);
  xTile = n * ((lon + 180) / 360);
  yTile = n * (1 - (Math.log(Math.tan(latRad) + 1 / Math.cos(latRad)) /
    Math.PI)) / 2;

  //function print(){
  document.write("latRad=" + latRad + "<br>");
  document.write("n=" + n + "<br>" + "<br>");
  document.write("zoom level=" + z + "   //zoom" + "<br>");
  document.write("xTile=" + Math.round(xTile) + "   //Column" + "<br>");
  document.write("yTile=" + Math.round(yTile) + "  //Row" + "<br>"+ "<br>");
  document.write("HERE MAP連結 : https://1.base.maps.ls.hereapi.com/maptile/2.1/maptile/newest/normal.day/"+Math.round(z)+"/"+Math.round(xTile)+"/"+Math.round(yTile)+"/512/png8?apikey=sLDfVHxehQg0HajZ_i5_mgdwkLsXvYOvEQhJzlVqT3w&lg=CHT&lg2=ENG&ppi=72"+ "<br>"+"<br>")
  
  document.write("<img src=\"https://1.base.maps.ls.hereapi.com/maptile/2.1/maptile/newest/normal.day/"+Math.round(z)+"/"+Math.round(xTile)+"/"+Math.round(yTile)+"/512/png8?apikey=sLDfVHxehQg0HajZ_i5_mgdwkLsXvYOvEQhJzlVqT3w&lg=CHT&lg2=ENG&ppi=72\">");
  
 // document.write("<img src=\"https://1.base.maps.cit.api.here.com/maptile/2.1/maptile/newest/normal.day/" + z + "/" + Math.round(xTile) + "/" + Math.round(yTile) + "/512/png8?app_id=DemoAppId01082013GAL&app_code=AJKnXv84fjrb0KIHawS0Tg&lg=CHT&lg2=ENG\" width=\"512\" height=\"512\">" )
  
                 
 // document.write("<img style=\"-webkit-user-select: none; display: block; margin: auto; cursor: zoom-in;\" src=\"https://1.base.maps.cit.api.here.com/maptile/2.1/maptile/newest/normal.day/" + z + "/" + Math.round(xTile) + "/" + Math.round(yTile) + "/512/png8?app_id=DemoAppId01082013GAL&app_code=AJKnXv84fjrb0KIHawS0Tg&lg=CHT&lg2=ENG\" width=\"512\" height=\"512\">" )
  
  // document.getElementById("c").innerHTML = "latRad=" + latRad;
  //document.getElementById("a1").innerHTML = "latRad=" + latRad;
  // document.getElementById("a2").innerHTML = "n=" + n;
  //document.getElementById("a3").innerHTML = "xTile=" + xTile;
  // document.getElementById("a4").innerHTML = "yTile=" + yTile;
}
