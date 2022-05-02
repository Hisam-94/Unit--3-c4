// Ude Import export (MANDATORY)
import {navbar} from "../components/navbar.js"

let n = navbar()
document.getElementById("navbar").innerHTML = n;

let data = JSON.parse(localStorage.getItem("news"))
console.log(data)

data.map(function(el){

    let box = document.createElement("div");
        // box.style.margin = "auto"

    let div1 = document.createElement("div");
    
    let image = document.createElement("img");
        image.src = el.urlToImage
        image.style.width = "600px"
        div1.append(image);

    let div2 = document.createElement("div");
        div2.style.padding = "10px"
        div2.style.width = "600px"
    let title = document.createElement("h3");
        title.innerText = el.title

    let desc = document.createElement("p");
        desc.innerText = `Description : ${el.description}`;

    let cont = document.createElement("p");
        cont.innerText = `Content : ${el.content}`

        div2.append(title,desc,cont)
        box.append(div1,div2)
        document.getElementById("detailed_news").append(box)
})
