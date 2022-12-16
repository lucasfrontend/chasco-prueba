import { React, useState}  from "react"
import { useAuth } from '../context/authContext'
import { useNavigate } from 'react-router-dom'

export function Register(){
    const [ user, setUser ] = useState({
        email: '',
        password: ''
    })

    const { signup } = useAuth()
    const navigate = useNavigate()
    const [error, setError] = useState()

    const handleChange = ({target: {name, value}}) => {
        setUser({...user, [name]: value})

    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        setError('')
        try{
            await signup(user.email, user.password)
            navigate('/')
        } catch (error){
            console.log("no veooo")
            console.log(error.code, "codigo de error", error)
            setError(error.message)
        }
    }
    return <>
                
            <br />
            <br />
            <br />
            <h3>holi</h3>
            <h3>holi</h3>
            <h3>culo</h3>
        { error ? <h3 className="text-white">{error}</h3> : '' }
        <form onSubmit={handleSubmit}>
            <label htmlFor="email" className="text-white">Email</label>
            <input type="email" name="email" placeholder="tu mail" className="text-black" onChange={handleChange}/>

            <label htmlFor="password">Password</label>
            <input type="password" name="password" placeholder="******" className="text-black" onChange={handleChange}/>

            <button type="submit">Registrarse</button>
        </form>
    </>
}