const fs= require('fs');


let crearArchivo = (base) =>{

	return new Promise((resolve,reject)=>{

		if (!Number(base)){
			reject(`El valor introducido " ${ base } " no es un número`);
			return;
		}

		let data='';

		for (let i=0; i<11 ; i++){
			let result = base*i;
			data += `${base} *  ${i} = ${result} \n` ;
		}

		fs.writeFile(`tablas/tabla${base}.txt`, data, (err) => {
 	 		if (err) 
  				reject (err)
  			else
  				resolve(`tablas/tabla${base}.txt`); 
		});

	});
}


let listarTabla = (base,limite) =>{

	return new Promise((resolve,reject)=>{
		if (!Number(base)){
			reject(`El valor introducido " ${ base } " no es un número`);
			return;
		}

		let data='';

		for (let i=1; i<limite+1 ; i++){
			let result = base*i;
			data += `${base} *  ${i} = ${result} \n` ;
			//console.log(`${base} * ${i} = ${result} \n`);
		}
	})
}




module.exports = {
	crearArchivo,
	listarTabla
}