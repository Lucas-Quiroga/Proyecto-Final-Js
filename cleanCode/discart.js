// <!-- Todo lo que podria usarse -->

// <!-- Carrito.js -->

// traemos la funcion para usarla en el carrito
// import {returnProducts} from "./fetch.js"
// // exportamos
// export{insumosElegidos}
// export{meterAlCarro}

// let listElegidos = document.getElementById("listado");
// const returnProducts = async () => {
//     const insumos = await fetch("/insumos.json")
//         const data = await insumos.json()
//             data.forEach(product => {
//                 // let listElegidos = document.getElementById("listado");
//                 const list = document.createElement("div");
//                 list.setAttribute("class", "card card-producto");
//                 list.style.width = "18rem";
//                 list.innerHTML = `<div class="img-container">
//                                   <h5 class="card-title">${product.nombre}</h5>
//                                   <img src="${product.foto}" alt="${product.nombre}</p>
//                                   ${product.nombre}
//                                   <p class="card-text"> Precio:</p>
//                                   <strong class="font">$${product.precio}</strong>
//                                   <br>
//                                   <button type="button" class="btn btn-dark">Agregar</button>
//                                   </div>`;
//                                   insumosOrigen.appendChild(list);
//                                   insumosElegidos.appendChild(insumosOrigen);
//                                   document.getElementById(`${product.id}`).onclick = () => meterAlCarro(`${product.id}`);
//             });
//         };
// returnProducts();


//recorremos con un for los insumos//

// for (const insumo of insumos){
//     let containerGeneral = document.createElement("div");
//     containerGeneral.setAttribute("class", "card card-product");
//     containerGeneral.style.width = "18rem";
//     containerGeneral.innerHTML = ` <div class="img-container">
//                                    <img src="${insumo.foto}" alt=${insumo.nombre}" class="img-insumo"/>
//                                    </div>
//                                    <div class= "info-insumo">
//                                    <p class="font">${insumo.nombre}</p>
//                                    <strong class="font">$${insumo.precio}</strong>
//                                    <br>
//                                    <button class= "boton" id="${insumo.id}"> Agregar </button>
//                                    </div>`;
//                                    insumosElegidos.appendChild(containerGeneral);
//                                 document.getElementById(`${insumo.id}`).onclick = () => meterAlCarro(`${insumo.id}`);

// const viendoCard = async () => {
//   const esperandoFetch = await fetch("/insumos.json")
//     .then((resp) => resp.json())
//     .then((data) => {
//       data.forEach((insumos) => {
//         const divCards = document.getElementById("cardlist");
//         const productos = document.createElement("div")
//         productos.setAttribute("class", "card")
//         productos.style.width = "18rem";
//         productos.innerHTML = ` <div class="img-container">
//                              <img class="card-img-top" src="${insumos.foto}" alt="${insumos.nombre}">
//                              <div class="card-body">
//                              <h5 class="card-title">${insumos.nombre}</h5>
//                              <p class="card-text"> Precio:</p>
//                              <strong class="font">$${insumos.precio}</strong>
//                              <br>
//                              <button type="button" id="agregar${insumos.id}" class="btn btn-dark" class="btn" onclick ="Toastify({
//                                                                                              text: 'This is a toast',
//                                                                                              duration: 3000
//                                                                                              }).showToast();">Agregar</button>
//                              </div>
//                              </div>`
//         divCards.appendChild(productos);
//         const boton2 = document.getElementById(`agregar${insumos.id}`)
//       })
//     })
// }
// viendoCard();


//inicializamos array de carrito
// let carrito = [];
// let insumosElegidos = document.getElementById("sec-insumos");
// let carritoElegidos = document.getElementById("sec-carrito");

// let compraTotal = document.createElement("div");
// compraTotal.innerHTML = "<h2> Precio total: $</h2>";
// carritoElegidos.appendChild(compraTotal);

// let precioTotal = document.createElement("h2");
// precioTotal.innerText = "0";
// compraTotal.appendChild(precioTotal);

// let insumosCantidad = document.createElement("div");
// insumosCantidad.innerHTML = "<h2>Cantidad de insumos: $</h2>";
// carritoElegidos.appendChild(insumosCantidad)

