let url ="https://pokeapi.co/api/v2/pokemon/chimechar";

fetch(url)
.then((response) => response.json())
.then(function(data) {
      console.log(data);

})
.catch(function(error){})

