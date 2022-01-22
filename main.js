Webcam.set({
    width:350,height:300,image_format:"png",png_quality:90
});

camera=document.getElementById("camera");

Webcam.attach(camera);

function capture(){
    Webcam.snap(function(data_url){
document.getElementById("result").innerHTML="<img id='pic' src='"+data_url+"'>";
    });
}

console.log('ml5 version',ml5.version);
classifier=ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/FiflT--az/model.json",modelLoaded)

function modelLoaded(){
    console.log("model is loaded");
}

function check(){
    img=document.getElementById("pic");
    classifier.classify(img,getResult);
}

function getResult(error,result){
    if(error){
        console.log(error);
    }
    else{
        console.log(result);
        document.getElementById("obj_result_label").innerHTML=result[0].label;
        document.getElementById("obj_accuracy").innerHTML=result[0].confidence.toFixed(3);
    }
}