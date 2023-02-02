const albums = [
  {
    coverImage: "https://lh3.googleusercontent.com/VYPsqVIfXy6g4I7jqn8fF3RvrdHkUvysEX4bkKI6EfLk659DrDXTQXhFWpTDnR5A-SYJ3zLwpCRjXnfl6A=w544-h544-l90-rj",

    name: "The Stage (Deluxe Edition)",

    band: "Avenged Sevenfold",

    length: "2 timer og 10 minutter",

    songlist: [
      "Sange",
      "The Stage",
      "Paradigm",
      "Sunny Disposition",
      "God Damn",
      "Creating God",
      "Angels",
      "Simulation",
      "Higher",
      "Roman Sky",
      "Fermi Paradox",
      "Exist",
      "Dose",
      "Retrovertigo",
      "Malagueña Salerosa",
      "Runaway (med Warren Fitzgerald)",
      "As Tears Go By",
      "Wish You Were Here",
      "God Only Knows",
      "The Stage (Live from London)",
      "Paradigm (Live from London)",
      "Sunny Disposition (Live from London)",
      "God Damn (Live from London)",
    ],
  },
  {
    coverImage: "https://lh3.googleusercontent.com/DVStz8tyyMiVbnKVSWcw6enYPuXv-HIThnvwWBJ5-QS2X6Ui1bHNjVNiQR7p1kd_r27LaddGfkOnKbY4ZQ=w544-h544-l90-rj",

    name: "End of Suffering",

    band: "Frank Carter & The Rattlesnakes",

    length: "43 minutter",

    songlist: [
      "Why a Butterfly Can't Love a Spider",
      "Tyrant Lizard King (med Tom Morello)",
      "Heartbreaker",
      "Crowbar",
      "Love Games",
      "Anxiety",
      "Angel Wings",
      "Supervillain",
      "Latex Dreams",
      "Kitty Sucker",
      "Little Devil",
      "End of Suffering",
    ],
  },
];

const album_template = document.getElementById("album_template").content;



albums.forEach(displayAlbum);

function displayAlbum(album) {

    const clone = album_template.cloneNode(true);

    clone.querySelector("img").src = album.coverImage;
    clone.querySelector(".album_name").textContent = album.name;
    clone.querySelector(".artist").textContent = album.band;
    clone.querySelector(".length").textContent = album.length;

    album.songlist.forEach( song => clone.querySelector(".songlist").innerHTML += "<li>" + song + "</li>")
    


    const displayBox = document.getElementById("albumlist");
    displayBox.appendChild(clone)
}