import {ReactNode} from "react";
import s from './ArticleWrapper.module.scss'


type PropsType = {
    titleText: string
    subTitleText?: string
    children: ReactNode
}

export const ArticleWrapper = ({titleText, subTitleText, children}: PropsType) => {
    return (
        <article className={s.articleWrapper}>
            <div className={s.contentWrapper}>
                <div>
                    <h2>{titleText}</h2>
                    {subTitleText && <h3 className={s.subtitle}>{subTitleText}</h3>}
                </div>
                <>
                  {children}
                </>
            </div>
        </article>
    );
};

