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
  if (!prec || !desc) {
    resultado.textContent = "Llene el formulario y no se haga el vivo";
    return;
  }

  if (desc > 99){
    resultado.textContent = "Ajá, ya quisieras, no te vamos a dar plata XD";
    body.insertBefore(resultado,body.children[1]);
    return;
  }
  let result = (((prec*(100-desc))/100).toFixed(2)).toString();
  resultado.textContent = ("El precio final es: " + result);
  body.insertBefore(resultado,body.children[1]);
}

boton.addEventListener('click',rebaja);


//start the structure of the section of the discount coupons
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
coupon_button.innerText = 'Calculate discount';
discount_coupon_button.appendChild(coupon_button);
coupon_button.addEventListener('click',discountCoupon);

const couponsList = ['ale','juli'];
function discountCoupon(){
  couponsList.forEach(couponElem =>{
    if(couponElem == input_discount_coupon.value){
      let prec = parseFloat(input_price_coupon.value,10);
      let result = prec + 10;
      resultado.textContent = ("El precio final es: " + result);
      body.insertBefore(resultado,body.children[3]);
      return;
    }
  });
  resultado.textContent = "Llene el formulario y no se haga el vivo";
  return;
}