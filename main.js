var previsao1="";
Webcam.set({
    width:350,
    height:300,
    image_format : 'png',
    png_quality:90
  });

  var camera = document.getElementById("camera");

Webcam.attach( '#camera' );

function tirar_foto()
{
    Webcam.snap(function(data_uri) {
        document.getElementById("result").innerHTML = '<img id="captured_image" src="'+data_uri+'"/>';
    });
}

console.log('ml5 version:', ml5.version);
  
  var classifier = ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/ieTY3PA9y/model.json',modelLoaded);

  function modelLoaded(){
    console.log("modelo carregado");
  }
  function speak(){
    var api_speak=window.speechSynthesis;
    var dado_fala1="a previsão é " + previsao1;
    var utter_this=new SpeechSynthesisUtterance(dado_fala1);
    api_speak.speak(utter_this);
  }
  function checar(){
    var mostrar_imagem=document.getElementById("captured_image");
    classifier.classify(mostrar_imagem, gotResult);
  }
  function gotResult(error, results){
    if (error){
      console.error(error);
    }else{
      console.log(results);
      document.getElementById("result_emotion_name").innerHTML=results[0].label;
      previsao1=results[0].label;
      if(previsao1=="vitoria"){
        document.getElementById("update_emoji").innerHTML="&#9996;";
      }
      if(previsao1=="tranquilo"){
        document.getElementById("update_emoji").innerHTML="&#129305;";
      }
      if(previsao1=="legal"){
        document.getElementById("update_emoji").innerHTML="&#128077;";
      }
    }
    }