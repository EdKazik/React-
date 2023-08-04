import './container.css'
import Main from '../Main/main';
import Aside from '../Aside/aside';


const Container = () => {
    
    return (
        <div className='container'>
            <Aside/>
            <Main/>
        </div>
    )
}

export default Container;