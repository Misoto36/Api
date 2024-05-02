import { Request, Response } from "express"
import conection from "../db/conection"
import { Connection } from "mysql2/typings/mysql/lib/Connection"

export const getComentarios = (req:Request, res:Response) =>{
    
    conection.query('SELECT * FROM comentarios',(err, data)=>{
        if(err) throw err
        res.json({
            status: 200,
            data: data
        })
    })  
}


export const getComentario = (req:Request,res:Response)=>{
    const {id} = req.params
    conection.query('SELECT * FROM comentarios WHERE id = ?',id,(err, data)=>{
        if(err) throw err
        res.json({
            status: 200,
            data: data
        })
    })  
}

export const deletComentario = (req:Request, res:Response)=>{
    const {id} = req.params

    conection.query('DELETE FROM comentarios WHERE ID = ?',id,(err,data)=>{
        if(err) throw err
        res.json({
            status: 200,
            msg: "Se elimino correctamente el registro"
        })
    })   
}

export const postComentario = (req:Request, res:Response)=>{
   const {body} = req
   conection.query('INSERT INTO comentarios SET ?',[body],(err,data)=>{
    if(err) throw err
    res.json({
        status: 200,
        msg: "Se creo correctamente el registro"
    })
})  
}

export const putComentario = (req:Request, res:Response)=>{
    const {body} = req
    const {id} = req.params
    conection.query('UPDATE comentarios SET ? WHERE id = ?',[body, id],(err,data)=>{
        if(err) throw err
        res.json({
            status: 200,
            msg: "Se actualizo correctamente el registro"
        })
    }) 
}
