//question
const Ques = document.querySelector(".q");
//options
const opt = document.querySelectorAll(".option");
const a = document.querySelector(".option,.a");
const b = document.querySelector(".option,.b");
const c = document.querySelector(".option,.c");
const d = document.querySelector(".option,.d");
const track = document.querySelector("#current");
const restart=document.querySelector(".restart");
//score
const score = document.querySelector("#num");
//next btn
const nxt = document.querySelector(".last button")
//logic of game

let index = 0;
let right;

optionCheck = () => {
  a.addEventListener("click", (e) => {

    if (right == "a") {

      a.classList.add("click-right");
      score.innerText = `CORRECT`;
count++;

    }
    else {
      a.classList.add("click-wrong");
      score.innerText = `INCORRECT`;
    }

  });

  b.addEventListener("click", (e) => {
    if (right == "b") {
      b.classList.add("click-right");
      score.innerText = `CORRECT`;
count++;
    }
    else {
      b.classList.add("click-wrong");
      score.innerText = `INCORRECT`;
    }

  })

  c.addEventListener("click", (e) => {
    if (right == "c") {
      c.classList.add("click-right");
      score.innerText = `CORRECT`;
count++;
    }
    else {
      c.classList.add("click-wrong");
      score.innerText = `INCORRECT`;
    }

  })

  d.addEventListener("click", (e) => {
    if (right == "d") {
      d.classList.add("click-right");
      score.innerText = `CORRECT`;
count++;
    }
    else {
      d.classList.add("click-wrong");
      score.innerText = `INCORRECT`;
    }

  })

}
const getQues = () => {
  track.innerText = `${index + 1}/10`;
  right = ques[index].correct;

  Ques.innerText = ques[index].question;
  a.innerText = ques[index].a;
  b.innerText = ques[index].b;
  c.innerText = ques[index].c;
  d.innerText = ques[index].d;
  if (index < 9) {
    index++;

  }
  

  optionCheck();

}
getQues();
removeChanges = () => {
  a.classList.remove("click-right");
  b.classList.remove("click-right");
  c.classList.remove("click-right");
  d.classList.remove("click-right");
  a.classList.remove("click-wrong");
  b.classList.remove("click-wrong");
  c.classList.remove("click-wrong");
  d.classList.remove("click-wrong");

}
nxt.addEventListener("click", () => {
  score.innerText = "";

  removeChanges();

  getQues();

});
restart.addEventListener("click",()=>{
  index=0;
  removeChanges();
  getQues();
})




