/* eslint-disable max-len */
import * as React from 'react';

/**
 * Cards
 */
export class CardsComponent extends React.Component<any, any> {
    constructor(props: any) {
        super(props);

        this.state = {};
    }

    componentDidMount() {
        document.title = 'App | Cards';
    }

    login = (credentials: any) => this.props.login(credentials);

    public render(): JSX.Element {
        return (
            <>
                <div id="page_cards">
                    Hello, Cards
                </div>
            </>
        );
    }
}

export default CardsComponent;
