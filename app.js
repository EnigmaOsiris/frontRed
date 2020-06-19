const {createApolloFetch} =require ('apollo-fetch');

const fetchGraph = createApolloFetch({
    uri:"http://10.89.52.20:80/graphql"
});


async function getData() {
    const res = await fetchGraph({
        query:`
        query {

            allUser{
              name
              status
              employeeNumber
            }
          }
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