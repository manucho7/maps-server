const Marcadores = require("./marcadores");


class Sockets {

    constructor( io ) {

        this.io = io;

        this.marcadores = new Marcadores();

        this.socketEvents();
    }

    socketEvents() {
        // On connection
        this.io.on('connection', ( socket ) => {

            // TODO marcadores activos al darse conexion
            socket.emit('marcadores-activos', this.marcadores.activos );

            //TODO MARCADOR NUEVO
            socket.on('marcador-nuevo', ( marcador ) => {
                this.marcadores.agregarMarcador( marcador );

                socket.broadcast.emit('marcador-nuevo', marcador);
            });

            //MARCADOR ACTUALIZADO
        
        });
    }


}


module.exports = Sockets;