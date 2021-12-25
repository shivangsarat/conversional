import { useEffect, useState } from "react"
export const LinkComponent = (props) => {const [styles, setStyles] = useState({})
    useEffect(() => {
        let style = {};
        if (props.props) {
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
    },[])
    return (
        <a style={styles} className={props.className} id={props.id} href={props.props.url} target='_blank'>
            {props.props.text}
        </a>
    )
}