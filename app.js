const {crearArchivo} = require('./helpers/multiplicar');
const argv = require('./config/yargs');
const colors = require('colors');

console.clear();


crearArchivo(argv.b, argv.l,argv.h)
    .then(nombreArchivo => console.log(nombreArchivo.rainbow,'creado'))
    .catch(err => console.log(err));


// console.log('base: yargs',argv.base);


// const[,,arg3 = 'base=5'] = process.argv;
// const [,base = 5] = arg3.split('=');

//let base= 5;




// console.log('Tabla del 5');
// let base= 3;

// let salida = '';

// for(let i=1;i<=10;i++){
//     salida += `${base} x ${i} = ${base*i}\n`;
// }

// console.log(salida);

// fs.writeFile( `tabla-${base}.txt`, salida, (err) =>{
//     if(err) throw err;
//     console.log(`tabla-${base}.txt creado`);
// })

// fs.writeFileSync(`tabla-${base}.txt`,salida);
// console.log(`tabla-${base}.txt creado`);

