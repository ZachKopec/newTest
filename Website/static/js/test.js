const queryString = window.location.search;
console.log(queryString);

const urlParams = new URLSearchParams(queryString);

const gender = urlParams.get('Gender');
const age = urlParams.get("Age");
const height = urlParams.get("Height");
const weight = urlParams.get("Weight");
const caffeine = urlParams.get("Caffeine (MG)");
const systolic = urlParams.get("Systolic");
const cholesterol = urlParams.get("Cholesterol");
const drinks = urlParams.get("Drinks");
const smoker = urlParams.get("Smoker");

if (gender == "0") {
    var genderText = "Male" 
} else {
    var genderText = "Female"
}

if (smoker == "0") {
    var smokerText = "Yes" 
} else {
    var smokerText = "No"
}

if (age == "1") {
    var ageS = " year old" 
} else {
    var ageS = " years old"
}

function loaded() {
    document.getElementById("genderInput").innerHTML = genderText;
    document.getElementById("ageInput").innerHTML = age + ageS
    document.getElementById("heightInput").innerHTML = height + " CM";
    document.getElementById("weightInput").innerHTML = weight + " KG";
    document.getElementById("caffeineInput").innerHTML = caffeine + " MG";
    document.getElementById("systolicInput").innerHTML = systolic + " mm Hg";
    document.getElementById("cholesterolInput").innerHTML = cholesterol + " mg/dL";
    document.getElementById("drinksInput").innerHTML = drinks;
    document.getElementById("smokerInput").innerHTML = smokerText;
}

console.log(genderText);
console.log(age);
console.log(height);
console.log(weight);
console.log(caffeine);
console.log(systolic);
console.log(cholesterol);
console.log(drinks);
console.log(smoker);

params = [genderText, age, height, weight, caffeine, systolic, cholesterol, drinks, smoker]

console.log(params)