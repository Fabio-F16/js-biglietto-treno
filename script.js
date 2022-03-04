console.log('js ok');

const kmToGo = window.prompt('Quanti chilometri devi percorrere?');

const age = window.prompt('Quanti anni hai?');

const fullPrice = (kmToGo * 0.21)

const underAge = 18

const discountUnderAge = (fullPrice * 20) / 100;

const adultAge = 65

const discountAdultAge = (fullPrice * 40) / 100;


console.log(fullPrice)




if (age < underAge) {

    const finalPrice = toFixed(2)(fullPrice - discountUnderAge);
    // const finalPrice = Math.round ( * 100) / 100;


    console.log(discountUnderAge)
    console.log(finalPrice)


}


if (age > adultAge) {

    const finalPrice = (fullPrice - discountAdultAge);
    console.log(discountAdultAge)
    console.log(finalPrice)


}


