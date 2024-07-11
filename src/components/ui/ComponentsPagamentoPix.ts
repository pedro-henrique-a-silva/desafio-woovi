import { Box, Button } from '@mui/material';
import { styled } from '@mui/system';

export const BoxQRPix = styled(Box)`
  border-radius: 10px;
  padding: 4px;
  & img {
    width: 232px;
    height: 232px;
  }
`;

export const ButtonCopyPix = styled(Button)`
  margin-top: 10px;
  color: #fff;
  font-size: 0.7rem;
  cursor: pointer;
  background-color: #133A6F;
`;