import React, {useState} from 'react';
import s from './VisaAI.module.scss';
import {VisaAITabButton} from "./VisaAITabButton/VisaAITabButton";
import {Fade} from "react-awesome-reveal";


type TabContentType = {
    [index: string]: string
}

export const tabContent: TabContentType = {
    'Strategy': 'Strategy Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin commodo feugiat urna.',
    'Contracting With Clients': 'Contracting With Clients Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin commodo feugiat urna.',
    'Document Production': 'Document Production Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin commodo feugiat urna.',
    'Winning Strategies': 'Winning Strategies Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin commodo feugiat urna.',
    'RFE Responder': 'RFE Responder Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin commodo feugiat urna.',
}

export const tabNames = Object.keys(tabContent)


export const VisaAI = () => {
    const [activeTab, setActiveTab] = useState<typeof tabNames[number]>('Strategy')
    return (
        <div className={s.visaAI}>
            <div className={s.buttonWrapper}>
                {tabNames.map((el) => {
                    return (
                        <VisaAITabButton key={el} name={el} callBack={() => {
                            setActiveTab(el)
                        }}
                                         isActive={activeTab === el}/>
                    )
                })}

            </div>
            <Fade className={s.textWrapper}>
                <p className={s.paragraph}>{tabContent[activeTab]}</p>
            </Fade>
        </div>
    );
};

