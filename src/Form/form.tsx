import { useForm } from "react-hook-form"
import { InputText } from 'primereact/inputtext'
import {Button} from 'primereact/button'
        

const Form = ({saveData}) => {

    const {register, handleSubmit, formState:{errors}} = useForm({defaultValues:{
        user: "",
        password: ""
    }});
    
    return ( 
       <div>
        <header>
            <form
            onSubmit={handleSubmit((data)=>{
                console.log(data);
            })}
            >
                <InputText 
                {...register ("user", {required: "required"}) }
                placeholder="User Name"
                />
                <p>{errors.user?.message}</p>
                
                <InputText 
                {...register ("password", 
                {required: "required",
                minLength: {
                    value: 8,
                    message: "Minimum 8 characters"
                }
            }) }
                placeholder="Password"
                />

                <Button type="submit">Enviar</Button>



                
            </form>
        </header>
       </div>
     );
}
 
export default Form;