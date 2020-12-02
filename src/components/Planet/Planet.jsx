import React, { useState } from 'react'
import style from './planet.module.css'
import Row from 'react-bootstrap/Row'
import Container from 'react-bootstrap/Container'
import { Link } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.css'
import arrow from '../../assets/icons/arrow.svg'
import Planet1 from '../../assets/img/Planet/Planet.png'
import Planet2 from '../../assets/img/Planet/Planet2.PNG'
import Planet3 from '../../assets/img/Planet/Planet3.jpg'
import Planet1_1 from '../../assets/img/Planet/Planet1_1.png'
import Planet2_2 from '../../assets/img/Planet/Planet2_2.jpg'
import Planet3_3 from '../../assets/img/Planet/Planet3_3.jpg'
import People1 from '../../assets/img/Planet/PeoplePlanet.png'
import People2 from '../../assets/img/Planet/People2.JPG'
import People3 from '../../assets/img/Planet/People3.jpg'
import PhotoBlock from './PhotoBlock/PhotoBlock'
import TextBlock from './TextBlock/TextBlock'

const getRandomArbitrary = (min, max) => {
    return Math.floor(Math.random() * (max - min) + min);
};

const Planet = ({planet}) => {

    const [random, setRandom] = useState(getRandomArbitrary(1, 3));

    return (
        <div className={style.planetPage}>
            <Container>
                <Row>
                    <div className={style.back}>
                        <Link to={'/'}>
                            <img src={arrow} alt="arrow"/><span> All planets</span>
                        </Link>
                    </div>
                </Row>

                <Row>
                    <span className={style.name}>{planet.name}</span>
                </Row>

                <PhotoBlock planet={random === 1
                    ? Planet1
                    : random === 2
                        ? Planet2
                        : Planet3}/>
                <TextBlock
                    text={'The cities of Tatooine were frequently blasted by sandstorms and the ' +
                    'inhabitants always seemed to know when one was coming. Not much distinguished ' +
                    'the towns as the poor standard of living was common. The cities were separated ' +
                    'from each other by large expanses of deserts. Rural life, on the other hand, was ' +
                    'mostly small moisture farms that sold water and food for a meager living.[11]'}/>

                <PhotoBlock planet={random === 1
                    ? Planet1_1
                    : random === 2
                        ? Planet2_2
                        : Planet3_3}/>
                <TextBlock
                    text={'Inhabiting the planet were many native species, the largest of which were ' +
                    'the carnivorous krayt dragons. The common krayt dragon, while more plentiful, was ' +
                    'shadowed by the greater krayt dragon, which submerged itself under the shifting sands ' +
                    'and used its powerful limbs to swim through the dunes. In addition, the common bantha ' +
                    'and eopie species also found a home on the world, along with dewbacks, rontos, womp ' +
                    'rats, massiffs and scurriers.[1][2]'}/>

                <PhotoBlock planet={random === 1
                    ? People1
                    : random === 2
                        ? People2
                        : People3}/>
                <TextBlock
                    text={'The cities of Tatooine were frequently blasted by sandstorms and the inhabitants ' +
                    'always seemed to know when one was coming. Not much distinguished the towns as the poor ' +
                    'standard of living was common. The cities were separated from each other by large expanses ' +
                    'of deserts. Rural life, on the other hand, was mostly small moisture farms that sold water ' +
                    'and food for a meager living.[11]'}/>

                <Row>
                    <div className={style.back}>
                        <Link to={'/'}>
                            <img src={arrow} alt="arrow"/><span> All planets</span>
                        </Link>
                    </div>
                </Row>
            </Container>
        </div>
    )
};

export default Planet