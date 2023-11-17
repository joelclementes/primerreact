import LegisladorItem from "./components/LegisladorItem/Index"
import useLegisladoresData from "../../hooks/useLegisladoresData.js"
const Legisladores = ({searchLegis}) => {
    
    const {datLegisladores} = useLegisladoresData();

    const handleEventItemClick = (id) => {
        console.log('Legislador clickeado: ',id)
    }

    const renderLegisladores = () => {
        let legisFiltered = datLegisladores
        
        if(searchLegis.length > 0){
            legisFiltered = legisFiltered.filter((item) => item.nombreDip.toLowerCase().includes(searchLegis.toLowerCase()))
        }

        return legisFiltered.map((legisladorItem) => (
            <LegisladorItem 
                key={`legis-${legisladorItem.idDiputado}`} 
                nombreDip={legisladorItem.nombreDip} 
                cargoProceso={legisladorItem.cargoProceso}
                foto={`https://legisver.gob.mx${legisladorItem.archivoFoto2}`}
                logoPartido={`https://legisver.gob.mx${legisladorItem.logoPartido}`}
                siglasPartido={legisladorItem.siglasPartido}
                distritoN={legisladorItem.distritoN}
                nombreGrupoLegislativo={legisladorItem.nombreGrupoLegislativo}
                onEventClick={handleEventItemClick}
                idDiputado={legisladorItem.idDiputado} 
            />
        ))
    }


    return (
        <div>
            {renderLegisladores()}
        </div>
    )
}

export default Legisladores