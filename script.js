const pHands = [
    {
        "id":3,
        "src": "images/paper1.png",
        "class": "paper",
        "alt": "palyer-paper"
    },
    {
        "id":4,
        "src": "images/rock1.png",
        "class": "rock",
        "alt": "palyer-rock"
    },
    {
        "id":5,
        "src": "images/scissor1.png",
        "class": "sci",
        "alt": "palyer-scissor"
    },
];
let scoreP = 0;
let scoreR = 0;

let name = "";
let submit = document.getElementById("btnplay");

submit.addEventListener("click",()=>{
    name = document.getElementById("pseudo-name").value;
    document.getElementById("pseudo-name").value = "";
})


const hand1 = document.querySelector(".finger1");
