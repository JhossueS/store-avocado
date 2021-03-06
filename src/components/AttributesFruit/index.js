import {
  Box, Divider, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography,
} from '@mui/material';
import { useTheme } from '@mui/material/styles';

const AttributesFruit = ({ attributes }) => {
  const theme = useTheme();
  return (
    <Box sx={{
      display: 'flex',
      gap: '18px',
      flexDirection: 'column',
    }}
    >
      <Typography variant='h5' component='h2'>About this avocado</Typography>
      <Typography variant='body2' component='p'>{attributes.description}</Typography>
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
              <TableCell>{attributes.shape}</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Hardiness</TableCell>
              <TableCell>{attributes.hardiness}</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Taste</TableCell>
              <TableCell>{attributes.taste}</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
};

export default AttributesFruit;
