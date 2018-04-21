
//cartoon subjects
var subjects=[
  'Self Portrait', 'First person you see on Insta', 'Your Pet(s)', 'Last person you talked to',
  'Favorite Celeb', 'Your Home', 'Your Car', 'Politician',' Happy Bee',' Worried Fish', 'Caterpillar', 'Dolphin',
   'Chicken','Mouse', 'Octopus', 'Lion', 'Parrot',]

function newSubject(){
  var randomNumber = Math.floor(Math.random() * (subjects.length));
  document.getElementById('subjectDisplay').innerHTML = subjects[randomNumber]
}

//Mediums
var mediums=[
  'Pencil', 'Colored Pencil', 'Marker', 'Chalk', 'Pastel', 'Pen', 'Crayon',]

function newMedium(){
  var randomNumber = Math.floor(Math.random() * (mediums.length));
  document.getElementById('mediumDisplay').innerHTML = mediums[randomNumber]
}

//cartoon styles
var styles=['Simpsons','South Park','Anime', 'Disney', 'Flinstones',
'Bob\'s Burgers', 'Family Guy', 'Superhero', 'Adventure Time',
'Garfield', 'Charlie Brown','Power Puff Girls', 'Final Space',
'Dragon Ball', 'Casper', 'Looney Tunes', 'Doug','Johnny Bravo',]

function newStyle(){
  var randomNumber = Math.floor(Math.random() * (styles.length));
  document.getElementById('styleDisplay').innerHTML = styles[randomNumber];
}
//Sketch styles

var sketches=[
'Realism', 'Impressionism', 'Abstract', 'Art Deco', 'Cubism', 'Surrealism',
'Pop Art', 'Modern', 'Contemporary', 'Fantasy', 'Graffiti', 'Continuous Line', 'Blind']

function newSketch(){
  var randomNumber = Math.floor(Math.random() * (sketches.length));
  document.getElementById('sketchDisplay').innerHTML = sketches[randomNumber];
}

// Sketch what
var objects =[
  'Hands', 'Feet', 'Ears', 'Shoes', 'Favorite TV Character','Rocks','Trees',
'Sandwhich', 'Ghost', 'Sword', 'Hotdog', 'Veggies','Ferris Wheel','Campfire'
]
function newObject(){
  var randomNumber = Math.floor(Math.random() * (objects.length));
  document.getElementById('objectDisplay').innerHTML = objects[randomNumber]
}
//quick sketch mediums
var tools=[
  'Pencil','Left Hand','Fire Pit Charcoal', 'Colored Pencil', 'Marker', 'Chalk',
   'Pastel', 'Pen', 'Crayon', 'Dry Erase Marker',]

function newTool(){
  var randomNumber = Math.floor(Math.random() * (tools.length));
  document.getElementById('toolDisplay').innerHTML = tools[randomNumber]
}

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
  'Theif', 'Doctor', 'Samurai', 'Super Hero', 'Nurse','Director','Cop', 'Firefighter','Pirate',
   'Scientist','King','Queen','Teacher','Football Player','Ninja','Chef', 'Batman', 'Clown',
   'Suba Diver', 'Waiter', 'Pilot', 'Flight Attendant', 'Coach', 'Musician', 'Detective', 'Astronaut', 'Santa'
]

function newProfession(){
  var randomNumber = Math.floor(Math.random() * (professions.length));
  document.getElementById('professionDisplay').innerHTML = professions[randomNumber]
}

// random
var pencils=[
  'Pencil', 'Colored Pencil', 'Marker', 'Chalk', 'Pastel',
  'Pen(ink)', 'Crayon','Oil Paint','Acrilic Paint', 'Spray Paint',
  'Charcoal', 'Watercolor', 'Tempra', 'Gouache','Digital Pen', 'Mud','Ketchup',
]

function newPencil(){
  var randomNumber = Math.floor(Math.random() * (pencils.length));
  document.getElementById('pencilDisplay').innerHTML = pencils[randomNumber]
}
