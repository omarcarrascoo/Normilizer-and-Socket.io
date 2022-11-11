import { normalize, schema } from "normalizr"
import empresa from "./data.js"
import util from 'util'

function print(obj) {
    console.log(util.inspect(obj,false,12,true))
}

const gerenteSchema = new schema.Entity('gerente')
const encargadoSchema = new schema.Entity('encarcado');

const empleadoShchema = new schema.Entity('empleados', {
    gerente: gerenteSchema,
    encargado: encargadoSchema
})

const postsSchema = new schema.Entity('post',{
    gerente: gerenteSchema,
    encargado: encargadoSchema,
    empleados:[ empleadoShchema]
})

const normalizeEmpresa = normalize(empresa, postsSchema)
print(normalizeEmpresa)