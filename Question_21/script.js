const countryName = ["India", "Australia", "Japan", "Spain", "Brazil"];

if(!countryName.includes('Ethiopia')) {
    countryName.push('ETHIOPIA');
}

console.log(countryName);