// import { useState, useEffect } from "react"


// export default function useLocalstorage(key: string){
//     const localStorage = window.localStorage.getItem(key)
//     const [dataLocal, setDataLocal] = useState(JSON.parse(localStorage ?? '{}'));



//     const setItem = (value: unknown)=>{
//         console.log(value)
//         const saveData = window.localStorage.setItem(key, JSON.stringify([{data: value}]))
//         if(!dataLocal) return saveData;
//         const u = [{...dataLocal}, value];
//         console.log(u)
//         setDataLocal([...dataLocal, value])
//         window.localStorage.setItem(key, JSON.stringify(dataLocal))

//         console.log(dataLocal)
//     }



//     return {setItem, dataLocal}
// }


import React, { useState, useEffect } from "react";


interface Datos {
  user: string;
  lastName: string;
  phoneNumber: string;
  birthdate: string;
}
export default function useLocalstorage(key: string){
    
    const [objetos, setObjetos] = useState<Datos[]>([]);
    useEffect(() => {
        const objetosLocalStorage = JSON.parse(localStorage.getItem(key) || "[]");
        setObjetos(objetosLocalStorage);
      }, []);

    const agregarObjeto = (nuevoObjeto: Datos) => {
      const objetosLocalStorage = JSON.parse(localStorage.getItem(key) || "[]");
      const nuevoArregloObjetos = [...objetosLocalStorage, nuevoObjeto];
      setObjetos(nuevoArregloObjetos);
      localStorage.setItem(key, JSON.stringify(nuevoArregloObjetos));
    };

    console.log(objetos)

    return{agregarObjeto, objetos}
}