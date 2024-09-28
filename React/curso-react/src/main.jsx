import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx' //impotando  o componente App sempre precisamo importar os nossos componentes
import './index.css'

createRoot(document.getElementById('root')).render(
  
  <StrictMode> {/*é um componente nativo do ract é só para testes, quantanto vamos desenvolvendo ele vai mostrando erro*/}
  {/*Aqui dentro vao os componentes que serao renderizados*/}
    <App />
  </StrictMode>,
)
