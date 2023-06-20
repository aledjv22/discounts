 const precio = document.querySelector('#precio');
 const descuento = document.querySelector('#descuento');
 const boton = document.querySelector('.boton');
 const resultado = document.createElement('p');
 resultado.setAttribute('id', 'pepe');
 const body = document.querySelector('body');

 function rebaja(){
    let prec = parseFloat(precio.value,10);
    let desc = parseFloat(descuento.value,10);
    if (!prec || !desc) {
      resultado.textContent = "Llene el formulario y no se haga el vivo";
      return;
    }

    if (desc > 100){
      resultado.textContent = "Ajá, ya quisieras, no te vamos a dar plata XD";
      return;
    }
    let result = (((prec*(100-desc))/100).toFixed(2)).toString();
    resultado.textContent = ("El precio final es: " + result);
    body.appendChild(resultado);
 }

 boton.addEventListener('click',rebaja);
