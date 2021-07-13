Webcam.set({
width:350,
    height:300,
image_format:'png',
    png_quality:90
});
camera=document.getElementById("camera");
Webcam.attach("#camera");
function clickphoto() {
 Webcam.snap(function(data_uri){
     document.getElementById("result").innerHTML="<img id='amogh' src='"+data_uri+"'>";
 });  
}
console.log(ml5.version);
classifier=ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/dcIsldGXw/model.json',modelLoaded);
function modelLoaded() {
    console.log("modelLoaded");
}
function processphoto() {
img=document.getElementById("amogh");
    classifier.classify(img,gotResult);
}
function gotResult(error,results) {
    if(error) {
     console.error(error);   
    }
    else {
     console.log(results);
        document.getElementById("resultobjectname").innerHTML=results[0].label;
        document.getElementById("resultaccuracy").innerHTML=results[0].confidence.toFixed(3);
    }
}  