import React from 'react';
import Reveal from 'react-awesome-reveal';

import OwlCarousel from '~/components/features/owl-carousel';

import { brandSlider } from '~/utils/data/carousel';
import { fadeIn } from '~/utils/data/keyframes';

function BrandSection () {
    return (
        <Reveal keyframes={ fadeIn } duration={ 1200 } delay={ 300 } triggerOnce>
            <section className="mt-2 pb-6 pt-10 pb-md-10">
                <h2 className="title d-none">Our Brand</h2>

                <div className="container">
                    <OwlCarousel adClass="owl-theme brand-carousel" options={ brandSlider }>
                        <figure>
                            <img src="./images/brands/1.png" alt="Brand" width="180" height="100" />
                        </figure>
                        <figure>
                            <img src="./images/brands/2.png" alt="Brand" width="180" height="100" />
                        </figure>
                        <figure>
                            <img src="./images/brands/3.png" alt="Brand" width="180" height="100" />
                        </figure>
                        <figure>
                            <img src="./images/brands/4.png" alt="Brand" width="180" height="100" />
                        </figure>
                        <figure>
                            <img src="./images/brands/5.png" alt="Brand" width="180" height="100" />
                        </figure>
                        <figure>
                            <img src="./images/brands/6.png" alt="Brand" width="180" height="100" />
                        </figure>
                    </OwlCarousel>
                </div>
            </section>
        </Reveal>
    )
}

export default React.memo( BrandSection );