

const thisButton = document.querySelector("button")

function pressButton(){
    console.log('button clicked');
    axios.get("https://swapi.dev/api/planets/2".then(res) => {
    let mainBody = document.querySelector("body");
        for (let i = 0; i < res.param.name.length; i++) {
          let newElement = document.createElement("h2");
          newElement.textContent = res.data[i];
          mainBody.appendChild(newElement);
        }
    });

};

thisButton.addEventListener('click', pressButton);


