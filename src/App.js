import { useEffect } from 'react';

import Home from './route/home/home';
import Navigaiton from './route/navigaiton/navigaiton';
import { Routes, Route } from "react-router-dom";
import Auth from './route/auth/auth';
import Shop from './route/shop/shop';
import Checkout from './components/Checkout/Checkout';

import { onAuthStateChangeListener } from './firebase/firebase';
import { createUserDocumentFromAuth } from './firebase/firebase';
import { setCurrentUser } from './store/user/user.action';

import { useDispatch } from 'react-redux';
const App = () => {
  const dispatch = useDispatch()
  useEffect(() => {
    const unsubscribe = onAuthStateChangeListener((user) => {
      if (user) {
        createUserDocumentFromAuth(user);
      }
      dispatch(setCurrentUser(user))
    })
    return unsubscribe
  }, [dispatch])
  return (
    <div>
      <Routes>
        <Route path='/' element={<Navigaiton />}>
          <Route index element={<Home />} />
          <Route path='/shop/*' element={<Shop />} />
          <Route path='/auth' element={<Auth />} />
          <Route path='/checkout' element={<Checkout />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
