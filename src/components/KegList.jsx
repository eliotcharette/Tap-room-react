import React from 'react';
import Keg from './Keg';
import mac from '../assets/macs.png';



const masterKegList = [
  {
    name: 'African Amber',
    brewer: 'Mac & Jacks',
    description: 'The Northwest’s original, unfiltered and dry hopped amber ale. African Amber’s pioneering and innovative style is proof that drinkabilty does not have to be achieved by sacrificing flavor. This beer erupts with a floral, hoppy taste, followed by a well rounded malty middle, finishing with a nicely organic hop flavor. Locally sourced two row grain and a blend of specialty malts give our amber its rich taste. Further complexity is achieved by leaving the beer unfiltered, providing exceptional flavor, as well as giving our amber its unique "cloudy" look. Lastly, we dry hop with locally grown, Yakima valley hops creating what has become the original, cult classic, northwest amber ale.',
    abv: '5.8%',
    price: '7',
    remaining: '20',
    img: mac
  },
  {
    name: 'Tart N Juicy',
    brewer: 'Epic',
    description: 'Sour IPA',
    abv: '4.5%',
    price: '6',
    remaining: '60',

  },
  {
    name: 'Hamm\'s',
    brewer: 'Miller/Coors',
    description: 'American Lager',
    abv: '4.7%',
    price: '3',
    remaining: '65',

  },
  {
    name: 'Prismatic',
    brewer: 'Ninkasi',
    description: 'Juicy IPA',
    abv:  '5.9%',
    price: '6',
    remaining: '75',

  },
  {
    name: 'Juicy Haze',
    brewer: 'New Belgium',
    description: 'India Pale Ale',
    abv:  '7.5%',
    price: '6',
    remaining: '18',

  },
  {
    name: '8 Hop',
    brewer: 'New Belgium',
    description: 'Pale Ale',
    abv:  '5.5%',
    price: '6',
    remaining: '58',

  }
];


function KegList() {
  return (
    <div>
      {masterKegList.map((keg, index) =>
        <Keg name={keg.name}
          description={keg.description}
          brewer={keg.brewer}
          price={keg.price}
          remaining={keg.remaining}
          img={keg.img}
          key={index}/>
      )}
    </div>
  );
}

export default KegList;
