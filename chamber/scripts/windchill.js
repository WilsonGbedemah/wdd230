//Windchill JavaScript in fahrenheit//
const t = parseFloat(document.getElementById("temperature").innerHTML);
const s = parseFloat(document.getElementById("windspeed").innerHTML);
const f = 35.74 + 0.6215*t - 35.75*(Math.pow(s,0.16)) + 0.4275*t*(Math.pow(s,0.16))
if (t<=50 && s>3.0){
        windchill=f.toFixed(2);
    }
else{
    windchill = "N/A";
}
document.getElementById('windchill').innerHTML = windchill;


