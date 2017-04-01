window.onload = function(){
   mainfn();
}
function mainfn(){
    var oWrap = document.getElementById("wrap");
    var Slide = document.getElementById("slide");
    var aFigure = oWrap.getElementsByTagName("figure");
    var aSlide = Slide.getElementsByTagName("div");

    var timer;
    var num =0;

    clearInterval(timer);

    autoPlay();
    function autoPlay(){
        timer = setInterval(function(){
            for(var i=0; i<aFigure.length; i++){
                aFigure[i].style.opacity = "0";
                aFigure[i].style.transition = "all 1s";
                aSlide[i].className = "";
            }

            aFigure[num].style.opacity = "1";
            aFigure[num].style.transition = "all 1s";
            aSlide[num].className = "active";

            num++;
            if(num>aFigure.length-1){
                num=0;
            }
        },3000);
    }

    for(var i=0; i<aSlide.length; i++){
        (function(){
            var j = i;
            aSlide[j].onclick = function(){
                for(var i=0; i<aFigure.length; i++){
                    aFigure[i].style.opacity = "0";
                    aSlide[i].className = "";
                }
                aFigure[j].style.opacity = "1";
                aSlide[j].className = "active";
                num = j;
            }
        })();
    }
}

