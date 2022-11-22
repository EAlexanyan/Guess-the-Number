let input = document.querySelector('input')
let btn = document.querySelector('button')
let check = document.querySelector('.result-check-out')
let help = document.querySelector('.result-help-out')
let count = document.querySelector('.result-count-out')

let item = 0;
let rundNum = 1 + Math.floor(Math.random() * 100)

btn.onclick = function (eve){
      eve.preventDefault();
      userNum = input.value;
      if(userNum > rundNum){
        check.textContent = "Haven't guessed yet😑";
        help.textContent = "less 👇";
        item++;
        count.textContent = item;
      }else if(userNum < rundNum){
        check.textContent = "Haven't guessed yet😩";
        help.textContent = "more 👆";
        item++;
        count.textContent = item;
      }else{
        check.textContent = "🎉Congratulations! you guessed the number🎉";
        help.textContent = "exactly 👌";
        item++;
        count.textContent = item;
      }
};