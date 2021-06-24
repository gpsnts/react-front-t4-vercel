import React, { useEffect } from 'react'
import {useState, useContext} from 'react'
import {ApplicationContext} from '../../providers/ApplicationContext'
import api from '../../services/api'

const CategoriasHook = (props) => {

    const [categorias, setCategorias] = useContext(ApplicationContext)

    useEffect(() => {
        api.get('categoria')
            .then(resp => {
                console.log("Atualizando categorias.")
                console.log(resp.data)
                setCategorias(resp.data);
            });
        
    },[])


    const addCategoria = (categoria_selecionada) => {
        let existe = false;
        const categorias_aux = props.produto_form.categorias;

        console.log(props.produto_form.categorias)
        console.log(props.categorias_list)

        props.categorias_list.map((cat)=>{
            if(cat == categoria_selecionada.id){
                existe = true 
            }
        });

        if(existe)
        {
            return;
        }

        props.produto_form.categorias.push(categoria_selecionada);

        console.log(props.produto_form.categoria , 'categorias do produto')

    }

    const removeCategoria = (categoria_selecionada) => {
        console.log('iniciando remoção de categoria...')

        console.log(categoria_selecionada)

        props.categorias_list.map((cat , i)=>{

            console.log(cat)
            if(cat.id == categoria_selecionada.id){
                console.log('removendo categoria...')
                props.produto_form.categorias.splice(i,1);
                console.log(props.produto_form.categorias , 'removido')
            }
        });

        console.log(props.produto_form.categorias , 'categorias do produto  após remoção')
    }

    const handleSelect = (event) => {          

        props.categorias_list.map((categoria)=>{

            if(categoria.id != event.target.value)
            {
                return;
            }

            if(event.target.checked){
                console.log('add')
                addCategoria(categoria)
            }else{
                console.log('remove')
                removeCategoria(categoria)
            }

        })  

        event.preventDefault();    
    }

    const renderCategoriaLine = (categoria) => {
        
        return (

            <tr>
                <td>
                    <input onChange={handleSelect} type="checkbox" value={categoria.id} name="categoria" id="" />
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                    {categoria.id}
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                    {categoria.nome}
                </td>                                        
            </tr>

        )
    }

    return (
        <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
            <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
                <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
                    <table className="min-w-full divide-y divide-gray-200">
                        <thead className="bg-gray-50">
                            <tr>
                                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                    Status
                                </th>
                                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                    ID
                                </th>
                                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                    Nome
                                </th>
                            </tr>
                        </thead>
                        <tbody className="bg-white divide-y divide-gray-200">
                        {
                            props.categorias_list.map(renderCategoriaLine)
                        }
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
  
}

export default CategoriasHook