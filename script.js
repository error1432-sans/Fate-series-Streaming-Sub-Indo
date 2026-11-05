
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


function playEpisode(number) {

    const player =
        document.getElementById("animePlayer");

    const videoPath =
        `assets/videos/Fate stay night Movie Heaven s Feel - II. Lost Butterfly -${String(number).padStart(2, "0")}.mp4`;

    player.src = videoPath;

    player.load();

}
