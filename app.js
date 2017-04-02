const url = 'https://api.fixer.io/latest?base='
const getInfo = document.getElementById('showExchange')
 
let currency1 
let amount1 
let currency2 
getInfo.addEventListener('submit',(e) => {
    e.preventDefault()
    fetchCurrency(convert())
})
 
 
function convert() {
 
currency1 = document.getElementById('currency1').value;
amount1 = document.getElementById('amount1').value;
currency2 = document.getElementById('currency2').value;
let amount2 
 
 
}
 
function fetchCurrency () {
fetch(`${url}${currency1}`)
    .then((res) => res.json())
    .then((data) => {
        console.log(data)       
         
        value(data)
    }).catch( (e) => console.log(`${e} something is donkin' up your wiz biz`))   
}
 
function value(dados) {
     
amount2 = amount1*dados.rates[currency2];
amount2 = parseFloat(amount2.toFixed(3));
 
show()
}
 
function show() {
        console.log()     
        let html = '<ul>';
        html += '<li>' + amount2 + ' </li> </ul>' 
      
        document.getElementById('display').innerHTML = html;
      
      }
