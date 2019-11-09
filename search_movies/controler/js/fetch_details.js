// Accessing Local Storage for movie_key
  var ls_data = localStorage['movie_key'];
  var apiurl = 'http://www.omdbapi.com/?apikey=3d4ac583&t='+ls_data+'&plot=full';
  var request = new XMLHttpRequest()

  request.open('GET', apiurl, true)
 
  request.onload = function() {

    var data = JSON.parse(this.response)
    console.log(data);
  // fetch movie details in HTml Context
    document.getElementById('movie_title').innerHTML = data['Title'];
    document.getElementById('movie_year').innerHTML = data['Released'];
    document.getElementById('movie_plot').innerHTML = data['Plot'];
    document.getElementById('movie_act').innerHTML = data['Actors'];
    document.getElementById('movie_dir').innerHTML = data['Director'];
    document.getElementById('movie_genre').innerHTML = data['Genre'];
    document.getElementById('movie_writer').innerHTML = data['Writer'];
  }

  request.send()