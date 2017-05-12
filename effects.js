function fadeOutIn(el,str2){
    function fadeOut(el){
        clearInterval(outInterval);
        if(!el.style.opacity){
            el.style.opacity = 1;
        }
        var outInterval = setInterval(function(){
            if(Number(el.style.opacity).toFixed(1)<= 0.1){
                clearInterval(outInterval);
                el.innerHTML = str2;
                fadeIn(el);
            }else{
                el.style.opacity = Number(el.style.opacity) - 0.1;
            }
        },40);
        
    };
    function fadeIn(el){
        clearInterval(inInterval);
        var inInterval = setInterval(function(){
            if(Number(el.style.opacity).toFixed(1)>= 1){
                clearInterval(inInterval);
            }else {
                el.style.opacity = Number(el.style.opacity) + 0.1
            }
        },40)
    };
    fadeOut(el);
};
function randomColor(){
    var red = Math.floor(Math.random()*256),
        green = Math.floor(Math.random()*256),
        blue = Math.floor(Math.random()*256);
    var color = "rgb("+red+","+green+","+blue+")";
    return color;
};