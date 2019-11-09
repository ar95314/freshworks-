const app = document.getElementById('display_movie')

const container = document.createElement('div')
container.setAttribute('class', 'container')
const row = document.createElement("div")
row.setAttribute('class','row')
app.appendChild(container)
container.appendChild(row)


function moviename(){ 
  
  var movie_name = document.getElementById("searchmovie").value;
  
  var apiurl = 'http://www.omdbapi.com/?apikey=3d4ac583&s='+movie_name;
  var request = new XMLHttpRequest()

  request.open('GET', apiurl, true)

  request.onload = function() {
    var data = JSON.parse(this.response)
    console.log(data)
    var movie_list = data['Search'];
    console.log(movie_list);
    len = movie_list.length;
    for(var i=0; i<len; i++){

        const card = document.createElement('div')
        card.setAttribute('class', 'card')

        const title = document.createElement('h4')
        title.textContent = movie_list[i]['Title']

        const image = document.createElement('img')
        image.src = movie_list[i]['Poster']
        image.setAttribute('alt',title.textContent)
        
        row.appendChild(card)

        // Each card will contain an h1 and a p
        card.appendChild(image)
        card.appendChild(title)

    }
    DOMload();
  }

  // Send request
  request.send()
}

function DOMload() {

    var menu = document.querySelector(".container");
    menu.addEventListener("click", function(e){
        s_movie_name = e.target.innerHTML || e.srcElement.alt;
        console.log(s_movie_name)
        localStorage.setItem("movie_key",s_movie_name);
        window.location.href = "m_details_page.html"; 
    });

}
