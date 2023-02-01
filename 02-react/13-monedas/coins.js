function tossCoin() {
    return Math.random() > 0.5 ? "heads" : "tails";
}

function fiveHeadsSync() {
    let headsCount = 0;
    let attempts = 0;
    while (headsCount < 5) {
        attempts++;
        let result = tossCoin();
        console.log(`${result} was flipped`);
        if (result === "heads") {
            headsCount++;
        } else {
            headsCount = 0;
        }
    }
    return `It took ${attempts} tries to flip five "heads"`;
}

console.log(fiveHeadsSync());
console.log("This is run after the fiveHeadsSync function completes");

function fiveHeads() {
    return new Promise((resolve, reject) => {
        let count = 0;
        let attempts = 0;
        while (count < 5 && attempts <= 100) {
            attempts++;
            let result = tossCoin();
            console.log(`${result} was flipped`);
            if (result === "heads") {
                count++;
            } else {
                count = 0;
            }
        }

        if (count === 5) {
            resolve(`It took ${attempts} tries to flip five "heads"`);
        } else {
            reject("It has been flip more than 100 times");
        }

    });
}



fiveHeads()
    .then(res => console.log(res))
    .catch(err => console.log(err));

console.log("When does this run now?");