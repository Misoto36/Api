import { Router } from "express";
import { deletComentario, getComentario, getComentarios, postComentario, putComentario } from "../controllers/comentario.controller";

const router = Router();

router.get('/',getComentarios)
router.get('/:id', getComentario)
router.delete('/:id', deletComentario)
router.post('/', postComentario)
router.put('/:id', putComentario)

export default router;