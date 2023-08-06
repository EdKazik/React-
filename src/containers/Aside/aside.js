import './aside.css';

const Aside = (props) => {

    return (
        <aside className='aside'>
            {props.children}
        </aside>
    )
}

export default Aside;