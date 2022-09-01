(()=>{

    const fullName = (firstName: string, lastName?: string, upper=false): string => {
        if(upper){

           return `${firstName} ${lastName || '==='}`.toUpperCase(); 
        }else {
            return `${firstName} ${lastName || '==='}`; 
        }
        
    }

    const name = fullName ('Tony');

    console.log({name})

})()