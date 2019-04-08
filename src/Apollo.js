import ApolloClient from 'apollo-boost';


const Client = new ApolloClient({
    uri: 'https://mrtns.ee/graphql'
})

export default Client;