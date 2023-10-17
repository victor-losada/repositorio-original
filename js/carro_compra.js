let numRestar = document.getElementById("numRestar");
let numSumar = document.getElementById("numSumar")
let numView = document.getElementById("numView");
let cantProductos = document.getElementById("cantProductos");

let valorUnitarioProducto= 85000;
let valorUnitarioProductoStr = new Intl.NumberFormat('de-DE').format(valorUnitarioProducto);
    document.getElementById("valorUnitarioProducto").innerText=valorUnitarioProductoStr;



numRestar.addEventListener("click",function(){
    let aux = numView.innerHTML.toString();
    let auxInt = parseInt(aux);
})
numSumar.addEventListener("click",function(){
    let aux = numView.innerHTML.toString();
    let auxInt = parseInt(aux);
        if(auxInt < 10){
            auxInt++;
            console.log(auxInt);
            document.getElementById("numView").innerText = auxInt.toString();
            if(auxInt == 1){
                document.getElementById("cantProductos").innerHTML = auxInt.toString() + " Producto";
        }else if(auxInt == 0 || auxInt > 1){
            document.getElementById('cantProductos').innerHTML = auxInt.toString() + " Productos";
        }
    }
    let auxSubtotal = auxInt * valorUnitarioProducto;
    let auxSubtotalStr= new Intl.NumberFormat("de-De").format(auxSubtotal);
        document.getElementById("valorSubTotal").innerHTML = auxSubtotalStr;
})
numRestar.addEventListener("click",function(){
    let aux = numView.innerHTML.toString();
    let auxInt = parseInt(aux);
        if(auxInt > 0){
            auxInt--;
            console.log(auxInt);
            document.getElementById("numView").innerText = auxInt.toString();
            if(auxInt == 1){
                document.getElementById("cantProductos").innerHTML = auxInt.toString() + " Producto";
        }else if(auxInt == 0 || auxInt > 1){
            document.getElementById('cantProductos').innerHTML = auxInt.toString() + " Productos";
        }
    }
    let auxSubtotal = auxInt * valorUnitarioProducto;
    let auxSubtotalStr= new Intl.NumberFormat("de-De").format(auxSubtotal);
        document.getElementById("valorSubTotal").innerHTML = auxSubtotalStr;
})



// let boxPlus= document.getElementById("boxPlus");
// let boxMinus= document.getElementById("boxMinus");
// let boxUnidades= document.getElementById("boxUnidades");
// let subTotal = document.getElementById("subTotal").innerHTML
// const valorUnidad = 92680;
// const valorUnidadStr = Intl.NumberFormat("de-De").format(valorUnidad)

// document.getElementById("valorUnidad").innerHTML = "$" + valorUnidadStr;


// boxPlus.addEventListener("click", function(){
//     let auxUnidades = parseInt(boxUnidades.innerHTML);
//     if (auxUnidades < 10){
//        boxUnidades.innerHTML = (auxUnidades +1).toString();
//        let subTotal = parseInt(boxUnidades.innerHTML) * valorUnidad;
//        subTotal.innerHTML = Intl.NumberFormat("de-De").
//        format(subTotal);
//        if(boxUnidades.innerHTML == 1) {
//         document.getElementById("cantProductos").innerHTML = boxUnidades.innerHTML + "Producto";
//        }
//        else {
//         document.getElementById("cantProductos").innerHTML = boxUnidades.innerHTML + "Productos";
//        }

//     //    console.log(parseInt(boxUnidades.innerHTML) * parseInt(valorUnidad))
//     };
// });

// boxMinus.addEventListener("click", function(){
//     let auxUnidades = parseInt(boxUnidades.innerHTML);
//     if (auxUnidades > 0){
//        boxUnidades.innerHTML = (auxUnidades -1).toString();
//     }
// });
