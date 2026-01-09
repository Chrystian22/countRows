document.addEventListener("DOMContentLoaded", function() {
    const response = document.getElementById("responseText");

    // Función para contar las ocurrencias de "row" y sumar los valores numéricos
    function countRows(text) {
        const regex = /\((\d+)\s*row(?:s|\(s\))?\s*affected\)/gi;
        let match;
        let totalRows = 0;
    
        while ((match = regex.exec(text)) !== null) {
            totalRows += parseInt(match[1], 10);
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
