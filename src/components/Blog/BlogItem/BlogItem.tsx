import s from '../Blog.module.scss'
type PropsType = {
    title: string
    text: string
    tags: Array<string>
    img: string
    author: string
    date: string
    className?: string
}

export const BlogItem = ({date, author, tags, text, title, img, className}: PropsType) => {
    const blogItemClassName = `${s.blogItem} ${className || ''}`
    return (
        <div className={blogItemClassName}>
            <div className={s.text}>
                <h4>{title}</h4>
                <p>{text}</p>
                <div className={s.tags}>{tags.map(el => <p key={el}>{el}</p>)}</div>
                <p className={s.authorDate}><span>{author}</span> • <span>{date}</span></p>
            </div>
            <img src={img} alt={'city'}/>
        </div>
    );
};
