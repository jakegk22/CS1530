window.onscroll = function() {myFunction()};

var header = document.getElementById("myHeader");
var sticky = header.offsetTop;

function openNav() {
  document.getElementById("myside-menu").style.width = "250px";
  document.getElementById("myfeed").style.marginLeft = "250px";
  document.getElementById("myfeed").style.opacity = ".5";
  document.getElementById("myheader").style.marginLeft="250px";
  document.getElementById("myheader").style.opacity =".5";

}

function closeNav() {
  document.getElementById("myside-menu").style.width = "0";
  document.getElementById("myfeed").style.marginLeft= "0";
  document.getElementById("myfeed").style.opacity = "1";
  document.getElementById("myheader").style.marginLeft="0";
  document.getElementById("myheader").style.opacity ="1";
}

function stickyHeader(){
    if (window.pageYOffset > sticky) {
        header.classList.add("sticky");
    } else {
        header.classList.remove("sticky");
    }
}