// let insumosOrigen = document.createElement("h2");
// insumosOrigen.innerText = "0";
// insumosCantidad.appendChild(insumosOrigen);

// let boton = document.createElement("button");
// boton.innerText = "Confirmar compra";
// carritoElegidos.appendChild(boton);
// boton.setAttribute("class", "boton");

// //funcion de boton//

// function carritoEnCero() {
//   precioTotal.innerText = "0";
//   insumosOrigen.innerText = "0";
//   localStorage.clear();
//   carrito = [];
// }

// boton.onclick = () => {
//   const precioResultado = precioTotal.innerText;
//   // alert(`Total a pagar: $${precioResultado}`);
//   Swal.fire({
//     // imageUrl: './imgAlerts/alertpic.jpg',
//     // imgWidth: 400,
//     // imgHeight: 200,
//     // imageAlt: 'Titulo img',
//     width: 2500,
//     title: `Total a pagar: $${precioResultado}`,
//     text: 'En breves nos pondremos en contacto!',
//     icon: 'success',
//     confirmButtonText: 'Salir'
//   })
//   carritoEnCero();
// }
// //funcion para añadir al carrito//

// function meterAlCarro(id) {
//   carrito.push(insumos.find(e => e.id == id));
//   localStorage.setItem("carrito", JSON.stringify(carrito));
//   sumaDeTotalCarrito();
//   Toastify({
//     text: "Agregado al carrito",
//     duration: 3000,
//     className: "textoToastify",
//     style: {
//       background: 'lightgreen'
//     },
//     onClick: () => {
//       Swal.fire({
//         title: `Deseas eliminar este articulo?`,
//         text: "¡No podrás revertir esto!",
//         icon: 'warning',
//         showCancelButton: true,
//         confirmButtonColor: '#3085d6',
//         cancelButtonColor: '#d33',
//         confirmButtonText: 'Si, eliminarlo!'
//       }).then((result) => {
//         if (result.isConfirmed) {
//           Swal.fire(
//             'Borrado!',
//             'Borrado del carrito',
//             'success'
//           )
//         }
//       })
//     }
//   }).showToast()
// }

// function sumaDeTotalCarrito() {
//   let total = 0;
//   for (const insumo of carrito) {
//     total += insumo.precio;
//   }
//   precioTotal.innerText = total;
//   insumosOrigen.innerText = carrito.length;
// }

// // recorremos con un for los insumos//

// for (const insumo of insumos) {
//   let containerGeneral = document.createElement("div");
//   containerGeneral.setAttribute("class", "card card-producto");
//   containerGeneral.style.width = "18rem";
//   containerGeneral.innerHTML = ` <div class="img-container">
//                                    <img src="${insumo.foto}" alt=${insumo.nombre}" class="img-insumo"/>
//                                    </div>
//                                    <div class= "info-insumo">
//                                    <p class="font">${insumo.nombre}</p>
//                                    <strong class="font">$${insumo.precio}</strong>
//                                    <br>
//                                    <button class= "boton" class="btn btn-dark"  > Agregar </button>
//                                    </div>`;
//   insumosElegidos.appendChild(containerGeneral);
//   document.getElementById(`${insumo.id}`).onclick = () => meterAlCarro(`${insumo.id}`);
// };
// };

// let carritoEjemplo = {}
// carritoEjemplo = {
//     1: {id: 1, titulo: 'cafe', precio: 500, cantidad: 3},
//     2: {id: 3, titulo: 'pizza', precio: 100, cantidad: 2},
// }

// console.log(carritoEjemplo[1])

/*--------------------------------------------------------------------------------------------------------------------------------*/

// <!-- fetch.js -->

// import {insumosElegidos} from "./carrito.js"
// import {meterAlCarro} from "./carrito.js"

// let botonSaludar = document.getElementById("hola");
    // botonSaludar.addEventListener("click", respuestaClick);
    // function respuestaClick(){
    //   console.log("Respuesta evento");
    // }
    // let botonprobando=document.querySelector(".btn btn-dark")
    // botonprobando.onclick= () => {console.log("Funciona")}; 

    // let botonprobando=document.getElementById("probando");
    // botonprobando.addEventListener("click", ()=>{alert("Funciona")});

