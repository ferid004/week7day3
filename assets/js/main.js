let table = document.getElementById("list")
let alinsin = document.getElementById("alinsin")

async function fetchData() {
    const response = await fetch("https://api.tvmaze.com/shows");
    const data = await response.json();

    console.log(data);

    data.forEach(el => {
        table.innerHTML += ` 
        <tr>
        <td>${el.id}</td>
        <td>${el.name}</td>
        <td>${el.rating.average}</td>
            <td>${el.language}</td>
            <td>${el.image.medium}</td>
        </tr>
        `
        // let img=el.image.medium

        // imgucundiv.setAttribute("src", img)
    });
    data.forEach(e => {
        alinsin.innerHTML += ` 
        <div class="card">
        
            <div class="card_img">
                <img src=${e.image.medium} >
            </div>
            <h3>NAME: ${e.name}</h3>
            <p>LANGUAGE: ${e.language}</p>
            <p>RATING: ${e.rating.average}</p>
        </div>
         `
    });

}
fetchData()