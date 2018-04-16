var styles=[
'Realism', 'Impressionism', 'Abstract', 'Art Deco', 'Cubism', 'Surrealism',
'Pop Art', 'Modern', 'Contemporary', 'Fantasy', 'Graffiti', 'Continuous Line', 'Blind']

function newStyle(){
  var randomNumber = Math.floor(Math.random() * (styles.length));
  document.getElementById('styleDisplay').innerHTML = styles[randomNumber];
}


var subjects=[
'Seascape', 'Landscape', 'Cityscape', 'Meteor', 'Pineapple', 'Your Shoes',
'Space Ship', 'Dinosaur', 'Big Ass Bird', 'Last Food You Ate', 'Favorite Celebrity']

function newSubject(){
  var randomNumber = Math.floor(Math.random() * (subjects.length));
  document.getElementById('subjectDisplay').innerHTML = subjects[randomNumber];
}