//Cargue el fetch local para crear las cards asi podes tener mas rapido los datos
// let listElegidos = document.getElementById("listado");
// const returnProducts = async () => {
// const insumos = await fetch("/insumos.json")
//     const data = await insumos.json()
//         data.forEach(product => {
//             const list = document.createElement("div");
//             list.setAttribute("class", "card card-producto");
//             list.style.width = "18rem";
//             list.innerHTML = `<div class="img-container">
//                               <h5 class="card-title">${product.nombre}</h5>
//                               <img src="${product.foto}" alt="${product.nombre}</p>
//                               ${product.nombre}
//                               <p class="card-text"> Precio:</p>
//                               <strong class="font">$${product.precio}</strong>
//                               <br>
//                               <button type="button" class="btn btn-dark">Agregar</button>
//                               </div>`;
//                               listElegidos.appendChild(list);
//                               // insumosElegidos.appendChild(listElegidos);
//                               // document.getElementById(`${insumos.id}`).onclick = () => meterAlCarro(`${insumos.id}`);
//         });
//     };
//      returnProducts();

/*--------------------------------------------------------------------------------------------------------------------------------*/

// <!-- insumos.js -->

// // ARRAY DE LOS PRODUCTOS
// // const insumos = [{id: 1, nombre: "Velas", precio: 200,foto: "./img/1.jpg",stock: 1000},
// // {id: 2,nombre: "Collares",precio: 400,foto: "./img/2.jpg",stock: 1000},
// // {id: 3,nombre: "Sahumerios",precio: 300,foto: "./img/3.jpg",stock: 1000},
// // {id: 4,nombre: "Piramides",precio: 1200,foto: "./img/4.jpg",stock: 1000},]
// // {id: 5,nombre: "Buda",precio: 2200,foto: "./img/5.jpg",stock: 1000},
// // {id: 6,nombre: "Bomba defumadora",precio: 200,foto: "./img/6.jpg",stock: 1000},
// // ]

// // MOLDE PARA CREAR INSUMOS
// class Insumos{
//     constructor(id,nombre, precio, stock){
//         this.id = id;
//         this.producto = nombre;
//         this.precio = precio;
//         this.stock = stock;
//         this.info = `El insumo es: ${this.producto}, y el valor sin IVA: ${precio}`
// }
// verInfo(){
//     console.log(this.info)
// }
// cambiarPrecio(){
//     this.precio = this.precio * 1.21;
// }
// vender(cantidad) {
//     this.stock = this.stock - cantidad;
// }
// }

// //funcion que agregan objetos al array en particular
// function agregueInsumos (id, nombre, precio,stock){
//     let objetoAgregar = new Insumos(id, nombre, precio, stock);
//     insumos.push(objetoAgregar);
//     return `El objeto ha sido introducido al array satisfactoriamente`;
// }

// //agregar objetos de manera eficaz al array EJ://
// // agregueInsumos(1, "Velas", 70, 100);
// // agregueInsumos(2, "Collares", 100, 100);
// // agregueInsumos(3, "Sahumerios", 170, 50);

// //funcion que modifica los objetos en el array para aumentarles el iva sin cambiar de array//
// function infoInsumos(){
//     let preguntaCeo = prompt("Desea aplicarle el iva a sus productos?");
//     if(preguntaCeo === "Si" || "si"){
//         for (const prodInsumo of insumos)
//             prodInsumo.cambiarPrecio();
//             return console.table(insumos)
// }
// }

// //obtiene un nuevo array sumandole el iva a cada uno y redondeando para abajo el iva sin decimales//
// const imsIva = insumos.map((el)=> {
//     return {
//         id: el.id,
//         producto: el.producto,
//         precio: Math.round(el.precio * 1.21)
//     }
// })

// //busqueda que devuelve true o false si está o no el producto//
// function busqueda(nombre){
//     console.log(insumos.some((el) => el.producto == nombre))
//     }

/*--------------------------------------------------------------------------------------------------------------------------------*/

