import { useEffect, useState } from "react"
export const BoxComponent = (props) => {
    const [styles, setStyles] = useState({})
    useEffect(() => {
        let style = {}
        if (props.props && Object.keys(props.props).length > 0 && Object.getPrototypeOf(props.props) === Object.prototype) {
            for (const key in props.props) {
                if (key === 'borderSize') {
                    style['border'] = `${props.props[key]} solid black`
                } else {
                    style[key] = props.props[key]
                }
            }
        } else {
            style['border'] = "2px solid black"
        }
        setStyles(style)
    }, [props.props])
    return (
        <div style={styles} className={props.className} id={props.id}>
            {props.children}
        </div>
    )
}