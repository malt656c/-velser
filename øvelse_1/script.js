let alkoholfri = document.querySelectorAll(".ikke_alkoholisk");
let alkoholisk = document.querySelectorAll(".alkoholisk");
let alkoholindhold_display = document.querySelector("#alkohol_indhold");

alkoholfri.forEach(item=>{
    item.addEventListener('click', alkoholindhold)
})

alkoholisk.forEach(item=>{
    item.addEventListener('click', alkoholindhold)
})

function alkoholindhold() {
if(this.classList.contains("alkoholisk")){
    console.log("indeholder alkohol")
    alkoholindhold_display.innerHTML="dette produkt indeholder Alkohol"
} else if(this.classList.contains("ikke_alkoholisk")){
    console.log("alkoholfri")
    alkoholindhold_display.innerHTML="dette produkt er alkoholsfrit"
}
}
