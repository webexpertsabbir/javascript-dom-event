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
