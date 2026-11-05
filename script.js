
function showMessage() {

    alert("Welcome to AnimeVerse!");

}


// SEARCH SYSTEM

function searchAnime() {

    const input =
        document.getElementById("searchInput");

    const filter =
        input.value.toLowerCase();

    const cards =
        document.querySelectorAll(".anime-card");

    cards.forEach(card => {

        const title =
            card.querySelector("h3")
                .textContent.toLowerCase();

        if (title.includes(filter)) {

            card.style.display = "";

        } else {

            card.style.display = "none";

        }

    });

}
