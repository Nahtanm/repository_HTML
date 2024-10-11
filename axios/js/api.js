const form = document.getElementById("#post-form");
const pass = document.getElementById("#pass");
const name = document.getElementById("#name");

// form.addEventListener("submit",()=>{
//     axios.post("localhost:8080/clientes",{
//         name: name.value,
//         pass: pass.value
//     })
// });

// const getData = async() => {
//     try{
//         const response = await axios.get("http://localhost:8080/clientes");
//         console.log(response.name);
//         return response;
//     }catch(error){
//         console.log(error);
//     }
// }

// getData()

axios.get("http://localhost:8080/clientes").then((res)=>{
    console.log(res)
}).cath((error) =>{
    console.log(error);
})