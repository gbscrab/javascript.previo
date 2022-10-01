function saludar(cliente) {
    console.log("Bienvenido!♥",cliente)
}
function login() {
    let cliente = prompt ("ingresa tu nombre de usuario:").trim()

    if (cliente !== && cliente.length>=3) { 
        saludar(cliente)
    } else {
        console.warn("no se reconoce el usuario ingresado")
    }
}
