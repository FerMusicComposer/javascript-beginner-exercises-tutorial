var bulletPosition = 6;


const spinChamber = () => {
	var chamberPosition = Math.floor((Math.random() * 6) + 1);
	return chamberPosition;
};

// Remove the // below and complete the commented lines
const fireGun = (spinnerPosition) => {
    
    if (bulletPosition === spinChamber()) {
        console.log("You are dead");
    } else {
        console.log("Keep playing!");    
    }
};

fireGun();
