import { useForm } from "react-hook-form"
import { InputText } from 'primereact/inputtext'
import {Button} from 'primereact/button'
import useLocalstorage from "../hooks/useLocalStorage"
import { Formulario, Title, HeaderHome } from "../styles"

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
            <HeaderHome >
                <Title style={{margin: "0 auto"}}>Formulario de registro</Title>
            </HeaderHome>
      
            <Formulario 
            onSubmit={handleSubmit((data)=>{
                agregarObjeto(data)
            })}
            >

                <InputText 
                className="p-inputtext-lg"
                {...register ("user", {required: "required"}) }
                placeholder="Nombre"
                />
                <p>{errors.user?.message}</p>

                <InputText 
                className="p-inputtext-lg"
                {...register ("lastName", {required: "required"}) }
                placeholder="Apellido"
                />
                <InputText 
                className="p-inputtext-lg"
                {...register ("phoneNumber", {required: "required"}) }
                placeholder="Telefono"
                />

                <InputText 
                className="p-inputtext-lg"
                type="date"
                {...register ("birthdate", {required: "required"}) }
                placeholder="Fecha_nac"
                />

                <Button label="Submit" icon="pi pi-check" iconPos="right" />
                
            </Formulario>
        </header>
       </div>
     );
}
 
export default Form;



