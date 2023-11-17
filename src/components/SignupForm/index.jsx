import {useForm} from "react-hook-form"

const SignupForm = () => {
    const {register, handleSubmit, reset, formState:{errors}} = useForm()

    
    const handleClearClick = () => {
        reset()
    }

    const handleSubmitForm = (data) => {
        console.log(data)
    }

    // console.log(errors)

    return (
        <>
        <form onSubmit={handleSubmit(handleSubmitForm)}>
            <label>
                Nombre
                <input {...register('name',{required:true})}/>
            </label>
            <br />
            <label>
                Correo
                <input {...register('mail',{required:true})}/>
            </label>
            <br />
            <label>
                Whatsapp
                <input {...register('whatsapp',{required:true})}/>
            </label>
            <div>
                <button type="button" onClick={handleClearClick}>Limpiar</button>
                <button type="submit">Enter</button>
            </div>
        </form>
        </>
    )
}

export default SignupForm