window.onload = function() {
    const canvas = document.getElementById('canvas');
    const ctx = canvas.getContext('2d');

    // Limpiar el canvas y ejecutar el código
    function clearAndExecute(code) {
        ctx.clearRect(0, 0, canvas.width, canvas.height); // Limpiar el canvas
        eval(code); // Ejecutar el código en el contexto del canvas
    }

    // Ejecutar el código de la textarea
    function executeCode() {
        const code = document.getElementById('codeEditor').value;
        try {
            clearAndExecute(code); // Limpiar y ejecutar
        } catch (error) {
            console.error("Error en el código: ", error);
            // Mostrar mensaje de error en el canvas
            ctx.fillStyle = 'red';
            ctx.font = '20px Arial';
            ctx.fillText("Error en el código", 10, canvas.height - 20);
        }
    }

    // Eventos de los botones
    document.getElementById('editButton').addEventListener('click', executeCode);
    document.getElementById('resetButton').addEventListener('click', () => {
        document.getElementById('codeEditor').value = `
ctx.fillStyle = 'green';
ctx.fillRect(10, 10, 100, 100);

ctx.beginPath();
ctx.moveTo(400, 150);
ctx.lineTo(450, 50);
ctx.lineTo(500, 150);
ctx.closePath();
ctx.fillStyle = '#FF6347'; // Color tomate
ctx.fill();
ctx.stroke();

// Pluma (línea curva con bordes redondeados)
ctx.lineCap = 'round'; // Bordes redondeados
ctx.lineWidth = 10; // Grosor de la línea
ctx.beginPath();
ctx.moveTo(600, 100);
ctx.lineTo(700, 200); // Pluma hacia abajo
ctx.strokeStyle = '#4682B4'; // Color azul acero
ctx.stroke();

// Líneas
ctx.lineWidth = 2; // Grosor de las líneas
ctx.beginPath();
ctx.moveTo(50, 300); // Inicio de la línea
ctx.lineTo(150, 400); // Línea hacia abajo
ctx.lineTo(50, 400); // Línea hacia la izquierda
ctx.strokeStyle = '#FF4500'; // Color rojo anaranjado
ctx.stroke();

// Arco
ctx.beginPath();
ctx.arc(300, 400, 50, 0, Math.PI * 1.5, false); // Arco de 270°
ctx.fillStyle = '#FFD700'; // Color dorado
ctx.fill();
ctx.strokeStyle = '#000'; // Color negro para el borde
ctx.stroke();

// Curva cuadrática
ctx.beginPath();
ctx.moveTo(50, 500);
ctx.quadraticCurveTo(200, 400, 400, 500); // Control x, Control y, destino x, destino y
ctx.strokeStyle = '#9400D3'; // Color violeta oscuro
ctx.lineWidth = 2; // Grosor de la línea
ctx.stroke();

// Curva Bézier
ctx.beginPath();
ctx.moveTo(600, 500); // Punto inicial
ctx.bezierCurveTo(700, 400, 500, 600, 800, 500); // Control 1, Control 2, destino
ctx.strokeStyle = '#00CED1'; // Color turquesa oscuro
ctx.lineWidth = 2; // Grosor de la línea
ctx.stroke();

// Combinación de líneas y figuras
ctx.fillStyle = '#8A2BE2'; // Color azul violeta
ctx.fillRect(100, 100, 200, 50); // Rectángulo
ctx.fillStyle = 'yellow'; // Color amarillo
ctx.beginPath();
ctx.arc(250, 250, 50, 0, Math.PI * 2); // Círculo
ctx.fill();
ctx.strokeStyle = 'red'; // Color rojo para el borde
ctx.stroke();

// Línea diagonal cruzando el rectángulo
ctx.beginPath();
ctx.moveTo(100, 100);
ctx.lineTo(300, 150); // Línea diagonal
ctx.strokeStyle = 'black';
ctx.stroke();
        `;
        clearAndExecute(document.getElementById('codeEditor').value); // Restablecer las formas
    });

    // Dibujar las formas iniciales al cargar la página
    resetShapes();

    function resetShapes() {
        const code = document.getElementById('codeEditor').value;
        clearAndExecute(code);
    }
};
