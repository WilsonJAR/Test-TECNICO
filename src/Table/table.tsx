
import React, { useState, useEffect } from 'react';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import useLocalstorage from '../hooks/useLocalStorage';


export default function BasicDemo() {
    const {dataLocal} = useLocalstorage("usuario")
    const [products, setProducts] = useState();

    useEffect(()=>{
        setProducts(dataLocal)
    },[])

    return (
        <div className="card">
            <DataTable value={products} tableStyle={{ minWidth: '50rem' }}>
                <Column field="user" header="nombre"></Column>
                <Column field="password" header="Name"></Column>

            </DataTable>
        </div>
    );
}
        