import { Container } from '@mui/material';
import { styled } from '@mui/system';

export const FooterParcelas = styled(Container)`
  display: flex;
  width: 100%;
  align-items: center;
  font-size: 12px;
  gap: 10px;
  justify-content: center;
  margin: 20px 0;
  padding: 0;
  
  & svg {
    color: #B2B2B2;
  }
`;