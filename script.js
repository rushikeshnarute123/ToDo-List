let btn =document.querySelector("button");
let inp =document.querySelector("input");
let ul =document.querySelector("ul");

btn.addEventListener("click",function(){
    let item = document.createElement("li");
    item.innerText=inp.value;
    
    let delbtn = document.createElement("button");
    delbtn.innerText = "delete";
    item.appendChild(delbtn);
    ul.appendChild(item);
    inp.value="";

    delbtn.addEventListener("click", function() {
        item.remove();
    });
});
