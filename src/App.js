
import { Route, Routes } from 'react-router-dom';
import './App.css';
import About from './components/About/About';
import Countries from './components/Countries/Countries';
import CountryDetail from './components/CountryDetail/CountryDetail';
import FriendDetail from './components/FriendDetail/FriendDetail';
import Friends from './components/Friends/Friends';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import NotFound from './components/NotFound/NotFound';
import PostDetail from './components/PostDetail/PostDetail';
import Posts from './components/Posts/Posts';

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
        <Route path='/posts' element={<Posts></Posts>}>
          <Route path=':postId' element={<PostDetail></PostDetail>}></Route>

        </Route>
        <Route path='/countries' element={<Countries></Countries>}></Route>
        <Route path='/country/:countryName' element={<CountryDetail></CountryDetail>}></Route>
        <Route path="/about" element={<About></About>}> </Route>
        <Route path='*' element={<NotFound></NotFound>}></Route>
        {/* ei star wala ta shobar nichee dibo ta naohole eta shobai ke capture kore felbe */}
      </Routes>
    </div>
  );
}

export default App;


/* 
//1
//How will you import a Routes from  React Router Dom?
ans: You have selected "import { Routes as BrowserRouter } from "react-router-dom"" but correct answer is "import { Routes } from "react-router-dom"".

//6
//<Route path = "/about" element={ <About />} / >    
<Route path =" * " element={< NotFound />} />
If you hit  http://localhost:3000/abut which  component will you see?
//ans : <NotFound></NotFound>

//9
//useParams hook returns _______
You have selected "an array" but correct answer is "an object".
//12
Does the page reload when we navigate to another route?
ans : no


  */

