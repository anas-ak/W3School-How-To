
// Create a "close" button and append it to each list item

/*The first loop in the code (used with the myNodelist variable) 
creates a 'close' button, works through every list item, 
and appends the button at the end of each item. 
It uses the JavaScript method appendChild() to achieve this task.
The button provides us with the facility to remove any list item 
from the browser’s display.*/

var myNodelist = document.getElementsByTagName("LI");

var i;

for (i = 0; i < myNodelist.length; i++) {

  var span = document.createElement("SPAN");
  var txt = document.createTextNode("\u00D7"); /*The 'x' sign in Unicode*/
  span.className = "close";
  span.appendChild(txt);
  myNodelist[i].appendChild(span);
}


// Click on a close button to hide the current list item

/*The second loop in the code (used with the close variable)
 removes the list item from the browser window.*/
 
var close = document.getElementsByClassName("close");
//console.log(close);

var i;
for (i = 0; i < close.length; i++) {
  close[i].onclick = function() {
    var div = this.parentElement;
    div.style.display = "none";
  }
}


// Add a "checked" symbol when clicking on a list item

var list = document.getElementById('myUL');

//console.log(document.getElementById('myDIV'));
//console.log("LIST:"+ list);

list.addEventListener('click', function(ev) 
{
  if (ev.target.tagName === 'LI') {
    ev.target.classList.toggle('checked',true);
  }
}, false);


// Create a new list item when clicking on the "Add" button

function newElement() 
{
  console.log("This shit don't work");
  var li = document.createElement("li");

  var inputValue = document.getElementById("myInput").value;
  var t = document.createTextNode(inputValue);
      li.appendChild(t);

      if (inputValue === '') {
        alert("You must write something!");} 
      else {
        document.getElementById("myUL").appendChild(li);
      }


  document.getElementById("myInput").value = "";

  var span = document.createElement("SPAN");
  var txt = document.createTextNode("\u00D7");
  span.className = "close";
  span.appendChild(txt);
  li.appendChild(span);

  for (i = 0; i < close.length; i++) {
    close[i].onclick = function() {
      var div = this.parentElement;
      div.style.display = "none";
    }
  }
}

//Clearing the list

function removeAll(){
  var lst = document.getElementsByTagName("ul");
    lst[0].innerHTML = "";
}
