function generateButton(){
  let numberInput = document.getElementById('numberInput').value;
  let i = 0;
  let result = '';
  while(i <= numberInput){
    if(i % 2 === 0){
      result += `${i} `;
    }
    i++;
  }
  document.getElementById('result').textContent = result;
};