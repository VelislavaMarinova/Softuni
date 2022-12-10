function balls(input) {

    let numBalls = Number(input[0]);

    

    let counterRed = 0;
    let counterOrange = 0;
    let counterYellow = 0;
    let counterWhite = 0;
    let counterBlack = 0;
    let counterElse = 0
    let color = ""
    let totalPoints = 0

    for (let i = 1; i < input.length; i++) {
        color = input[i];
        if (color === "red") {
            counterRed++;
            totalPoints += 5;
        }
        else if (color === "orange") {
            counterOrange++;
            totalPoints += 10;
        }
        else if (color === "yellow") {
            counterYellow++;
            totalPoints += 15;
        }
        else if (color === "white") {
            counterWhite++;
            totalPoints += 20
        }
        else if(color ==="black"){
            counterBlack++;
            totalPoints/=2
        }
        else {
            counterElse++
            continue
        }
        
    }
     
    console.log(`Total points: ${Math.floor(totalPoints)}`);
    console.log(`Red balls: ${counterRed}`);
    console.log(`Orange balls: ${counterOrange}`);
    console.log(`Yellow balls: ${counterYellow}`);
    console.log(`White balls: ${counterWhite}`);
    console.log(`Other colors picked: ${counterElse}`);
    console.log(`Divides from black balls: ${counterBlack}`);
}
//Total points: {всичките събрани точки}"
//"Red balls: {броят червени топки}"
//"Orange balls: {броят оранжеви топки}"
//"Yellow balls: {броят жълти топки}"
//"White balls: {броят бели топки}"
//"Other colors picked: {броят на избраните топки извън зададените цветове}"
//"Divides from black balls: {броят на пътите, в които точките са били разделяни на 2}"
//let totalPoints = pointsOrange + pointsWhite + pointsreYellow + pointsRed

balls(["5",
"red",
"red",
"ddd",
"ddd",
"ddd"])
