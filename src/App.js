import './App.css';
import { Routes, Route} from "react-router-dom"
import Header from './components/Header'
import PostView from './components/PostView';
import Footer from './components/Footer'
import Artist from './components/Artist';
import Tools from './components/Tools'
import ContactMe from './components/ContactMe';

function App() {

  //Should be moved into a database
  const art = [
    {id: 1, image: "/kortti.png", date: '12.2.2023', text: "This is my dad sitting on an old car as a child!"},
    {id: 2, image: "/stress.png", date: '5.1.2023', text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."},
    {id: 3, image: "/testi.png", date: '28.12.2022', text: "Very long squiggle"},
    {id: 4, image: "/art_zoom.png", date: '20.12.2022', text: "A zoom study session that started with Bob Ross landscape and ended with tic-tac-toe"},
    {id: 5, image: "/friend.png", date: '3.10.2022', text: "When you can't see properly, a friend can lend you an eye"},
    {id: 6, image: "/excel.png", date: '22.8.2022', text: "Weekly progress measured in a cat"},
    {id: 7, image: "/quick.png", date: '15.8.2022', text: "A confused man. He is reading documentation."}
  ];

  return (
    <div>
    <Header></Header>
    <div className="container">   
      <Routes>
        <Route path='/' element={ <PostView art={art}/>}/>
        <Route path='/artist' element={ <Artist/>}/>
        <Route path='/tools' element={ <Tools/>}/>
        <Route path='/contact' element={ <ContactMe/>}/>             
      </Routes>
    </div>
    <Footer></Footer>
    </div>
  );
}

export default App;
