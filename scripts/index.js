// Ude Import export (MANDATORY)
// Onclicking store the news in local storage with key "news" so that you can access that on news.html page

import {navbar} from "../components/navbar.js"

let n = navbar()
document.getElementById("navbar").innerHTML = n;

document.getElementById("search_input").addEventListener("keydown",Search)

function Search(e){

    if(e.key === "Enter")
    {
        let query = document.getElementById("search_input").value;
        // console.log(query)
        result()
        window.location.href = "search.html"
    }
}

// function async append(){

// }
let result = async ()=>{

    let query = document.getElementById("search_input").value;

    try{

        let res = await fetch(`https://masai-mock-api.herokuapp.com/news?q=${query}`);

        let data = await res.json()
        let data1 = data.articles
        // console.log(data1)
        append(data1)

    } catch (err){

        console.log(err)
    }

    
}
let Search_Data = []
// let Search_Data = [] 

function append(data){


    data.forEach(function(el){

        // console.log(el)
        Search_Data.push(el)
        // console.log(Search_Data)

        // let box = document.createElement("div");

        // let div1 = document.createElement("div");
        
        // let image = document.createElement("img");
        // image.src = el.urlToImage
        // div1.append(image);

        // let div2 = document.createElement("div");
        // let title = document.createElement("h3");
        // title.innerText = el.title

        // let desc = document.createElement("p");
        // desc.innerText = el.description;

        // div2.append(title,desc)
        // box.append(div1,div2)

    })

    // console.log(Search_Data)
    localStorage.setItem("search_Data",JSON.stringify(Search_Data))
}
document.getElementById("ch").addEventListener("click",news1)
function news1(){

    console.log("hii")
    
    let country_code = "in"

    try{
        let res = await fetch(`https://masai-mock-api.herokuapp.com/news/top-headlines?country=${country_code}`);

        let data = await res.json();
        console.log(data)

    } catch (err){

        console.log(err)
    }
}