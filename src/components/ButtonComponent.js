import { useEffect, useState } from "react"
export const ButtonComponent = (props) => {
    const [styles, setStyles] = useState({})
    useEffect(() => {
        let style = {};
        if (props.props) {
            for (const key in props.props) {
                if (key === 'borderSize') {
                    style['borderWidth'] = props.props[key];
                } else if(key === 'text') {
                    continue;
                } else {
                    style[key] = props.props[key];
                }
            }
        }
        setStyles(style);
    }, [])
    const handleButtonClick = () => {
        props.cb('modal', true)
    }
    return (
        <button style={styles} className={props.className} id={props.id} onClick={handleButtonClick}>
            {props.props.text}
        </button>
    )
}