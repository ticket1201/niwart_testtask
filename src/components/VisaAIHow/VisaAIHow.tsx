import s from './VisaAIHow.module.scss'
import {Zoom} from "react-awesome-reveal";

export const contentArray = [
    {
        title: 'Spend less time on administrative tasks',
        text: 'Our platform was designed to reduce the time and number of people involved in producing visas.'
    },
    {
        title: 'Identify issues in visa cases and answers them',
        text: 'Strategy questions help attorneys identify potential problems and suggest solutions.'
    },
    {
        title: 'Delivers authority so you don\'t have to research',
        text: 'Visas.AI suggests winning strategies from its database of immigration knowledge.'
    },
    {
        title: 'Build authority-based briefs instead of cover letters, instantly',
        text: 'Our briefs layout the right regulations, memos, AAO, and federal case law for your initial petition reducing RFEs and improving approval ratings.'
    },
    {
        title: 'Effectively addresses RFE issues upfront',
        text: 'Our AI platform identifies issues upfront and helps you answer them in your initial filing to reduce the issuance of requests for evidence.'
    },
    {
        title: 'Reply to RFEs',
        text: 'Our RFE responder delivers authority-options for you to quickly respond to USCIS requests for evidence.'
    }
]


export const VisaAIHow = () => {
    return (
        <div className={s.visaAIHow}>
            {contentArray.map(el => {
                return (
                    <Zoom key={el.title} className={s.visaAIHowItem}>
                        <>
                            <h4>{el.title}</h4>
                            <p>{el.text}</p>
                        </>
                    </Zoom>
                )
            })}
        </div>
    );
};