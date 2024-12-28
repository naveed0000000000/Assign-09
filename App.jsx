import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import Card from './Component/Card/Card'
import './Component/Card/Card.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Card urlName= "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTIdjE-LT6TCAea0YpyJKbF1wUqaIuQQAoOFA&s" title="Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops" price="109.95" desc="Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday" rate="3.9" count="120" />
      <Card urlName= "https://m.media-amazon.com/images/I/71bVVKxjgeL._AC_UY1000_.jpg" title="Mens Casual Premium Slim Fit T-Shirts" price="22.3" desc="Slim-fitting style, contrast raglan long sleeve, three-button henley placket, light weight & soft fabric for breathable and comfortable wearing. " rate="4.1" count="259" />
      <Card urlName= "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ7VPjV7EmRvZWMBxsBH_mbCgtt5hbcUHMDYw&s" title="Mens Cotton Jacket" price="55.99" desc="great outerwear jackets for Spring/Autumn/Winter, suitable for many occasions, such as workin camping, mountain/rock climbing, cycling, traveling or other outdoors." rate="4.7" count="500" />
      <Card urlName= "https://5.imimg.com/data5/OT/NK/MY-37453636/mens-casual-slim-fit-plain-shirt-250x250.jpg" title="Mens Casual Slim Fit" price="15.99" desc="The color could be slightly different between on the screen and in practice. / Please note that body builds vary by person therefore  hjhasfkh scas,  " rate="2.1" count="430" />
      <Card urlName= "https://johnhardy.com/cdn/shop/files/1023_OCT_HP_PRODUCT_SCROLL_CROPS_BEST_SELLERS_BZS60193BSP_Front.jpg?v=1700586750&width=2000" title="John Hardy Women's Legends Naga Gold & Silver Dragon Station Chain nnsanc,n,nc asnfcnnads,fnBracelet" price="22.3" desc="From nsmnn n,mvnmnvour Legends Collection, the Naga " rate="4.6" count="70" />
      <Card urlName= "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ29CHf2lQVg6x9iZuFDpsQI27BqywqE3Cf9A&s" title="Solid Gold Petite Micropave" price="22.3" desc="Slim-fitting style, contrast raglan long sleeve, three-button henley hdfjhdhfhdk  placket, dbvbdsbvbbds adbscb light weight & soft fabric for breathable and comfortable wearing. " rate="4.1" count="65" />
      <Card urlName= "https://m.media-amazon.com/images/I/71bVVKxjgeL._AC_UY1000_.jpg" title="Mens Casual Premium Slim Fit T-Shirts" price="22.3" desc="Satisfaction Guaranteed. Return or exchange any order within 30 days.Designed and soldr in the United States. Satisfaction." rate="3.9" count="" />
      <Card urlName= "https://m.media-amazon.com/images/I/71bVVKxjgeL._AC_UY1000_.jpg" title="Mens Casual Premium Slim Fit T-Shirts" price="22.3" desc="Slim-fitting style, contrast raglan long sleeve, three-button henley placket, light weight & soft fabric for breathable and comfortable wearing. " rate="4.1" count="259" />
      <Card urlName= "https://m.media-amazon.com/images/I/71bVVKxjgeL._AC_UY1000_.jpg" title="Mens Casual Premium Slim Fit T-Shirts" price="22.3" desc="Slim-fitting style, contrast raglan long sleeve, three-button henley placket, light weight & soft fabric for breathable and comfortable wearing. " rate="4.1" count="259" />
      <Card urlName= "https://m.media-amazon.com/images/I/71bVVKxjgeL._AC_UY1000_.jpg" title="Mens Casual Premium Slim Fit T-Shirts" price="22.3" desc="Slim-fitting style, contrast raglan long sleeve, three-button henley placket, light weight & soft fabric for breathable and comfortable wearing. " rate="4.1" count="259" />
      <Card urlName= "https://m.media-amazon.com/images/I/71bVVKxjgeL._AC_UY1000_.jpg" title="Mens Casual Premium Slim Fit T-Shirts" price="22.3" desc="Slim-fitting style, contrast raglan long sleeve, three-button henley placket, light weight & soft fabric for breathable and comfortable wearing. " rate="4.1" count="259" />
      <Card urlName= "https://m.media-amazon.com/images/I/71bVVKxjgeL._AC_UY1000_.jpg" title="Mens Casual Premium Slim Fit T-Shirts" price="22.3" desc="Slim-fitting style, contrast raglan long sleeve, three-button henley placket, light weight & soft fabric for breathable and comfortable wearing. " rate="4.1" count="259" />  
    </>
  )
}

export default App
