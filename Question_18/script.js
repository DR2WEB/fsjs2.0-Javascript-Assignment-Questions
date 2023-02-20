function leapYear(year, month) {
    const days = new Date(year, month, 0).getDate();
    return days;
}
console.log(leapYear(2004, 2));
console.log(leapYear(2022, 2));