
 function keyGenerator(tamnh){
    
    let passwd = ""

    do{
    passwd += Math.random().toString(36).substring(2)
    }while(passwd.length<tamnh)
    if(passwd.length > tamnh){
        passwd = passwd.slice(0,tamnh)
    }
      
    return passwd  
    }


  module.exports = {
    keyGenerator
  }
  
  