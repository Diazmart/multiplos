
const colors=require('colors');
const argv=require('yargs')
		.command('listar','Imprime en consola la tabla de multiplicar',{
			base: {
				demand : true,
				alias: 'b'
			},
			limite:{
				alias: 'l',
				default: 10
			}
		})
		.help() 
		.argv;


const {crearArchivo} = require('./multiplicar/multiplicar');
const {listarTabla} = require('./multiplicar/multiplicar');


let comando = argv._[0];

 switch(comando){

 		case 'listar':
 			listarTabla(argv.base,argv.limite)
 				.then(tabListada => console.log(`La tabla listada es: ${ tabListada}`))
 				.catch(err => console.log(err));
 			break;

 		case 'crear':
			crearArchivo(argv.base)
				.then(archivo=> console.log(`Archivo creado: ${ archivo }`.blue))
				.catch(e => console.log(e));
 			break;

 		default:
 			console.log('Comando no reconocido');
 			
 }

//let parametro = argv[2];
//base= parametro.split('=')[1]

