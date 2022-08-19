import Link from "next/link";
import React from "react";

const Signup = () => {
  return (
    <section className="h-full gradient-form md:h-screen">
      <div className="container py-12 px-6 h-full">
        <div className="flex justify-center items-center flex-wrap h-full g-6 text-gray-800">
          <div className="xl:w-10/12">
            <div className="block bg-white shadow-2xl rounded-lg">
              <div className="lg:flex lg:flex-wrap g-0">
                <div
                  className="text-4xl lg:w-6/12 flex items-center justify-center lg:rounded-r-lg rounded-b-lg lg:rounded-bl-none font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600 uppercase"
                  // style="background: linear-gradient(to right, #ee7724, #d8363a, #dd3675, #b44593);"
                >
                  codeswear.com
                </div>
                <div className="lg:w-6/12 px-4 md:px-0">
                  <div className="md:p-12 md:mx-6">
                    <div className="mx-auto w-24 overflow-hidden rounded-full p-1 bg-pink-500">
                      <img
                        className=" object-cover"
                        src="/images/logo-circle.webp"
                        alt="logo"
                      />
                    </div>
                    <form>
                      <p className="text-xl font-semibold text-center mt-4 mb-10">
                        Sign Up to your account
                      </p>
                      <div className="mb-4">
                        {/* <Input label='' type="text" id="username" placeholder="Username" handleChange={()=>{console.log("sasda")}}/> */}
                        <input
                          type='text'
                          id="name"
                          placeholder="Name"
                          className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-pink-500 focus:outline-none"
                        />
                      </div>
                      <div className="mb-4">
                        <input
                          type='email'
                          id="email"
                          placeholder="Email"
                          className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-pink-500 focus:outline-none"
                        />
                      </div>
                      <div className="mb-4">
                        <input
                          type="password"
                          id="password"
                          placeholder="Password"
                          className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-pink-500 focus:outline-none"
                        />
                      </div>
                      <div className="text-center pt-1 mb-12 pb-1">
                        <button
                          className="inline-block px-6 py-2.5 text-pink-500 font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-pink-500 hover:shadow-lg hover:text-white focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg transition duration-150 ease-in-out w-full mb-3"
                          type="button"
                          data-mdb-ripple="true"
                          data-mdb-ripple-color="light"
                          // style="background: linear-gradient(to right,#ee7724,#d8363a,#dd3675,#b44593);"
                        >
                          Sign Up
                        </button>
                      </div>
                      <div className="flex items-center justify-between pb-6">
                        <p className="mb-0 mr-2">Already have an account?</p>
                        <Link href={'/login'}>
                          <button
                            type="button"
                            className="inline-block px-6 py-2 border-2 border-pink-500 text-pink-500 font-medium text-xs leading-tight uppercase rounded hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0 transition duration-150 ease-in-out"
                            data-mdb-ripple="true"
                            data-mdb-ripple-color="light"
                          >
                            Sign In
                          </button>
                        </Link>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Signup;
