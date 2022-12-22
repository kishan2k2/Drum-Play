var a =new Audio('sound/sounds/boom.wav');
var s =new Audio('sound/sounds/clap.wav');
var d =new Audio('sound/sounds/hihat.wav');
var f =new Audio('sound/sounds/kick.wav');
var g =new Audio('sound/sounds/openhat.wav');
var h =new Audio('sound/sounds/ride.wav');
var j =new Audio('sound/sounds/snare.wav');
var k =new Audio('sound/sounds/tink.wav');
var l =new Audio('sound/sounds/tom.wav');
document.addEventListener('keydown', (event)=>{
    let name=event.key;
    // console.log(name);
    if(name=='a'){
        console.log("yes printed");
        a.play();
        style(name);
        style1(name);
    }
    else if(name=='s'){
        s.play();
        style(name);
        style1(name);
    }
    else if(name=='d'){
        d.play();
        style(name);
        style1(name);
    }
    else if(name=='f'){
        f.play();
        style(name);
        style1(name);
    }
    else if(name=='g'){
        g.play();
        style(name);
        style1(name);
    }
    else if(name=='h'){
        h.play();
        style(name);
        style1(name);
    }
    else if(name=='j'){
        j.play();
        style(name);
        style1(name);
    }
    else if(name=='k'){
        k.play();
        style(name);
        style1(name);
    }
    else if(name=='l'){
        l.play();
        style(name);
        style1(name);
    }
});
function style(char){
    document.getElementById(char).style.borderColor="gold";     
    // document.getElementById(char).style.borderColor="green";     
}
function style1(char){
    setTimeout(function() {
        document.getElementById(char).style.borderColor="green";     
        // document.getElementById(char).style.borderColor="green";     
    }, 1000); 
}
// I couldn't do it for a specific time period