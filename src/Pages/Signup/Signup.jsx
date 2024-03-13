import React from 'react'
import { Link } from "react-router-dom"
import Input from "../../Components/Input"
import userImage from '../../assets/user-svgrepo-com.svg';
import { confrimPassword, emailState,firstName,lastName,passwordState } from "../../Store/Sign"
function Signup() {
	return (
	<>
<section className="relative min-h-screen bg-gradient-to-t from-orange-400 to-gray-50 flex justify-center items-center">

<div className="absolute inset-0 bg-[linear-gradient(to_right,#161616_1px,transparent_1px),linear-gradient(to_bottom,#161616_1px,transparent_1px)] bg-[size:3rem_3rem]  [mask-image:radial-gradient(ellipse_45%_65%_at_50%_0%,#000_70%,transparent_110%)]  lg:bg-[size:6rem_6rem] md:mask-image:[radial-gradient(ellipse_0%_40%_at_50%_0%,#000_70%,transparent_110%)] -z-5"/>
	<div className="h-screen w-screen py-32 mx-auto px-10 sm:py-10 z-10">
      <h1 className=' text-[2rem] sm:text-[4rem] font-bold text-center mb-2x'>Crypto Check</h1>
		<div className="mx-auto max-w-xl bg-[#f2f2f7] px-5 py-12 text-center md:px-10 rounded-lg shadow-2xl ">

			<h2 className="text-3xl font-bold md:text-5xl">Sign Up</h2>
			<p className="mx-auto mb-5 mt-4 max-w-xl text-[#647084] md:mb-8">Welcome To CryptoCheck</p>
				<div className="relative">
					<img alt="" src={userImage} className="absolute bottom-0 left-[5%] right-auto top-[26%] inline-block" />
          <Input placeholder="First Name" type='text' required={true} stateAtom={firstName}/>
				</div>
				<div className="relative">
					<img alt="" src={userImage}    className="absolute bottom-0 left-[5%] right-auto top-[26%] inline-block" />
          <Input placeholder="Last Name" type='text' required={true} stateAtom={lastName}/>
				</div>
				<div className="relative">
					<img alt="" src="https://assets.website-files.com/6357722e2a5f19121d37f84d/6357722e2a5f190b7e37f878_EnvelopeSimple.svg" className="absolute bottom-0 left-[5%] right-auto top-[26%] inline-block" />
          <Input placeholder="Email Address" type='email' required={true} stateAtom={emailState}/>
				</div>
				<div className="relative">
					<img alt="" src="https://assets.website-files.com/6357722e2a5f19121d37f84d/6357722e2a5f19601037f879_Lock-2.svg" className="absolute bottom-0 left-[5%] right-auto top-[26%] inline-block" />
          <Input placeholder="Password (min 8 characters)" type='password' required={true} stateAtom={passwordState}/>
				</div>
				<div className="relative mb-4 pb-2">
					<img alt="" src="https://assets.website-files.com/6357722e2a5f19121d37f84d/6357722e2a5f19601037f879_Lock-2.svg" className="absolute bottom-0 left-[5%] right-auto top-[26%] inline-block" />
          <Input placeholder="Confrim Password (min 8 characters)" type='password' required={true} stateAtom={confrimPassword}/>
				</div>
				<button className="flex rounded-md mx-auto grid-cols-2 flex-row items-center justify-center bg-[#f1a447] px-8 py-4 text-center font-semibold text-white transition [box-shadow:rgb(255,219,146)_-8px_8px] hover:[box-shadow:rgb(171,_196,_245)_0px_0px]">
					<p className="mr-6 font-bold">Sign In</p>
					<div className="h-4 w-4 flex-none">
						<svg fill="currentColor" viewBox="0 0 20 21" xmlns="http://www.w3.org/2000/svg">
							<title>Arrow Right</title>
							<polygon points="16.172 9 10.101 2.929 11.515 1.515 20 10 19.293 10.707 11.515 18.485 10.101 17.071 16.172 11 0 11 0 9"></polygon>
						</svg>
					</div>
				</button>
        <p className=" mt-4 text-sm text-[#636262]">Already have an account?&nbsp;  
        <Link to='/signin' className="font-[Montserrat,_sans-serif] text-sm font-bold text-black underline">Sign in now</Link>
        </p>
		</div>
	</div>
</section>
	</>
	)
}

export default Signup
