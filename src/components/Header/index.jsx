const Header = () => {
    const data = {
        foto: "MiFoto.jpg",
        nombre: "Joel Clemente Serrano",
        titulo:"Joel",
        subtitulo:"Sistemas Computacionales Administrativos",
        lenguajes:"JavaScript - PHP - MySql - Html - CSS",
        tamaño: 100
    }
    return (
        <>
            <div className="mt-4 mb-4">
                <div className="d-flex flex-row align-items-center align-content-center">
                    <div className="p-2">
                        <img
                            className="avatar"
                            src={data.foto}
                            alt={'Foto de ' + data.nombre}
                            style={{
                                width: data.tamaño,
                                height: data.tamaño,
                            }}
                        />
                    </div>
                    <div className="d-flex flex-column p-2">
                        <h3>{data.titulo}</h3>
                        <h6>{data.subtitulo}</h6>
                        <h6>{data.lenguajes}</h6>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Header;