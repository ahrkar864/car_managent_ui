import { useState } from 'react';
import { signupFields } from "../constants/formFields"
import FormAction from "./FormAction";
import Input from "./Input";

const fields=signupFields;
let fieldsState={};

fields.forEach(field => fieldsState[field.id]='');

export default function Signup(){
  const [signupState,setSignupState]=useState(fieldsState);

  const handleChange=(e)=>setSignupState({...signupState,[e.target.id]:e.target.value});

  const handleSubmit=(e)=>{
    e.preventDefault();
    console.log(signupState)
    createAccount()
  }

  //handle Signup API Integration here
  const createAccount=()=>{

  }

    return(
      <div className="flex items-center justify-center w-full">
            <div className="max-w-lg w-full sm:max-w-xl lg:max-w-xl">
              <form onSubmit={handleSubmit}>
              <div className="">
              {
                      fields.map(field=>
                              <Input
                                  key={field.id}
                                  handleChange={handleChange}
                                  value={signupState[field.id]}
                                  labelText={field.labelText}
                                  labelFor={field.labelFor}
                                  id={field.id}
                                  name={field.name}
                                  type={field.type}
                                  isRequired={field.isRequired}
                                  placeholder={field.placeholder}
                          />
                      
                      )
                  }
                <FormAction handleSubmit={handleSubmit} text="Signup" />
              </div>

              

             </form>
            </div>
        </div>
    )
}