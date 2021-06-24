import React, { useEffect } from 'react'
import {useState, useContext} from 'react'
import { useParams } from "react-router";
import { Fragment } from 'react'
import { Listbox, Transition } from '@headlessui/react'
import { CheckIcon, SelectorIcon } from '@heroicons/react/solid'

import api from '../../services/api'
import headers from '../../services/headers'

import {ApplicationContext} from '../../providers/ApplicationContext'


const EstoqueList = (props) => {
    
    const deleteProductEstoque = ()=>{

        alert("Deletar produto do estoque...")

        api.delete(`estoque/${props.estoque_produto.id}`)
            .then(resp => {
                props.getEstoque()                
                console.log(resp.data)
            });
   }

    return(

        <tr key={props.estoque_produto.id}>
                                            
            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{props.estoque_produto.id}</td>
        
            <td className="px-6 py-4 whitespace-nowrap">
                <div className="flex items-center">
                    <div className="ml-4">
                        <div className="text-sm font-medium text-gray-900">{(props.estoque_produto.produto != undefined ? props.estoque_produto.produto.name : "")}</div>
                    </div>
                </div>
            </td>
        
            <td className="px-6 py-4 whitespace-nowrap">
                <div className="text-sm text-gray-900">{props.estoque_produto.sku}</div>
            </td>
        
            <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                <a href="#" onClick={deleteProductEstoque} className="text-indigo-600 hover:text-indigo-900">
                    Delete
                </a>
            </td>
        
        </tr>

    )
}

export default EstoqueList
