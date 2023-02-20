import s from '../VisaAI.module.scss'

type PropsType = {
    name: string
    isActive: boolean
    callBack: () => void
}

export const VisaAITabButton = ({name, callBack, isActive}:PropsType) => {
    const buttonClassName = `${s.button} ${isActive && s.buttonActive}`
    return (
        <button onClick={callBack} className={buttonClassName}>
            {name}
        </button>
    );
};

