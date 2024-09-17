let prevContainer=document.querySelector('.product-rev');
let prevBox=prevContainer.querySelectorAll('.prev');
document.querySelectorAll('.product-container .prod').forEach(prod =>{
prod.onclick=()=>{
    prevContainer.style.display='flex';
 let name= prod.getAttribute('data-name'); 
 prevBox.forEach(prev=>{
let target=prev.getAttribute('data-target');
if(name==target){
    prev.classList.add('active');
}
 }); 
};
});
prevBox.forEach(close=>{
  close.querySelector('.fa-times').onclick =()=>{
   close.classList.add('active');
   prevContainer.style.display='none';
  } 
})