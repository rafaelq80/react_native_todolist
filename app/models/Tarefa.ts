import  Categoria from "./Categoria"

export default interface Tarefa{
    id: number
    nome: string
    descricao: string
    responsavel: string
    data: string
    status: boolean
    categoria?: Categoria | null
}