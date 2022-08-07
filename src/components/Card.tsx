import classNames from 'classnames';
import { useGetCardQuery } from '../generated/graphql';
import placeholder from '../assets/img/card-placeholder.png';
import cardBackgroundRed from '../assets/img/card-background-red.png';
import cardBackgroundBlue from '../assets/img/card-background-blue.png';
import cardFooterBackgroundRed from '../assets/img/card-footer-red.png';
import cardFooterBackgroundBlue from '../assets/img/card-footer-blue.png';

const redBackgroundId = 'marco-verratti-2021-unique-1';
const blueBackgroundId = 'marco-verratti-2021-rare-1';

interface CardProps {
    id: string;
}

const getBackground = (id: string) => {
    if (id === redBackgroundId) {
        return cardBackgroundRed;
    }

    return cardBackgroundBlue;
}

const getFooterBackground = (id: string) => {
    if (id === redBackgroundId) {
        return cardFooterBackgroundRed;
    }

    return cardFooterBackgroundBlue;
}

const Card = ({ id }: CardProps) => {
    const { data, error, loading } = useGetCardQuery({ variables: {
        slug: id
    } });

    console.log(data?.card);

    if (error) {
        console.log(error);
    }

    const cardImageClassName = classNames({
        'image-container': true,
        hidden: loading,
    });

    const placeholderClassName = classNames({
        'image-container': true,
        hidden: !loading,
    });

    const footerGradientClassName = classNames({
        'footer-gradient': true,
        'alt-blue': id === blueBackgroundId,
    })

    return (
        <div className="card-container">
            <div className={placeholderClassName}>
                <img src={placeholder} alt="player card placeholder"/>
            </div>
            <div className={cardImageClassName}>
                <img src={getBackground(id)} alt="player card background"/>
                <img src={data?.card?.player?.pictureUrl || ''} className="player-image" alt={data?.card?.player?.displayName} />
                <img src={getFooterBackground(id)} className="footer-image"  alt="player card footer background"/>
                {
                    !loading &&
                    <div className="card-header">
                        <div className="header-left">
                            <p className="season-text">{data?.card?.season.name}</p>
                            <p className="edition-name">{data?.card?.cardEdition?.name}</p>
                        </div>
                        <div className="header-right">
                            <p>
                                <img src={(data?.card?.team as any || {}).pictureUrl || ''} className="team-image" alt={(data?.card?.team as any || {}).name} />
                            </p>
                            <p className="grade-text">{data?.card?.grade}</p>
                        </div>
                    </div>
                }
                <div className={footerGradientClassName}>
                    <div className="player-name text-center">
                        <p>{data?.card?.player?.displayName}</p>
                    </div>
                    <div className="player-details-container">
                        <div className="details-group">
                            <p className="details-header">Age</p>
                            <p className="details">{data?.card?.age}</p>
                        </div>
                        <div className="details-group">
                            <p className="details-header">Position</p>
                            <p className="details">{data?.card?.position}</p>
                        </div>
                        <div className="details-group">
                            <p className="details-header">Country</p>
                            <p className="details">N/A</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Card;
