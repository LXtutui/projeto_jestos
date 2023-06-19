var previsao1="";
var previsao2="";
Webcam.set({
    width:350,
    height:300,
    image_format : 'png',
    png_quality:90
  });

  var camera = document.getElementById("camera");

Webcam.attach( '#camera' );

function takeSnapshot()
{
    Webcam.snap(function(data_uri) {
        document.getElementById("camera").innerHTML = '<img id="captured_image" src="'+data_uri+'"/>';
    });
}

console.log('ml5 version:', ml5.version);
  
  var classifier = ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/ieTY3PA9y/model.json',modelLoaded);

  function modelLoaded(){
    console.log("modelo carregado");
  }
  function speak(){
    var api_speak=window.speechSynthesis;
    var dado_fala1="a primeira previsão é " + previsao1;
    var dado_fala2="a segunda previsão é " + previsao2;
    var utter_this=new SpeechSynthesisUtterance(dado_fala1+dado_fala2);
    api_speak.speak(utter_this);
  }
  function check(){
    var mostrar_imagem=document.getElementById("captured_image");
    classifier.classify(mostrar_imagem, gotResult());
  }
  function gotResult(error, results){
    if (error){
      console.error(error);
    }else{
      console.log(results);
      
    }
  }