import './App.css';
import Header from './components/header/header'
import Pagecomponent from './components/page-components/page-component';
import Footer from './components/footer/footer';


function App() {
  return (
    <div className="App">
      <Header/>
      <Pagecomponent/>
      <Footer/>
    </div>
  ); 
}

export default App;
 