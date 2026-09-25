//nos permite guardar y posteriormente modificar datos
import { useState } from 'react';

function ValidacionForm(){

    // guardar el dato del username
    const [username, setUsername] = useState("")

    // guardar el dato de la contraseña
    const [password, setPassword] = useState("")

    // esta func se ejecuta cdo enviamos el form
    const eventoSubmit = (event) => {
        event.preventDefault();
        // USERNAME = lógica q valide q el usuario tenga @ y el dominio sea duocuc.cl
        
        let flag = username.endsWith('@duocuc.cl')
        if (flag) {
        console.log("Login", username, "password", password)
        } else {    console.log("Login inválido")   }


        // PASSWORD = valide q tenga 1 caracter especial + 2 números y 2 MAYÚSCULAS + largo >= 10

            const mayuscular = password.match(/[A-Z]/g) || []
            const numeros = password.match(/[0-9]/g) || []
            const caracter = password.match(/[^A-Za-z0-9]/g) || []

            if(password.length<10){
                alert("La contraseña debería tener un largo mayor a 9")
            }            

            if(mayuscular.length <2){
                alert("La contraseña debería tener al menos 2 mayúsculas")
            }

            if(numeros.length <2){
                alert("La contraseña debería tener al menos 2 números")
            }

            if(caracter.length <1){
                alert("La contraseña debería tener al menos 1 caracter especial")
            }

    }

    return(
        <form onSubmit={eventoSubmit}>
            <h2>Iniciar sesión</h2>
            <input 
                type="text" 
                placeholder='Usuario' 
                value={username} 
                onChange={(e) => setUsername(e.target.value)}
                ></input>


            <input 
                type="text" 
                placeholder='Clave' 
                value={password} 
                onChange={(e) => setPassword(e.target.value)}
                ></input>

                <button type='submit'>Ingresar</button>
        </form>

    )
}

export default ValidacionForm