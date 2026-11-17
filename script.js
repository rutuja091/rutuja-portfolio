// typing effect
const roles = ["Full Stack Developer", "Django Developer", "React Developer"];
let i=0,j=0,text="",del=false;

function type(){
  if(i<roles.length){
    if(!del) text = roles[i].substring(0, j++);
    else text = roles[i].substring(0, j--);

    document.querySelector(".typing").innerHTML = text;

    if(j==roles[i].length) del=true;
    if(j==0){ del=false; i++; }

  }
  setTimeout(type,100);
}
type();