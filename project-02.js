const form=document.querySelector("form")
form.addEventListener('submit',function(e){
    e.preventDefault();
    const hight=parseInt(document.querySelector('#hight').value);
    

     const weight=parseInt(document.querySelector('#weight').value);
      
      const result=document.querySelector('#result');
      
      
      
 if (hight === ""|| hight < 0 || isNaN(true))
 {
         result.innerHTML=`please give a valite hight ${hight}`;
 } 
 else if (weight===""|| weight < 0 || isNaN(true))
 {
       result.innerHTML=`plese give the valide number ,${weight}` 
 }
 else{
       const bmi=(weight / ((hight*hight)/10000)).toFixed(2)
            
       result.innerHTML= `your bmi position is ${bmi }`;
       
              
 }
  



 
});