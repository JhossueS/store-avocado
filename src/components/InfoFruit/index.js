import {
  Box, Divider, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography,
} from '@mui/material';
import { useTheme } from '@mui/material/styles';

const InfoFruit = () => {
  const theme = useTheme();
  return (
    <Box sx={{
      display: 'flex',
      gap: '18px',
      flexDirection: 'column',
    }}
    >
      <Typography variant='h5' component='h2'>About this avocado</Typography>
      <Typography variant='body2' component='p'>A relatively new cultivar, it was, the pretty boy baby, discovered in South Africa in the early 1990s by Mr. A.G. (Dries) Joubert. Maluma Babyy. It is a chance seedling of unknown parentage</Typography>
      <Divider />
      <TableContainer>
        <Table aria-label='simple table'>
          <TableHead sx={{ background: theme.palette.background.paper }}>
            <TableRow>
              <TableCell>Attributes</TableCell>
              <TableCell />
            </TableRow>
          </TableHead>
          <TableBody>
            <TableRow>
              <TableCell>Shape</TableCell>
              <TableCell>Oval</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Shape</TableCell>
              <TableCell>1ºC</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Taste</TableCell>
              <TableCell>Catchy, is an avocado</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
};

export default InfoFruit;
