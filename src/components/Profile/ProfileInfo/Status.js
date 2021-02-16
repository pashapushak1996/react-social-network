import React, {useEffect, useState} from "react";

const Status = (props) => {
    const [editMode, setEditMode] = useState(false);
    const [status, setStatus] = useState('');

    useEffect(() => {
        setStatus(props.status)
    }, [props.status])


    const activateEditMode = () => {
        setEditMode(true);
    };

    const deactivateEditMode = () => {
        setEditMode(false);
        props.updateStatus(status);
    };

    const onChangeStatus = ({target: {value}}) => {
        setStatus(value)
    };

    return (
        <div>
            {!editMode && <div onDoubleClick={activateEditMode}>
                <span>{!props.status ? `no status` : props.status}</span>
            </div>}

            {editMode &&
            <div>
                <input type="text" autoFocus={true} onBlur={deactivateEditMode} value={status}
                       onChange={onChangeStatus}/>
            </div>
            }

        </div>
    )
}

export default Status;