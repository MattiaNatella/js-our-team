const teamMembers = [
  {
    name: "Marco Bianchi",
    role: "Designer",
    email: "marcobianchi@team.com",
    img: "img/male1.png"
  },
  {
    name: "Laura Rossi",
    role: "Front-end Developer",
    email: "laurarossi@team.com",
    img: "img/female1.png"
  },
  {
    name: "Giorgio Verdi",
    role: "Back-end Developer",
    email: "giorgioverdi@team.com",
    img: "img/male2.png"
  },
  {
    name: "Marta Ipsum",
    role: "SEO Specialist",
    email: "martarossi@team.com",
    img: "img/female2.png"
  },
  {
    name: "Roberto Lorem",
    role: "SEO Specialist",
    email: "robertolorem@team.com",
    img: "img/male3.png"
  },
  {
    name: "Daniela Amet",
    role: "Analyst",
    email: "danielaamet@team.com",
    img: "img/female3.png"
  }
];

const deckContainer = document.querySelector('.container')

function getMemberCard(member){
  const {name, role, email, img} = member;

  return `
<div class="card d-flex">
<img src="assets/${img}" alt="">
<div id="anagrafica" >
  <h3 id="name">${name}</h3>
  <span id="role">${role}</span>
  <span id="email">${email}</span></span>
</div>
</div>
`
}

function getTeamCards(array){
  let deck = ''
  for(let member of array){
    deck += getMemberCard(member)
  }
  deckContainer.innerHTML += deck
}



getTeamCards(teamMembers)