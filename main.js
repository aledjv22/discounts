const body = document.querySelector('body');

//structure corresponding to the 'section' of discounts through own percentages
const discount_percentage = document.createElement('section');
discount_percentage.classList.add('discount-percentage');
body.appendChild(discount_percentage);

const discount_title = document.createElement('h1');
discount_title.classList.add('discount-title');
discount_title.innerText = 'Discount calculator';
discount_percentage.appendChild(discount_title);

const discount_indications = document.createElement('p');
discount_indications.classList.add('discount_indications');
discount_indications.innerText = 'Enter the price of your product and the discount percentage.';
discount_percentage.appendChild(discount_indications);

const discount_values = document.createElement('div');
discount_values.classList.add('discount-values');
discount_percentage.appendChild(discount_values);

const input_price = document.createElement('input');
input_price.setAttribute('type','number');
input_price.setAttribute('placeholder', 'Enter the price');
input_price.setAttribute('id', 'price');
discount_values.appendChild(input_price);

const input_discount = document.createElement('input');
input_discount.setAttribute('type','number');
input_discount.setAttribute('placeholder', 'Enter the discount');
input_discount.setAttribute('id', 'discount');
discount_values.appendChild(input_discount);

const discount_button = document.createElement('div');
discount_button.setAttribute('id', 'discount-button');
discount_percentage.appendChild(discount_button);

const button = document.createElement('button');
button.classList.add('button-discount');
button.innerText = 'Calculate';
discount_button.appendChild(button);
button.addEventListener('click',discount);

const result = document.createElement('p');
result.setAttribute('id', 'pepe');
discount_percentage.appendChild(result);

function discount(){
  let prec = parseFloat(input_price.value,10);
  let desc = parseFloat(input_discount.value,10);
  if (isNaN(prec) || isNaN(desc)) {
    result.innerText = "Fill out the form and don't pretend";
  }else if (prec < 0 || desc < 0){
    result.innerText = 'Enter an actual value'; 
  }else if (desc > 99){
    result.innerText = 'Enter a valid discount';
  }else{
    let res = (((prec*(100-desc))/100).toFixed(2)).toString();
    result.innerText = "It's new price is $" + res;
  }
  body.insertBefore(result,body.children[2]);
}


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
    coupon_result.innerText = (result === undefined)?'Invalid coupon(check the spaces)':"It's new price is $" + result;
  }
  body.insertBefore(coupon_result,body.children[4]);
  return;
}