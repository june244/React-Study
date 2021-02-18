import React from 'react';
import {MdCheckBoxOutlineBlank, MdCheckBox, MdRemoveCircleOutline} from "react-icons/all";
import './TodoListItem.scss';
import cn from 'classnames';

const TodoListItem = ({todo, onRemove, onToggle, style}) => {
    const {id, text, checked} = todo;

    return (
        <div className={"TodoListItem-virtualized"} style={style}>
            <div className={"TodoListItem"}>
                <div
                    className={cn('checkbox', {checked})}
                    onClick={() => onToggle(id)}>
                    {checked ? <MdCheckBox/> : <MdCheckBoxOutlineBlank/>}
                    <div className={'text'}>{text}</div>
                </div>
                <div className={"remove"} onClick={() => onRemove(id)}>
                    <MdRemoveCircleOutline/>
                </div>
            </div>
            {/*<div className={cn('checkbox',{checked})} onClick={() => onToggle(id)}>*/}
            {/*    {checked ? <MdCheckBox/> : <MdCheckBoxOutlineBlank/>}*/}
            {/*    <div className={"text"}>{text}</div>*/}
            {/*</div>*/}
            {/*<div className={"remove"} onClick={() => onRemove(id)}>*/}
            {/*    <MdRemoveCircleOutline/>*/}
            {/*</div>*/}
        </div>
    );
};

export default React.memo(TodoListItem,
    (prevProps, nextProps) => prevProps.todo === nextProps.todo);
// export default TodoListItem;