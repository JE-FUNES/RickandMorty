
  const Validation = (user) => { 
        const errors = {}
        
            if (!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(user.email)) {
            errors.email = 'sintaxis de email errónea.';
            }
            if(!user.email){ 
                errors.email = 'Completa tu email por favor.'
            }
            if(user.email.length >= 35){
                errors.email = 'El email no puede tener más de 35 caracteres.'
            }
    
            if(!/\d/.test(user.password)) {
            errors.password = 'El password debe contener almenos 1 número.'
            }
           else if (user.password.length < 6 || user.password.length > 10){
                errors.password = 'Entre 6 y 10 caracteres.'
            }
    return errors;
        };
        
export default Validation;