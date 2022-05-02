// Ude Import export (MANDATORY)
// Onclicking store the news in local storage with key "news" so that you can access that on news.html page
import {navbar} from "../components/navbar.js"

let n = navbar()
document.getElementById("navbar").innerHTML = n;

document.getElementById("search_input").addEventListener("keydown",Search)

// if()
// let data;
let data = JSON.parse(localStorage.getItem("search_Data"))

function Search(e){

    
    if(e.key === "Enter")
    {
        
        result()
       
    }
    else{
        
        a()
}
}


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

let News = []

function append(data){

    document.getElementById("results").innerHTML = null


    data.forEach(function(el){

        let box = document.createElement("div");
        box.style.display = "flex"
        box.style.border = "1px solid black"
        box.addEventListener("click",function(){


            News.push(el)
            localStorage.setItem("news",JSON.stringify(News))
            window.location.href = "news.html"
        })

        let div1 = document.createElement("div");
        
        let image = document.createElement("img");
        image.src = el.urlToImage
        image.style.width = "300px"
        div1.append(image);

        let div2 = document.createElement("div");
        div2.style.padding = "10px"
        let title = document.createElement("h3");
        title.innerText = el.title

        let desc = document.createElement("p");
        desc.innerText = el.description;

        div2.append(title,desc)
        box.append(div1,div2)

        document.getElementById("results").append(box)

    })

    
}

// if(append() === undefined )
// {

//     let data = JSON.parse(localStorage.getItem("search_Data"))
// console.log(data)
// data.map(function(el){

//     let box = document.createElement("div");
//         box.style.display = "flex"
//         box.style.border = "1px solid black"

//         let div1 = document.createElement("div");
        
//         let image = document.createElement("img");
//         image.src = el.urlToImage
//         image.style.width = "300px"
//         div1.append(image);

//         let div2 = document.createElement("div");
//         div2.style.padding = "10px"
//         let title = document.createElement("h3");
//         title.innerText = el.title

//         let desc = document.createElement("p");
//         desc.innerText = el.description;

//         div2.append(title,desc)
//         box.append(div1,div2)

//         document.getElementById("results").append(box)
// })
// }

// let data = JSON.parse(localStorage.getItem("search_Data"))
// console.log(data)
function a(){
    data.map(function(el){

        let box = document.createElement("div");
            box.style.display = "flex"
            box.style.border = "1px solid black"
            box.addEventListener("click",function(){


                News.push(el)
                localStorage.setItem("news",JSON.stringify(News))
                window.location.href = "news.html"
            })
    
            let div1 = document.createElement("div");
            
            let image = document.createElement("img");
            image.src = el.urlToImage
            image.style.width = "300px"
            div1.append(image);
    
            let div2 = document.createElement("div");
            div2.style.padding = "10px"
            let title = document.createElement("h3");
            title.innerText = el.title
    
            let desc = document.createElement("p");
            desc.innerText = el.description;
    
            div2.append(title,desc)
            box.append(div1,div2)
    
            document.getElementById("results").append(box)
    })
}

