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