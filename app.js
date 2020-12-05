
function include(file) { 
  
    var script  = document.createElement('script'); 
    script.src  = file; 
    script.type = 'text/javascript'; 
    script.defer = true; 
    
    document.getElementsByTagName('head').item(0).appendChild(script); 
    
  } 

include("https://code.responsivevoice.org/responsivevoice.js?key=7SRqb20d"); 

var url="https://api.funtranslations.com/translate/minion.json";
//var url="https://lessonfourapi.tanaypratap.repl.co/translate/yoda.json";
var inpTxt=document.querySelector("#input-txt");
var opTxt=document.querySelector("#output-txt")
var btnClick=document.querySelector("#btn");
var spk=document.querySelector("#btnSpeak");
var media=document.querySelector("#showMinion");
var output;
var ip;
function refresh(){
    location.reload();
}
function startSpeaking() {
    responsiveVoice.speak(output, "Japanese Male", {pitch: 2}, {rate: 1.5});
    refresh();
};
function errorHandle(error){
    console.log("Error occured:",error);
    alert("Oops!! Something went wrong please try again later");
}

function eventHandler() {
    ip=inpTxt.value;
    var urlUpdate=""+url+"?text="+ip;
    fetch(urlUpdate)
    .then (r => r.json())
    .then (json => 
        {output=json.contents.translated
            opTxt.innerText=""+output})
    .catch(errorHandle);
    document.getElementById("btnSpeak").disabled = false; 
};
btnClick.addEventListener("click",eventHandler);
spk.addEventListener("click",startSpeaking);


