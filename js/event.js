// option 2 onclick function
function makeRed(){
    document.body.style.backgroundColor = 'red';
}

// option 3 onclick function

const makeBlueButton = document.getElementById('make-blue');
makeBlueButton.onclick = makeBlue;

function makeBlue(){
    document.body.style.backgroundColor = 'blue';
}

// option 3 another

const makePurpleButton = document.getElementById('make-purple');
makePurpleButton.onclick = function makePurple(){
    document.body.style.backgroundColor = 'purple';
}

// option 4

const buttonPink = document.getElementById('make-pink');
buttonPink.addEventListener('click', makePink);

function makePink(){
    document.body.style.backgroundColor = 'pink';
}

// option 4 another

const greenButton = document.getElementById('make-green');
greenButton.addEventListener('click', function makeGreen(){
    document.body.style.backgroundColor = 'green';
});

// option 4  final use this sometime
 
document.getElementById('make-goldenrod').addEventListener('click', function(){
    document.body.style.backgroundColor = 'goldenrod';
});