// <!-- main.js -->


// meterAlArray = () => {
//     nombreUser.push(inputNameUsuario.value);
//     apellidoUser.push(inputLastNameUsuario.value);
//     emailUser.push(inputEmailUsuario.value);
//     comentarioUser.push(inputComentarioUsuario.value);
//     }

//     meterAlArray();

// let formulario = document.getElementById("formulario");
// formulario.addEventListener("submit", almacenarDatos);

// let enJSON = JSON.stringify(inputNameUsuario);

// almacenarDatosUsuario.addEventListener("input", ()=>{
//     localStorage.setItem("Nombre: ",inputNameUsuario);
//     localStorage.setItem("Apellido: ",inputLastNameUsuario);
//     localStorage.setItem("Email: ",inputEmailUsuario);

//     datosForm.push(inputNameUsuario);
//     datosForm.push(inputLastNameUsuario);
//     datosForm.push(inputEmailUsuario);
// })





// //Preguntamos si quiere ver el catalogo de productos//
// let askClientIms = prompt("¿Ver detalles de productos?");

// function catalogo(){
//     if(askClientIms === "Si"){
//     for (const productos of insumos)
//         alert(`Nombre del producto: ${productos.producto}\nPrecio: ${productos.precio}`);
//     } else {
//         alert("No hay problema, saludos!")
//     }
// }

// //llamamos a la función para mostrarle los productos al usuario//
// catalogo();

// //Preguntamos si quiere ver los servicios//
// let askClientSer = prompt("¿Ver detalles de los servicios ofrecidos?");

// function catalogoSer(){
//     if(askClientSer === "Si"){
//     for (const productos of servicios)
//     alert(`Nombre del servicio: ${productos.servicio}\nValor: ${productos.precio}\nInfo: ${productos.detalle}\nDuración: ${productos.duracion}`);
//     } else {
//         alert("No hay problema, saludos!")
//     }
// }

// //Llamamos a la función para mostrarle los servicios al usuario//
// catalogoSer();

// //Funcion para calcular cantidad y producto
// function calcularProductos(precioProducto, cantidadProducto ){
//     return precioProducto * cantidadProducto
// }
// let guardar = calcularProductos;

// //Le preguntamos al usuario que producto quiere//
// let productoSeleccionado = prompt("Que producto quiere?");
// let productoSeleccionadoCant = parseInt(prompt("Cuanta cantidad desea?"));
// const productoBusqueda = insumos.find(product => product.producto === productoSeleccionado);

// switch (productoSeleccionado){
//     case "Velas":
//         alert ("El precio final de su producto es: $" + calcularProductos(productoBusqueda.precio, productoSeleccionadoCant));
//         productoBusqueda.vender;
//         alert("Muchas gracias, para retirarlo comunicarse al +12 12345678")
//         break
//     case "Collares":
//         alert ("El precio final de su producto es: $" + calcularProductos(productoBusqueda.precio, productoSeleccionadoCant));
//         productoBusqueda.vender;
//         alert("Muchas gracias, para retirarlo comunicarse al +12 12345678")
//         break
//     case "Sahumerios":
//         alert ("El precio final de su producto es: $" + calcularProductos(productoBusqueda.precio, productoSeleccionadoCant));
//         productoBusqueda.vender;
//         alert("Muchas gracias, para retirarlo comunicarse al +12 12345678")
//         break
//     default:
//         alert("Por favor ingrese un producto valido/disponible")
//         break;
// }

/*--------------------------------------------------------------------------------------------------------------------------------*/

// <!-- servicios.js -->

//agregar objetos de manera eficaz al array E//
// agregueServicios(1, "Lectura de tarot", 1600, "referencia", "30 - 60min");
// agregueServicios(2, "Reiki", 1100, "referencia", "30 - 60min");
// agregueServicios(3, "Sanación", 700, "referencia", "10 - 20min");
// agregueServicios(4, "Limpieza energética", 1100, "referencia", "10 - 20min");



// async function getProductos (){
//     let productoApi = await fetch ("https://d3e6htiiul5ek9.cloudfront.net/prod/productos?id_categoria=07&array_sucursales=10-2-109&limit=12")
//     const data = await productoApi.json();
//     // console.log(data.productos);
    
