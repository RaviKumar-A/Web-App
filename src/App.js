import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import CreateProject from './Screens/Dashboard Page/CreateProject';
import Forgotpassword from './Screens/Forgotpassword/Forgotpassword'
import RequestDemo from './Screens/RequestDemo/RequestDemo';
import Verification from './Screens/Verification/Verification';
import RequestAccess from './Screens/RegisterScreen Page/RequestAccess';
import UpdateProfile from './Screens/Profile/Profile';
import PrivateRoute from './PrivateRoute';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>

              <Route exact path="/" element={<RequestDemo/>}></Route>

              <Route path='/' element={<PrivateRoute/>}>
              <Route exact path="/createproject" element={<CreateProject />}></Route>
              <Route exact path='/verification' element={<Verification />}></Route>
              <Route exact path='/updateprofile' element={<UpdateProfile/>}></Route>

              </Route>
              <Route exact path="/forgot" element={<Forgotpassword />}></Route>
              <Route exact path='/reqaccess' element={<RequestAccess/>}></Route>
         </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
