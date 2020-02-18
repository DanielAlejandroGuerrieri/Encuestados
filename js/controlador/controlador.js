/*
 * Controlador
 */
var Controlador = function(modelo) {
    this.modelo = modelo;
};

Controlador.prototype = {
    agregarPregunta: function(pregunta, respuestas) {
        this.modelo.agregarPregunta(pregunta, respuestas);
    },

    //Guia 3 paso 1 - agregado de acciones modificar y agregar voto
    modificarPregunta: function() {
        var id = parseInt($('.list-group-item.active').attr('id'));
        if (id != -1) {
            var texto = prompt('Editar pregunta:', '');
            this.modelo.editarPregunta(id, texto);
        }
    },

    borrarPregunta: function() {
        var id = parseInt($('.list-group-item.active').attr('id'));
        if (id != -1) {
            this.modelo.borrarPregunta(id);
        }
    },

    agregarVoto: function(pregunta, respuestaSeleccionada) {
        this.modelo.agregarVoto(pregunta, respuestaSeleccionada);
    },


};