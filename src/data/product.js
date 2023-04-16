import image1 from '../images/wine-cadus.png';
import image2 from '../images/wine-gransombrero.png';
import image3 from '../images/wine-hd.png';
import image4 from '../images/wine-luigibosca.png';
import image5 from '../images/rutini-merlot-de-rutini.jpg';
import image6 from '../images/catalpa-merlot.jpg';
import image7 from '../images/pascual-toso-alta-syrah.jpg';
import image8 from '../images/angelica-zapata-merlot.jpg';
import image9 from '../images/staphyre-premium-merlot.jpg';
import image10 from '../images/dv-catena-malbec.jpg';
import image11 from '../images/ruca-malen-merlot.jpg';
import image12 from '../images/pyros-appellation-syrah.jpg';


const products = [
    {
      id: 1,
      image: image1,
      title: 'Cadus Tupungato',
      price: '$5.800',
      category: 'Malbec',
      stock: 50
      // url: 
     },
    {
      id: 2,
      image: image2,
      title: 'Gran Sombrero',
      price: '$3.040',
      category: 'Cabernet',
      stock: 50
      // url:
    }, 
    {
      id: 3,
      image: image3,
      title: 'HD Gran Reserva',
      price: '$6.800',
      category: 'Malbec',
      stock: 20
      // url:
    },
    {
      id: 4,
      image: image4,
      title: 'Luigi Bosca De Sangre',
      price: '$8.200',
      category: 'Cabernet',
      stock: 50
      // url: 'https://shop.luigibosca.com/1315302541-luigi-bosca-de-sangre-cabernet-sauvignon/p'
    },
    {
      id: 5,
      image: image5,
      title: 'Rutini',
      price: '$5.300',
      category: 'Merlot',
      stock: 50
      // url: 'https://d3ugyf2ht6aenh.cloudfront.net/stores/001/069/568/products/rutini-merlot-de-rutini1-eeca0c6d04c29d488c15918073295349-480-0.jpg'
    },
    {
      id: 6,
      image: image6,
      title: 'Catalpa',
      price: '$3.400',
      category: 'Merlot',
      stock: 50,
      offer: 25
      // url: 'https://d3ugyf2ht6aenh.cloudfront.net/stores/001/069/568/products/catalpa-merlot1-f57326da2e874c507416547047546596-480-0.jpg'
    },
    {id: 7,
    image: image7,
    title: 'Pascual Toso Alta',
    price: '$6.700',
    category: 'Syrah',
    stock: 50
    // url: 'https://d3ugyf2ht6aenh.cloudfront.net/stores/001/069/568/products/pascual-toso-alta-syrah1-09609429a60261d4d716334668953419-480-0.jpg'
  },
  {
    id: 8,
    image: image8,
    title: 'Angelica Zapata Alta',
    price: '$5.900',
    category: 'Merlot',
    stock: 50
    // url: 'https://d3ugyf2ht6aenh.cloudfront.net/stores/001/069/568/products/czaza-00041-eabd65d1fb08eeecb915736766249349-480-0.jpg'
  },
  {
    id: 9,
    image: image9,
    title: 'Staphyle Premium',
    price: '$2.800',
    category: 'Merlot',
    stock: 0
    // url: 'https://d3ugyf2ht6aenh.cloudfront.net/stores/001/069/568/products/preeeemiyummerlot1-8cd74712606b64bf6916128051740347-480-0.jpg'
  },
  {id: 10,
  image: image10,
  title: 'D.V Catena',
  price: '$7.480',
  category: 'Malbec',
  stock: 50
  // url: 'https://www.cavasdelpozo.com.ar/productos/dvcatenamalbecmalbecbodegacatenazapata/?variant=111861414'
},
{
  id: 11,
  image: image11,
  title: 'Ruca Malen 2005',
  price: '$28.400',
  category: 'Merlot',
  stock: 10
  // url: 'https://d3ugyf2ht6aenh.cloudfront.net/stores/001/069/568/products/ruca-malen-merlot1-fdf85b951660df377b15895583264445-480-0.jpg'
},
{id: 12,
image: image12,
title: 'Pyros Appellation',
price: '$2.690',
category: 'Syrah',
stock: 20
// url: 'https://d3ugyf2ht6aenh.cloudfront.net/stores/001/069/568/products/pyrosappellationsyrahhhh1-351b4d360c539a634216014990607948-480-0.jpg'
}

    ]

  export default products;