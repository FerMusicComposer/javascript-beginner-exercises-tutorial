// Your code here:
function bottlesOfMilk() {
    let bottles
    let lyrics = `${bottles} bottles of milk on the wall, ${bottles} bottles of milk. Take one down and pass it\n around, ${bottles} bottles of milk on the wall`;
    let lastBottle = `${bottles} bottle of milk on the wall, ${bottles} bottle of milk. Take one down and pass it\n around, ${bottles} bottle of milk on the wall`;
    let noBottles = `No more botles of milk on the wall, no more bottles of milk. Go to the store and\n buy some more, ${bottles} bottles of milk on the wall`;
    let song = "";
    
    for (let i = 99; i > 0; i--){
        
        if (i > 1){
            bottles = i;
            song = lyrics;
            console.log(song);
        }else if (i === 1) {
            bottles = i;
            song = lastBottle;
            console.log(song);
             
        } else if (i === 0){
            song = noBottles;
            console.log(song);
            bottles = i += 99;
        }    
    } 
    
}

//bottlesOfMilk();
console.log(bottlesOfMilk());