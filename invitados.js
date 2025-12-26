export const invitados = ["Ana", "Carlos", "Cecilia", "Daniel", "Diana", "Eduardo", "Elena", "Fernando"];

export const encontrarPareja = (arr) => {
    let inicio = 0;
    let siguiente = 1;
    
    while (siguiente < arr.length) {
        const inicialActual = arr[inicio].charAt(0).toUpperCase();
        const inicialSiguiente = arr[siguiente].charAt(0).toUpperCase();
        
        console.log(`Comparando: ${arr[inicio]} (${inicialActual}) con ${arr[siguiente]} (${inicialSiguiente})`);
        
        if (inicialActual === inicialSiguiente) {
            console.log(`Par encontrado!`);
            return [arr[inicio], arr[siguiente]];
        }
        
        inicio++;
        siguiente++;
    }
    
    return null;
};

export const encontrarTodasLasParejas = (arr) => {
    const parejas = [];
    let inicio = 0;
    let siguiente = 1;
    
    while (siguiente < arr.length) {
        const inicialActual = arr[inicio].charAt(0).toUpperCase();
        const inicialSiguiente = arr[siguiente].charAt(0).toUpperCase();
        
        if (inicialActual === inicialSiguiente) {
            parejas.push([arr[inicio], arr[siguiente]]);
        }
        
        inicio++;
        siguiente++;
    }
    
    return parejas;
};

export const mostrarInvitados = () => {
    console.log("=== LISTA DE INVITADOS ===");
    for (const invitado of invitados) {
        console.log(`- ${invitado}`);
    }
    console.log("---------------------------");
};

export const agregarInvitado = (nombre) => {
    invitados.push(nombre);
    invitados.sort();
    console.log(`Invitado "${nombre}" agregado a la lista.`);
};

export const contarPorInicial = () => {
    const conteo = {};
    
    for (const invitado of invitados) {
        const inicial = invitado.charAt(0).toUpperCase();
        conteo[inicial] = (conteo[inicial] || 0) + 1;
    }
    
    console.log("=== CONTEO POR INICIAL ===");
    for (const letra in conteo) {
        console.log(`${letra}: ${conteo[letra]} invitado(s)`);
    }
    console.log("---------------------------");
};