// Primeira request
const getData = async() =>{
    try{
        const response = await axios.get("https://jsonplaceholder.typicode.com/users", 
            // Definindo headers
            {
                headers:{
                    "Content-Type": "application/json",
                    custom:"header"
                }
            }
        )
        console.log(response);
        return response.data;
    }catch(error){
        console.log(error)
    }
}

const container = document.querySelector("#user-container");

const printData = async () =>{
    const data = await getData();

    data.forEach((element) => {
        const div = document.createElement("div");
        const nameElement = document.createElement("h2");
        nameElement.textContent = element.name;

        const emailElement = document.createElement("p");
        emailElement.textContent = element.email;
        

        div.appendChild(nameElement);
        div.appendChild(emailElement);
        container.appendChild(div);
        
    });
}

printData();

// post
const form = document.querySelector("#post-form")
const titleInput = document.querySelector("#title")
const body = document.querySelector("#body")

form.addEventListener("submit", (e) =>{
    e.preventDefault();

    axios.post("https://jsonplaceholder.typicode.com/posts",{
            title: titleInput.value, 
            body: body.value,
    })
});