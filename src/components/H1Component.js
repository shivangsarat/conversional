import { useEffect, useState } from "react"
export const H1Component = (props) => {const [styles, setStyles] = useState({})
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
    },[])
    return (
        <h1 style={styles} className={props.className} id={props.id}>
            {props.props.text}
        </h1>
    )
}