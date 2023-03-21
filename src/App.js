import './App.css';
import { Routes, Route} from "react-router-dom"
import Header from './components/Header'
import PostView from './components/PostView';
import Footer from './components/Footer'
import Artist from './components/Artist';
import Tools from './components/Tools'
import image from './stress.png'
import image2 from './kortti.png'
import ContactMe from './components/ContactMe';

function App() {

  const art = [
    {id: 1, image: image2, date: '15.11.2022', text: "This is my dad as a child sitting on an old car!"},
    {id: 2, image: image, date: '12.10.2022', text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."},
    {id: 3, image: image2, date: '18.9.2022', text: "Harmaa maailma ja sininen poika sinisellä autollaan"}];

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
