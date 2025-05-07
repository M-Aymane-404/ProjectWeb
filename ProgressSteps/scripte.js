var next = document.getElementsByClassName("next") [0] ;
var prev = document.getElementsByClassName("prev") [0] ;


var cercle1 = document.getElementsByClassName("cercle1") [0]   ;
var ligne1 = document.getElementsByClassName("ligne1") [0] ;

var cercle2 = document.getElementsByClassName("cercle2")  [0]  ;
var ligne2 = document.getElementsByClassName("ligne2")[0]  ;

var cercle3 = document.getElementsByClassName("cercle3") [0]   ;
var ligne3 = document.getElementsByClassName("ligne3")[0];



var i = 0;
next.addEventListener('click', () => {
        i++;
       if(i <= 1){
        i = 1;
        cercle1.classList.add('active');
        ligne1.classList.add('active');
        prev.classList.remove("btnFinal")

           


       }else if(i == 2){
        cercle2.classList.add('active');
        ligne2.classList.add('active');
       
           }else if(i == 3){
      
        cercle3.classList.add('active')
        ligne3.classList.add('active')
        i = 3;
        next.classList.add("btnFinal")

        }



})


prev.addEventListener('click', () => {
    
    
   if(i == 1){
    i = 1;
    cercle1.classList.remove('active');
    ligne1.classList.remove('active');
    i--;
    prev.classList.add("btnFinal")
    


   }else if(i == 2){
 
    cercle2.classList.remove('active');
    ligne2.classList.remove('active');
    i--;
   

   }else if(i >= 3){

    cercle3.classList.remove('active')
    ligne3.classList.remove('active')
    next.classList.remove("btnFinal")
  
    i = 2;

    } 
    

    


})