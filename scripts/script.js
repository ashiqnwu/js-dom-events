const makeBlueButton = document.getElementById('make-blue');
makeBlueButton.onclick = makeBlue;
// document.getElementById('make_blue').onclick = makeBlue;

function makeBlue() {
    document.body.style.backgroundColor = 'Blue';
}
function makeRed() {
    document.body.style.backgroundColor = 'Red';
}
const makePurpleButton = document.getElementById('make-purple');
makePurpleButton.onclick = function makePurpleButton() {
    document.body.style.backgroundColor = 'purple';
}
const pinkButton = document.getElementById('make-pink');
pinkButton.addEventListener('click', makePink);

function makePink() {
    document.body.style.backgroundColor = 'Pink';
}
const makeGreenButton = document.getElementById('make-green');
makeGreenButton.addEventListener('click', function makeGreen() {
    document.body.style.backgroundColor = 'green';
})
document.getElementById('make-goldenrod').addEventListener('click',function() {
    document.body.style.backgroundColor = 'goldenrod';
});
