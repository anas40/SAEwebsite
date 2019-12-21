const car_move = () => {
    let car = document.getElementById("sidecar").style;
    var pScrollpos = window.pageYOffset;
    var distance = 200;
    var prevScrollpos = window.pageYOffset;

    console.log("I am car moving");
    window.onscroll = () => {

        var cScrollPos = window.pageYOffset;
        if (cScrollPos < 2040) {
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
        //program for scroll bar
        var currentScrollPos = window.pageYOffset;
        if (prevScrollpos > currentScrollPos - 2) {
            document.getElementById("navbar").style.top = "0";
        } else {
            document.getElementById("navbar").style.top = "-80px";
        }
        prevScrollpos = currentScrollPos;

    }
}