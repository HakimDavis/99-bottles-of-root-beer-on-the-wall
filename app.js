
var bottles;
for (numberOfBottles = 99; numberOfBottles >= 1; numberOfBottles = numberOfBottles - 1) 
{
    if (numberOfBottles  === 1) {
        bottles = "bottle";
    } else {
        bottles = "bottles";
    }
    console.log(numberOfBottles +" "+bottles+" of root beer on the wall.");
    if (numberOfBottles  < 99) {
        console.log("");
        console.log(numberOfBottles +" "+bottles+" of root beer on the wall.");
    }
    console.log(numberOfBottles +" "+bottles+" of root beer.");
    console.log("Take one down.");
    console.log("Pass it around.");
    if (numberOfBottles  == 1) {
        console.log("No bottles of root beer on the wall.");
    }
}