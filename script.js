document.getElementById("btnBuscar").addEventListener("click", function(){
    const id = document.getElementById("userId").value;

    fetch(``)
    .then(res => res.json())
    .then(usuario => {
        
        const idade = Math.floor(Math.random() * 40) + 20;

        const jsonApiFormt = {
           data: {
            type: "users",
            id: usuario.id,
            attributes: {
            name: usuario.name,
            age: idade

            }
           }
        };
        const nome = jsonApiFormat.data.attributes.name;
        const idadeFinal = 
    });
});