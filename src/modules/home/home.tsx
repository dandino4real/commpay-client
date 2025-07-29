import React from 'react';

import Hero from './components/hero';
import WhyWeExist from './why-we-exist';

const Home: React.FC = () => {
    return (
        <>
            <Hero />
            <WhyWeExist />
        </>
    );
};

export default Home;
