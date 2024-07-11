import { Box, BoxProps, Typography } from '@mui/material';
import { styled } from '@mui/system';
import { BoxParcelaProps } from '../../types/tiposParcelas';



export const BoxParcela = styled(Box, {
  shouldForwardProp: (propName) => propName !== 'isActive',
})<BoxParcelaProps & BoxProps>`
  padding: 20px;
  border: 1px solid #E5E5E5;
  transition: all 0.3s easy;

  &:after {
    transition: all 0.3s easy;
  }

  ${({ isActive }) => isActive &&  `
    border: 1px solid #03D69D; 
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

export const BoxPixTag = styled(Typography)`
  position: absolute;
  top: -16px;
  left: 16px;
  font-weight: bold;
  padding: 5px;
  border-radius: 5px;
  background-color: #E5E5E5;
`;


export const BoxTag = styled(Box)`
  color: #fff;
  position: relative;
  font-weight: bold;
  padding: 5px 10px;
  margin-top: 10px;
  background-color: #133A6F;
  clip-path: polygon(0% 0%, 100% 0%, 95% 50%, 100% 100%, 0% 100%);

`;

