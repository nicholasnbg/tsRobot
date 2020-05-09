var tablePeramiters = function (options) {
    var width = options.width;
    var height = options.height;
};
tablePeramiters({ width: 5, height: 5 });
var greet = function (firstName, lastName, age, isBadarse) {
    if (lastName === void 0) { lastName = "Smith"; }
    if (age === void 0) { age = 31; }
    if (isBadarse === void 0) { isBadarse = false; }
    var badass;
    if (isBadarse === true) {
        badass = " a bad motherfucker";
    }
    else {
        badass = " weak as piss";
    }
    console.log("hello " +
        firstName +
        " " +
        lastName +
        " whose age is " +
        age +
        " and he is " +
        badass);
};
greet("Izaak", "Chater", 31, true);
