const bodyElement = document.querySelector("body");
const alderaanButton = document.querySelector(".alderaan");
const tatooineButton = document.querySelector(".tattooine");
const bestCharacterButton = document.querySelector(".bestCharacter");

//alderaan residents
function retrieveAlderaanResidents() {
    axios.get("https://swapi.dev/api/planets/?search=Alderaan").then((res) => {
        let residents = res.data.results[0].residents;
        console.log(residents);
        retrieveResidentNames(residents);
    });
};

alderaanButton.addEventListener('click', retrieveAlderaanResidents);


//tattooine residents
function retrieveTatooineResidents() {
    axios.get("https://swapi.dev/api/planets/?search=Tatooine").then((res) => {
        let residents_array = res.data.results[0].residents;
        retrieveResidentNames(residents_array);
    });
};

tatooineButton.addEventListener('click', retrieveTatooineResidents)

//this function will iterate through resident's array and add each one to html
//add resident names to html
function retrieveResidentNames(residents_array) {
    for (let i = 0; i < residents_array.length; i++) {
        axios.get(residents_array[i]).then((res) => {
            let resident = document.createElement("h2");
            resident.textContent = `${res.data.name}`;
            bodyElement.appendChild(resident);
        })
    }
};



function bestCharacterName(){
    axios.get("https://swapi.dev/api/people/?search=yoda").then((res) => {
        let yoda = res.data.results[0].name;
        let bestCharacterNameButton = document.createElement("h1");
        bestCharacterNameButton.textContent = yoda;
        bodyElement.appendChild(bestCharacterNameButton);
    })
}


bestCharacterButton.addEventListener('click', bestCharacterName)




