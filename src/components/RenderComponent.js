import { createElement, useEffect, useState } from "react";
import { BoxComponent } from "./BoxComponent";
import { ButtonComponent } from "./ButtonComponent";
import { LinkComponent } from "./LinkComponent";
import { ListComponent } from "./ListComponent";
import { ParagraphComponent } from "./ParagraphComponent";
import { H1Component } from "./H1Component";
import { H2Component } from "./H2Component";
import { ModalComponent } from "./ModalComponent";

const keysToComponentMap = {
    BoxComponent: BoxComponent,
    ParagraphComponent: ParagraphComponent,
    ListComponent: ListComponent,
    LinkComponent: LinkComponent,
    ButtonComponent: ButtonComponent,
    H1Component: H1Component,
    H2Component: H2Component,
    ModalComponent: ModalComponent
}

export const RennderComponents = config => {
    let openModal = null;
    let children = [];
    for (const key in config.Children) {
        children.push(config.Children[key]);
        if (config.Children[key] === 'Modal') {
            openModal = config.Children[key].Modal && config.Children[key].Modal.Content && config.Children[key].Modal.Content.props && config.Children[key].Modal.Content.props.isOpen ? config.Children[key].Modal.Content.props.isOpen : false;
        }
    }
    const handleClick = (component, cbdata) => {
        switch (component) {
            case 'modal':
                openModal = cbdata;
                break;
        
            default:
                break;
        }
        window.location['reload']();
    }
    if (config && config.Content && config.Content.type && typeof keysToComponentMap[config.Content.type] !== 'undefined') {
        return createElement(
            keysToComponentMap[config.Content.type],
            {
                props: config.Content.props ? config.Content.props : {},
                className: config.Content.className ? config.Content.className : null,
                id: config.Content.id ? config.Content.id : null,
                cb: handleClick,
                open: openModal,
                // onClick: handleClick
            },
            children.length > 0 && children.map( c => RennderComponents(c))
        )
    }
}