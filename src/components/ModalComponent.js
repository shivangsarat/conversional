import { useState, useEffect } from 'react';
import '../ModalComponent.css';
export const ModalComponent = (props) => {
    const [open, setOpen] = useState(props.props.isOpen)
    const [styles, setStyles] = useState({})
    useEffect(() => {
        let style = {};
        if (props.props) {
            for (const key in props.props) {
                if (key === 'borderSize') {
                    style['borderWidth'] = props.props[key];
                } else if(key === 'isOpen') {
                    continue;
                } else {
                    style[key] = props.props[key];
                }
            }
        }
        setStyles(style);
    }, [props.props])
    const handleModalClose = (e) => {
        setOpen(false)
    }
    if (!open) {
        return null
    }
    return (
        <div className="modal">
            <div className="modal-content" style={styles}>
                <div className="modal-header">
                    <span className="close"
                        onClick={handleModalClose}
                    >
                        &times;</span>
                </div>
                <div className="modal-body">
                    {props.children}
                </div>
            </div>
        </div>
    )
}