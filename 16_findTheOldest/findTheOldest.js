const findTheOldest = function(people) {
    for (const person of people) {
        if(!person.yearOfDeath) {
            person.yearOfDeath = new Date().getFullYear();
            };
        };
    return people
    .sort((personA, personB) => (personB.yearOfDeath - personB.yearOfBirth) - (personA.yearOfDeath - personA.yearOfBirth))
    .at(0);
};

// Do not edit below this line
module.exports = findTheOldest;
