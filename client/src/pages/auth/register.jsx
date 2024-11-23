import { CommonForm } from "@/components/common/form"
import { registerFormControls } from "@/config"
import { useState } from "react"
import { Link } from "react-router-dom"

const initialState ={
    userName:'',
    email:'',
    password:''
}
export const AuthRegister=()=>{
    const[formData,setFormData]=useState(initialState)
    function onSubmit(){
    }
   console.log(formData);

    return(
        <div className="mx-auto w-full max-w-md space-y-6">
            <div className="text-center">
              <h1 className="text-3xl font-bold tracking-tight text-foreground">Create new account</h1>
              <p>Already have an account
                <Link className="font-medium  ml-2 text-primary hover:underline " to='/auth/login'>Login</Link>
              </p>
            </div>
            <CommonForm formControls={registerFormControls}
            buttonText={'Sign up'}
            formData={formData}
            setFormData={setFormData}
            onSubmit={onSubmit}
            ></CommonForm>
        </div>
    )
}