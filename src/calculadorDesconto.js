module.exports = {
    gerar: (tipo, dia, possuiCarteirinha) => {
        const crianca = 5.5;
        const estudante = 8;
        const idoso = 6;
        let porcentagem = 0;

        if(tipo == 'estudante' && dia != 'sabadeDomingoFeriado' && possuiCarteirinha){
            porcentagem = 35;
            return  estudante - (estudante * (porcentagem/100))
        }
        
        switch (dia) {
            case 'segunda': 
                if(tipo == 'crianca' || tipo == 'estudante' || tipo == 'idoso')
                    porcentagem = 10;
                break;

            case 'terca': 
                if(tipo == 'crianca' || tipo == 'idoso')
                    porcentagem = 15;
                    
                if(tipo == 'estudante')
                    porcentagem = 5;
                break;

            case 'quarta': 
                if(tipo == 'idoso')
                    porcentagem = 40;
                
                if(tipo == 'crianca')
                    porcentagem = 30;

                if(tipo == 'estudante')
                    porcentagem = 50;
                break;

            case 'quinta': 
                if(tipo == 'estudante' || tipo == 'idoso')
                    porcentagem = 15;
                else
                    porcentagem = 0;
                break;

            case 'sexta': 
                if(tipo == 'crianca')
                    porcentagem = 11;
                else
                    porcentagem = 0;

                break;
                
            case 'sabadeDomingoFeriado': 
                if(tipo == 'idoso')
                    porcentagem = 5;
                else
                    porcentagem = 0;

                break;
        }

        switch (tipo) {
            case 'crianca':  
                return crianca - (crianca * (porcentagem/100))

            case 'estudante':  
                return estudante - (estudante * (porcentagem/100))

            case 'idoso':  
                return idoso - (idoso * (porcentagem/100))

        }
    },
    
}