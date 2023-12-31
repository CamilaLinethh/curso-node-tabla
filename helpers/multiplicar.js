const fs = require('fs');
const colors = require('colors');




const crearArchivo = async (base = 5, listar = false, hasta=10) => {

    try{

        let salida, consola = '';
        
            for(let i=1;i<=hasta;i++){
                salida += `${base} x ${i} = ${base*i}\n`;
                consola += `${base} ${'x'.green} ${i} ${'='.green} ${base*i}\n`;

            }

        if(listar){
            console.log('Tabla del', colors.blue(base));
            console.log(consola);
        }
        
            fs.writeFileSync(`./salida/tabla-${base}.txt`,salida);
            return (`tabla-${base}.txt creado`);
        
    }catch(err){
        throw err;
    }

 
      
}

module.exports={
    crearArchivo
}

// const crearArchivo = (base = 5) => {

//     return new Promise (( resolve, reject) => {
//         console.log('Tabla del', base);
    
//         let salida = '';
    
//         for(let i=1;i<=10;i++){
//             salida += `${base} x ${i} = ${base*i}\n`;
//         }
        
//         console.log(salida);
        
//         fs.writeFileSync(`tabla-${base}.txt`,salida);
//         resolve(`tabla-${base}.txt creado`);
//     })
      
// }