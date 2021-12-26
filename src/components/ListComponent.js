import { useEffect, useState } from "react"
export const ListComponent = (props) => {
    const [styles, setStyles] = useState({})
    useEffect(() => {
        let style = {};
        if (props.props) {
            for (const key in props.props) {
                if (key === 'borderSize') {
                    style['borderWidth'] = props.props[key];
                } else if(key === 'li') {
                    continue;
                } else {
                    style[key] = props.props[key];
                }
            }
        }
        setStyles(style);
    }, [props.props])
    return (
        <ul style={styles} className={props.className} id={props.id}>
            {props.props.li.map((item, index) => {
                return <li key={index}>{item}</li>
            })}
        </ul>
    )
}