import React from 'react'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import {RecoilRoot} from 'recoil'
import Signin from './Pages/Signin/Signin'
import Signup from './Pages/Signup/Signup'
function App() {
	return (
		<RecoilRoot>
      <BrowserRouter>
          <Routes>
            <Route path="/*" element={<Signin />} />
            <Route path='/signin' element={<Signin/>}/>
            <Route path='/signup' element={<Signup/>}/>
          </Routes>
      </BrowserRouter>
		</RecoilRoot>
	)
}

export default App
