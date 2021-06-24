import React, { useEffect } from 'react'
import {useState, useContext} from 'react'
import { useParams } from "react-router";
import { Fragment } from 'react'
import { Listbox, Transition } from '@headlessui/react'
import { CheckIcon, SelectorIcon } from '@heroicons/react/solid'

import api from '../../services/api'
import headers from '../../services/headers'

import {ApplicationContext} from '../../providers/ApplicationContext'
import Navigation from '../Navigation';


function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

const Pedido = (props) => {

    // const { estoque_id } = useParams();
    const [pessoas, setPessoas] = useContext(ApplicationContext)
    const [pessoa_selected, setSelectedPessoa] = useState(pessoas)
    
    const form_name = "Cadastro de Pedidos";
    const buttons = [
        { name: 'Lista', href: '/pedido/', current: true },
    ]


    useEffect(() => {
        console.log("consultando os clientes... ")

        api.get(`pessoa`)
            .then(resp => {
                
                setPessoas(resp.data)

                if(resp.data[0] != undefined){
                    setSelectedPessoa(resp.data[0])
                }

                console.log(resp.data)
            });
    },[])

    const selectPessoa = (pessoa_json) => {

        console.log(pessoa_json)
        setSelectedPessoa(pessoa_json)

    }

    const handleSubmit = (event) => {    
        console.log('Event Submit...')

        const pedido = {
            pessoa: pessoa_selected,
        };

        let request = api.post('pedido' , JSON.stringify(pedido) , headers);

        request.then((response)=>{

                console.log(response)

                if(response.status != 201 ){
                    return alert("Não foi possível registrar o pedido.");
                }

                alert("Produto cadastro com sucesso!");

            }).catch(()=>{
                return alert("Não foi possível registrar o pedido [01].");
            })

        event.preventDefault();    
    }

    return(
        <>
            <Navigation buttons={buttons} form_name={form_name} />
            <form onSubmit={handleSubmit} className="mx-3">

                <Listbox value={pessoa_selected} onChange={selectPessoa}>
                    {({ open }) => (
                        <>
                            <Listbox.Label className="block text-sm font-medium text-gray-700">Selecione um produto</Listbox.Label>
                            <div className="mt-1 relative">
                                <Listbox.Button className="relative w-full bg-white border border-gray-300 rounded-md shadow-sm pl-3 pr-10 py-2 text-left cursor-default focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm">
                                    <span className="flex items-center">
                                        <span className="ml-3 block truncate">{pessoa_selected.nome}</span>
                                    </span>
                                    <span className="ml-3 absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
                                        <SelectorIcon className="h-5 w-5 text-gray-400" aria-hidden="true" />
                                    </span>
                                </Listbox.Button>

                                <Transition
                                    show={open}
                                    as={Fragment}
                                    leave="transition ease-in duration-100"
                                    leaveFrom="opacity-100"
                                    leaveTo="opacity-0"
                                >
                                    <Listbox.Options
                                        static
                                        className="absolute z-10 mt-1 w-full bg-white shadow-lg max-h-56 rounded-md py-1 text-base ring-1 ring-black ring-opacity-5 overflow-auto focus:outline-none sm:text-sm"
                                    >
                                        {pessoas.map((pessoa2) => (
                                            <Listbox.Option
                                                key={pessoa2.id}
                                                className={({ active }) => classNames(
                                                    active ? 'text-white bg-indigo-600' : 'text-gray-900',
                                                    'cursor-default select-none relative py-2 pl-3 pr-9'
                                                )}
                                                value={pessoa2}
                                            >
                                                {({ pessoa2_selected, active }) => (
                                                    <>
                                                        <div className="flex items-center">
                                                            <span className={classNames(pessoa2_selected ? 'font-semibold' : 'font-normal', 'ml-3 block truncate')}>
                                                                {pessoa2.nome}
                                                            </span>
                                                        </div>

                                                        {pessoa2_selected ? (
                                                            <span
                                                                className={classNames(
                                                                    active ? 'text-white' : 'text-indigo-600',
                                                                    'absolute inset-y-0 right-0 flex items-center pr-4'
                                                                )}>
                                                                <CheckIcon className="h-5 w-5" aria-hidden="true" />
                                                            </span>
                                                        ) : null}
                                                    </>
                                                )}
                                            </Listbox.Option>
                                        ))}
                                    </Listbox.Options>
                                </Transition>
                            </div>
                        </>
                    )}
                </Listbox>


                <div className="mt-4">
                    <button
                        type="submit"
                        className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                    >
                        Salvar
                    </button>
                </div>
            </form>
        </>    
    )
}

export default Pedido