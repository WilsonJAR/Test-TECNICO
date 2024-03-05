import { useState } from "react"


export default function useLocalstorage(key: string){
    const localStorage = window.localStorage.getItem(key)
    const [dataLocal, setDataLocal] = useState(JSON.parse(localStorage ?? '{}'));

    const setItem = (value: unknown)=>{
        setDataLocal([{...dataLocal}, value])  
         window.localStorage.setItem(key, JSON.stringify(dataLocal))
        console.log(dataLocal)
    }

    return {setItem}
}