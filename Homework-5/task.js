
function divini() {
  var div1 = document.createElement(`div`);
  div1.className = `block`;
  document.getElementsByTagName(`div`)[0].appendChild(div1);
}
function divini2() {
  var div2 = document.createElement(`div`);
  div2.className = `block2`;
  document.getElementsByTagName(`div`)[0].appendChild(div2);
}
for(let a=0;a<4;a++){
  for(let b=0;b<4;b++){
    divini()
    divini2()
  }
  for(let c=0;c<4;c++){
    divini2()
    divini()
  }
}
