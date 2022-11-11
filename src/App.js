import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import "./style/App.css";
import React from 'react';
import Home from "./home";
import Heading from "./heading";
import Bollywood from "./bollywood";
import Fitness from "./fitness"
import Hollywood from './hollywood';
import Food from "./food";
import Header from "./header";
import Technology from "./technology";
import Home1 from './details-article/home1';
import Home2 from './details-article/home2';
import Home3 from './details-article/home3';
import Home4 from './details-article/home4';
import Home5 from './details-article/home5';
import Home6 from './details-article/home6';
import Home7 from './details-article/home7';
import Home8 from './details-article/home8';
import Home9 from './details-article/home9';
import Home10 from './details-article/home10';
import Home11 from './details-article/home11';
import Bollywood1 from './details-article/bollywood1';
import Bollywood2 from './details-article/bollywood2';
import Bollywood3 from './details-article/bollywood3';
import Bollywood4 from './details-article/bollywood4';
import Bollywood5 from './details-article/bollywood5';
import Bollywood6 from './details-article/bollywood6';
import Bollywood7 from './details-article/bollywood7';
import Bollywood8 from './details-article/bollywood8';
import Hollywood1 from './details-article/hollywood1';
import Hollywood2 from './details-article/hollywood2';
import Hollywood3 from './details-article/hollywood3';
import Hollywood4 from './details-article/hollywood4';
import Hollywood5 from './details-article/hollywood5';
import Hollywood6 from './details-article/hollywood6';
import Hollywood7 from './details-article/hollywood7';
import Hollywood8 from './details-article/hollywood8';
import Technology1 from './details-article/technology1';
import Technology2 from './details-article/technology2';
import Technology3 from './details-article/technology3';
import Technology4 from './details-article/technology4';
import Technology5 from './details-article/technology5';
import Technology6 from './details-article/technology6';
import Technology7 from './details-article/technology7';
import Technology8 from './details-article/technology8';
import Fitness1 from './details-article/fitness1';
import Fitness2 from './details-article/fitness2';
import Fitness3 from './details-article/fitness3';
import Fitness4 from './details-article/fitness4';
import Fitness5 from './details-article/fitness5';
import Fitness6 from './details-article/fitness6';
import Fitness7 from './details-article/fitness7';
import Fitness8 from './details-article/fitness8';
import Food1 from './details-article/food1';
import Food2 from './details-article/food2';
import Food3 from './details-article/food3';
import Food4 from './details-article/food4';
import Food5 from './details-article/food5';
import Food6 from './details-article/food6';
import Food7 from './details-article/food7';
import Food8 from './details-article/food8';



const App = () => {
  return (
    <>
      <Router>
        <Heading />
        <Header />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/Home' element={<Home />} />
          <Route path='/Bollywood' element={< Bollywood />} />
          <Route path='/Hollywood' element={< Hollywood />} />
          <Route path='/Technology' element={< Technology />} />
          <Route path='/Fitness' element={< Fitness />} />
          <Route path='/Food' element={< Food />} />
          <Route path='/Home/home1' element={< Home1 />} />
          <Route path='/Home/home2' element={< Home2 />} />
          <Route path='/Home/Home3' element={< Home3 />} />
          <Route path='/Home/Home4' element={< Home4 />} />
          <Route path='/Home/Home5' element={< Home5 />} />
          <Route path='/Home/Home6' element={< Home6 />} />
          <Route path='/Home/Home7' element={< Home7 />} />
          <Route path='/Home/Home8' element={< Home8 />} />
          <Route path='/Home/Home9' element={< Home9 />} />
          <Route path='/Home/Home10' element={<Home10 />} />
          <Route path='/Home/Home11' element={<Home11 />} />
          <Route path='/Bollywood/Bollywood1' element={<Bollywood1 />} />
          <Route path='/Bollywood/Bollywood2' element={<Bollywood2 />} />
          <Route path='/Bollywood/Bollywood3' element={<Bollywood3 />} />
          <Route path='/Bollywood/Bollywood4' element={<Bollywood4 />} />
          <Route path='/Bollywood/Bollywood5' element={<Bollywood5 />} />
          <Route path='/Bollywood/Bollywood6' element={<Bollywood6 />} />
          <Route path='/Bollywood/Bollywood7' element={<Bollywood7 />} />
          <Route path='/Bollywood/Bollywood8' element={<Bollywood8 />} />
          <Route path='/Hollywood/Hollywood1' element={<Hollywood1 />} />
          <Route path='/Hollywood/Hollywood2' element={<Hollywood2 />} />
          <Route path='/Hollywood/Hollywood3' element={<Hollywood3 />} />
          <Route path='/Hollywood/Hollywood4' element={<Hollywood4 />} />
          <Route path='/Hollywood/Hollywood5' element={<Hollywood5 />} />
          <Route path='/Hollywood/Hollywood6' element={<Hollywood6 />} />
          <Route path='/Hollywood/Hollywood7' element={<Hollywood7 />} />
          <Route path='/Hollywood/hollywood8' element={<Hollywood8 />} />
          <Route path='/Technology/Technology1' element={< Technology1 />} />
          <Route path='/Technology/Technology2' element={<Technology2 />} />
          <Route path='/Technology/Technology3' element={<Technology3 />} />
          <Route path='/Technology/Technology4' element={<Technology4 />} />
          <Route path='/Technology/Technology5' element={<Technology5 />} />
          <Route path='/Technology/Technology6' element={<Technology6 />} />
          <Route path='/Technology/Technology7' element={<Technology7 />} />
          <Route path='/Technology/Technology8' element={<Technology8 />} />
          <Route path='/Fitness/Fitness1' element={<Fitness1 />} />
          <Route path='/Fitness/Fitness2' element={<Fitness2 />} />
          <Route path='/Fitness/Fitness3' element={<Fitness3 />} />
          <Route path='/Fitness/Fitness4' element={<Fitness4 />} />
          <Route path='/Fitness/Fitness5' element={<Fitness5 />} />
          <Route path='/Fitness/Fitness6' element={<Fitness6 />} />
          <Route path='/Fitness/Fitness7' element={<Fitness7 />} />
          <Route path='/Fitness/Fitness8' element={<Fitness8 />} />
          <Route path='/Food/Food1' element={<Food1 />} />
          <Route path='/Food/Food2' element={<Food2 />} />
          <Route path='/Food/Food3' element={<Food3 />} />
          <Route path='/Food/Food4' element={<Food4 />} />
          <Route path='/Food/Food5' element={<Food5 />} />
          <Route path='/Food/Food6' element={<Food6 />} />
          <Route path='/Food/Food7' element={<Food7 />} />
          <Route path='/Food/Food8' element={<Food8 />} />
        </Routes>
      </Router>
    </>
  )
}

export default App;

