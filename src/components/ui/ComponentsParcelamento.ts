import { Box } from '@mui/material';
import { styled } from '@mui/system';

type BoxParcelaProps = {
  isActive: boolean

}

export const BoxParcela = styled(Box)<BoxParcelaProps>`
  padding: 20px;
  border: 1px solid #E5E5E5;
  transition: all 0.3s easy;
  ${({ isActive }) => isActive &&  `
    border: 1px solid #03D69; 
    border-radius: 5px;

    &:after {
      content: '';
      position: absolute;
      width: 100%;
      opacity: 0.1;
      height: 100%;
      z-index: -1;
      background-color: #03D69D;
      right: 0;
      top: 0;
    }
  `}
   
`;

export const BoxPixTag = styled(Box)`
  position: absolute;
  top: -16px;
  left: 16px;
  font-weight: bold;
  padding: 5px;
  border-radius: 5px;
  background-color: #E5E5E5;
`;