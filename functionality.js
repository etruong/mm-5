let workbtn = document.getElementById("work-btn");
workbtn.addEventListener("click", function() {
    document.querySelector("#intro").classList.add("hidden");
    document.getElementById("student-gallery").classList.remove("hidden");
});

let students = [
    {
        name: "Amber",
        photo: "amber.png",
        work: [
            {
                week: 1,
                link: "https://repl.it/join/yzagqaxd-neonorange"
            },
            {
                week: 2,
                link: "https://repl.it/join/wxltsowv-neonorange"
            },
            {
                week: 3,
                link: "https://repl.it/join/ungtpteb-neonorange"
            },
            {
                week: 4,
                link: "https://repl.it/join/eyceisgb-neonorange"
            },
            {
                week: 5,
                link: "https://repl.it/join/wniasjbs-neonorange"
            },
            {
                week: 6,
                link: "https://repl.it/join/ixazhdqd-neonorange"
            },
        ]
    },
    {
        name: "Cole",
        photo: "cole.png",
        work: []
    },
    {
        name: "Corban",
        photo: "corban.png",
        work: []
    },
    {
        name: "Elif",
        photo: "elif.png",
        work: [
            {
                week: 1,
                link: "http://pythontutor.com/visualize.html#mode=display"
            },
            {
                week: 2,
                link: "https://repl.it/@ElifMeral/cards#index.html"
            }
        ]
    },
    {
        name: "Emily",
        photo: "emily.png",
        work: [
            {
                week: 1,
                link: "https://repl.it/join/izgztjgz-emilypeng"
            },
            {
                week: 2,
                link: "https://repl.it/join/ruhtawvq-emilypeng"
            },
            {
                week: 3,
                link: "https://repl.it/join/iekfeguv-emilypeng"
            },
            {
                week: 4,
                link: "https://repl.it/join/aaytgwbi-emilypeng"
            },
            {
                week: 5,
                link: "https://repl.it/join/smqllpfw-emilypeng"
            },
            {
                week: 6,
                link: "https://repl.it/join/mxbcydlq-emilypeng"
            },
        ]
    },
    {
        name: "Julia",
        photo: "julia.png",
        work: [
            {
                week: 1,
                link: "https://repl.it/join/gfishxea-dragonlover999"
            },
            {
                week: 2,
                link: "https://repl.it/join/jhyyuufn-dragonlover999"
            },
            {
                week: 3,
                link: "https://repl.it/join/fwuguoiz-dragonlover999"
            },
            {
                week: 4,
                link: "https://repl.it/join/cwuenuhn-dragonlover999"
            },
            {
                week: 5,
                link: "https://repl.it/join/mhcvcdke-dragonlover999"
            },
            {
                week: 6,
                link: "https://repl.it/join/dylwoark-dragonlover999"
            },
        ]
    },
    {
        name: "Stephen",
        photo: "stephen.png",
        work: [
            {
                week: 1,
                link: "https://repl.it/join/hqiqvjni-stephenliang2"
            },
            {
                week: 2,
                link: "https://repl.it/join/hnosgzvs-stephenliang2"
            },
            {
                week: 3,
                link: "https://repl.it/join/hrirwkxc-stephenliang2"
            },
            {
                week: 4,
                link: "https://repl.it/join/rrjugwkl-stephenliang2"
            },
            {
                week: 5,
                link: "https://repl.it/join/bkmafssm-stephenliang2"
            },
            {
                week: 6,
                link: "https://repl.it/join/ndovetlh-stephenliang2"
            },
        ]
    },
    {
        name: "Tyler",
        photo: "tyler.png",
        work: [
            {
                week: 2,
                link: "https://repl.it/@TylerMcMaster/WhimsicalSilverDecimals"
            },
            {
                week: 3,
                link: "https://repl.it/@TylerMcMaster/guessing-game#guessing_game.py"
            },

        ]
    }
]

// students.forEach(createCard);

function createCard(info) {
    /*
    <div class="card-container">
        <div class="card">
            <div class="front">
                <img src="./img/amber.png" alt="Amber" />
                <p>Amber</p>
            </div>
            <div class="back">
                <ul></ul>
            </div>
        </div>
    </div>
    */
    let ul = "";
    for (let i = 0; i < info.work.length; i++) {
        ul = ul + "<li><a href=\"" + info.work[i].link + "\">Week " + info.work[i].week +
            "</a></li>";
    }
    if (info.work.length > 0) {
        ul = "<ul>" + ul + "</ul>";
    }
    let cardContainer = document.createElement("div");
    cardContainer.classList.add("card-container");
    cardContainer.innerHTML = "<div class=\"card\">" +
                "<div class=\"front\">" +
                    "<img src=\"./img/" + info.photo + "\" alt=\"" + info.name + "\" />" +
                    "<p>" + info.name + "</p>" +
                "</div>" +
                "<div class=\"back\">" +
                    "<h3>" + info.name + "'s Projects</h3>" +
                    ul +
                "</div>" +
            "</div>";
    let gallery = document.querySelector("#student-gallery div");
    gallery.appendChild(cardContainer);
}