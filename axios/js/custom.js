const postsFetch = axios.create({
    baseURL: "https://jsonplaceholder.typicode.com",
    haders :{
        Accept: "application/json",
        Authorization: "novotoken",
    },
});