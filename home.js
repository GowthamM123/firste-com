var slide=document.querySelector(".slide")

function showslide(){
    slide.style.left="0%"
}
function closeslide(){
    slide.style.left="-100%"
}

var box = document.getElementById("item");
var search = document.getElementById("s_input");
var productlist = box.querySelectorAll("div");
var noresult = document.getElementById("no_result");
search.addEventListener("keyup", function(event) {
    var enteredElements = event.target.value.toUpperCase();
    var flag=1
    for (var count = 0; count < productlist.length; count++) {
        var productname = productlist[count].querySelector("h2").textContent.toUpperCase();
        if (productname.toUpperCase().indexOf(enteredElements) < 0) {
            productlist[count].style.display = "none"
            
        } else {
            productlist[count].style.display = "block"
            flag=0
            
        }
    }
    if (flag==1) {
        noresult.style.display = "block"
    } else {
        noresult.style.display = "none"
    }
})
var item=document.getElementById("item")
function link(){
location.href="https://youtu.be/1kETt59yn6A?si=cQ2hGBBC11mrXgTc"
}

