import { Box, Container, Typography } from '@mui/material';

const Footer = () => (
  <Container maxWidth='md'>
    <Box component='footer' sx={{ margin: '18px 0 0 0', textAlign: 'center' }}>
      <Typography variant='h6' component='p'>Realizado Por Jhossue Sanchez</Typography>
      <Typography variant='h6' component='p'>Jhossue.d.sanchez@gmail.com</Typography>
    </Box>
  </Container>
);

export default Footer;
