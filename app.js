 window.addEventListener("load", () =>{
    const form = document.querySelector("form")
    const input = document.querySelector("input")
    const result = document.querySelector("#result")
    const button = document.getElementById("btn")

    button.addEventListener('click', (e) => {
        //Prevent form submission
        e.preventDefault()

        let userInput = input.value.trim()
        let url = `superheroes.php?name=${userInput}`

        fetch(url)
        .then(response => {
            if(response.ok){return response.text()}
            else{return Promise.reject('something went wrong!')}
        })
        .then(data => {
            result.innerHTML = data
        })
        .catch(error => console.log("ERROR HAS OCCURRED: " + error))
    })
 })