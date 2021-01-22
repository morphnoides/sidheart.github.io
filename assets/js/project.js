/* Project Cards */

const projectcards = document.querySelector(".projectcards");
const projects = [
  {
    title: "Customer Converter",
    cardImage: "assets/images/project-page/datafest.png",
    description: "A data science project which showed Expedia how to convert visitors on their website into paying customers.",
    tag: ["Python"],
    Previewlink: "",
    Githublink: "https://github.com/sidheart/datafest-ucla",
  },
  {
    title: "Fractal Generator",
    cardImage: "assets/images/project-page/buddhabrot.jpg",
    description: "A fast, parallelized fractal generator written in C++.",
    tag: "C++",
    Previewlink: "",
    Githublink: "https://github.com/sidheart/fractals",
  },
  {
    title: "Connoisseur",
    cardImage: "assets/images/project-page/connoisseur.png",
    description: "A foodie app which recommends restaurants based on a Netflix-like recommendation algorithm",
    tag: "React Native/iOS",
    Previewlink: "",
    Githublink: "https://github.com/sidheart/connoisseuriOS",
  },
  {
    title: "Conway's Game of Life",
    cardImage: "assets/images/project-page/conway.png",
    description: "An implementation of Conway's Game of Life written using C++ and NCurses.",
    tag: "C++",
    Previewlink: "",
    Githublink: "https://github.com/sidheart/conways-game",
  },
  {
    title: "Music Visualizer",
    cardImage: "assets/images/project-page/musicvisualizer.png",
    description: "A simple app which visualizes how a song sounds based on signal processing.",
    tag: "Java",
    Previewlink: "",
    Githublink: "https://github.com/sidheart/musicVisualizer",
  },
];

const showCards = () => {
  let output = "";
  projects.forEach(
    ({ title, cardImage, tag, Previewlink, Githublink }) =>
      (output += `       
    <div class="column skill-card card">
      <div class="wrapper" style="background: url(${cardImage}) center / cover no-repeat;">
        <div class="header">
        </div>
        <div class="data">
          <div class="content">
          <div class="title-div">
            <h1 class="title"><a href="#">${title}</a></h1>
            </div>
            <div class="searchdiv"><button class="tagbutton">${tag}</button></div>
            <ul class="menu-content"><br>
              <li><a href="${Githublink}" class="social-icon"><svg xmlns="http://www.w3.org/2000/svg" width="30" height="25" viewBox="0 0 30 28" fill="none" stroke="#fff" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" class="feather feather-github"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg></a></li>
            </ul>
          </div>
        </div>
      </div>
    </div>`)
  );
  projectcards.innerHTML = output;
};
document.addEventListener("DOMContentLoaded", showCards);

function myFunction() {
  // Declare variables
  var input, button, i, skillcard, card, title;
  input = document.getElementById("myInput").value;
  input = input.toUpperCase();
  skillcard = document.getElementsByClassName("skill-card");
  card = document.getElementsByClassName("card");
  button = document.getElementsByClassName("tagbutton");
  title = document.getElementsByClassName("title");

  // Loop through all list items, and hide those who don't match the search query
  for (i = 0; i < button.length; i++) {
    if (
      button[i].innerHTML.toUpperCase().includes(input) ||
      title[i].innerHTML.toUpperCase().includes(input)
    ) {
      skillcard[i].style.display = "";
      card[i].style.display = "";
    } else {
      skillcard[i].style.display = "none";
      card[i].style.display = "none";
    }
  }
}
