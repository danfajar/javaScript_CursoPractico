//const originalPrice = 100;
//const percentageDiscount = 15;

function calcPercentagePriceToPay(price, percentageDiscount){
    if (percentageDiscount < 0 || percentageDiscount > 100 ){
        var discountPrice = `Ingrese  un porcentaje válido`;
            
    } else {
        const percentagePriceToPay = 100 - percentageDiscount;
        var discountPrice = (price * percentagePriceToPay)/100;
               
    }
    

    return discountPrice;
};


function onClickButtonDiscountPrice(){
    const inputPrice = document.getElementById("InputPrice");
    const priceValue = inputPrice.value;

    const inputDiscount = document.getElementById("InputDiscount");
    const discountValue = inputDiscount.value;

    const priceToPay = calcPercentagePriceToPay(priceValue, discountValue);

    const resultP = document.getElementById("ResultP");
    resultP.innerText = `El precio con descuento son: ${priceToPay} $`;
    
};

// console.log({
//     originalPrice,
//     percentageDiscount,
//     percentagePriceToPay,
//     discountPrice,
// });

