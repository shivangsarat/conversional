import { useEffect, useState } from "react"
export const LinkComponent = (props) => {const [styles, setStyles] = useState({})
    useEffect(() => {
        let style = {};
        if (props && props.props) {
            for (const key in props.props) {
                if (key === 'borderSize') {
                    style['borderWidth'] = props.props[key];
                } else if(key === 'text' || key === 'url') {
                    continue;
                } else {
                    style[key] = props.props[key];
                }
            }
        }
        setStyles(style);
    },[]);
    const handleButtonClick = () => {
        console.log("inside handleButtonClick in LinkComponent")
        props.cb('modal', true)
    }
    return (
        <a
            style={styles}
            className={props.className}
            id={props.id}
            // href="#"
            href={props.props.url ? props.props.url : "#"}
            target={props.props.url ? '_blank' : null}
            onClick={props.props.url ? null : handleButtonClick}
            rel="noopener noreferrer"
        >
            {props.props.text}
        </a>
    )
}