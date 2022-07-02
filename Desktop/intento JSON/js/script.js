console.log("por fin sirveeeeeeeeeee ")


let familia = {};
let familias = [];

const btnM = document.querySelector("#form");

//  -------------------------------------------------------------------------

    const limpiarHtml = () => {
        const listado = document.querySelector('#listarJson')
        if(listado){
            while(listado.firstChild){
                listado.removeChild(listado.firstChild);
            };
        };
    }

// ------------------------------------------------------------------------------------------------------    

    const verificacionDato = (miembros) => {
        const nombre = document.querySelector('#Nombre').value
        const Edad = document.querySelector("#Edad").value;
        const resultado = familias.find( fruta => fruta.miembroFamilia === miembros );
        if(resultado){
            mostrarError('No se pueden repetir miembros', true)       
        }else{
            if(miembros == 'abuelo paterno'){
                const abuelop = document.querySelector('#name1')
                abuelop.textContent = (`Miembro de la familia: ${miembros} , ${nombre} tiene una edad de: ${Edad}`)
                guardarRegistro(miembros, nombre, Edad)
            }
            if(miembros == 'abuela paterna'){
                const abuelap = document.querySelector('#name2')
                abuelap.textContent = (`Miembro de la familia: ${miembros} , ${nombre} tiene una edad de: ${Edad}`)
                guardarRegistro(miembros, nombre, Edad);
            }
            if(miembros == 'padre'){
                const padre = document.querySelector('#name3')
                padre.textContent = (`Miembro de la familia ${miembros} , ${nombre} tiene una edad de: ${Edad}`)
                guardarRegistro(miembros, nombre, Edad);
            }
            if(miembros == 'abuelo materno'){
                const abuelom = document.querySelector('#name4')
                abuelom.textContent = (`Miembro de la familia ${miembros} , ${nombre} tiene una edad de: ${Edad}`)
                guardarRegistro(miembros, nombre, Edad);
            }
            if(miembros == 'abuela materna'){
                const abuelam = document.querySelector('#name5')
                abuelam.textContent = (`Miembro de la familia ${miembros} , ${nombre} tiene una edad de: ${Edad}`)
                guardarRegistro(miembros, nombre, Edad);
            }
            if(miembros == 'madre'){
                const madre = document.querySelector('#name6')
                madre.textContent = (`Miembro de la familia ${miembros} , ${nombre} tiene una edad de: ${Edad}`)
                guardarRegistro(miembros, nombre, Edad);
            }
        }
    }
    
// ------------------------------------------------------------------------------------------------------

    const guardarRegistro = (miembros, nombre, Edad) => {
        familia = {
            "miembroFamilia": miembros,
            "nombreFamiliar": nombre,
            "Edad": Edad,
        };
        
        familias.push(familia);
        console.log(familias)
    }
    const guardarMascota = (miembros, Nombremascota, Mascotaname) => {
        pet = {
            "miembroFamilia": miembros,
            "Tipo de animal": Mascotaname,
            "Nombre de la mascota:": Nombremascota
        };
        
        familias.push(pet);
        console.log(familias)
    }

