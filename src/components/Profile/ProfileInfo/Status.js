import React from "react";

class Status extends React.Component {

    state = {
        editMode: false,
        status: this.props.status
    };

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (prevProps.status !== this.props.status) {
            this.setState({status: this.props.status});
        }

    };

    activateEditMode = () => {
        this.setState({editMode: true})
    };

    deactivateEditMode = () => {
        this.setState({editMode: false})
        this.props.updateStatus(this.state.status);
    };

    onChangeStatus = ({target: {value}}) => {
        this.setState({status: value})
    };


    render() {
        return (
            <div>
                {!this.state.editMode && <div onDoubleClick={this.activateEditMode}>
                    <span>{!this.props.status ? `no status` : this.props.status}</span>
                </div>}

                {this.state.editMode &&
                <div>
                    <input type="text" autoFocus={true} onBlur={this.deactivateEditMode} value={this.state.status}
                           onChange={this.onChangeStatus}/>
                </div>
                }

            </div>
        )

    }
}

export default Status;