let randomLoc = Math.floor(Math.random() * 5),
    location1 = randomLoc,
    location2 = location1 + 1,
    location3 = location2 + 1;

let guess,
    hits = 0,
    guesses = 0;

let isSunk = false;

while (!isSunk) {

    guess = prompt("Ready, aim, fire! (enter a number 0-6):");

    if (guess < 0 || guess > 6 || guess == null) {
        alert("Please enter a valid cell number!");
        continue;
    } else {
        guesses++;

        if (guess == location1 || guess == location2 || guess == location3) {
            alert("HIT!");
            hits++;
            if (hits == 3) {
                isSunk = true;
                alert("You sank my battleship!");
            }
        } else {
            alert("MISS!");
        }
    }
}

alert(`You took ${guesses} guesses to sink the battleship, which means your shooting accuracy was ${(3 / guesses)}`);

