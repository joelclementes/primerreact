const Me = (props) => {
    const data = {
        colorText : "grey",
        colorHighlighted : "blackStrong"
    }
    return (
        <>
        <div className={"col col-sm-12 col-md-5 "+data.colorText}>
            <p className="">
            Hola. Soy <span className={data.colorHighlighted}>{props.name}</span>. Disfruto creando productos dinámicos y creativos de principio a fin. Enfocados en desarrollar experiencias intuitivas que crecen y mejoran constantemente en función de las métricas de los usuarios.
            </p>
            <p className="">
                Me dedico al análisis y desarrollo de sistemas desde 1990.<br/>
                <span className={data.colorHighlighted}>Mi especialidad</span> es el análisis de los requerimientos de mis clientes, quienes necesitan soluciones <span className={data.colorHighlighted}>«a la medida»</span> para el ejercicio de su empresa.
            </p>
            <p className="">
                Lo que te ofrezco es una solución, la cual no se resolvería con cualquiera software que exista en el mercado creado en serie.
            </p>
            <p className="">
                La solución para tu empresa es crear la aplicación adecuada de una manera sencilla, con el propósito de simplificar tus procesos y que obtengas informes rápidos que te ayudarán a optimizar tiempo para la toma de decisiones.
            </p>
        </div>
        </>
    )
}

export default Me;