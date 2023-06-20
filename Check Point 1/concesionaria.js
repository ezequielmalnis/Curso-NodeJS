const autosImportados=require('./autos.js');

let persona1={
    nombre: 'Juan',
    capacidadDePagoEnCuotas: 20000,
    capacidadDePagoTotal: 100000
    }

let concesionaria = {
    autos:autosImportados,
   buscarAuto: function buscador (patente){
      let autoBuscado = this.autos.find(function(auto){
         return auto.patente==patente})
      return autoBuscado===undefined ? null : autoBuscado;

      },
   venderAuto:function vender (patente){
      if(this.buscarAuto(patente)!=null){
         this.buscarAuto(patente).vendido=true;
         return this.buscarAuto(patente);
      }
      else{
         return 'Auto no encontrado'
      }},
   autosParaLaVenta:function lista (){
      let listaAutos= this.autos.filter(function(aVender){
         return aVender.vendido != true
      })
      return listaAutos;
   },  
   autosNuevos: function ceroKm (){
     let nuevos= this.autosParaLaVenta().filter(function(nuevo){
      return nuevo.km < 100;
     })
     return nuevos
   },
   listaDeVentas: function () {
    let listadoVentas=this.autos.filter(function(precios){
      return precios.vendido ==true;
     })
    let listadoPrecios=listadoVentas.map(function(vendidos){
         return vendidos.precio;        
         }) 
    return listadoPrecios
    },
   totalDeVentas : function (){
        return this.listaDeVentas().reduce((acumulador, precio)=>
        acumulador + precio, 0)
     },
   puedeComprar:function(auto,persona){
        if(auto.precio<persona.capacidadDePagoTotal && auto.precio/auto.cuotas < persona.capacidadDePagoEnCuotas){
           return true;
        }else{
           return false;
        }
     },
   // autosQuePuedeComprar: function(cliente){
   //    let autosComprables=[];
   //    this.autosParaLaVenta().forEach(auto => {if(this.puedeComprar(auto,cliente)==true){
   //       autosComprables.push(auto)
   //    }
   //    })
   //    return autosComprables
//}
   // autosQuePuedeComprar: function(cliente) {
   //    const autosDisponibles = this.autosParaLaVenta();
   //    const autosComprables = [];
  
   //    autosDisponibles.forEach(auto => {
   //      if (this.puedeComprar(auto, cliente)==true) {
   //        autosComprables.push(auto);
   //      }
   //    });
   //    return autosComprables;
   //  }
   autosQuePuedeComprar: function (persona) {
      let listadoComprables=this.autosParaLaVenta().filter(cadaAutos => this.puedeComprar(cadaAutos,persona) == true)
       return listadoComprables
 }
}

 

console.log(concesionaria.autosQuePuedeComprar(persona1));
