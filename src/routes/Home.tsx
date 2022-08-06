/* eslint-disable max-len */
import * as React from 'react';
import { NavLink } from 'react-router-dom';

/**
 * Home
 */
export class HomeComponent extends React.Component<any, any> {
    constructor(props: any) {
        super(props);

        this.state = {};
    }

    componentDidMount() {
        document.title = 'App | Home';
    }

    login = (credentials: any) => this.props.login(credentials);

    public render(): JSX.Element {
        const activeStyle = {

        };

        return (
            <>
                <div id="page_home">
                    <nav>
                        <ul>
                            <li>
                                <NavLink
                                    to="cards/foo"
                                    style={({ isActive }) =>
                                        isActive ? activeStyle : {}
                                    }
                                >
                                    Cards
                                </NavLink>
                            </li>
                        </ul>
                    </nav>
                </div>
            </>
        );
    }
}

export default HomeComponent;
