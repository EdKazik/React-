// import logo from '../../logo.svg';
import './App.css';
import Header from '../Header/header';
import Container from '../Container/container';
import Main from '../Main/main';
import Aside from '../Aside/aside';
import Header_text from '../../components/Header-text/header-text';
import ImageMain from '../../assets/5073165.jpg';
import ImageAside from '../../assets/preview.jpg';

function App() {
  return (

    <wrapper className='wrapper'>
      <Header><Header_text/></Header>
      <Container>
        <Aside>
          <img src={ImageAside} className='img' alt='photo'/>
        </Aside>
        <Main>
          <img src={ImageMain} className='img' alt='photo'/>
        </Main>
      </Container>
    </wrapper>

    
  );
}

export default App;
