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
    }, [props.props])
    const handleButtonClick = () => {
        if (props.props && props.props.openModal && props.props.openModal === true) {
            props.cb('modal', true)
        } else {
            console.log("this button is clicked")
        }

        // props.cb('modal', true)
    }
    return (
        <button style={styles} className={props.className} id={props.id} onClick={handleButtonClick}>
            {props.props.text}
        </button>
    )
}