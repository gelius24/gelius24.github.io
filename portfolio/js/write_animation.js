const intro1 = document.getElementById('intro1')
const introTxt = ['Bonjour', ' Je', ' suis', ' un', ' dévloppeur', ' web', ' front-end', ' autodidacte.', ' Je', ' m\'appelle :']
let intro_write = []
const woody = document.getElementById("woody");
const txt = ["Woody", " Gelius"];
let write = [];
let stopWrite = false;
let stopWrite_intro = false;
let i = 0;
let j = 0;
let x = 0;
let y = 0;


function writeIntro(){
  if (x < introTxt.length && !stopWrite_intro){
    //si longeur mot en cour plus grand que x
    if (introTxt[x].length > y) {
      intro_write.push(introTxt[x][y]);
      intro1.innerHTML = intro_write.join("") + "|";
      y++;
    }
    // quand longeur du mots en cour
    if (introTxt[x].length == y) {
      x++;
      y = 0;
      
      // mots suivant
      if (x == introTxt.length) {
        intro1.innerHTML = intro_write.join("");
        return stopWrite_intro = true
      }
    }
  }
  setTimeout(writeIntro, 59);
}


function writeName() {
  
   
    if (i < txt.length && !stopWrite && stopWrite_intro) {
      // Si i inférieur à txt[1]
      //console.log('Survol du mot : ', txt[i])
  
      if (txt[i].length > i) {
        // console.log("add a letter :", txt[i][j]);
        write.push(txt[i][j]);
        woody.innerHTML = write.join("") + "|";
        j++;
      }
  
      if (txt[i].length == j) {
        i++;
        j = 0;
        // mots suivant
        if (i == txt.length) {
          woody.innerHTML = write.join("");
          return stopWrite = true
        }
      }
    }
    setTimeout(writeName, 200);
   }
 


writeIntro();
setTimeout(writeName, 5000)
