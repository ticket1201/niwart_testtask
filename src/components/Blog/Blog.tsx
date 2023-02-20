import ny1 from './../../assets/images/ny1.png'
import ny2 from './../../assets/images/ny2.png'
import sf1 from './../../assets/images/sf1.png'
import sf2 from './../../assets/images/sf2.png'
import {BlogItem} from "./BlogItem/BlogItem";
import s from './Blog.module.scss'
import {Slide} from "react-awesome-reveal";


export const blogArray = [
    {
        title: 'Article title',
        text: 'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet. Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.',
        tags: ['Design', 'Research', 'Presentation'],
        img: ny1,
        author: 'Olivia Rhye',
        date: '20 Jan 2022'
    },
    {
        title: 'Article title',
        text: 'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet. Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.',
        tags: ['Design', 'Research', 'Presentation'],
        img: ny2,
        author: 'Olivia Rhye',
        date: '20 Jan 2022'
    },
    {
        title: 'Article title',
        text: 'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet. Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.',
        tags: ['Design', 'Research', 'Presentation'],
        img: sf1,
        author: 'Olivia Rhye',
        date: '20 Jan 2022'
    },
    {
        title: 'Article title',
        text: 'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet. Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.',
        tags: ['Design', 'Research', 'Presentation'],
        img: sf2,
        author: 'Olivia Rhye',
        date: '20 Jan 2022'
    }
]

export const Blog = () => {
    return (
        <Slide>
            <div className={s.blogWrapper}>
                {blogArray.map((el, ind) => {
                    return (
                        <BlogItem
                            key={ind}
                            title={el.title}
                            text={el.text}
                            date={el.date}
                            author={el.author}
                            img={el.img}
                            tags={el.tags}
                            className={ind === 0 ? s.blogItemFirst : ''}
                        />
                    )
                })}
            </div>
        </Slide>
    );
};

