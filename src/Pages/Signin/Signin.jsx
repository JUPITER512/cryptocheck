import { Link } from "react-router-dom";
import Input from "../../Components/Input";
import { emailState, passwordState } from "../../Store/Sign";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDiscord } from "@fortawesome/free-brands-svg-icons";
import { faPhone } from '@fortawesome/free-solid-svg-icons';

function Signin() {
  return (
    <>
      <section className="relative min-h-screen bg-gradient-to-t from-orange-400 to-gray-50 flex flex-col justify-center items-center">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#161616_1px,transparent_1px),linear-gradient(to_bottom,#161616_1px,transparent_1px)] bg-[size:3rem_3rem]  [mask-image:radial-gradient(ellipse_45%_65%_at_50%_0%,#000_70%,transparent_110%)]  lg:bg-[size:6rem_6rem] md:mask-image:[radial-gradient(ellipse_0%_40%_at_50%_0%,#000_70%,transparent_110%)] -z-5"/>
        <div className="h-screen w-screen py-20 mx-auto px-10 sm:py-16 z-10">
          <h1 className='text-[2rem] sm:text-[4rem] font-bold text-center mb-10 text-[#fcad4d] text-glow'>SoftQuant</h1>

          <div className="mx-auto max-w-xl bg-white rounded-lg shadow-2xl overflow-hidden">
            <div className="p-8 sm:p-12">
              <h2 className="text-3xl sm:text-5xl font-bold text-center mb-4">Log In</h2>
              <p className="text-gray-600 text-center mb-6">Build Better Build More</p>

              <div className="flex justify-center items-center gap-5 mb-8">
                <h3 className="font-bold">Continue With :</h3>
                <button className="flex items-center justify-center px-3 py-1 bg-gray-200 text-gray-700 rounded-md shadow-sm hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-offset-2">
                  <FontAwesomeIcon icon={faDiscord} className="mr-1" />
                  <span className="font-bold">Discord</span>
                </button>

                {/* <button className="flex items-center justify-center px-3 py-1 bg-gray-200 text-gray-700 rounded-md shadow-sm hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-offset-2">
                  <FontAwesomeIcon icon={faPhone} className="mr-1" />
                  <span className="font-bold">Phone</span>
                </button> */}
              </div>

              <div className="my-4 flex items-center before:mt-0.5 before:flex-1 before:border-t before:border-neutral-300 after:mt-0.5 after:flex-1 after:border-t after:border-neutral-300 dark:before:border-neutral-500 dark:after:border-neutral-500">
                <p className="mx-4 mb-0 text-center font-semibold dark:text-black">Or</p>
              </div>

              <div className="relative mb-6">
                <img alt="" src="https://assets.website-files.com/6357722e2a5f19121d37f84d/6357722e2a5f190b7e37f878_EnvelopeSimple.svg" className="absolute bottom-0 left-[5%] right-auto top-[26%] inline-block" />
                <Input placeholder="Email Address" type='email' required={true} stateAtom={emailState}/>
              </div>
              <div className="relative mb-6">
                <img alt="" src="https://assets.website-files.com/6357722e2a5f19121d37f84d/6357722e2a5f19601037f879_Lock-2.svg" className="absolute bottom-0 left-[5%] right-auto top-[26%] inline-block" />
                <Input placeholder="Password (min 8 characters)" type='password' required={true} stateAtom={passwordState}/>
              </div>
              <div className="text-right mb-6">
                <Link to="#" className="text-sm font-bold text-gray-600 underline">Forgot password?</Link>
              </div>
              <button className="flex rounded-md mx-auto items-center justify-center bg-[#f1a447] px-8 py-4 text-center font-semibold text-white transition hover:bg-[#e0943a]">
                <span className="mr-2 font-bold">Log In</span>
                <div className="h-4 w-4">
                  <svg fill="currentColor" viewBox="0 0 20 21" xmlns="http://www.w3.org/2000/svg">
                    <title>Arrow Right</title>
                    <polygon points="16.172 9 10.101 2.929 11.515 1.515 20 10 19.293 10.707 11.515 18.485 10.101 17.071 16.172 11 0 11 0 9"></polygon>
                  </svg>
                </div>
              </button>
              <p className="mt-6 text-center text-sm text-gray-600">Don't have an account?&nbsp;  
                <Link to='/signup' className="text-sm font-bold text-gray-600 underline">Sign up now</Link>
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Signin;
