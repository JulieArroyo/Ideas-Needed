// Animals
var animals=[
  'Skunk', 'Racoon', 'Elephant', 'Turkey', 'Walrus', 'Dog', 'Bear', 'Penguin', 'Owl','frog', 'Beaver',
  'Fox', 'Cat', 'Ant', 'Bee','Fish', 'Caterpillar', 'Dolphin', 'Chicken', 'Shark', 'Mouse', 'Octopus',
  'Lion', 'Parrot', 'Crab', 'Seal', 'Goose', 'Whale','Goat', 'Lizard', 'Panda', 'Dinosaur','Hippo',
  'Hedgehog', 'Turtle', 'Fly', 'Peacock', 'Pig', 'Otter',]



function newAnimal(){
  var randomNumber = Math.floor(Math.random() * (animals.length));
  document.getElementById('animalDisplay').innerHTML = animals[randomNumber]
}

// professions
var professions=[
  'Theif', 'Doctor', 'Samurai', 'Super Hero', 'Detective'
]

function newProfession(){
  var randomNumber = Math.floor(Math.random() * (professions.length));
  document.getElementById('professionDisplay').innerHTML = professions[randomNumber]
}


// Styles of Art
var styles=[
'Realism', 'Impressionism', 'Abstract', 'Art Deco', 'Cubism', 'Surrealism',
'Pop Art', 'Modern', 'Contemporary', 'Fantasy', 'Graffiti', 'Continuous Line', 'Blind']

function newStyle(){
  var randomNumber = Math.floor(Math.random() * (styles.length));
  document.getElementById('styleDisplay').innerHTML = styles[randomNumber];
}

// Subjects of art
var subjects=[
'Seascape', 'Landscape', 'Cityscape', 'Meteor', 'Pineapple', 'Your Shoes',
'Space Ship', 'Dinosaur', 'Big Ass Bird', 'Last Food You Ate', 'Favorite Celebrity']

function newSubject(){
  var randomNumber = Math.floor(Math.random() * (subjects.length));
  document.getElementById('subjectDisplay').innerHTML = subjects[randomNumber];
}
