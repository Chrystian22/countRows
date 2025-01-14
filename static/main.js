document.addEventListener("DOMContentLoaded", function() {
    const response = document.getElementById("responseText");

    // Función para contar las ocurrencias de "row" y sumar los valores numéricos
    function countRows(text) {
        // Expresión regular para encontrar patrones como "(n row affected)"
        const regex = /\((\d+)\s*row\s*affected\)/gi;
        let match;
        let totalRows = 0;

        // Buscamos todas las coincidencias en el texto
        while ((match = regex.exec(text)) !== null) {
            const numRows = parseInt(match[1], 10);  // Extraemos el número de filas
            totalRows += numRows;  // Suma el número de filas afectadas
        }

        return totalRows;
    }

    // Evento para el botón "Enviar"
    const sendButton = document.getElementById("sendButton");
    sendButton.addEventListener("click", function() {
        const textRows = document.getElementById("textRows");
        const valueText = textRows.value.trim();  // Elimina los espacios extras

        // Llamamos a la función para contar las ocurrencias de "row" y sumarlas
        const rowCount = countRows(valueText);

        // Mostramos el resultado en el área de respuesta
        response.textContent = "El total de filas afectadas es: " + rowCount;
    });

    // Botón de pegar
    const pasteButton = document.getElementById("pasteButton");
    pasteButton.addEventListener("click", function() {
        // Usamos el Clipboard API para pegar el contenido
        navigator.clipboard.readText().then(function(text) {
            const textRows = document.getElementById("textRows");
            textRows.value = text; // Pegamos el texto en el textarea
        }).catch(function(error) {
            console.error('Error al acceder al portapapeles: ', error);
        });
    });

    // Botón de seleccionar todo
    const selectAllButton = document.getElementById("selectAllButton");
    selectAllButton.addEventListener("click", function() {
        const textRows = document.getElementById("textRows");
        textRows.select();  // Selecciona todo el texto dentro del textarea
    });
});
