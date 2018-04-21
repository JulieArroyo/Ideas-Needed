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

//styles
var styles=['Simpsons','South Park','Anime', 'Disney', 'Flinstones',
'Bob\'s Burgers', 'Family Guy', 'Superhero', 'Adventure Time',
'Garfield', 'Charlie Brown','Power Puff Girls', 'Final Space',
'Dragon Ball', 'Casper', 'Looney Tunes', 'Doug','Johnny Bravo',]

function newStyle(){
  var randomNumber = Math.floor(Math.random() * (styles.length));
  document.getElementById('styleDisplay').innerHTML = styles[randomNumber];
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
