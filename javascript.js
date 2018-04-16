var styles=[
'Realism', 'Impressionism', 'Abstract', 'Art Deco', 'Cubism', 'Surrealism',
'Pop Art', 'Modern', 'Contemporary', 'Fantasy', 'Graffiti']

function newStyle(){
  var randomNumber = Math.floor(Math.random) * (styles.length));
  document.getElementById('styleDisplay').innerHTML = styles[randomNumber];
}
