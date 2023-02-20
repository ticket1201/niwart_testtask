import {BlogItem} from "./BlogItem/BlogItem";
import s from './Blog.module.scss'
import {blogArray} from "./Blog";
import {Swiper, SwiperSlide} from "swiper/react";
import {A11y, Pagination, Thumbs} from "swiper";
import React from "react";
import 'swiper/scss';
import 'swiper/scss/pagination';


export const BlogSlider = () => {
    return (
        <div className={s.blogSliderWrapper}>
            <Swiper
                modules={[Pagination, A11y, Thumbs]}
                spaceBetween={20}
                slidesPerView={1}
                pagination={{clickable: true}}
            >
                {blogArray.map((el, ind) => {
                    return (
                        <SwiperSlide key={ind}>
                            <BlogItem
                                title={el.title}
                                text={el.text}
                                date={el.date}
                                author={el.author}
                                img={el.img}
                                tags={el.tags}
                            />
                        </SwiperSlide>
                    )
                })}
            </Swiper>
        </div>
    );
};

