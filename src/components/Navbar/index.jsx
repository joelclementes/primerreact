import {useState,useEffect} from "react"
const Navbar = ({onSearch}) => {
    // Creamos una constante de estado llamada buscaLegis
    const [buscaLegis,setSearch] = useState('')

    // Función establecida en onChange del input
    const handleInputChange = (evt) => {
        // Seteador de useState para enviarle el valor del input y actualizar el estado buscaLegis
        setSearch(evt.target.value)
    }

    const handleInputKeyDown = (evt) => {
        if(evt.key==="Enter" || buscaLegis===''){
            onSearch(buscaLegis)
        }
    }
    return (
        <div>
            <p>Legisladores</p>
            <input 
                placeholder="Buscar Legislador" 
                onChange={handleInputChange} 
                onKeyDown={handleInputKeyDown}
                value={buscaLegis}
            />
        </div>
    )
}
export default Navbar