// ------------------------------------------------------------------------------------------------------

    const cargoFamilia = (familias) => {
        const miembros = document.querySelector("#miembros").value;
        const nombre = document.querySelector('#Nombre').value
        const Edad = document.querySelector("#Edad").value;
        if(miembros == 'mascota'){
            const mascota = document.querySelector('#name10')
            const nombrePet = document.querySelector('#Nombremascota').value
            const Mascotaname = document.querySelector("#Mascotaname").value;
            if([nombrePet]. includes('')){
                mostrarError('Ingrese el nombre de la mascota :)', true)
            }else{
                mascota.textContent = (`${nombrePet} es un: ${Mascotaname}`)
                guardarMascota(miembros, nombre, Mascotaname,);
            }
        }else{

            if([nombre, Edad]. includes('')){
                mostrarError('Debe llenar todos los campos :)', true)
            }else{
                
        if(miembros == 'abuelo paterno'){
            if(miembros) verificacionDato(miembros)
        }
        
        if(miembros == 'abuela paterna'){
            if(miembros) verificacionDato(miembros)
        }
        
        if(miembros == 'padre'){
            if(miembros) verificacionDato(miembros)
        }

        if(miembros == 'abuelo materno'){
            if(miembros) verificacionDato(miembros)
        }
        
        if(miembros == 'abuela materna'){
            if(miembros) verificacionDato(miembros)
        }
        
        if(miembros == 'madre'){
            if(miembros) verificacionDato(miembros)
        }
        

        if(miembros == 'mascota'){
            const mascota = document.querySelector('#name10')
            const nombre = document.querySelector('#Nombremascota').value
            const Mascotaname = document.querySelector("#Mascotaname").value;
            mascota.textContent = (`${nombre} es un: ${Mascotaname}`)
            guardarMascota(miembros, nombre, Mascotaname,);
        }
        const nombre = document.querySelector('#Nombre').value
        const Edad = document.querySelector("#Edad").value;


        if(miembros == 'hijo'){
            const resultado = familias.find( fruta => fruta.miembroFamilia === 'hijo' );
            if(resultado){
                let respuesta = prompt('¿Desea ingresar un segundo Niño o Niña? (y)')
                if(respuesta == 'y'){
                    const hije = document.querySelector('#name9')
                    hije.textContent = `Miembro de la familia ${miembros} , ${nombre} tiene una edad de ${Edad}`
                    guardarRegistro(miembros, nombre, Edad);
                }
            }else{
                const hijo = document.querySelector('#name7')
                hijo.textContent = (`Miembro de la familia ${miembros} , ${nombre} tiene una edad de: ${Edad}`)
                guardarRegistro(miembros, nombre, Edad);
            }
        }
        
        if(miembros == 'hija'){
            const resultado = familias.find( fruta => fruta.miembroFamilia === 'hija' );
            if(resultado){
                let respuesta = prompt('¿Desea ingresar un segundo Niño o Niña? (y)')
                if(respuesta == 'y'){
                    const hije = document.querySelector('#name9')
                    hije.textContent = `Miembro de la familia ${miembros} , ${nombre} tiene una edad de ${Edad}`
                    guardarRegistro(miembros, nombre, Edad);
                }
            }else{
                    const hija = document.querySelector('#name8')
                    hija.textContent = (`Miembro de la familia ${miembros} , ${nombre} tiene una edad de: ${Edad}`)
                    guardarRegistro(miembros, nombre, Edad);
                }
            } 
        


                // if(miembros == 'mascota'){
                //     const verMascota = document.querySelector('.formMascotasHidden')
                //     verMascota.setAttribute('class','formMascotaVer')
                    
                // }
            }            
        }        
    }

    const mostrarError = (menj, error) => {
        if(error){
            const alerta = document.createElement('p')
            alerta.setAttribute('class', 'error')
            alerta.textContent = menj
            btnM.appendChild(alerta)

            setTimeout(() => {
                alerta.remove()
            }, 3000);
        }


    }
    // ------------------------------------------------------------------------------------------------------


console.log(btnM)
btnM.addEventListener("submit", function(e){
    e.preventDefault();

   
    cargoFamilia(familias)
   
    
    btnM.reset()

})

const limpia = document.querySelector("#Limpiar");
limpia.addEventListener('click', () =>{
    let opc = prompt('Desea empezar de nuevo? y o n')
    if(opc == 'y'){
        window.location.reload() //resetea todo el documento
    }else{
        return 
    }
})

const verJSON = document.querySelector("#verJSON");
verJSON.addEventListener('click', () => {
    limpiarHtml()

    const listado = document.querySelector('#listarJson')
    const Json = "JSON: "+JSON.stringify(familias)//convertirlo a JSON
    const p = document.createElement('p')
    p.textContent = Json
    listado.appendChild(p)
})