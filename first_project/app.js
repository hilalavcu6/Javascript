const body = document.querySelector("body");
const colors = ["black", "yellow", "green", "#c7bf67", "#7b55cf", "#de4747"];
const button = document.querySelector("button");
button.addEventListener("click", changeBackground);

button.addEventListener("click", changeBackground);
let sıra = 0;
function changeBackground() {
  //rastgele bir renk
  //const rastgeleSayi = Math.floor(Math.random() * colors.length);
  //const secilenRenk = colors[rastgeleSayi];
  //console.log(rastgeleSayi, secilenRenk);
  //body.style.backgroundColor = secilenRenk;

  //sırayla arkaplan rengi seç.
  console.log(sıra);
  if (sıra == 7) sıra = 0;
  const secilenrenk = colors[sıra];
  sıra++;
  body.style.backgroundColor = secilenrenk;
}
