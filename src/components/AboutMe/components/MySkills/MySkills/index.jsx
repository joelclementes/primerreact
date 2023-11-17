const MySkills = (props) => {
    const listaItems = props.skills.map((skill, index) => (
        <p key={index} className="acercademi">👉🏽 {skill.name}</p>
    )
        )
    return (
        <>
            <div className="col col-sm-12 col-md-5">
                <p className="">
                    Mis habilidades:
                </p>
                <div>
                    {listaItems}
                </div>
            </div>
        </>
    )
}

export default MySkills;