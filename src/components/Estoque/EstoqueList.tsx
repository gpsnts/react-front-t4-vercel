import React, { useEffect } from 'react'
import {useState, useContext} from 'react'
import { useParams } from "react-router";
import { Fragment } from 'react'
import { Listbox, Transition } from '@headlessui/react'
import { CheckIcon, SelectorIcon } from '@heroicons/react/solid'

import api from '../../services/api'
import headers from '../../services/headers'

import {ApplicationContext} from '../../providers/ApplicationContext'
import EstoqueLineComponent from './EstoqueLineComponent';
import Navigation from '../Navigation';


const EstoqueList = (props) => {
    const [estoque, setEstoque] = useState([])

    const form_name = "Listagem de Produtos no Estoque";
    const buttons = [
        { name: 'Cadastrar', href: '/estoque/new', current: true },
    ]

    const getEstoque = ()=>{
        api.get(`estoque`)
            .then(resp => {
                
                setEstoque(resp.data)
                console.log(resp.data)
            });
    }
    useEffect(() => {
        console.log("consultando os produtos disponíveis... ")
        getEstoque();
    },[])

    return(

        <>
            <Navigation buttons={buttons} form_name={form_name}/>
            <div className="flex flex-col">
                <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
                    <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
                        <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
                            <table className="min-w-full divide-y divide-gray-200">

                                <thead className="bg-gray-50">
                                    <tr>
                                        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                            ID
                                        </th>
                                        <th
                                            scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                            Produto
                                        </th>
                                        <th
                                            scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                            SKU
                                        </th>
                                        <th scope="col" className="relative px-6 py-3">
                                            <span className="sr-only">Delete</span>
                                        </th>
                                    </tr>
                                </thead>

                                <tbody className="bg-white divide-y divide-gray-200">
                                    {estoque.map((estoque_produto) => (
                                        <EstoqueLineComponent estoque_produto={estoque_produto} getEstoque={getEstoque} />
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </>

    )
}

export default EstoqueList