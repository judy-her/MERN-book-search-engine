const typeDefs = `
type User {
    _id: ID
    username: String
    email: String
    password: String    
}

type Book {
    _id: ID
    title: String
    author: String
    image: String
}

type Query {
    user: User
    users: [User]
}

type Mutation{
    
}
`;
module.exports = typeDefs;
