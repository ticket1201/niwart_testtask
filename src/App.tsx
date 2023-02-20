import React from 'react';
import './App.css';
import {ArticleWrapper} from "./components/ArticleWrapper/ArticleWrapper";
import {VisaAI} from "./components/VisaAI/VisaAI";
import {VisaAIHow} from "./components/VisaAIHow/VisaAIHow";
import {Blog} from "./components/Blog/Blog";
import {VisaAIHowSlider} from "./components/VisaAIHow/VisaAIHowSlider";
import {VisaAISlider} from "./components/VisaAI/VisaAISlider";
import {BlogSlider} from "./components/Blog/BlogSlider";

function App() {
    return (
        <main>
            <ArticleWrapper titleText={'Visas.AI'}
                            subTitleText={'The only platform that will make you a better attorney with better visa approval ratings.'}
            >
                <VisaAI/>
                <VisaAISlider/>
            </ArticleWrapper>
            <ArticleWrapper titleText={'How Visas.AI works for You'}
                            subTitleText={'The only platform that will make you a better attorney with better visa approval ratings.'}
            >
                <>
                    <VisaAIHow/>
                    <VisaAIHowSlider/>
                </>
            </ArticleWrapper>
            <ArticleWrapper titleText={'Blog'}>
                <>
                    <Blog/>
                    <BlogSlider/>
                </>
            </ArticleWrapper>
        </main>
    );
}

export default App;
