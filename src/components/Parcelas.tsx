import { Check, RadioButtonUnchecked } from '@mui/icons-material'
import { Box, Radio, Typography } from '@mui/material'
import { BoxParcela, BoxPixTag, BoxTag } from './ui/ComponentsParcelamento'
import { ParcelaInfo, ParcelaProps } from '../types/tiposParcelas';
import { useContext } from 'react';
import context from '../context/context';

function Parcelas(props: ParcelaProps) {
  const { parcelas: p} = props;

  const { parcelas, selectedValue, trocaSelectecValue, trocaValorOriginal } = useContext(context);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    trocaSelectecValue(Number(event.target.value));
    trocaValorOriginal(parcelas.find((p: ParcelaInfo) => p.parcela === Number(event.target.value))?.valorTotal || 33500);
  };

  return (
    <BoxParcela 
      display="flex"
      position="relative"
      flexDirection={{ xs: 'column', sm: 'row' }}
      component="label"
      id="parcela"
      $isActive={selectedValue === p.parcela}
      mb={p.parcela === 1 ? 6 : 0}
    >
      <Box
        display="flex"
        justifyContent="space-between"
        alignItems="center"
      >
        <Box
          display="flex"
          alignItems="center"
        >
          <Typography mr={2} variant="h6" component="p">
            {p.parcela} X
          </Typography>
          <Typography variant="body1" component="p">
            R$ {(p.valorTotal / p.parcela).toFixed(2).replace('.', ',')}
          </Typography>
          {p.parcela === 1 && <BoxPixTag><p>Pix</p></BoxPixTag>}
          {p.parcela === 2 && <BoxPixTag><p>Pix Parcelado</p></BoxPixTag>}

        </Box>

        <Radio
          checked={selectedValue === p.parcela}
          onChange={handleChange}
          value={`${p.parcela}`}
          checkedIcon={<Check sx={{ 
            color: "#fff", 
            backgroundColor: "#03D69D",
            borderRadius: "50%", 
          }} />}
          icon={<RadioButtonUnchecked />} 
          name={`${p.parcela}`}
          id={`${p.parcela}`}
        />
      </Box>

      {p.parcela === 1 && <Typography color="#03D69D" variant="body2" component="p">Ganhe 3% de Cashback</Typography>}
      {p.parcela === 1 && <BoxTag fontSize={12}>🤑 R$ 300,00 de volta no seu Pix na hora</BoxTag>}
      
      {p.parcela !== 1 && <Typography color="#AFAFAF" variant="body2" component="p">Total: {p.valorTotal}</Typography>}
      {p.parcela === 4 && <BoxTag fontSize={12}>-3% de juros: Melhor opção de parcelamento</BoxTag>}
        
    </BoxParcela>
  )
}

export default Parcelas