const LegisladorItem = ({idDiputado,foto, nombreDip, cargoProceso, distritoN, nombreGrupoLegislativo, logoPartido, siglasPartido, onEventClick}) => {
    return (
        <>
        <div className='legislador-item' >
            <img src={foto} className='legislador-foto' alt={"Foto de "+nombreDip} />
            <div>{nombreDip}</div>
            <div>{cargoProceso}</div>
            <div>{distritoN}</div>
            <div>{nombreGrupoLegislativo}</div>
            <div><img src={logoPartido} className="legislador-partido-foto" alt={"Logo del partido "+siglasPartido}/></div>
            <button onClick={() => onEventClick(idDiputado)}>Ver más</button>
        </div>
        </>
    )
}
export default LegisladorItem