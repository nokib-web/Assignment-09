import React from 'react';
import HeroSlider from './HeroSlider';

import WinterCareTips from './WinterCareTips';
import VetsSection from './VetsSection';
import PetProducts from './PetProducts';
import PopularServices from './PopularServices';

const Home = () => {

    return (
        <div>
            <HeroSlider></HeroSlider>

            <div>
                <div>
                    <PopularServices></PopularServices>
                </div>
               
                <div>
                    <WinterCareTips></WinterCareTips>
                </div>

                <div>
                    <VetsSection></VetsSection>
                </div>
                <div>
                    <PetProducts></PetProducts>
                </div>
            </div>

        </div>
    );
};

export default Home;