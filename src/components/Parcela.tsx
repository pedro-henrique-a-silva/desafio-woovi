import { Check, RadioButtonUnchecked } from '@mui/icons-material'
import { Box, Radio, Typography } from '@mui/material'
import { BoxParcela, BoxPixTag } from './ui/ComponentsParcelamento'
import { ParcelaProps } from '../types/tiposParcelas';

function Parcela(props: ParcelaProps) {
  const { parcelas: p, selectedValue, handleChange } = props;


  return (
    <BoxParcela 
      display="flex"
      position="relative"
      flexDirection={{ xs: 'column', sm: 'row' }}
      component="label"
      id="parcela"
      isActive={selectedValue === `${p.parcela}x`}
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
          checked={selectedValue === `${p.parcela}x`}
          onChange={handleChange}
          value={`${p.parcela}x`}
          checkedIcon={<Check sx={{ 
            color: "#fff", 
            backgroundColor: "#03D69D",
            borderRadius: "50%", 
          }} />}
          icon={<RadioButtonUnchecked />} 
          name={`${p.parcela}x`}
          id={`${p.parcela}x`}
        />
      </Box>

      {p.parcela === 1 && <Typography color="#03D69D" variant="body2" component="p">Ganhe 3% de Cashback</Typography>}
      {p.parcela !== 1 && <Typography color="#AFAFAF" variant="body2" component="p">Total: {p.valorTotal}</Typography>}
        
    </BoxParcela>
  )
}

export default Parcela