//alert("Hola");
function my_function() {
	var nombre = prompt("ingresa tu nombre", "pepito");
	if (nombre != null) {
		document.write("<p> Has ingresado correctamente tu nombre de usuario es "+"<span id='color'>" + nombre +"</span </p>");
	}
}

