import React,{useState} from "react";
import axios from "axios";


function SignUp() {
    
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [message, setMessage] = useState("");
    const [loginStatus, setLoginStatus] = useState(true);
   

    function registerUser(e) {
        e.preventDefault()
      
        const user = {
          firstName,
          lastName,
          email,
          password,
        };

        if(password===confirmPassword){ 
        axios.post("http://localhost:8090/register", user).then((res) => {
         
            if (res["data"]["message"] == "success") {
                setMessage("Registration is Successfully");
            } else {
              setMessage("Email is Already Registered");
            }
          })
          .catch((err) => {
            //sever error
            console.log(err.message);
          });
         }else{
            setMessage("Username or Password is Not match");
         }
         e.target.reset();
    }
    

    return (
        <>
            <div className="flex min-h-full">
                <div className="relative ml-10 hidden w-0 flex-1 lg:block">
                    <img
                        className="absolute inset-0 h-full w-full object-cover"
                        src="https://images.unsplash.com/photo-1505904267569-f02eaeb45a4c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1908&q=80"
                        alt=""
                    />
                </div>
                <div className="flex flex-1 flex-col justify-center py-12 px-4 sm:px-6 lg:flex-none lg:px-20 xl:px-24">
                    <div className="mx-auto w-full max-w-sm lg:w-96">
                        <div className="flex space-x-2">
                            <img
                                className="h-10 w-auto"
                                src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
                                alt="Your Company"
                            />
                            <h2 className="text-3xl font-bold tracking-tight text-gray-900">Create an account</h2>
                        </div>

                        <div className="mt-8">
                            <div>
                                <div className="mt-6">
                                    {message}
                                    <form  onSubmit={registerUser} className="space-y-6">
                                        <div className="flex space-x-3">
                                            <div>
                                                <label htmlFor="fname" className="block text-sm font-medium text-gray-700">
                                                    First Name
                                                </label>
                                                <div className="mt-1">
                                                    <input
                                                        id="fname"
                                                        name="fname"
                                                        type="text"
                                                        required
                                                        className="block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                                                        onChange={(e)=>{setFirstName(e.target.value)}}
                                                   />
                                                </div>
                                            </div>

                                            <div>
                                                <label htmlFor="fname" className="block text-sm font-medium text-gray-700">
                                                    Last Name
                                                </label>
                                                <div className="mt-1">
                                                    <input
                                                        id="lname"
                                                        name="lname"
                                                        type="text"
                                                        required
                                                        className="block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                                                        onChange={(e)=>{setLastName(e.target.value)}}
                                                    />
                                                </div>
                                            </div>
                                        </div>

                                        <div>
                                            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                                                Email address
                                            </label>
                                            <div className="mt-1">
                                                <input
                                                    id="email"
                                                    name="email"
                                                    type="email"
                                                    autoComplete="email"
                                                    required
                                                    className="block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                                                    onChange={(e)=>{setEmail(e.target.value)}}
                                                />
                                            </div>
                                        </div>

                                        <div className="flex space-x-3">
                                            <div className="space-y-1">
                                                <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                                                    Password
                                                </label>
                                                <div className="mt-1">
                                                    <input
                                                        id="password"
                                                        name="password"
                                                        type="password"
                                                        autoComplete="current-password"
                                                        required
                                                        className="block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                                                        onChange={(e)=>{setPassword(e.target.value)}}
                                                  />
                                                </div>
                                            </div>

                                            <div className="space-y-1">
                                                <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                                                    Confirm Password
                                                </label>
                                                <div className="mt-1">
                                                    <input
                                                        id="password"
                                                        name="password"
                                                        type="password"
                                                        autoComplete="current-password"
                                                        required
                                                        className="block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                                                        onChange={(e)=>{setConfirmPassword(e.target.value)}}
                                                  />
                                                </div>
                                            </div>
                                        </div>

                                        <div className="flex items-center justify-between">
                                            <div className="flex items-center">
                                                <input
                                                    id="remember-me"
                                                    name="remember-me"
                                                    type="checkbox"
                                                    className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                                                />
                                                <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-900">
                                                    I have read the terms and conditions*
                                                </label>
                                            </div>
                                        </div>

                                        <div>
                                            <button
                                                type="submit"
                                                className="flex w-full justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                                            >
                                                Sign up
                                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true" class="-mr-1 ml-3 h-5 w-5 text-white"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                                            </button>
                                        </div>
                                    </form>
                                </div>

                                <div className="relative mt-6">
                                    <div className="absolute inset-0 flex items-center" aria-hidden="true">
                                        <div className="w-full border-t border-gray-300" />
                                    </div>
                                    <div className="relative flex justify-center text-sm">
                                        <span className="bg-white px-2 text-gray-500">Or continue with</span>
                                    </div>
                                </div>

                                <div>
                                    <div className="mt-4 grid gap-3">
                                        <div>
                                            <a
                                                href="#"
                                                className="inline-flex w-full justify-center rounded-md border border-gray-300 bg-white py-2 px-4 text-sm font-medium text-gray-500 shadow-sm hover:bg-gray-50"
                                            >
                                                <svg className="h-5 w-5" aria-hidden="true" fill="currentColor" viewBox="0 0 48 48">
                                                    <path
                                                        d="M44.5 20H24v8.5h11.8C34.7 33.9 30.1 37 24 37c-7.2 0-13-5.8-13-13s5.8-13 13-13c3.1 0 5.9 1.1 8.1 2.9l6.4-6.4C34.6 4.1 29.6 2 24 2 11.8 2 2 11.8 2 24s9.8 22 22 22c11 0 21-8 21-22 0-1.3-.2-2.7-.5-4z"
                                                    />
                                                </svg>
                                                <span className="ml-5">Sign in with Google</span>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default SignUp;