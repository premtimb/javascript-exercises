const findTheOldest = function(people) {
    return people.reduce((oldest,person) => {   
    const currentYear = new Date().getFullYear();
    const oldestAge = (oldest.yearOfDeath ? oldest.yearOfDeath : currentYear) - oldest.yearOfBirth;
    const personAge = (person.yearOfDeath ? person.yearOfDeath : currentYear) - person.yearOfBirth;
    
    return personAge > oldestAge ? person : oldest;
    
    });

};

// Do not edit below this line
module.exports = findTheOldest;
