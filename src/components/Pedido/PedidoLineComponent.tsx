import React, { useEffect } from 'react'
import {useState, useContext} from 'react'
import { useParams } from "react-router";
import { Fragment } from 'react'
import { Listbox, Transition } from '@headlessui/react'
import { CheckIcon, SelectorIcon } from '@heroicons/react/solid'

import api from '../../services/api'
import headers from '../../services/headers'

import {ApplicationContext} from '../../providers/ApplicationContext'


const PedidoLineComponent = (props) => {
    
    const deletePedido = ()=>{

        alert("Deletar produto do estoque...")

        api.delete(`pedido/${props.pedido.id}`)
            .then(resp => {
                props.getEstoque()                
                console.log(resp.data)
            });
   }

    return(

        <tr key={props.pedido.id}>
                                                    
            <td className="px-6 py-4 whitespace-nowrap">
                <div className="flex items-center">
                    <div className="ml-4">
                        <div className="text-sm font-medium text-gray-900">{props.pedido.id}</div>
                    </div>
                </div>
            </td>
        
            <td className="px-6 py-4 whitespace-nowrap">
                <div className="text-sm text-gray-900">{props.pedido.pessoa.nome}</div>
            </td>
        
            <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                <a href={"pedido/edit/"+props.pedido.id} className="text-indigo-600 hover:text-indigo-900">
                    Edit
                </a>
            </td>

            <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                <a href="#" onClick={deletePedido} className="text-indigo-600 hover:text-indigo-900">
                    Delete
                </a>
            </td>
        
        </tr>

    )
}

export default PedidoLineComponent
