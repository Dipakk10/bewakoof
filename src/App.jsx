import './App.css'
import Navbar from './Component/Frontend/Headeer/Navbar'
import Slider from './Component/Frontend/Top_Sliders/Slider'

function App() {

  return (
   <>
    <Navbar />
    <Slider images={images} />
    <Slider images={images2} />
   </>
  )
}

export default App
const images =[
  {name:'asset 1.gif', alt:'asset 1'},
  {name:'asset 2.webp', alt:'asset 2'},
  {name:'asset 3.webp', alt:'asset 3'},
  {name:'asset 4.webp', alt:'asset 4'},
  {name:'asset 5.webp', alt:'asset 5'},
  {name:'asset 6.webp', alt:'asset 6'},
  {name:'asset 7.webp', alt:'asset 7'},
  {name:'asset 8.webp', alt:'asset 8'},
  {name:'asset 9.webp', alt:'asset 9'},
]
const images2 =[
  {name:'asset 11.webp', alt:'asset 1'},
  {name:'asset 12.webp', alt:'asset 2'},
  {name:'asset 13.webp', alt:'asset 3'},
  {name:'asset 14.webp', alt:'asset 4'},
  {name:'asset 15.webp', alt:'asset 5'},
  {name:'asset 16.webp', alt:'asset 6'},
  {name:'asset 17.webp', alt:'asset 7'},
  {name:'asset 18.webp', alt:'asset 8'},
  {name:'asset 19.webp', alt:'asset 9'},
]