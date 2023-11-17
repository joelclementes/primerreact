import MySkills from './components/MySkills/MySkills'
import Me from './components/Me'
const AboutMe = () => {
    const arraySkills = [
        {name:"Análisis de bases de datos"},
        {name:"Páginas web"},
        {name:"Sistemas de procesamiento de transacciones"},
        {name:"Sistemas de gestión"},
    ]
    return (
        <>
            <div className="d-flex flex-column align-items-center align-content-center mt-3">
                <Me name="Joel Clemente Serrano"/>
                <MySkills skills={arraySkills}/>
            </div>
        </>
    )
}

export default AboutMe;