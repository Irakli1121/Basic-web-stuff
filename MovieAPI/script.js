let submitBtn = document.getElementById("submitButton");
let listDiv = document.getElementById("listDiv");


submitBtn.addEventListener("click", async (e) => {
    e.preventDefault();
    let form = document.querySelector('form');

    console.log(form.movieName.value);

    let searchName = form.movieName.value.split(' ').join('%20');

    let url = `http://www.omdbapi.com/?apikey=cbe30aa4&s=${searchName}`;

    console.log(url);

    const response = await fetch(url);
    console.log(response);
    const data = await response.json();

    console.log(data);
    if (data["Response"] !== "True") {
        let alert = document.getElementById("alert");
        console.log("error");
        alert.classList.add("alert");
        alert.classList.add("alert-danger");
        alert.innerHTML = data["Error"];
        listDiv.innerHTML = '';
    } else {
        let alert = document.getElementById("alert");

        alert.classList.remove("alert");
        alert.classList.remove("alert-danger");
        alert.innerHTML = "";

        console.log("This shouldn't appear if returned false");

        console.log(data["Search"]);

        let list = data["Search"];

        console.log(typeof list);

        console.log(list.length);

        listDiv.innerHTML = '';
        for (let i = 0; i < list.length; i++) {
            console.log(list[i]);

            listDiv.innerHTML += `<ul class="movieList">
                                        <li><img src="${list[i]["Poster"]}" class="img-thumbnail" alt=""></li>
                                        <li>${list[i]["Title"]}</li>
                                        <li>${list[i]["Year"]}</li>
                                        <li><button name="${list[i]["imdbID"]}" class="findMore btn btn-warning">Find more</button></li>
                                    </ul>`
        }
    }
});

document.addEventListener('click', findMoreListener);

async function findMoreListener(event) {
    const element = event.target;
    if (element.classList.contains("findMore")) {
        let url = `http://www.omdbapi.com/?apikey=cbe30aa4&i=${element.name}`;

        const response = await fetch(url);
        const data = await response.json();

        console.log(data);

        listDiv.innerHTML = `<ul class="movieList">
                                    <li><img src="${data["Poster"]}" class="img-thumbnail" alt=""></li>
                                    <li><h3>${data["Title"]}</h1></li>
                                    <li>Year - ${data["Year"]}</li>
                                    <li><strong>Director: </strong>${data["Director"]}</li>
                                    <li><strong>Actors: </strong> - ${data["Actors"]}</li>
                                    <li><strong>Plot: </strong> - ${data["Plot"]}</li>
                                    <li><a href="https://www.imdb.com/title/${element.name}" target="_blank"><img src="imdb_icon.png" id="imdbIcon" alt=""><strong>IMDB: </strong>${data["imdbRating"]}</a></li>
                                    <li>Country - ${data["Country"]}</li>
                                    
                                </ul>`
    }
}

document.getElementById('headerButton').addEventListener('click', () => {
    listDiv.innerHTML = '';
    document.getElementById("movieName").value = '';
});