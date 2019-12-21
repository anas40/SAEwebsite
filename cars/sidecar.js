const car_move = () => {
    let car = document.getElementById("sidecar").style;
    let height_main = document.getElementById("main").clientHeight;
    document.getElementById("path").style.height = height_main;
    var pScrollpos = window.pageYOffset;
    var distance = 200;
    
    window.onscroll = () => {

        var cScrollPos = window.pageYOffset;
        if (cScrollPos < height_main - 300) {
            distance += cScrollPos - pScrollpos;
            if(cScrollPos<pScrollpos){
                document.getElementById("sidecar").style.transform = "rotate(270deg)";
            }
            else{
                document.getElementById("sidecar").style.transform = "rotate(90deg)";
            
            }
            pScrollpos = cScrollPos;
        }
        car.top = distance + "px";
    }
}