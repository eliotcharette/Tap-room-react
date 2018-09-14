import React from 'react';
import Keg from './Keg';
import amber from '../assets/amber.png';
import ibis from '../assets/ibis.png';
import blackcat from '../assets/blackcat.png';
import maxx from '../assets/maxx.png';
import serengeti from '../assets/serengeti.png';
import kegs from '../assets/kegs.jpg';



const masterKegList = [
  {
    name: 'AFRICAN AMBER',
    brewer: 'Mac & Jack\'s',
    description: 'The Northwest’s original, unfiltered and dry hopped amber ale. African Amber’s pioneering and innovative style is proof that drinkabilty does not have to be achieved by sacrificing flavor. This beer erupts with a floral, hoppy taste, followed by a well rounded malty middle, finishing with a nicely organic hop flavor. Locally sourced two row grain and a blend of specialty malts give our amber its rich taste. Further complexity is achieved by leaving the beer unfiltered, providing exceptional flavor, as well as giving our amber its unique "cloudy" look. Lastly, we dry hop with locally grown, Yakima valley hops creating what has become the original, cult classic, northwest amber ale.',
    abv: '5.8%',
    price: '7',
    remaining: '20',
    img: amber
  },
  {
    name: 'IBIS I.P.A.',
    brewer: 'Mac & Jack\'s',
    description: 'An aromatic blast of hops greets the nose when tasting this meticulously dry hopped IPA. Highly sought after Amarillo and Mosaic hops lend this beer its delicious tropical fruit nuanced flavor reminiscent of passion fruit and pineapple. Ibis finishes beautifully with a subtle, yet solid golden-hued malt body.',
    abv: '6.9%',
    price: '6',
    remaining: '60',
    img: ibis
  },
  {
    name: 'SERENGETI WHEAT',
    brewer: 'Mac & Jack\'s',
    description: 'A crisp, refreshing American style Hefeweizen that is brewed with the best ingredients the Northwest has to offer. We use 50% locally sourced two-row pale malt and 50% locally grown northwest malted wheat well above the required 30% wheat additions to be called a wheat beer. This Northwest style Hefeweizen is unfiltered for a "cloudy" appearance and brewed with plenty of Yakima valley hops yielding a wonderful citrus finish, delicious with or without a lemon garnish.',
    abv: '5.1%',
    price: '6',
    remaining: '65',
    img: serengeti
  },
  {
    name: 'BLACKCAT PORTER',
    brewer: 'Mac & Jack\'s',
    description: 'Cocoa, coffee, and smoky notes of dark-roasted barley combine to form the Blackcat Porter’s aroma profile. Notes of chocolate and coffee welcome the taste buds, finishing dry with a bit of smokiness that slowly becomes more present as the beer lingers on the palate. Although dark in color, the porter has a relatively light body and very low bitterness making it a more sessionable porter that can be enjoyed year round.',
    abv:  '4.8%',
    price: '6',
    remaining: '75',
    img: blackcat
  },
  {
    name: 'MAXX STOUT',
    brewer: 'Mac & Jack\'s',
    description: 'Our Stout features six different varieties of malt creating a rich and complex malt character. Coffee and roasted barley notes are imparted from additions of Midnight Wheat and Dark Crystal Malt. Flaked oats provide the beer a smooth and creamy mouthfeel. Kent Golding\'s hops are added with restraint, allowing the well-developed malt body to shine through. Maxx Stout finishes clean, crisp and semi dry on the palate.',
    abv:  '6.3%',
    price: '8',
    remaining: '18',
    img: maxx
  }
];


function KegList() {
  return (
    <div>
      <style jsx>{`
        .head {
          text-align: center
          background-image: url(${kegs});
        }
        img {
          object-fit: cover;
        }
        `}
      </style>
      <div className="head">
        
      </div>
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
    </div>
  );
}

export default KegList;
