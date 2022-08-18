
import { Route, Routes } from 'react-router-dom';
import './App.css';
import About from './components/About/About';
import FriendDetail from './components/FriendDetail/FriendDetail';
import Friends from './components/Friends/Friends';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import NotFound from './components/NotFound/NotFound';

function App() {
  return (
    <div className="App">
      {/* <h1>Welcome to my router</h1> */}
      {/* eta ke header er modhe niye jbo */}
      <Header></Header>
      {/* kono ekta compo routes er upr boshale sheta shobar jnno same thakbe  */}
      {/* ekadhik component o hote pare  */}
      <Routes>
        <Route path="/" element={<Home></Home>} > </Route>
        <Route path="/friends" element={<Friends></Friends>} > </Route>
        <Route path='/friend/:friendId' element={<FriendDetail></FriendDetail>} ></Route>

        {/* :detail dile kacha kachi kichu ekta holei dhore delfe r : na dile exact ota na hole error dibe */}
        <Route path="/about" element={<About></About>}> </Route>
        <Route path='*' element={<NotFound></NotFound>}></Route>
        {/* ei star wala ta shobar nichee dibo ta naohole eta shobai ke capture kore felbe */}
      </Routes>
    </div>
  );
}

export default App;
