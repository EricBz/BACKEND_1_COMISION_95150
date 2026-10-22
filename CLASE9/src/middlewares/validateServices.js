import { z } from "zod"

const serviceSchema = z.object({
    name: z.string({
        error: (issue) => {
            issue.input === undefined ? "El nombre es obligatorio" : "El nombre debe ser un texto"
        }
    }).min(1, "El nombre es obligatorio."),
    description: z.string({
         error: (issue) => {
            issue.input === undefined ? "El nombre es obligatorio" : "El nombre debe ser un texto"
        }
    }).min(1, "La descripcion es obligatoria."),
    price: z.number({
        error: (issue) => {
            issue.input === undefined ? "El precio es obligatorio"  : "El precio debe ser un numero"
        }
    }).positive("El precio debe ser mayor a 0.")
})

export const validateService = (req, res, next) => {
    const resultado = serviceSchema.safeParse(req.body)
    if (!resultado.success) {
        console.log(resultado.error)
        return res.status(404).json({
            error: "Datos invalidos",
            detalles: resultado.error.issues
        })
    }

    req.body = resultado.data
    next()
}