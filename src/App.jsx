import './App.css'
import Navbar from './Component/Frontend/Headeer/Navbar'
import Slider from './Component/Frontend/Top_Sliders/Slider';
import Timer24Hr from './Component/Frontend/Top_Sliders/Timer/timer';


function App() {

  return (
    <>
      <Navbar />
      <Slider images={images} />
      <Timer24Hr />
      <Slider images={images2} title={'Latest Collections'} />
    </>
  )
}

export default App
const images = [
  { name: 'Track-Pant-Pantastic.gif', alt: '9' },
  { name: 'Dr-Doom.jpg', alt: '10' },
  { name: 'asset 2.webp', alt: 'asset 2' },
  { name: 'asset 3.webp', alt: 'asset 3' },
  { name: 'asset 4.webp', alt: 'asset 4' },
  { name: 'asset 5.webp', alt: 'asset 5' },
  { name: 'asset 1.gif', alt: 'asset 1' },
  { name: 'asset 6.webp', alt: 'asset 6' },
  { name: 'asset 7.webp', alt: 'asset 7' },
  { name: 'asset 8.webp', alt: 'asset 8' },
]

const images2 = [
  { name: 'asset 11.webp', alt: 'asset 1' },
  { name: 'asset 12.webp', alt: 'asset 2' },
  { name: 'asset 13.webp', alt: 'asset 3' },
  { name: 'asset 15.webp', alt: 'asset 4' },
  { name: 'typography.jpg', alt: 'asset 5' },
  { name: 'shorts.jpg', alt: 'asset 6' },
  { name: 't-shirts.jpg', alt: 'asset 7' },
  { name: 'Boxer.jpg', alt: 'asset 8' },
  { name: 'cargoPant.jpg', alt: 'asset 9' }
]