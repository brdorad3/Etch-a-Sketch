const div =document.createElement('div');
div.setAttribute('id','dog')
const div2=document.createElement('div');
div2.setAttribute('id','dvog');
const div3=document.createElement('div');
div3.setAttribute('id','dvi');

for(let i=0;i<16;i++){

 const diva=document.createElement('div');
 diva.classList.add('dva');
   div3.appendChild(diva);
}
for(let j=0;j<16;j++){
    const piva=document.createElement('div');
 piva.classList.add('piva');
   div2.appendChild(piva);
   }
document.body.appendChild(div);
div.appendChild(div2);
div.appendChild(div3);
