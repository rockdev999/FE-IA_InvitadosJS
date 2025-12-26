import { agregarInvitado, contarPorInicial, encontrarPareja, encontrarTodasLasParejas, invitados, mostrarInvitados } from "./invitados";

const iniciarApp = () => {
    console.log("=== ORGANIZACION DE INVITADOS PARA CENA ===");
    console.log("");
    
    mostrarInvitados();
    console.log("");
    
    console.log("=== BUSQUEDA DEL PRIMER PAR ===");
    const primerPar = encontrarPareja(invitados);
    
    if (primerPar) {
        console.log(`Resultado: [${primerPar[0]}, ${primerPar[1]}]`);
        console.log(`${primerPar[0]} y ${primerPar[1]} pueden sentarse juntos.`);
    } else {
        console.log("No hay ningun par de invitados con la misma inicial.");
    }
    console.log("");
    
    console.log("=== TODOS LOS PARES POSIBLES ===");
    const todasLasParejas = encontrarTodasLasParejas(invitados);
    
    if (todasLasParejas.length > 0) {
        console.log(`Se encontraron ${todasLasParejas.length} par(es):`);
        for (const pareja of todasLasParejas) {
            console.log(`- ${pareja[0]} y ${pareja[1]}`);
        }
    } else {
        console.log("No se encontraron pares.");
    }
    console.log("");
    
    contarPorInicial();
    console.log("");
    
    console.log("=== AGREGANDO NUEVOS INVITADOS ===");
    agregarInvitado("Alberto");
    agregarInvitado("Carmen");
    console.log("");
    
    mostrarInvitados();
    console.log("");
    
    console.log("=== BUSQUEDA DESPUES DE AGREGAR INVITADOS ===");
    const nuevosPares = encontrarTodasLasParejas(invitados);
    console.log(`Ahora hay ${nuevosPares.length} par(es):`);
    for (const pareja of nuevosPares) {
        console.log(`- ${pareja[0]} y ${pareja[1]}`);
    }
    
    console.log("");
    console.log("=== FIN DEL PROCESO ===");
};

iniciarApp();