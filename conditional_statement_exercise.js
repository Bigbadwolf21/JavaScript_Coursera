var age = 10;
if (age >= 65) {
    console.log("You get your income from pension");
}else if (age < 65 && age == 18) {
    console.log("Each month you get a salary");
}else if (age < 18) {
    console.log("You get an allowance");
}else {
    console.log("The value of the age variable is not numerical");
}


//Switch Statement
switch(day) {
    case 'Monday':
        console.log('Learn Frontend development on Coursera');
        break;
    case 'Tuesday':
        console.log('Write code');
        break;
    case 'Wednesday':
        console.log('Take cooking class');
        break;
    case 'Thursday':
        console.log('Write code');
        break;
    case 'Friday':
        console.log('Teach computer class');
        break;
    case 'Saturday':
        console.log('Wash the cars');
        break;
    case 'Sunday':
        console.log('Go to Church');
        break;
     default:
        console.log('There is no such day');
 }