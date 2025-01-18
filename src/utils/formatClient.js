import rawClientes from '../data/clientes.json'

export const clientes = rawClientes.map(cliente => {
    return {
        id: cliente.id,
        name: cliente.name,
        url: cliente.url
    }
})

