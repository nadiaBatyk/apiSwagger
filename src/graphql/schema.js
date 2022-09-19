const typeDefs = `
type Product {
    _id:ID
    nombre:String
    precio:Int
    link:String
}

input ProductInput {
    nombre:String!
    precio:Int!
    link:String
}

type Query {
    getAllProducts:[Product]
    
}
type Mutation {
    createProduct(product:ProductInput):Product
    deleteProduct(id:ID):String
    updateProduct(id:ID,product:ProductInput):Product
}


`;

module.exports = typeDefs;
