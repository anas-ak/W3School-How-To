function myFunction(imgs) {

    var expandImg = document.getElementById("expandedImg");
    var imgText = document.getElementById("imgText");

    expandImg.src = imgs.src;
    imgText.innerHTML = imgs.alt;
    expandImg.parentElement.style.display = "block";
}