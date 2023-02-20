import React from 'react';
import { Pagination, A11y } from 'swiper';
import { Thumbs } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';
import {tabContent, tabNames} from "./VisaAI";
import s from './VisaAI.module.scss'
// Import Swiper styles
import 'swiper/scss';
import 'swiper/scss/pagination';

export const VisaAISlider = () => {
    return (
        <div className={s.visaAISlider}>
            <Swiper
                modules={[Pagination, A11y, Thumbs]}
                spaceBetween={20}
                slidesPerView={2}
                pagination={{ clickable: true }}
            >
                {tabNames.map(el => {
                    return(
                        <SwiperSlide key={el} className={s.textWrapper}>
                            <h3>{el}</h3>
                            <p className={s.slideTop}>{tabContent[el]}</p>
                        </SwiperSlide>
                    )
                })}
            </Swiper>
        </div>
    );
};