import './App.css';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Header from './Header/Header';
import Footer from './Footer/Footer';
import ImageGallery from 'react-image-gallery';
import { images } from "./ImageGallery/images";
import "./ImageGallery/image-gallery.css";

export default function App() {
  return (
    <Container>
      <Header />
      <Box sx={{ my: 4 }}>
        <Typography variant="h4" component="h1" gutterBottom>
          #stillholdingon
        </Typography>
      </Box>
      <ImageGallery items={images} autoPlay={true}/>
      <Footer />
    </Container>
  );
}