import React from "react";

class Status extends React.Component {

    state = {
        editMode: false
    }
    activateEditMode = () => {
        this.setState({editMode: true})
    }
    deactivateEditMode = () => {
        this.setState({editMode: false})
    }

    render() {
        return (
            <div>
                {!this.state.editMode && <div onDoubleClick={this.activateEditMode}>
                    <span>{this.props.status}</span>
                </div>}

                {this.state.editMode &&
                <div>
                    <input type="text" autoFocus={true} onBlur={this.deactivateEditMode} value={this.props.status}/>
                </div>
                }

            </div>
        )

    }
}

export default Status;