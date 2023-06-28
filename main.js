const precio = document.querySelector('#precio');
const discount = document.querySelector('#discount');
const boton = document.querySelector('.boton');
const resultado = document.createElement('p');
const cal_discount = document.querySelector('.cal-discount');
resultado.setAttribute('id', 'pepe');
const body = document.querySelector('body');

function rebaja(){
  let prec = parseFloat(precio.value,10);
  let desc = parseFloat(discount.value,10);
  if (isNaN(prec) || isNaN(desc)) {
    resultado.textContent = "Llene el formulario y no se haga el vivo";
    body.insertBefore(resultado,body.children[1]);
    return;
  }

  if (desc > 99){
    resultado.textContent = "Ajá, ya quisieras, no te vamos a dar plata XD";
    body.insertBefore(resultado,body.children[1]);
    return;
  }
  let result = (((prec*(100-desc))/100).toFixed(2)).toString();
  resultado.textContent = ("El precio final es: $" + result);
  body.insertBefore(resultado,body.children[1]);
  return;
}

boton.addEventListener('click',rebaja);


//structure corresponding to the 'section' of discounts through coupons
const coupon_discount = document.createElement('section');
coupon_discount.classList.add('coupon-discount');
body.insertBefore(coupon_discount,body.children[2]);

const coupon_title = document.createElement('h1');
coupon_title.classList.add('coupon-title');
coupon_title.innerText = 'Coupon calculator';
coupon_discount.appendChild(coupon_title);

const coupons_indications = document.createElement('p');
coupons_indications.classList.add('coupons_indications');
coupons_indications.innerText = 'Enter the price of your product and your discount coupon.';
coupon_discount.appendChild(coupons_indications);

const coupons_values = document.createElement('div');
coupons_values.classList.add('coupons-values');
coupon_discount.appendChild(coupons_values);

const input_price_coupon = document.createElement('input');
input_price_coupon.setAttribute('type','number');
input_price_coupon.setAttribute('placeholder', 'Enter the price');
input_price_coupon.setAttribute('id', 'price-coupon');
coupons_values.appendChild(input_price_coupon);

const input_discount_coupon = document.createElement('input');
input_discount_coupon.setAttribute('type','text');
input_discount_coupon.setAttribute('placeholder', 'Enter your coupon');
input_discount_coupon.setAttribute('id', 'discount-coupon');
coupons_values.appendChild(input_discount_coupon);

const discount_coupon_button = document.createElement('div');
discount_coupon_button.setAttribute('id', 'discount-coupon-button');
coupon_discount.appendChild(discount_coupon_button);

const coupon_button = document.createElement('button');
coupon_button.classList.add('discount-coupon-button');
coupon_button.innerText = 'Calculate';
discount_coupon_button.appendChild(coupon_button);
coupon_button.addEventListener('click',discountCoupon);
const coupon_result = document.createElement('p');
coupon_result.setAttribute('id', 'pepe');
coupon_discount.appendChild(coupon_result);

const couponsList = [
  { coupon:'ale', value:20},
  { coupon:'juli', value:10}
];

function discountCoupon(){
  let price = parseFloat(input_price_coupon.value,10);
  //spaces are eliminated, upper and/or lower case are indifferent
  let couponInsert = input_discount_coupon.value.replace(/\s/g, "").toLowerCase();
  let result, desc;
  if(isNaN(price)&&couponInsert === ""){ //empty inputs
    coupon_result.innerText = "Fill out the form and don't pretend";
  }else if(isNaN(price)){ //empty price input
    coupon_result.innerText = 'Enter the price of your product';
  }else if(couponInsert.trim() === ""){ //empty coupon input
    coupon_result.innerText = 'Enter your coupon';
  }else{ //coupon input with content
    couponsList.forEach(couponElem =>{
      if(couponElem.coupon.toLowerCase() == couponInsert){
        desc = couponElem.value;
        result = (((price*(100-desc))/100).toFixed(2)).toString();
      }
    });
    coupon_result.innerText = (result === undefined)?'Invalid coupon(check the spaces)':'Its new price is $' + result;
  }
  body.insertBefore(coupon_result,body.children[4]);
  return;
}