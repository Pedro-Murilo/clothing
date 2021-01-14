import styled from 'styled-components';

import { ReactComponent as ShoppingIconSVG } from '../../assets/shopping-bag.svg';

export const CartContainer = styled.div`
  width: 45px;
  height: 45px;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`;

export const ShoppingIcon = styled(ShoppingIconSVG)`
  width: 40px;
  height: 40px;
  margin-bottom: 10px;
`;

export const ItemCountContainer = styled.span`
  position: absolute;
  font-size: 16;
  font-weight: bold;
  bottom: 10px;
  color: #3cca37;
`;