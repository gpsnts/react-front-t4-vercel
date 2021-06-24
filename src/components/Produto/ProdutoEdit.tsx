import React, { Component } from 'react';

import api from '../../services/api'
import headers from '../../services/headers'
import Dashboard from '../Dashboard';

class ProdutoEdit extends Component {

    state = { 
        nome: '',
        descricao:'',
        valor:0,
        categorias:[],
        categorias_produto:[],
    };
    

    constructor(props) {
        super(props)
        this.state = { 
            nome: '',
            descricao:'',
            valor:0,
            categorias:[],
            categorias_produto:[],
        };
    }

    componentDidMount() {
        console.log(this.props.match.params.id)
    }

    handleChange = (event) => {
        this.setState({[event.target.name]: event.target.value});
    }

    render()
    {
        return (
            <>
                <Dashboard />













            <div className="mt-10 sm:mt-0">
                <div className="md:grid md:grid-cols-1 md:gap-6">
                    <div className="mt-5 md:mt-0 md:col-span-2">
                        <form action="#" method="POST">
                            <div className="shadow overflow-hidden sm:rounded-md">
                                <div className="px-4 py-5 bg-white sm:p-6">
                                    <div className="grid grid-cols-6 gap-6">
                                        
                                        <div className="col-span-6 sm:col-span-3">
                                            <label htmlFor="nome" className="block text-sm font-medium text-gray-700">
                                                Nome
                                            </label>
                                            <input
                                                type="text"
                                                id="nome"
                                                name="nome" onChange={this.handleChange} value={this.state.nome}
                                                className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                                            />
                                        </div>

                                        <div className="col-span-6 sm:col-span-4">
                                            <label htmlFor="descricao" className="block text-sm font-medium text-gray-700">
                                                Descrição
                                            </label>
                                            <input
                                                type="text"
                                                id="descricao"
                                                onChange={this.handleChange} value={this.state.descricao} name="descricao"
                                                className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                                            />
                                        </div>

                                        <div className="col-span-6 sm:col-span-3">
                                            <label htmlFor="valor" className="block text-sm font-medium text-gray-700">
                                                Valor
                                            </label>
                                            <input
                                                type="text"
                                                id="valor"
                                                onChange={this.handleChange} value={this.state.valor} name="valor"
                                                className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                                            />
                                        </div>

            



                                        <div className="col-span-6 sm:col-span-3 lg:col-span-2">
                                    
                                        </div>
                                    </div>
                                </div>
                                
                                <div className="px-4 py-3 bg-gray-50 text-right sm:px-6">
                                    <button
                                        type="submit"
                                        className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                                    >
                                        Save
                                    </button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>

      
































            </>
        )
    }

}

export default ProdutoEdit