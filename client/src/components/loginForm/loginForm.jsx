import React from "react";
import styles from "./loginForm.module.css";
import { useState } from "react";
import Validation from "./validation/validation";


/*
*/

function LoginForm({login})  {

    const [errors, setErrors] = useState({email: '', password: ''})

    /*const validate = () => {
        let errors = Validation(user)
        setErrors(errors)
    }
    */


    const [user, setUser] = useState({
        email: '',
        password: ''
    });

    const [shown, setShown] = useState(false);

    const switchShown = () => setShown(!shown);

    const [password, setPassword] = useState("");

    const onChangePass = ({currentTarget}) => {
        setPassword(currentTarget.value);
    }

   /* function handleChange (e){
        setUser({
            ...user,
            [e.target.name]: e.target.value
        })
        validate() 
    }*/
        function handleChange (e){
        setUser({
        ...user,
        [e.target.name]: e.target.value
        })
        setErrors(Validation({
            ...user}))
    }
            
        

    /*crea una función "handleSubmit". Esta función recibe un evento por parámetro. 
    Deberás ejecutas la función e.preventDefault(). 
    Luego ejecuta la función "login" recibida por props. 
    ¡No te olvides de pasarle por parámetro tu estado local user!
    */

    function handleSubmit(e){
        e.preventDefault()
        if (errors.email || errors.password) {
            login(user)
        } else {
            alert('Hay errores en el Login');
            }
    }

    return (


        <div className={styles.contenedorForm}>

            <div className={styles.tituloForm} >

                <h1>Login</h1>
            </div>

            <form onSubmit={handleSubmit}>
                <div className={styles.contenedorInput}>
                <label className={styles.textoLogin}> ✉ EMAIL </label>
                <br/>
                <input 
                type="text" 
                placeholder="aqui-escribe-tu-@email.com"
                name="email"
                value={user.email}
                onChange={handleChange}
                />
                {errors.email && <p className={styles.error}>{errors.email}</p>}
                </div>
            
                <div className={styles.contenedorInput}>
                <label className={styles.textoLogin}> 🗝 CONTRASEÑA 
                    <span className={styles.mostrar} onClick={switchShown}>
                        {shown ? " ( ocultar )" : " ( mostrar )"}
                    </span>
                </label>
                <br/>
                <input 
                type={shown ? "text" : "password"} 
                name="password" 
                placeholder="Tu-clave123"
                value={user.password} /*user.password*/ 
                onChange={handleChange}
                onChangePass={onChangePass}
                />
                {errors.password && <p className={styles.error}>{errors.password}</p>}
                </div>

                <button className={styles.botonSubmit} type="submit"> ENTRAR </button>
            </form>
        </div>
    )
}


export default LoginForm