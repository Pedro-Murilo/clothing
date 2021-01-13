import { CollectionPreviewContainer, TitleContainer, PreviewContainer } from './preview-collection-styles';

import CollectionItem from '../../components/collection-item/collection-item.js';

const PreviewCollection = ({ title, items }) => (
    <CollectionPreviewContainer>
    <TitleContainer>{title.toUpperCase()}</TitleContainer>
    <PreviewContainer>
      {items
        .filter((item, idx) => idx < 4)
        .map(item => (
          <CollectionItem key={item.id} item={item} />
        ))}
    </PreviewContainer>
  </CollectionPreviewContainer>
)

export default PreviewCollection;