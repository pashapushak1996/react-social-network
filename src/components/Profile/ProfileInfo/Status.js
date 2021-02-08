import React from "react";

class Status extends React.Component {

    state = {
        editMode: false,
        status: this.props.status
    };

    activateEditMode = () => {
        this.setState({editMode: true})
    };

    deactivateEditMode = () => {
        this.setState({editMode: false});
        this.props.updateStatus(this.state.status);
    };

    onStatusChange = (e) => {
        this.setState({status: e.currentTarget.value});
    }


    render() {
        return (
            <div>
                {!this.state.editMode && <div onDoubleClick={this.activateEditMode}>
                    <span>{this.props.status}</span>
                </div>}

                {this.state.editMode &&
                <div>
                    <input type="text" autoFocus={true} onBlur={this.deactivateEditMode} value={this.state.status}
                           onChange={this.onStatusChange}/>
                </div>
                }

            </div>
        )

    }
}

export default Status;