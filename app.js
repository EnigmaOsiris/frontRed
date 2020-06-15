const {createApolloFetch} =require ('apollo-fetch');

const fetchGraph = createApolloFetch({
    uri:"http://localhost:4001/graphql/"
});


async function getData() {
    const res = await fetchGraph({
        query:`
        { Business{
                name
            }}
        `
    })
    return res.data;
}

async function main() {
    console.log("iniciando");
    const luke = await getData();
    console.log(luke);
}

main();

// query:`
// { User{
//     userId
//     name
//     }}
// `