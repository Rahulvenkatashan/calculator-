// variables 
const operaters = document.querySelectorAll('.operator')
const history = document.getElementById('history-value')
const output = document.getElementById('output-value') 

// Bind with each operater
for(let i = 0; i<operaters.length;i++){
  // console.log(operaters[i].id)
  operaters[i].addEventListener('click',function(){
    switch(this.id){
      case 'clear':
        history.innerText = ''
        output.innerText = ''
        break
      
      case 'backspace':
        output.innerText = (output.innerText).slice(0, output.innerText.length-1)
        break

      case '=':
        const exp = output.innerText
        try{
          output.innerText = ''
          output.innerText = eval(exp)
          
        } catch{
          output.innerText = 'Error'
        }
        break
        
      default:
      let last_char = output.innerText.slice(output.innerText.length-1,output.innerText.length)
       if(output.innerText == '' && this.id == '-'){
         output.innerText += this.id
       } else if(isNaN(last_char) && ['(',')'].indexOf(this.id) == -1){
          output.innerText = ['(',')'].indexOf(last_char) == -1? (output.innerText).slice(0, output.innerText.length-1):output.innerText 
          output.innerText += this.id
       }else if(['(',')'].indexOf(this.id) != -1){
         output.innerText += this.id
       } else if(output.innerText != '' && !isNaN(last_char)){
         output.innerText += this.id
       }
       break
    }
  })
}

//Add numbers to the history and output list
$('.number').click(function(){
  output.innerText+=this.id
})