const toUpper = string => string.toUpperCase();
const classyGreeting = (firstName, lastName) =>
    "The name's " + lastName + ", " + firstName + " " + lastName;
const yellGreeting = compose(
    toUpper,
    classyGreeting
);

function compose() {
    return Array.prototype.reduceRight.call(arguments, function(lastFu, fu) {
        return function() {
            return fu(lastFu.apply(null, arguments));
        };
    });
}

yellGreeting('James', 'Bond'); //=> "THE NAME'S BOND, JAMES BOND"

module.exports = compose;
