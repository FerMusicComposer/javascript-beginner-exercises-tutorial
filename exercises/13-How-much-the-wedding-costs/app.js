let guests = prompt('How many people are coming to your wedding?');

function getPrice(guests){
    let cost = 0;
    // Your code here
    let guestsInt = parseInt(guests);
    if (guestsInt <= 50) {
        cost = 4000;
    } else if (guestsInt > 50 && guestsInt <= 100) {
        cost = 10000;
    } else if (guestsInt > 100 && guestsInt <= 200) {
        cost = 15000;
    } else if(guestsInt > 200) {
        cost = 20000;
    }
    return cost;
}

let cost = getPrice(guests);
console.log('Your wedding will cost '+cost+' dollars');
