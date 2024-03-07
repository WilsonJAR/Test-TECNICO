import { useForm } from "react-hook-form"
import { useEffect } from "react"
import { InputText } from 'primereact/inputtext'
import {Button} from 'primereact/button'
import useLocalstorage from "../hooks/useLocalStorage"
import { Formulario, Title, HeaderHome } from "../styles"
import {
    FormControl,
    FormGroup,
    useFormConfig,
    WControlData,
    WForm,
    WFormControl,
  } from "rectangular-forms";
  
const Form = () => {
    const {agregarObjeto} = useLocalstorage("usuario")

    const formConfig = useFormConfig({
        createForm: (data) => {
          const form = new FormGroup({
            user: new FormControl(),
            lastname: new FormControl(),
            phoneNumber: new FormControl(), 
            birthdate: new FormControl()

          });
          form.patchValue(data);
          return form;
        },
        onSubmit: (form) => {
            agregarObjeto(form.value);
          },
      });
      const { loadSucceed } = formConfig;

      useEffect(() => {
        loadSucceed({
          user: "",
          lastname: "",
          phonenumber: "",
          birthday: ""
        });
      }, [loadSucceed]);

    return ( 
       <div>
        <header>
            <HeaderHome >
                <Title style={{margin: "0 auto"}}>Formulario de registro</Title>
            </HeaderHome>



            <WForm formConfig={formConfig}>
                <WControlData />
                <WFormControl 
                name="user"
                errorMessages={{
                    required: "El nombre es requerido.",
                  }}
                  >
                    {({ control }) => {
                    const { value, onChange, onBlur, disabled } = control;
                    return (
                        <InputText 
                        className="p-inputtext-lg"
                        value={value || ""}
                        onChange={onChange}
                        onBlur={onBlur}
                        disabled={disabled}
                        placeholder="Nombre"
                        />
                    );
                    }}

                
                </WFormControl>
                <WFormControl name="lastname">
                    {({ control }) => {
                    const { value, onChange, onBlur, disabled } = control;
                    return (
                        <InputText 
                        className="p-inputtext-lg"
                        value={value || ""}
                        onChange={onChange}
                        onBlur={onBlur}
                        disabled={disabled}
                        placeholder="Apellido"
                        />
                    );
                    }}
                </WFormControl>
                <WFormControl name="phoneNumber">
                    {({ control }) => {
                    const { value, onChange, onBlur, disabled } = control;
                    return (
                        <InputText 
                        className="p-inputtext-lg"
                        type="tel"
                        value={value || ""}
                        onChange={onChange}
                        onBlur={onBlur}
                        disabled={disabled}
                        placeholder="Telefono"
                        />
                    );
                    }}
                </WFormControl>
                <WFormControl name="birthdate">
                    {({ control }) => {
                    const { value, onChange, onBlur, disabled } = control;
                    return (
                        <InputText 
                        className="p-inputtext-lg"
                        type="date"
                        value={value || ""}
                        onChange={onChange}
                        onBlur={onBlur}
                        disabled={disabled}
                        placeholder="Fecha Nac"
                        />
                    );
                    }}
                </WFormControl>
                <Button label="Submit" icon="pi pi-check" iconPos="right" />
            </WForm>
        </header>
       </div>
     );
}
 
export default Form;



