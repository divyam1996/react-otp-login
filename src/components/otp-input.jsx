import React, { useRef, useState,useEffect } from 'react'

const OtpInput = ({length=4,onOtpSubmit=()=>{ }}) => {
    const [otp, setOtp] = useState(new Array(length).fill(""));
    const inputRefs=useRef([]);
    console.log("5",inputRefs);


  useEffect(() => {
        if (inputRefs.current[0]) {
          inputRefs.current[0].focus();
        }
      }, []);

  const handleChange=(index,e)=>{
              const val=e.target.value;
              if(isNaN(val)) return;

              const newOtp=[...otp];
              //allow only 1 input
              newOtp[index]=val.substring(val.length-1);
              console.log(newOtp,"55",otp);
              setOtp(newOtp);

              //submit trigger
              const combinedOtp=newOtp.join("");
              console.log(combinedOtp,newOtp);
              if(combinedOtp.length===length) onOtpSubmit(combinedOtp);

               // Move to next input if current field is filled
              if (val && index < length - 1 && inputRefs.current[index + 1]) {
              inputRefs.current[index + 1].focus();
              }
    }

    const handleClick=(index)=>{
      inputRefs.current[index].setSelectionRange(1, 1);

    // optional
    if (index > 0 && !otp[index - 1]) {
      inputRefs.current[otp.indexOf("")].focus();
    }

    }
    const handleKeyDown=(index,e)=>{
      if (
        e.key === "Backspace" &&
        !otp[index] &&
        index > 0 &&
        inputRefs.current[index - 1]
      ) {
        // Move focus to the previous input field on backspace
        inputRefs.current[index - 1].focus();
      }
    }
  return (
    <div>
        {otp.map((value,index)=>{
            return <input key={index} type="text" value={value} ref={(input)=> inputRefs.current[index]=input} 
            onChange={(e)=> handleChange(index,e)} onClick={()=> handleClick(index)} onKeyDown={(e)=> handleKeyDown(index,e)}
            className='otpInput'>
            </input>

        })
        }
    </div>
  )
}

export default OtpInput