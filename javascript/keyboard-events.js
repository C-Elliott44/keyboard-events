// Place element you want to set eventListener into variable
var el;

// Create function that displays characters left and key hit
function charCount(event) {
    var textEntered, charDisplay, counter, lastkey;
    textEntered = document.getElementById('message').value;
    charDisplay = document.getElementById('charactersLeft');
    counter = countThis(textEntered.length);
    charDisplay.textContent = counter;

    lastkey = document.getElementById('lastKey');
    lastkey.textContent = 'Last key in ASCII code: ' + event.keyCode;
}

function countThis(totalCharacters) {
    total = (179 - totalCharacters);
    console.log(total + ' and ' + totalCharacters);
    return total;
}

// Set up event listener for textarea using keydown
el = document.getElementById('message');
el.addEventListener('keydown', charCount, false);