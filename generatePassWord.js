
function generate() {
  let length = document.querySelector('.inputRange').value;
  let upper = document.querySelector('.inputUpper').checked;
  let lower = document.querySelector('.inputlower').checked;
  let output = document.querySelector('.output');

  let upperChecked = upper ? true : false;
  let lowerChecked = lower ? true : false;

  let result= "";
  let characters = "";
  if ((!upperChecked) && (!lowerChecked)) {
    alert('please choose a character type');
  }
  if (upperChecked) characters +="AZERTYUIOPMLKJHGFDSQWXCVBN";
  if (lowerChecked) characters+="azertyuiopmlkjhgfdsqwxcvbn";
  if ((lowerChecked)&&(upperChecked)) characters += "AZERTYUIOPMLKJHGFDSQWXCVBNazertyuiopmlkjhgfdsqwxcvbn";

    for (let i = 0; i<length; i++) {
    let charactersLength = characters.length;
    let random = Math.floor(Math.random()* charactersLength);
    result += characters.charAt(random);
  }
  output.innerHTML= result;
}

function copy() {
  let output = document.querySelector('.output').innerHTML;
  let textArea = document.createElement('textarea');
  textArea.value = output;
  document.body.appendChild(textArea);
  textArea.select();
  document.execCommand('copy');
  document.body.removeChild(textArea);
  alert(`copied "${textArea.value}"`);
}