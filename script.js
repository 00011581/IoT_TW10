// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDYf0wIMzzWM5KEV5OW9appxV21LHzcXbQ",
    authDomain: "iotwifiproject.firebaseapp.com",
    databaseURL: "https://iotwifiproject-default-rtdb.firebaseio.com",
    projectId: "iotwifiproject",
    storageBucket: "iotwifiproject.appspot.com",
    messagingSenderId: "361934233220",
    appId: "1:361934233220:web:c304e54f8054afbb70acd1",
    measurementId: "G-TNKM01PQ1N"
};

firebase.initializeApp(firebaseConfig);
var database = firebase.database();
var dataRef1 = database.ref('temp');
var dataRef2 = database.ref('hum');
var dataRef3 = database.ref('LED');

var opts = {
    angle: 0.15, // The span of the gauge arc
    lineWidth: 0.44, // The line thickness
    radiusScale: 1, // Relative radius
    pointer: {
    length: 0.6, // // Relative to gauge radius
    strokeWidth: 0.035, // The thickness
    color: '#000000' // Fill color
    },
    limitMax: true,     // If false, max value increases automatically if value > maxValue
    limitMin: true,     // If true, the min value of the gauge will be fixed
    colorStart: '#6FADCF',   // Colors
    colorStop: '#8FC0DA',    // just experiment with them
    strokeColor: '#E0E0E0',  // to see which ones work best for you
    generateGradient: true,
    highDpiSupport: true,     // High resolution support
    
};
var target = document.getElementById('humidity'); // your canvas element
var gauge = new Gauge(target).setOptions(opts); // create sexy gauge!
gauge.maxValue = 100; // set max gauge value
gauge.setMinValue(0);  // Prefer setter over gauge.minValue = 0
gauge.animationSpeed = 32; // set animation speed (32 is default value)
// gauge.set(59); // set actual value

//fetch the data
dataRef2.on('value', function(getdata1){
    var humi = getdata1.val();
    document.getElementById('humidity-value').innerHTML = humi + "%";
    gauge.set(humi);
})

dataRef1.on('value', function(getdata2){
    var temp = getdata2.val();
    document.getElementById('temperature').innerHTML = temp + "&#8451;";
})

var index = 0;
var btn = document.getElementById("led");

function press() {
    index++;
    if (index % 2 == 1) {
        database.ref('LED').set("1");
        document.getElementById('led').innerHTML="turn off";
    }
    else {
        database.ref('LED').set("0");
        document.getElementById('led').innerHTML="turn on";
    }
}
