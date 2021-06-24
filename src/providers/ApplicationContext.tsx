import React, {useState, createContext} from 'react' 

export const ApplicationContext = createContext()

export const ApplicationProvider = (props) => {
  
  const [produto, setProduto] = useState([])
  const [produtos, setProdutos] = useState([])
  const [categorias, setCategorias] = useState([])

  return(
    <ApplicationContext.Provider value={[
        produto, 
        setProduto , 
        produtos,
        setProdutos,
        categorias , 
        setCategorias
      ]}>
      {props.children}
    </ApplicationContext.Provider>
  )
}