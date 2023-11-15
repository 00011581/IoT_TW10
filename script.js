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

//fetch the data
dataRef1.on('value', function(getdata1){
    var humi = getdata1.val();
    document.getElementById('humidity').innerHTML = humi + "%";
})

dataRef2.on('value', function(getdata2){
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

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
