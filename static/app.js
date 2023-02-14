let ul=document.getElementsByClassName('Category');
// console.log(ul.length);

if(ul.length==0){
    const container=document.getElementById('list-container');
    container.style.marginTop='50px';
    container.innerHTML="NO WORK PENDING!!!!"
    container.style.fontFamily='monospace';
    container.style.backgroundImage="url('nowork.png')";
    container.style.width='400px';
    container.style.height='400px';
}

// console.log(ul[0]);
for (let index = 0; index < ul.length; index++){
let category=ul[index];
let text=category.outerText;
category.style.color='white';
  
// console.log(text);  
if(text=='Personal'){
    console.log(category);
    category.style.backgroundColor='red';
}
else if(text=='Groceries'){
    console.log(category);
    category.style.backgroundColor='#2d2d13';
} 

else if(text=='Studies'){
    console.log(category);
    category.style.backgroundColor='orange';
}     


else if(text=='Work'){
    console.log(category);
    category.style.backgroundColor='#007b7b';
} 

else if(text=='Travel'){
    console.log(category);
    category.style.backgroundColor='#b50e0e';
}     
    
    
}