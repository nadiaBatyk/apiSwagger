const typeDefs = `
type Query {
    getAllProducts:[Product]
    getProduct(nombre:String):String
}

type Product {
    id:ID,
    nombre:String,
    precio:Int,
    link:String
}
`


module.exports = typeDefs