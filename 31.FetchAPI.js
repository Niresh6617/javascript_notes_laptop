let div_container = document.createElement('div')
div_container.style.border="1px solid black"

let h1 =document.createElement('h1')
h1.style.color="red";
h1.innerText="Hello"
div_container.appendChild(h1)
document.body.appendChild(div_container)

// fetch - it is a function which making a HTTP request to fetch data from server with the help of 
//         HTTP methods (GET , PUT ,POST , DELETE)
//         Fetch will return  promise which is cleaner than the older version of (XMLHTTPRequest)
//         It is working with Asynchronous 
// Syntax -  fetch(url , {HTTP Method})

//remember every fetch will return promise then we have to handle it using thrn , catch method 
// in promise method we have to argument function which are response  and reject refer code 19 and 21 
fetch("https://pokeapi.co/api/v2/pokemon/pikachu")
      .then(Response => Response.json())
      //now we gonna take only json object before that we have to convert the obove response object return into json by using json function
      //data is an object which contain the json data of the particular object data having Key and value 
      .then(data => console.log(data))  
      .catch(error => console.error(error))
