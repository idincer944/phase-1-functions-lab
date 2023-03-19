let distanceFromHqInBlocks =  function(num) {
    if(num > 42) {
        return num - 42;
    } else {
        return 42 - num;
    };
    
};

function distanceFromHqInFeet(num) {
    return distanceFromHqInBlocks(num) * 264; 
};

function distanceTravelledInFeet(num1, num2) {
    if(num1 > num2) {
        return 264 * (num1 - num2);
    } else {
        return 264 * (num2 - num1);
    };
};

function calculatesFarePrice(start, destination) {
    let feet = distanceTravelledInFeet(start, destination);
    if (feet <= 400) {
        return 0;
    } else if (feet > 400 && feet <= 2000) {
        let price = ((feet - 400)* 2) / 100;
        return price;
    } else if (feet > 2000 && feet <= 2500) {
        return 25;
    } else {
        return "cannot travel that far";
    };
};