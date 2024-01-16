const addOne = document.querySelector("#addCart");
const substractOne = document.querySelector("#subtractCart");
const quantityOne = document.querySelector("#quantityCart_input");
const acuPriceOne = document.querySelector("#acuPriceItem");
const cantElemCheckout = document.querySelector("#cart__cantElemCheckout");
const cartSubtot = document.querySelector("#cart__subtot");
const cartEnvio = document.querySelector("#cart__envio");
const cartTotal = document.querySelector("#cart__total");

addOne.addEventListener('click', () => {
    quantityOne.value =Number(quantityOne.value)+1;
    UpdateCart();
});

substractOne.addEventListener('click', () => {
    if (Number(quantityOne.value) > 0) {
        quantityOne.value = Math.max(Number(quantityOne.value) - 1, 0);
    }
    UpdateCart();
})

quantityOne.addEventListener('input', () =>{
    UpdateCart();
});

function UpdateCart(){
    acuPriceOne.textContent = (Number(quantityOne.value) * 1799.99).toFixed(2);
    cantElemCheckout.textContent = Number(quantityOne.value);
    cartSubtot.textContent = (Number(acuPriceOne.textContent)).toFixed(2);
    cartTotal.textContent = (Number(cartSubtot.textContent) + Number(cartEnvio.textContent)).toFixed(2);
}