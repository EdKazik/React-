import './aside.css';
import Image from '../../images/preview.jpg'

const Aside = () => {

    return (
        <aside className='aside'>
            <img src={Image} className='img' alt='photo'/>
        </aside>
    )
}

export default Aside;