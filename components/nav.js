
import Language from './constants/Language'

const Nav = () => {

    return (
        <nav>
            <h1>Re-Cycle</h1>
            <p className='tagline'>Eco-friendly City Bikes</p>
            <Language/>
            <ul>
                <li>Home</li>
                <li>Tours</li>
                <li>About</li>
                <li>Contact</li>
            </ul>
        </nav>
    )
}

export default Nav;