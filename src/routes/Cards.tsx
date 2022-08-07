/* eslint-disable max-len */
import * as React from 'react';
import { useParams } from 'react-router-dom';
import Card from '../components/Card';
import Navbar from '../components/Navbar';

const withParams = (Component: any) => {
    return (props: any) => <Component {...props} routeParams={useParams()} />;
}

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
        const { routeParams } = this.props;
        const { cardId } = routeParams;
        const cardIds = cardId.split(',');

        return (
            <>
                <div id="page_cards" className="page-wrapper">
                    <Navbar />
                    <h1 className="text-center">Player Cards</h1>
                    <div className="cards-container">
                        {
                            cardIds.map((id: string) => (
                                <Card key={id} card={null}/>
                            ))
                        }
                    </div>
                </div>
            </>
        );
    }
}

export default withParams(CardsComponent);
