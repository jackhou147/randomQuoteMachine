function fadeOutIn(el,str2){
    function fadeOut(el){
        if(!el.style.opacity){
            el.style.opacity = 1;
        }
        clearInterval(outInterval);
        var outInterval = setInterval(function(){
            if(el.style.opacity <= 0){
                clearInterval(outInterval);
                el.innerHTML = str2;
                fadeIn(el);
            }else{
                el.style.opacity = Number(el.style.opacity) - 0.1;
            }
        },40);
        
    };
    function fadeIn(el){
        if(!el.style.opacity){
            el.style.opacity = 0;
        }
        clearInterval(inInterval);
        var inInterval = setInterval(function(){
            if(el.style.opacity >= 1){
                clearInterval(inInterval);
            }else {
                el.style.opacity = Number(el.style.opacity) + 0.1
            }
        },40)
    };
    fadeOut(el);
    /*el.innerHTML = str2;*/
};
function randomColor(){
    var red = Math.floor(Math.random()*256),
        green = Math.floor(Math.random()*256),
        blue = Math.floor(Math.random()*256);
    var color = "rgb("+red+","+green+","+blue+")";
    return color;
};