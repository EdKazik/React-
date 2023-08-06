import './main.css';


const Main = (props) => {

    return (
        <main className='main'>
            {props.children}
        </main>
    )
}

export default Main;