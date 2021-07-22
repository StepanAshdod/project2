import React, { useState } from 'react';
import ItemsCarousel from 'react-items-carousel';
import '../About/CardSection.css';
import Zuckerberg from '../../../images/Zuckerberg.jpg'



export const CardsSection = ()=> {
    const [activeItemIndex, setActiveItemIndex] = useState(0);
    const chevronWidth = 40;
    return (
      <div class="Section">
         <h1 className="SuccesStoriesTitle">Succes Stories</h1>
      <div style={{ padding: `0 ${chevronWidth}px` }}>
        <ItemsCarousel
          requestToChangeActive={setActiveItemIndex}
          activeItemIndex={activeItemIndex}
          numberOfCards={4}
          gutter={20}
          leftChevron={<button>{'<'}</button>}
          rightChevron={<button>{'>'}</button>}
          outsideChevron
          chevronWidth={chevronWidth}
        >
          <div class="card">
            <img class="StoriesPersonImg" alt="person" src={Zuckerberg}></img>
            <div class="CardDescription"><h3 class="StoriesPersonName">Mark Zuckerberg</h3>
            <h3 class="StoriesPersonPlace">Tel-Aviv University</h3>
            <div class="line"></div>
            <p class="StoriesPersonComment">"lorem dgdfgdgd gdgdgdg gdg cknvkx cvknknd cknknc"</p>
          </div>
          </div>
          <div class="card">
          <img class="StoriesPersonImg" alt="person" src={Zuckerberg}></img>
            <div class="CardDescription"><h3 class="StoriesPersonName">Mark Zuckerberg</h3>
            <h3 class="StoriesPersonPlace">Tel-Aviv University</h3>
            <div class="line"></div>
            <p class="StoriesPersonComment">"lorem dgdfgdgd gdgdgdg gdg cknvkx cvknknd cknknc"</p>
          </div>
          </div>
          <div class="card">
          <img class="StoriesPersonImg" alt="person" src={Zuckerberg}></img>
            <div class="CardDescription"><h3 class="StoriesPersonName">Mark Zuckerberg</h3>
            <h3 class="StoriesPersonPlace">Tel-Aviv University</h3>
            <div class="line"></div>
            <p class="StoriesPersonComment">"lorem dgdfgdgd gdgdgdg gdg cknvkx cvknknd cknknc"</p>
          </div>
          </div>
          <div class="card"><img class="StoriesPersonImg" alt="person" src={Zuckerberg}></img>
            <div class="CardDescription"><h3 class="StoriesPersonName">Mark Zuckerberg</h3>
            <h3 class="StoriesPersonPlace">Tel-Aviv University</h3>
            <div class="line"></div>
            <p class="StoriesPersonComment">"lorem dgdfgdgd gdgdgdg gdg cknvkx cvknknd cknknc"</p>
          </div>
          </div>
          <div class="card"><img class="StoriesPersonImg" alt="person" src={Zuckerberg}></img>
            <div class="CardDescription"><h3 class="StoriesPersonName">Mark Zuckerberg</h3>
            <h3 class="StoriesPersonPlace">Tel-Aviv University</h3>
            <div class="line"></div>
            <p class="StoriesPersonComment">"lorem dgdfgdgd gdgdgdg gdg cknvkx cvknknd cknknc"</p>
          </div></div>
          <div class="card"><img class="StoriesPersonImg" alt="person" src={Zuckerberg}></img>
            <div class="CardDescription"><h3 class="StoriesPersonName">Mark Zuckerberg</h3>
            <h3 class="StoriesPersonPlace">Tel-Aviv University</h3>
            <div class="line"></div>
            <p class="StoriesPersonComment">"lorem dgdfgdgd gdgdgdg gdg cknvkx cvknknd cknknc"</p>
          </div></div>
        </ItemsCarousel>
      </div>
      </div>
    );
  };