import './collection-item.scss';

import CustomButton from '../custom-button/custom-button'

const CollectionItem = ({ id, name, price, imageUrl }) => (
    <div className="collection-item">
        <div className="image" style={{ backgroundImage: `url(${imageUrl})`}} />
            <div className="collection-footer">
                <span className="name">{name}</span>
                <span className="name">{price}</span>
            </div>
            <CustomButton inverted>Add to cart</CustomButton>
    </div>
)

export default CollectionItem;