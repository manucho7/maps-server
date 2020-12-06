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

            // marcadores activos
            socket.emit('marcadores-activos', this.marcadores.activos );

            //nuevo marcador
            socket.on('marcador-nuevo', ( marcador ) => {
                this.marcadores.agregarMarcador( marcador );

                socket.broadcast.emit('marcador-nuevo', marcador);
            });

            //MARCADOR ACTUALIZADO
            
        
        });
    }


}


module.exports = Sockets;