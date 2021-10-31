m = 0;
var x;

function start() {
    x = setInterval(run,100)
   
    function run() {

        if(m==1200) {
            clearInterval(x);
            m=0;
        }
        else {
            m+=5;
            var car = document.getElementById("car");
            car.style.marginLeft = m + 'px';
        }
    }
}

function stop() {
    clearInterval(x);
}
