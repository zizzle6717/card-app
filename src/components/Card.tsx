import placeholder from '../assets/img/card-placeholder.png';

interface CardProps {
    card?: any;
}

export default ({ card }: CardProps) => {
    if (!card) {
        return (
            <div className="card-container">
                <img src={placeholder} />
            </div>
        );
    }
    
    return (
        <div className="card-container">

        </div>
    );
};
