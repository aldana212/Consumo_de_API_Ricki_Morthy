const input = document.querySelector(".input")
const button = document.querySelector(".button")
const divResul = document.querySelector(".resultado")
const URI = `https://rickandmortyapi.com/api/character/?name=${input.value}`;


console.log(input.value);

const apiRicky = async(URI) =>{
        console.log(URI);
        divResul.innerHTML = "";
        const api = await fetch(`https://rickandmortyapi.com/api/character/?name=${input.value}`)
        // .then
        const data = await api.json()
        data.results.map(items =>{
                if(items.status == "Alive"){
                    divResul.innerHTML += `
                    <div class="card">
                        <div class="row g-0">
                            <div class="col-md-4 ">
                                <img src=${items.image} class="card_img " alt="...">
                            </div>
                            <div class="col-md-8">
                                <div class="card-body">
                                    <h5 class="card-title">${items.name}</h5>
                                    <p class="card-text1">${items.species} / ${items.gender}</p>
                                    <p class="card-text"><span class="statusAlive" status bg-green"></span>   <small class="text-muted">${items.status}</small></p>
                                </div>
                            </div>
                        </div>
                    </div>
                    `
                }
                if(items.status == "Dead"){
                    divResul.innerHTML += `
                    <div class="card">
                        <div class="row g-0">
                            <div class="col-md-4 ">
                                <img src=${items.image} class="card_img " alt="...">
                            </div>
                            <div class="col-md-8">
                                <div class="card-body">
                                    <h5 class="card-title">${items.name}</h5>
                                    <p class="card-text1">${items.species} / ${items.gender}</p>
                                    <p class="card-text"><span class="statusDead" status bg-green"></span>   <small class="text-muted">${items.status}</small></p>
                                </div>
                            </div>
                        </div>
                    </div>
                    `
                }
                if(items.status == "unknown"){
                    divResul.innerHTML += `
                    <div class="card">
                        <div class="row g-0">
                            <div class="col-md-4 ">
                                <img src=${items.image} class="card_img " alt="...">
                            </div>
                            <div class="col-md-8">
                                <div class="card-body">
                                    <h5 class="card-title">${items.name}</h5>
                                    <p class="card-text1">${items.species} / ${items.gender}</p>
                                    <p class="card-text"><span class="statusUnknown" status bg-green"></span>   <small class="text-muted">${items.status}</small></p>
                                </div>
                            </div>
                        </div>
                    </div>
                    `
                }
            })
            // if(divResul.innerHTML === ""){
            //     divResul.innerHTML += `
            //     <div class="alert alert-danger" role="alert">
            //         A simple danger alert—check it out!
            //     </div>
            //     `
            // }
}

input.addEventListener("keyup", apiRicky);
apiRicky(URI)