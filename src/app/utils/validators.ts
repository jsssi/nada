export default function ValidatorFactory(){
    function validateName(name: string | null){
        if(!name){
            return "Nome não cadastrado";
        }
    
        if(name.length < 5){
            return "O nome tem que ter 5 letras no mínimo";
        }
    
        return null;
    }

    function validateEmail(email: string | null){
        if(!email){
            return "email não cadastrado";
        }

        const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        
        if(!emailPattern.test(email)){
            return "o padrão do email está incorreto";
        }
        return null;
    }

    function validatePassoword(pass: String | null){
        if(!pass){
            return "A senha não foi preenchida";
        }

        if(pass.length < 5){
            return "A senha deve possuir mais de 5 caracteres";
        }

        return null;
    }

    
} 

