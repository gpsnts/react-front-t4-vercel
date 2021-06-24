import React, { useEffect } from 'react'
import {useState, useContext} from 'react'
import { useParams } from "react-router";

import api from '../../services/api'
import headers from '../../services/headers'
import CategoriasHook from './Categorias'
import {ApplicationContext} from '../../providers/ApplicationContext'

const Produto = (props) => {

    const { produto_id } = useParams();
    const [produto, setProduto] = useContext(ApplicationContext)
    const [categorias, setCategorias] = useContext(ApplicationContext)


    let update = false;
    let load = true
    let produto_form = {
        id:Number,
        name:String,
        description:String,
        value:Number,
        categorias:Array
    }

    produto_form.id = 0;
    produto_form.name = "";
    produto_form.description = "";
    produto_form.value = 0;
    produto_form.categorias = [];

    
    useEffect(() => {


        api.get('categoria')
            .then(resp => {
                console.log(resp)
                setCategorias(resp.data);
            });
        
        if(produto_id == undefined){
            return;
        }
        
        update = true;
        // console.log("consultando produto: "+produto_id)
        // api.get(`produto/${produto_id}`)
        //     .then(resp => {
        //         setProduto("vinicius")
        //         console.log(resp.data)
        //     });
    },[])

    const handleChange = (event) => {

        console.log(event.target.name , event.target.value)
        produto_form[event.target.name] = event.target.value

        console.log(produto_form)

    }

    const handleSubmit = (event) => {    
        console.log('Event Submit...')
        console.log(produto_form)

        const produto = {
            description: produto_form.description,
            name: produto_form.name,
            value: produto_form.value,
            categorias: produto_form.categorias
        };

        let request = api.post('produto' , JSON.stringify(produto) , headers);

        if(update)
        {
            request = api.put(`produto/${produto_id}` , JSON.stringify(produto) , headers);
        }
        
        request.then((response)=>{

                console.log(response)

                if(response.status != 201 ){
                    return alert("Não foi possível registrar o produto.");
                }

                alert("Produto cadastro com sucesso!");

            }).catch(()=>{
                return alert("Não foi possível registrar o produto [01].");
            })

        event.preventDefault();    
    }

    return(
        <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor="produto-nome" className="">Nome</label>
                <input type="text" name="name" onChange={handleChange} value={produto.name} className="border"  id="produto-nome" />
            </div>

            <div className="">
                <label htmlFor="produto-descricao" className="">Descrição</label>
                <input type="text" name="description" onChange={handleChange}  value={produto.description} className="border" id="produto-descricao" />
            </div>

            <div className="">
                <label htmlFor="produto-valor" className="">Valor</label>
                <input type="number" name="value" onChange={handleChange} value={produto.value} className="border"  id="produto-valor" />
            </div>
            
            <CategoriasHook handleChange={handleChange} produto_form={produto_form} categorias_list={categorias}/>    

            <input type="submit" value="Submit" />
        </form>    
    )
}

export default Produto