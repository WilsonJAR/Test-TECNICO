import { useForm } from "react-hook-form"
import { InputText } from 'primereact/inputtext'
import {Button} from 'primereact/button'
import useLocalstorage from "../hooks/useLocalStorage"

const Form = () => {

    const {register, handleSubmit, formState:{errors}} = useForm({defaultValues:{
        user: "",
        lastName: "",
        phoneNumber: "",
        birthdate: ""

    }});
    const {agregarObjeto} = useLocalstorage("usuario")

    return ( 
       <div>
        <header>
            <form 
            onSubmit={handleSubmit((data)=>{
                agregarObjeto(data)
            })}
            >
                <InputText 
                {...register ("user", {required: "required"}) }
                placeholder="Nombre"
                />
                <p>{errors.user?.message}</p>

                <InputText 
                {...register ("lastName", {required: "required"}) }
                placeholder="Nombre"
                />
                <InputText 
                {...register ("phoneNumber", {required: "required"}) }
                placeholder="Telefono"
                />

                <InputText 
                {...register ("birthdate", {required: "required"}) }
                placeholder="Fecha_nac"
                />

                <Button type="submit">Enviar</Button> 
                
            </form>
        </header>
       </div>
     );
}
 
export default Form;



