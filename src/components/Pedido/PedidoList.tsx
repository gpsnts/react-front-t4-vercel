import React, { useEffect } from 'react'
import {useState, useContext} from 'react'
import { useParams } from "react-router";
import { Fragment } from 'react'
import { Listbox, Transition } from '@headlessui/react'
import { CheckIcon, SelectorIcon } from '@heroicons/react/solid'

import api from '../../services/api'
import headers from '../../services/headers'

import {ApplicationContext} from '../../providers/ApplicationContext'
import PedidoLineComponent from './PedidoLineComponent';
import Navigation from '../Navigation';


const PedidoList = (props) => {
    const [pedidos, setPedidos] = useState([])

    const form_name = "Listagem de Pedidos";
    const buttons = [
        { name: 'Cadastrar', href: '/pedido/new', current: true },
    ]

    const getPedido = ()=>{
        api.get(`pedido`)
            .then(resp => {
                setPedidos(resp.data)
                console.log(resp.data)
            });
    }

    useEffect(() => {
        console.log("consultando os produtos disponíveis... ")
        getPedido();
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
                                            Cliente
                                        </th>
                                        <th scope="col" className="relative px-6 py-3">
                                            <span className="sr-only">Edit</span>
                                        </th>
                                        <th scope="col" className="relative px-6 py-3">
                                            <span className="sr-only">Delete</span>
                                        </th>
                                    </tr>
                                </thead>

                                <tbody className="bg-white divide-y divide-gray-200">
                                    {pedidos.map((pedido) => (
                                        <PedidoLineComponent pedido={pedido} getPedido={getPedido} />
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

export default PedidoList