console.log('js ok');

const kmToGo = window.prompt('Quanti chilometri devi percorrere?');

const age = window.prompt('Quanti anni hai?');

const fullPrice = (kmToGo * 0.21)

const underAge = 18

const discountUnderAge = (fullPrice * 20) / 100;

const adultAge = 65

const discountAdultAge = (fullPrice * 40) / 100;


console.log(fullPrice + ' euro')




if (age < underAge) {

    const finalPrice = (fullPrice - discountUnderAge);
    // finalPrice.toFixed(2);
    // const finalPrice = Math.round ( * 100) / 100;


    console.log(discountUnderAge.toFixed(2) + ' euro')
    console.log(finalPrice.toFixed(2) + ' euro')


}


if (age > adultAge) {

    const finalPrice = (fullPrice - discountAdultAge);
    console.log(discountAdultAge.toFixed(2) + ' euro')
    console.log(finalPrice.toFixed(2) + ' euro')


}


