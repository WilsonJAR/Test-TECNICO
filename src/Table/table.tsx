
import  { useState, useEffect } from 'react';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { FilterMatchMode } from 'primereact/api';
import { InputText } from 'primereact/inputtext'; 
import useLocalstorage from '../hooks/useLocalStorage';
import { HeaderHome, Title } from '../styles';


export default function Table() {
    const { objetos } = useLocalstorage("usuario");
    const [data, setData] = useState<Data[]>([]);
    const [filters, setFilters] = useState({
        global: {value: null, matchMode: FilterMatchMode.CONTAINS}
    });

    
    useEffect(() => {
      setData(() => objetos);
    }, [objetos]);
    
    

    return (
        <div className="card">
            
            <HeaderHome>
                <Title>Registros</Title>
            </HeaderHome>
            <span className="p-input-icon-left">
                <i className="pi pi-search" />
                <InputText
                    onInput={(e)=>
                        setFilters({
                            global: {value: e.target.value, matchMode: FilterMatchMode.CONTAINS}
                        })
                    }
            />
            </span>
            
            <DataTable size='large' value={data} paginator rows={5}  filters={filters} showGridlines stripedRows rowsPerPageOptions={[5, 10, 25, 50]} tableStyle={{ minWidth: '50rem' }}>
                <Column field="user" header="Nombre"></Column>
                <Column field="lastName" header="Apellido"></Column>
                <Column field="phoneNumber" header="Telefono"></Column>
                <Column field="birthdate" header="Fecha_nac"></Column>
            </DataTable>
        </div>
    );
}
        