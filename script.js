//Selectig an Element



var overlay = document.querySelector(".overlay");
var popup = document.querySelector(".popup");
var addpopup = document.getElementById("addpopup");

addpopup.addEventListener("click",function(event){
    event.preventDefault();
    overlay.style.display="block";
    popup.style.display="block";
})

//Search for Cancel Button
var btncancel = document.getElementById("btncancel");

btncancel.addEventListener("click", function(event){
    event.preventDefault();
    overlay.style.display="none";
    popup.style.display="none";

})

var container = document.querySelector(".container");
var bookname = document.getElementById("bookname").value;
    var authorname = document.getElementById("authorname").value;
    var shortnotes = document.getElementById("shortnotes").value;

btnsave.addEventListener("click", function(event){
    event.preventDefault();
    var bookname = document.getElementById("bookname").value;
    var authorname = document.getElementById("authorname").value;
    var shortnotes = document.getElementById("shortnotes").value;
    var div = document.createElement("div");
    div.setAttribute("class", "btn-container")
    div.innerHTML= `<h2>${bookname}</h2>
    <h5>${authorname}</h5>
    <p>${shortnotes}</p>
    <button onclick="deletebook(event)">Delete</button>`
    overlay.style.display="none";
    popup.style.display="none";
    
    container.append(div)
})

function deletebook(event){

    event.target.parentElement.remove()

}








