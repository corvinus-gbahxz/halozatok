var kérdések;
var jelenlegiKérdés;
var clickable = true;

window.onload = function letöltés(){
    fetch("questions.json")
            .then(r => r.json())
            .then(d => letöltésBefejeződött(d));
}


function letöltésBefejeződött(d) {
        console.log("sikeres letöltés")
        console.log(d)
        kérdések = d;
        jelenlegiKérdés = 0;
        kérdésMegjelenítés(jelenlegiKérdés);
}

function kérdésMegjelenítés(k){
       document.getElementById("kérdés_szöveg").innerText = kérdések[k].questionText;
       document.getElementById("válasz1").innerText = kérdések[k].answer1;
       document.getElementById("válasz2").innerText = kérdések[k].answer2;
       document.getElementById("válasz3").innerText = kérdések[k].answer3;
       if(kérdések[k].image===""){
        document.getElementById("tesztKep").style.display = "none";
       }else{
        document.getElementById("tesztKep").style.display = "inline";
       document.getElementById("tesztKep").src = "https://szoft1.comeback.hu/hajo/"+kérdések[k].image;
       }
}

function prevQuestion(){
    if(jelenlegiKérdés===0){
        jelenlegiKérdés=kérdések.length-1;
    }else{
        jelenlegiKérdés--;
    }
    document.getElementById("válasz1").style.backgroundColor="#444444";
    document.getElementById("válasz2").style.backgroundColor="#444444";
    document.getElementById("válasz3").style.backgroundColor="#444444";
    clickable = true;
    kérdésMegjelenítés(jelenlegiKérdés);
}

function nextQuestion(){
    if(jelenlegiKérdés===(kérdések.length-1)){
        jelenlegiKérdés=0;
    }else{
        jelenlegiKérdés++;
    }
    document.getElementById("válasz1").style.backgroundColor="#444444";
    document.getElementById("válasz2").style.backgroundColor="#444444";
    document.getElementById("válasz3").style.backgroundColor="#444444";
    clickable = true;
    kérdésMegjelenítés(jelenlegiKérdés);
}

function correctAnswer(clicked_id){
    if(clickable){
        document.getElementById(clicked_id).style.backgroundColor="orange";
        setTimeout(function(){
            document.getElementById(clicked_id).style.backgroundColor="red";
            document.getElementById('válasz'+kérdések[jelenlegiKérdés].correctAnswer).style.backgroundColor="green";
            clickable=false;
        },2500);
    }
}