//     data.productos.forEach ((prodApi) => {
//         otrosProductosApi.push (
//             new OtrosProductos (
//                 "https://imagenes.preciosclaros.gob.ar/productos/"+prodApi.id+".jpg",
//                 prodApi.nombre, 
//                 parseInt (prodApi.precioMax), 
//                 parseInt (prodApi.precioMin))
//         )

//     })
//     // Llamo a la función cargarProductos y le paso el Array generado mediante el fetch()
//     cargarProductos(otrosProductosApi);
//     console.log(otrosProductosApi);
//     // cargarProductos(otrosProductos)
// }


// //esperamos que se lea todo el documento HTML y luego ejecuta todo lo siguiente
// document.addEventListener("DOMContentLoaded", () => {
//     fetchData() //cargamos con la llamada las cartas de productos
//   })
  
//   
//   const fetchData = async () => {
//     try {
//         const res = await fetch("/insumos.json")
//         const data = await res.json()
//         // console.log(data)
//         pintarProductos(data)
//         detectarBotones(data)
//     } catch (error) {
//         console.log(error)
//     }
//   }
  
//   
//   const pintarProductos = (data) => {
//     const template = document.querySelector('#template-productos').content
//     const fragment = document.createDocumentFragment()
//     // console.log(template)
//     data.forEach(producto => {
//         // console.log(producto)
//         template.querySelector('img').setAttribute('src', producto.thumbnailUrl)
//         template.querySelector('h5').textContent = producto.title
//         template.querySelector('p span').textContent = producto.precio
//         template.querySelector('button').dataset.id = producto.id
//         const clone = template.cloneNode(true)
//         fragment.appendChild(clone)
//     })
//     contendorProductos.appendChild(fragment)
//   }
  
  
//  
//   const detectarBotones = (data) => {
//     
//     const botones = document.querySelectorAll('.card button')
  
//     botones.forEach(btn => {
//         btn.addEventListener('click', () => {
//           Toastify({
//                   text: "Agregado al carrito \n (pulsa para borrar)",
//                   duration: 3000,
//                   className: "textoToastify",
//                   style: {
//                     background: 'lightgreen'
//                   }, 
//                   onClick: () => {
//                     Swal.fire({
//                       title: `Deseas eliminar el articulo "${producto.title}"?`,
//                       text: "Podras agregarlo luego",
//                       icon: 'warning',
//                       showCancelButton: true,
//                       confirmButtonColor: '#3085d6',
//                       cancelButtonColor: '#d33',
//                       confirmButtonText: 'Si, eliminarlo!',
//                     }).then((result) => { 
//                       if (result.isConfirmed) {
//                           const producto = carrito[btn.dataset.id]
//                           producto.cantidad--
//                           if (producto.cantidad === 0) {
//                               delete carrito[btn.dataset.id]
//                           } else {
//                               carrito[btn.dataset.id] = { ...producto }
//                           }
//                           pintarCarrito()
//                         Swal.fire(
//                           'Borrado!',
//                           'Borrado del carrito',
//                           'success'
//                         )
//                       }
//                     })
//                   }
//                 }).showToast()
  
//             
//             const producto = data.find(item => item.id === parseInt(btn.dataset.id))
//             producto.cantidad = 1
//             if (carrito.hasOwnProperty(producto.id)) {
//                 producto.cantidad = carrito[producto.id].cantidad + 1
//             }
//             carrito[producto.id] = { ...producto }
//             // console.log('carrito', carrito)
//             pintarCarrito()
//         })
//     })
//   }
  
  
  
//   const pintarCarrito = () => {
  
//     //pendiente innerHTML
//     items.innerHTML = ''
  
//     const template = document.querySelector('#template-carrito').content
//     const fragment = document.createDocumentFragment()
  
//     Object.values(carrito).forEach(producto => {
//         // console.log('producto', producto)
//         template.querySelector('th').textContent = producto.id
//         template.querySelectorAll('td')[0].textContent = producto.title
//         template.querySelectorAll('td')[1].textContent = producto.cantidad
//         template.querySelector('span').textContent = producto.precio * producto.cantidad
        
