
import  { useState, useEffect } from 'react';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import useLocalstorage from '../hooks/useLocalStorage';


export default function Table() {
    const { objetos } = useLocalstorage("usuario");
    const [data, setData] = useState<Data[]>([]);
    
    useEffect(() => {
      // Use a callback function to ensure objetos is defined
      setData(() => objetos);
    }, [objetos]);
    
    

    return (
        <div className="card">
            <DataTable value={data} tableStyle={{ minWidth: '50rem' }}>
                <Column field="user" header="Nombre"></Column>
                <Column field="lastName" header="Apellido"></Column>
                <Column field="phoneNumber" header="Telefono"></Column>
                <Column field="birthdate" header="Fecha_nac"></Column>
            </DataTable>
        </div>
    );
}
        