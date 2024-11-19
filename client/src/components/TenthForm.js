import React, { useEffect, useRef } from 'react'

function TenthForm() {
    let firstNameInputRef = useRef();
    let lastNameInputRef = useRef();
    let engInputRef = useRef(); 
    let telInputRef = useRef();
    let hindiInputRef = useRef();
    let mathsInputRef = useRef();
    let sciInputRef = useRef();
    let socInputRef = useRef();
    let resultParaRef =useRef();

    let firstNameSpanRef = useRef();
    let lastNameSpanRef = useRef();
    let engSpanRef = useRef();
    let telSpanRef =useRef();
    let hindiSpanRef = useRef();
    let mathsSpanRef = useRef();
    let sciSpanRef = useRef();
    let socSpanRef = useRef();

    let calculateResult = ()=>{
      let firstName = firstNameInputRef.current.value;
      let lastName = lastNameInputRef.current.value;
      let engMarks = Number(engInputRef.current.value);
      let telMarks = Number(telInputRef.current.value);
      let hindiMarks = Number(hindiInputRef.current.value);
      let mathsMarks =Number(mathsInputRef.current.value);
      let sciMarks = Number(sciInputRef.current.value);
      let socMarks =Number(socInputRef.current.value);
       
      let totalMarks = engMarks+telMarks+hindiMarks+mathsMarks+sciMarks+socMarks;

      let Result;
      if(engMarks<35 || telMarks<35 || hindiMarks<35 || mathsMarks<35 || sciMarks<35 || socMarks<35){
          Result="Failed"
      }else{
          Result="Passed"
      }


      let perc = (totalMarks/600)*100;

      engSpanRef.current.innerHTML = engMarks >=35?"Pass":"Fail"
      telSpanRef.current.innerHTML = telMarks >=35?"Pass":"Fail"
      hindiSpanRef.current.innerHTML = hindiMarks >=35?"Pass":"Fail"
      mathsSpanRef.current.innerHTML = mathsMarks >=35?"Pass":"Fail"
      sciSpanRef.current.innerHTML = sciMarks >=35?"Pass":"Fail"
      socSpanRef.current.innerHTML = socMarks >=35?"Pass":"Fail" 

      resultParaRef.current.innerHTML = `${firstName} ${lastName} ${Result} in Tenth got  totalmarks of ${totalMarks} with percentage of ${perc.toFixed(2)}%`;


   }

    useEffect(()=>{
        console.log("Component Loaded")
    },[]);  
 
    let engOnFocus = ()=>{
      engInputRef.current.style.backgroundColor = "violet";
      console.log("Eng onFocus");
    }

    let engOnChange = ()=>{
      if(engInputRef.current.value>=0 && engInputRef.current.value <=100){
         if(engInputRef.current.value>=35){
            engSpanRef.current.innerHTML ="Pass"
            engSpanRef.current.style.backgroundColor ="green"
         }else{
             engSpanRef.current.innerHTML ="Fail"
            engSpanRef.current.style.backgroundColor ="red"
         }
       
      }else{
           engSpanRef.current.innerHTML ="Invalid"
            engSpanRef.current.style.backgroundColor ="yellow"
      }
    }

    let engOnBlur = ()=>{
           engInputRef.current.style.backgroundColor = "";
          console.log("Eng onBlur");
    }

    let telOnFocus = ()=>{
           telInputRef.current.style.backgroundColor="violet";
         console.log("Tel onFocus");
    }

    let telOnChange = ()=>{
      if(telInputRef.current.value>=0 && telInputRef.current.value<=100){
         if(telInputRef.current.value >=35){
            telSpanRef.current.innerHTML ="Pass"
            telSpanRef.current.style.backgroundColor ="green"

         }else{
             telSpanRef.current.innerHTML = "Fail"
             telSpanRef.current.style.backgroundColor ="red"
         }
      }else{
          telSpanRef.current.innerHTML = "Invalid"
             telSpanRef.current.style.backgroundColor ="yellow"
      }
     
    }

    let telOnBlur = ()=>{
             telInputRef.current.style.backgroundColor = "";
              console.log("Tel onBlur");
    }

    
    let hindiOnFocus = ()=>{
      hindiInputRef.current.style.backgroundColor = "violet";
      console.log("Hindi onFocus");
    }

    let hindiOnChange = ()=>{
      if(hindiInputRef.current.value >=0 && hindiInputRef.current.value <=100){
         if(hindiInputRef.current.value >=35){
            hindiSpanRef.current.innerHTML="Pass";
            hindiSpanRef.current.style.backgroundColor="green";

         }else{
            hindiSpanRef.current.innerHTML= "Fail";
            hindiSpanRef.current.style.backgroundColor = "red";
         }
      }else{
         hindiSpanRef.current.innerHTML= "Invalid";
         hindiSpanRef.current.style.backgroundColor = "yellow";
      }
    }

    let hindiOnBlur = ()=>{
      hindiInputRef.current.style.backgroundColor = "";
      console.log("Hindi onBlur");
    }

    
    let mathsOnFocus = ()=>{
      mathsInputRef.current.style.backgroundColor = "violet";
      console.log("Maths onFocus");
    }

    let mathsOnChange = ()=>{
      if(mathsInputRef.current.value >=0 && mathsInputRef.current.value<=100 ){
         if(mathsInputRef.current.value>=35){
            mathsSpanRef.current.innerHTML ="Pass"
            mathsSpanRef.current.style.backgroundColor ="green"
      }else{
            mathsSpanRef.current.innerHTML = "Fail"
            mathsSpanRef.current.style.backgroundColor ="red"
      }
      }else{
         mathsSpanRef.current.innerHTML = "Invalid"
            mathsSpanRef.current.style.backgroundColor ="yellow"
      }
    }

    let mathsOnBlur = ()=>{
      mathsInputRef.current.style.backgroundColor = "";
      console.log("Maths onBlur");
    }

    
    let sciOnFocus = ()=>{
      sciInputRef.current.style.backgroundColor = "violet";
      console.log("Sci onFocus");
    }

    let sciOnChange = ()=>{
      if(sciInputRef.current.value >=0 && sciInputRef.current.value <=100){
         if(sciInputRef.current.value >=35){
            sciSpanRef.current.innerHTML ="Pass"
            sciSpanRef.current.style.backgroundColor = "green"

         }else{
             sciSpanRef.current.innerHTML ="Fail"
             sciSpanRef.current.style.backgroundColor="red"
         }
      }else{
              sciSpanRef.current.innerHTML ="Invalid"
             sciSpanRef.current.style.backgroundColor="yellow"
      }
    }

    let sciOnBlur = ()=>{
      sciInputRef.current.style.backgroundColor = "";
      console.log("Sci onBlur");
    }

    
    let socOnFocus = ()=>{
      socInputRef.current.style.backgroundColor = "violet";
      console.log("Soc onFocus");
    }

    let socOnChange = ()=>{
      if(socInputRef.current.value>=0 && socInputRef.current.value<=100){
         if(socInputRef.current.value>=35){
            socSpanRef.current.innerHTML ="Pass"
            socSpanRef.current.style.backgroundColor ="green"

          }else{
            socSpanRef.current.innerHTML ="Fail"
            socSpanRef.current.style.backgroundColor="red"
          }
      }else{
            socSpanRef.current.innerHTML ="Invalid"
            socSpanRef.current.style.backgroundColor="yellow"
      }
    }

    let socOnBlur = ()=>{
      socInputRef.current.style.backgroundColor = "";
                console.log("Soc onBlur");
    }


  return (
    <div>
      <form>
        <div>
            <label>First Name</label>
            <input ref={firstNameInputRef}
            onFocus={()=>{
                firstNameInputRef.current.style.backgroundColor = "violet";
                console.log("FirstName onFocus");
             }}
             onBlur={()=>{
                firstNameInputRef.current.style.backgroundColor = "";
                console.log("FirstName onBlur")
             }}></input>
            <span ref={firstNameSpanRef}></span>
        </div>
        <div>
            <label>Last Name</label>
            <input ref={lastNameInputRef}
            onFocus={()=>{
               lastNameInputRef.current.style.backgroundColor = "violet";
                console.log("LastName onFocus");
             }}
             onBlur={()=>{
                lastNameInputRef.current.style.backgroundColor = "";
                console.log("LastName onBlur")
             }}></input>
            <span ref={lastNameSpanRef}></span>
        </div>
        <div>
            <label>English</label>
            <input ref={engInputRef}
             onFocus={()=>{
               engOnFocus();
             }}
             onChange={()=>{
               engOnChange();   
            }}
             onBlur={()=>{
               engOnBlur();
             }}
             ></input>
            <span ref={engSpanRef}></span>
        </div>
        <div>
            <label>Telugu</label>
            <input ref={telInputRef}
             onFocus={()=>{
               telOnFocus();
             }}
             onChange={()=>{  
               telOnChange();
            }}
             onBlur={()=>{
               telOnBlur();
             }}></input>
            <span ref={telSpanRef}></span>
        </div>
        <div>
            <label>Hindi</label>
            <input ref={hindiInputRef}
             onFocus={()=>{
               hindiOnFocus();
             }}
             onChange={()=>{
               hindiOnChange();              
             }}
             onBlur={()=>{
               hindiOnBlur();
             }}></input>
            <span ref={hindiSpanRef}></span>
        </div>
        <div>
            <label>Mathematics</label>
            <input ref={mathsInputRef}
             onFocus={()=>{
               mathsOnFocus();
             }}
             onChange={()=>{
               mathsOnChange();
               
             }}
             onBlur={()=>{
               mathsOnBlur();
             }}></input>
            <span ref={mathsSpanRef}></span>
        </div>
        <div>
            <label>Science</label>
            <input ref={sciInputRef}
             onFocus={()=>{
               sciOnFocus();
             }}
             onChange={()=>{
               sciOnChange();
             }}
             onBlur={()=>{
               sciOnBlur();
             }}></input>
            <span ref={sciSpanRef}
            ></span>
        </div>
        <div>
            <label>Social</label>
            <input ref={socInputRef}
             onFocus={()=>{
               socOnFocus();
             }}
             onChange={()=>{
               socOnChange();    
             }}
             onBlur={()=>{
               socOnBlur();
             }}></input>
            <span ref={socSpanRef}
            ></span>
        </div>
        <div>
            <button type='button' onClick={()=>{
              calculateResult();

            }}>Calculate Result</button>
        </div>
        <div>
            <p ref={resultParaRef}>please enter values</p>
        </div>
      </form>
    </div>
  )
}

export default TenthForm
