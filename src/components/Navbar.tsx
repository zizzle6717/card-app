import { NavLink } from 'react-router-dom';

const activeStyle = {

};

const Navbar = () => (
    <nav>
        <ul>
            <li>
                <NavLink
                    to="/"
                    style={({ isActive }) =>
                        isActive ? activeStyle : {}
                    }
                >
                    Home
                </NavLink>
            </li>
            <li>
                <NavLink
                    to="/cards/marco-verratti-2021-unique-1,marco-verratti-2021-rare-1"
                    style={({ isActive }) =>
                        isActive ? activeStyle : {}
                    }
                >
                    Cards
                </NavLink>
            </li>
        </ul>
    </nav>
)

export default Navbar;
