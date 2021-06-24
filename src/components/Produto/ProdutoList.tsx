import React, { Component , useState } from 'react';

import api from '../../services/api'
import headers from '../../services/headers'
import Dashboard from '../Dashboard';

class ProdutoList extends Component {
    
    state = { 
        produtos:[],
    };
    
    componentDidMount() {
        api.get('produto')
            .then(resp => {
                console.log(resp)
                this.setState({produtos: resp.data});
            });
    }

    render()
    {
        return (
            <>
                <div className="flex flex-col">
                    <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
                        <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
                            <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
                                <table className="min-w-full divide-y divide-gray-200">
                                    
                                    <thead className="bg-gray-50">
                                        <tr>
                                            <th scope="col"className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                                ID
                                            </th>
                                            <th
                                                scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                                Nome
                                            </th>
                                            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                                Descrição
                                            </th>
                                            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                                Valor
                                            </th>
                                            <th scope="col" className="relative px-6 py-3">
                                                <span className="sr-only">Edit</span>
                                            </th>
                                        </tr>
                                    </thead>

                                    <tbody className="bg-white divide-y divide-gray-200">
                                        {this.state.produtos.map((produto) => (
                                            <tr key={produto.id}>
                                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{produto.id}</td>

                                                <td className="px-6 py-4 whitespace-nowrap">
                                                    <div className="flex items-center">
                                                        <div className="ml-4">
                                                            <div className="text-sm font-medium text-gray-900">{produto.name}</div>
                                                        </div>
                                                    </div>
                                                </td>

                                                <td className="px-6 py-4 whitespace-nowrap">
                                                    <div className="text-sm text-gray-900">{produto.description}</div>
                                                </td>

                                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{produto.valor}</td>

                                                <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                                                    <a href={"/produto/edit/"+produto.id} className="text-indigo-600 hover:text-indigo-900">
                                                        Edit
                                                    </a>
                                                </td>

                                            </tr>
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
}

export default ProdutoList