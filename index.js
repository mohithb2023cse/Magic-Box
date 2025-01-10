var randomNumber = Math.floor(Math.random() * 10) + 1; 
var attempts = 5;
var lvl = 1;

document.getElementById('btn').addEventListener('click', function() {
    var guess = parseInt(document.getElementById('guessInput').value);

    if (guess === randomNumber) {
        document.getElementById('cnt').innerHTML = "You have opened " + lvl + " boxes.";
        document.getElementById('cnt').style.fontWeight = 'bold';
        // document.getElementById('cnt').style.color = '#3bbe17';
        document.getElementById('cnt').style.color ='rgb(50, 170, 50)';
        display("You guessed it right!");
        lvl++;
        randomNumber = Math.floor(Math.random() * 10) + 1; 
        document.getElementById('img').style.transform = "scale(1.1)"; 
        setTimeout(() => {
            document.getElementById('img').style.transform = "scale(1)"; 
        }, 300);
    } else if (guess < randomNumber) {
        display("Number is too Low!");
    } else {
        display("Number is too High!");
    }

    if (lvl === 6) {
        display("Congratulations! You Have Opened All The Boxes & Won The Loot!");
        var img = document.getElementById('img');
        img.src = "unlock.png"; 
    }
});

function display(msg) {
    document.getElementById('msg').textContent = msg;
}