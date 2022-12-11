import { React, useState}  from "react"
import { useAuth } from '../context/authContext'
import { useNavigate, Link } from 'react-router-dom'
import { toast } from 'react-toastify';

export function Login(){
    const [ user, setUser ] = useState({
        email: '',
        password: ''
    })

    const { login, loginWithGoogle, resetPassword } = useAuth()
    const navigate = useNavigate()
    const [error, setError] = useState()

    const handleChange = ({target: {name, value}}) => {
        setUser({...user, [name]: value})

    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        setError('')
        try{
            await login(user.email, user.password)
            navigate('/')
        } catch (error){
            console.log("no veooo")
            console.log(error.code, "codigo de error", error)
            setError(error.message)
            toast(error.message, {
                type: "info",
                autoClose: 2000,
                position:"top-right",
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light"
            });
        }
    }

    const handleGoogleLogin = async () => {
        try {
            throw new Error('Google error')
            await loginWithGoogle();
            navigate('/')
        } catch (error) {
            setError(error.message)
            toast(error.message, {
                type: "info",
                autoClose: 2000,
                position:"top-right",
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light"
            });
        }
    }

    //funcionalidad incompleta
    const handleResetPass = async () => {
        if(!user.email){
            setError('Por favor ingresá una casilla')
            toast('Por favor ingresá una casilla', {
                type: "info",
                autoClose: 2000,
                position:"top-right",
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light"
            });
        }
        try {
            await resetPassword(user.email);
            setError("Chequea tu mail")
        } catch (error) {
            setError(error.message)            
        } 
    }

    return <>
    {/*
        <form onSubmit={handleSubmit}>
            <label htmlFor="email">Email</label>
            <input type="email" name="email" placeholder="tu mail" classNameName="text-black" onChange={handleChange}/>

            <label htmlFor="password">Password</label>
            <input type="password" name="password" placeholder="******" classNameName="text-black" onChange={handleChange}/>
        </form>
    
    */}




        <div className="bg-login h-screen overflow-hidden flex items-center justify-center">
            <div className="w-10/12 lg:w-9/12 xl:w-7/12 flex">
                <div className="bg-login-screen w-full h-auto hidden lg:block lg:w-1/2 bg-cover rounded-lg lg:rounded-r-none blue-light bg-blue-light">

                </div>
                <div className="w-full lg:w-1/2 bg-white rounded-lg lg:rounded-l-none py-24 px-12">
                    <h3 className="font-bold text-3xl text-red-600 text-center tracking-widest uppercase mb-4 text-blue">Barrilogin</h3>
                    <form className="bg-white" onSubmit={handleSubmit}>
                        <div className="mb-4">
                            <label className="block mb-2 text-sm font-bold text-lightest" htmlFor="email">
                            Email
                            </label>
                            <input type="email" name="email" id="email" className="w-full p-3 text-md border rounded shadow focus:outline-none focus:shadow-outline" placeholder="Tu correo" onChange={handleChange}/>
                        </div>
                        <div className="mb-4">
                            <label className="block mb-2 text-sm font-bold text-lightest" htmlFor="password">
                                Password
                            </label>
                            <input type="password" name="password" id="password" className="w-full p-3 text-md border rounded shadow focus:outline-none focus:shadow-outline" placeholder="***********" onChange={handleChange}/>
                        </div>
                        <div className="mb-4">
                            <button className="w-full p-3 font-bold text-white bg-blue rounded-full focus:outline-none" type="submit">
                            login
                            </button>
                        </div>
                        <hr className="mb-4 border-t" />
                        <div className="text-sm text-center">
                            <Link to="/register">Crea una cuenta</Link>
                            <a href="#" onClick={handleResetPass} className="text-blue pl-2">Olvidaste el puto pass ?</a>
                        </div>
                    </form>
                    

                    <button className="mt-4 flex w-full border-2 border-blue-400 bg-blue-500 text-white rounded align-middle" onClick={handleGoogleLogin}>
                        <span className="bg-white">
                            <svg version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" className="w-8 bg-white p-2">
                            <g>
                                <path fill="#EA4335" d="M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85C35.9 2.38 30.47 0 24 0 14.62 0 6.51 5.38 2.56 13.22l7.98 6.19C12.43 13.72 17.74 9.5 24 9.5z"></path>
                                <path fill="#4285F4" d="M46.98 24.55c0-1.57-.15-3.09-.38-4.55H24v9.02h12.94c-.58 2.96-2.26 5.48-4.78 7.18l7.73 6c4.51-4.18 7.09-10.36 7.09-17.65z"></path>
                                <path fill="#FBBC05" d="M10.53 28.59c-.48-1.45-.76-2.99-.76-4.59s.27-3.14.76-4.59l-7.98-6.19C.92 16.46 0 20.12 0 24c0 3.88.92 7.54 2.56 10.78l7.97-6.19z"></path>
                                <path fill="#34A853" d="M24 48c6.48 0 11.93-2.13 15.89-5.81l-7.73-6c-2.15 1.45-4.92 2.3-8.16 2.3-6.26 0-11.57-4.22-13.47-9.91l-7.98 6.19C6.51 42.62 14.62 48 24 48z"></path>
                                <path fill="none" d="M0 0h48v48H0z"></path>
                            </g>
                            </svg>
                        </span>
                        <span className="text-lightest">Continuar con Google</span>
                    </button>
                </div>
            </div>
        </div> 

    </>
}