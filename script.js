
const dog =document.getElementById('dog');


const grid=document.querySelector('.grid');


const squares=grid.querySelectorAll('div')
squares.forEach((div)=>div.remove());

const button=document.querySelector('.btn')

function izgradi(size){
  
grid.style.gridTemplateColumns=`repeat(${size}, 1fr)`;
grid.style.gridTemplateRows=`repeat(${size}, 1fr)`;

let amount=size*size;
for(let i=0;i<amount;++i){
const row=document.createElement('div');
row.classList.add('row');
grid.appendChild(row);

 row.addEventListener("mouseover", function(){
  row.style.backgroundColor='red';

 })
  }}

  izgradi(16);

  button.addEventListener("hover",()=>{
    button.style.backgroundColor='red';


  })

button.addEventListener("click",()=>{
  
  broj=prompt("Choose a number between 16 and 100");
  grid.innerHTML = ''
  if(broj<16 ||broj>100){
    alert("Wrong number try again!");
  }
  else{
    izgradi(broj);
  }
  
  })




  