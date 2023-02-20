import React from 'react';
import s from "./VisaAIHow.module.scss";
import {contentArray} from "./VisaAIHow";
import { Pagination, A11y } from 'swiper';
import { Thumbs } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/scss';
import 'swiper/scss/pagination';

export const VisaAIHowSlider = () => {
    return (
        <div className={s.visaAIHowSlider}>
            <Swiper
                modules={[Pagination, A11y, Thumbs]}
                spaceBetween={20}
                slidesPerView={2}
                pagination={{ clickable: true }}
            >
                {contentArray.map(el => {
                    return(
                        <SwiperSlide key={el.title} className={s.visaAIHowItem}>
                            <h4>{el.title}</h4>
                            <p>{el.text}</p>
                        </SwiperSlide>
                    )
                })}
            </Swiper>
        </div>
    );
};