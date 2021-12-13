function clasificaElementos(index) {

       // Arrays de resultados
       var Npositivos = [];
       var Nnegativos = [];
       var Nzero = [];
   
       for(let i of index){
           if(i > 0){ 
               Npositivos.push(i);
           } else if (i == 0) {
               Nzero.push(i);
           } else if (i < 0) {
               Nnegativos.push(i);
           };
       };
   
       // Formateo de datos a retornar
       let Npos = (Npositivos.length/index.length).toFixed(4);
       let Nneg = (Nnegativos.length/index.length).toFixed(4);
       let Nzer = (Nzero.length/index.length).toFixed(4);
   
       // return de datos formato predefinido
       return [Npos,Nneg,Nzer];
}
module.exports = clasificaElementos;
