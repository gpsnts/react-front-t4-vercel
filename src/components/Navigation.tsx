import React, { useEffect } from 'react'
import {useState, useContext} from 'react'
import { useParams } from "react-router";
import { Fragment } from 'react'
import { Listbox, Transition } from '@headlessui/react'
import { CheckIcon, PencilIcon, SelectorIcon } from '@heroicons/react/solid'



const Navigation = (props) => {
    
    return(
        <div className="px-5">
            <div className="lg:flex lg:items-center lg:justify-between">
                <div className="flex-1 min-w-0">
                    <h2 className="text-2xl font-bold leading-7 text-gray-900 sm:text-3xl sm:truncate">{props.form_name}</h2>
                </div>
                <div className="mt-5 flex lg:mt-0 lg:ml-4">
                    <span className="hidden sm:block">                   
                        {
                            props.buttons.map(button => (
                                <a 
                                    key={button.name}
                                    href={button.href}
                                    aria-current={button.current ? 'page' : undefined}
                                    type="button"
                                    className=" my-2 mx-2 inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"                        
                                >
                                    {button.name}
                                </a>
                            ))
                        }
                    
                    </span>
                </div>
            </div>
        </div>

    )
}

export default Navigation
