const minPlayliste = [
  "Empty Walls",
  "Country House",
  "Primary Explosive",
  "The United Debased",
  "Calm Like a Bomb",
  "Jigolo Har Megiddo",
  "Soothsayer",
  "Holiday in Cambodia",
  "Fangs",
  "Violent Pornography",
];

let playliste = document.getElementById("playlist");

minPlayliste.forEach(opretPlayliste);

function opretPlayliste(sang) {
  playliste.innerHTML += "<li>" + sang + "</li>";
  console.log(sang);
}


