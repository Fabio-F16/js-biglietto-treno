// console.log('js ok');

const kmToGo = parseInt(prompt('Quanti chilometri devi percorrere?'));

const age = parseInt(prompt('Quanti anni hai?'));

const fullPrice = (kmToGo * 0.21)

const underAge = 18

const discountUnderAge = (fullPrice * 20) / 100;

const adultAge = 66

const discountAdultAge = (fullPrice * 40) / 100;

console.log(fullPrice + ' euro')

if (isNaN(kmToGo)) {
    // alert('Si accettano solo numeri!');
    document.getElementById('price').innerText = 'Riaggiornare ed inserire solo numeri!';
    console.log('Riaggiornare ed inserire solo numeri!')
}


if (isNaN(age)) {
    document.getElementById('price').innerText = 'Riaggiornare ed inserire solo numeri!';
    console.log('Riaggiornare ed inserire solo numeri!')
}


// if (isNaN(kmToGo)) {

//     
// }




if (age < underAge) {

    const finalPrice = (fullPrice - discountUnderAge);
    console.log(discountUnderAge.toFixed(2) + ' euro')
    console.log(finalPrice.toFixed(2) + ' euro')
    document.getElementById('price').innerText = finalPrice.toFixed(2) + 'euro';
}




if (age > adultAge) {

    const finalPrice = (fullPrice - discountAdultAge);
    console.log(discountAdultAge.toFixed(2) + ' euro')
    console.log(finalPrice.toFixed(2) + ' euro')
    document.getElementById('price').innerText = finalPrice.toFixed(2);

}




