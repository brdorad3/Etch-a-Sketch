
const dog =document.createElement('div');
dog.setAttribute('id','dog')

const grid=document.createElement('div');
grid.classList.add('grid');

const squares=grid.querySelectorAll('div')
squares.forEach((div)=>div.remove());

const button=document.createElement('button');
button.classList.add('btn');
button.textContent='Choose size';

const heading=document.createElement('div');
heading.classList.add('heading');

const h1=document.createElement('h1');
h1.textContent='Etch-a-Sketch';

const main=document.createElement('div');
main.classList='main';

function izgradi(size){
  dog.appendChild(main);
  
heading.appendChild(h1);  
dog.appendChild(heading);
dog.appendChild(heading);

grid.style.gridTemplateColumns=`repeat(${size}, 1fr)`;
grid.style.gridTemplateRows=`repeat(${size}, 1fr)`;

let amount=size*size-1;
for(let i=0;i<amount;++i){
const row=document.createElement('div');
row.classList.add('row');
grid.appendChild(row);

 row.addEventListener("mouseover", function(){
  row.style.backgroundColor='red';

 })
 
  }
  dog.appendChild(grid);
  

  
   document.body.appendChild(dog);
  
   dog.appendChild(button);
 
  }

  izgradi(16);



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
  
  