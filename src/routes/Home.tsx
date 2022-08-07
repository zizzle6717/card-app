/* eslint-disable max-len */
import * as React from 'react';
import Navbar from '../components/Navbar';

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
        

        return (
            <>
                <div id="page_home" className="page-wrapper">
                    <Navbar />
                    <h1 className="text-center">Home</h1>
                </div>
            </>
        );
    }
}

export default HomeComponent;
