import "../scss/main.scss";

const newGameButton = document.getElementById("new-game");
const results = document.getElementById("new-game");
//results.style.display = "none";
const harry = document.getElementById("harry");
const companions = document.getElementById("companions");
const book = document.getElementById("book");

newGameButton.onclick = () => newGame();

const companionsData = [
  "Karrin Murphy",
  "Michael Carpenter",
  "Susan Rodriguez",
  "Billy & Georgia",
  "Thomas Raith",
  "Waldo Butters",
  "Sanya",
  "Molly Carpenter",
  "Winter Lady Molly",
  "Carlos Ramirez",
  "Anastasia Luccio",
  "Mouse",
  "Hank Walker Alias: Ra",
  "Jared Kincaid",
  "Mortimer Lindquist",
];

const booksData = [
  "Storm Front (#1)",
  "Fool Moon (#2)",
  "Grave Peril (#3)",
  "Summer Knight (#4)",
  "Death Masks (#5)",
  "Blood Rites (#6)",
  "Dead Beat (#7)",
  "Proven Guilty (#8)",
  "White Night (#9)",
  "Small Favor (#10)",
  "Turn Coat (#11)",
  "Changes (#12)",
  "Ghost Story (#13)",
  "Cold Days (#14)",
  "Skin Game (#15)",
  "Side Jobs (#16)",
];

const harryData = ["Harry Dresden", "Winter Knight Harry"];

const newGame = () => {
  const harryIndex = Math.floor(Math.random() * harryData.length);
  harry.innerHTML = `${harryData[harryIndex]}`;

  const bookIndex = Math.floor(Math.random() * booksData.length);
  book.innerHTML = `${booksData[bookIndex]}`;

  const tempComp = [...companionsData];
  let companionsIndex = Math.floor(Math.random() * tempComp.length);
  let companion1 = tempComp[companionsIndex];
  tempComp.splice(companionsIndex, 1);
  companionsIndex = Math.floor(Math.random() * tempComp.length);
  let companion2 = tempComp[companionsIndex];

  companions.innerHTML = `${companion1} / ${companion2}`;
};
