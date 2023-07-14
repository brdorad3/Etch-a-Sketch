
const grid =document.createElement('div');
grid.setAttribute('id','dog')


let column=16;
let row=16;



for(let i=0;i<column;i++){
const column=document.createElement('div');
column.classList='column';


for(let j=0;j<row;j++){
 const row=document.createElement('div');
row.classList='row';

 
 column.appendChild(row);
   }

   grid.appendChild(column);
  }
   
document.body.appendChild(grid);


/*
var columns = 4;
var rows = 4;

var grid = document.createElement('div');
grid.className = 'grid';
for (var i = 0; i < columns; ++i) {
    var column = document.createElement('div'); // create column
    column.className = 'column';
    for (var j = 0; j < rows; ++j) {
        var row = document.createElement('div'); // create row
        row.className = 'row';
        row.textContent=' ' ;// set text
        column.appendChild(row); // append row in column
    }
    grid.appendChild(column); // append column inside grid
}
document.body.appendChild(grid);
*/
