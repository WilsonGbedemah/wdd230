//Windchill JavaScript in fahrenheit//
const t = parseFloat(document.getElementById("temperature").value);
const s = parseFloat(document.getElementById("windspeed").value);
const f = 35.74 + 0.6215*t - 35.75*(Math.pow(s,0.16)) + 0.4275*tempF*(Math.pow(s,0.16))
if (t<=50 && s>3.0){
        windchill=f.toFixed(2);
    }
else{
    windchill = "NA";
}
document.getElementById('windchill').innerHTML = windchill;


