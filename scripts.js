var slideIndex = 1;
showDivs(slideIndex,"project");

function plusDivs(n,string) {
    showDivs(slideIndex += n,string);
}

function showDivs(n,string) {
    var i;
    var x = document.getElementsByClassName(string);
    if (n > x.length) {slideIndex = 1}
    if (n < 1) {slideIndex = x.length} ;
    for (i = 0; i < x.length; i++) {
        x[i].style.display = "none";
    }
    //x[slideIndex-1].style.display = "block";
    unfade(x[slideIndex-1])
}

function unfade(element) {
    var op = 0.1;  // initial opacity
    element.style.opacity = op;
    element.style.display = 'block';
    var timer = setInterval(function () {
        if (op >= 1){
            clearInterval(timer);
        }
        element.style.opacity = op;
        element.style.filter = 'alpha(opacity=' + op * 100 + ")";
        op += op * 0.1;
    }, 30);
}
