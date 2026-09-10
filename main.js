async function start(){
    const response = await fetch("https://dog.ceo/api/breeds/image/random")
    const data = await response.json()
    createBreedList(data.message)
}

start()

function createBreedList(breedList){
    document.getElementById("breed").innerHTML = `
    <select>
        <option>Choose a dog breed</option>
            ${Object.keys(breedList).map(function (breed){
                return `<option><${breed}/option>`
            }).join}
    </select>
    `
}