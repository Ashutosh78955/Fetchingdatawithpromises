document.getElementById("fetchData").addEventListener("click", fetchData);

function fetchData() {
    const dataContainer = document.getElementById("data");
    dataContainer.innerHTML = "Loading...";

    fetch("https://dog.ceo/api/breeds/image/random")
        .then(response => {
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            return response.json();
        })
        .then(data => {
            dataContainer.innerHTML = `
                <p>Here's a random dog for you!</p>
                <img src="${data.message}" alt="Random Dog" style="max-width: 300px;">
            `;
        })
        .catch(error => {
            dataContainer.innerHTML = `
                <p style="color: red;">Failed to fetch data: ${error.message}</p>
            `;
        });
}
