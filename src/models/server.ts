// Aplicando desestructuracion
import express, {Application} from 'express'
// import express from 'express'
import rutasComentarios from '../routes/comentario.routes';
import conection from '../db/conection';
import cors from 'cors'

class Server {
    private app: Application
    // private app: express.Application
    private port: string

    constructor(){
        this.app = express();
        this.port = process.env.PORT || '3000';
        this.middlewares()
        this.routes()
        this.conectarDb
    }

    listen(){
        this.app.listen(this.port, ()=>{
            console.log(`Server is running on port ${this.port}`)
        })
    }

    middlewares(){
        this.app.use(express.urlencoded({extended: true}))
        this.app.use(express.json())
        this.app.use(express.static('public'))
        this.app.use(cors())
    }

    routes(){
        this.app.use('/api/comentarios',rutasComentarios)
    }

    conectarDb(){
        conection.connect((err)=>{
            if(err){
                console.log(err)
            }else{
                console.log('Conectado a la base de datos')
            }
        })
    }

}

export default Server