//         //botones
//         template.querySelector('.btn-info').dataset.id = producto.id
//         template.querySelector('.btn-danger').dataset.id = producto.id
//         const clone = template.cloneNode(true)
//         fragment.appendChild(clone)
//     })
  
//     items.appendChild(fragment)
  
//     pintarFooter()
//     accionBotones()
//   }
  
  
//   const pintarFooter = () => {
  
//     footer.innerHTML = ''
  
//     if (Object.keys(carrito).length === 0) {
//         footer.innerHTML = `
//         <th scope="row" colspan="5">Carrito vacío con innerHTML</th>
//         `
//         return
//     }
  
//     const template = document.querySelector('#template-footer').content
//     const fragment = document.createDocumentFragment()
  
//     // sumar cantidad y sumar totales
//     const nCantidad = Object.values(carrito).reduce((acc, { cantidad }) => acc + cantidad, 0)
//     const nPrecio = Object.values(carrito).reduce((acc, {cantidad, precio}) => acc + cantidad * precio ,0)
//     // console.log(nPrecio)
  
//     template.querySelectorAll('td')[0].textContent = nCantidad
//     template.querySelector('span').textContent = nPrecio
  
//     const clone = template.cloneNode(true)
//     fragment.appendChild(clone)
  
//     footer.appendChild(fragment)
  
  
  
//     boton.addEventListener('click', () => {
//       Swal.fire({
//               width: 2500,
//               title: `Total a pagar: $${nPrecio}`,
//               text: 'En breves nos pondremos en contacto!',
//               icon: 'success',
//               confirmButtonText: 'Salir',
//               position: 'top',
//               showClass: {
//                 popup: 'animate__animated animate__fadeInDown'
//               },
//               hideClass: {
//                 popup: 'animate__animated animate__fadeOutUp'
//               }
//             })
//         carrito = {}
//         pintarCarrito()
//     })
  
//   }
  
//   const accionBotones = () => {
//     const botonesAgregar = document.querySelectorAll('#items .btn-info')
//     const botonesEliminar = document.querySelectorAll('#items .btn-danger')
  
//     // console.log(botonesAgregar)
  
//     botonesAgregar.forEach(btn => {
//         btn.addEventListener('click', () => {
//             // console.log(btn.dataset.id)
//             const producto = carrito[btn.dataset.id]
//             producto.cantidad ++
//             carrito[btn.dataset.id] = { ...producto }
//             pintarCarrito()
//         })
//     })
  
//     botonesEliminar.forEach(btn => {
//         btn.addEventListener('click', () => {
//             // console.log('eliminando...')
//             const producto = carrito[btn.dataset.id]
//             producto.cantidad--
//             if (producto.cantidad === 0) {
//                 delete carrito[btn.dataset.id]
//             } else {
//                 carrito[btn.dataset.id] = { ...producto }
//             }
//             pintarCarrito()
            
//         })
//     })
//   }
  
//   // let carritoEjemplo = {}
//   // carritoEjemplo = {
//   //     1: {id: 1, titulo: 'cafe', precio: 500, cantidad: 3},
//   //     2: {id: 3, titulo: 'pizza', precio: 100, cantidad: 2},
//   // }
  
//   // console.log(carritoEjemplo[1])
  
  
//   //dejamos ya las constantes armadas
//   const contendorProductos = document.querySelector('#contenedor-productos')
//   const items = document.querySelector('#items')
//   const footer = document.querySelector('#footer-carrito')
//   const boton = document.querySelector('#vaciar-carrito')
  
//   //inicializamos el carrito
//   let carrito = {}


/*--------------------------------------------------------------------------------------------------------------------------------*/
// HTML 

// <!-- INSUMOS
// <h2 id="titulo-producto">Productos</h2>
// <div id="listado">
// </div>
// <div id="productos-div">
// <section class="Producto" id="sec-insumos"></section>
// </div>
// <div id="cardlist"></div>
// <!-- CARRITO -->
// <!-- <div id="carrito-div">
// <section id="sec-carrito"></section>
// </div> -->