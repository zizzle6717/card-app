import classNames from 'classnames';
import { useGetCardQuery } from '../generated/graphql';
import placeholder from '../assets/img/card-placeholder.png';

interface CardProps {
    id: string;
}

const Card = ({ id }: CardProps) => {
    const { data, error, loading } = useGetCardQuery({ variables: {
        slug: id
    } });

    const cardImageClassName = classNames({
        'image-container': true,
        hidden: loading,
    });

    const placeholderClassName = classNames({
        'image-container': true,
        hidden: !loading,
    });

    return (
        <div className="card-container">
            <div className={placeholderClassName}>
                <img src={placeholder} />
            </div>
            <div className={cardImageClassName}>
                <img src={data?.card?.pictureUrl || ''} />
            </div>
        </div>
    );
};

export default Card;
