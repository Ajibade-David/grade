function Check2() {
    let firstInput=Number(esy.value)
    let paragraph1= document.getElementById("screen2")
    if (firstInput <0 ) {
        paragraph1.innerHTML="Enter a valid score"
        }else if( firstInput >=0 && firstInput <40) {
     paragraph1.innerHTML="F-Fail"
        }else if(firstInput >=40 && firstInput <=45 ) {
     paragraph1.innerHTML="E-Pass"
        
    }
    else if(firstInput >45 && firstInput <50 ) {
        paragraph1.innerHTML="D7- Weak Pass"
           
       }
    else if(firstInput >=50 && firstInput <=59 ) {
        paragraph1.innerHTML="C-Credit"
        
           
       }
    else if(firstInput >=60 && firstInput <=69 ) {
        paragraph1.innerHTML="B-Good"
           
       }
    else if(firstInput >=70 && firstInput <=100 ) {
        paragraph1.innerHTML="A-Excellent"
           
       }
    else{
        paragraph1.innerHTML="Undefined"
           
       } 
       


}