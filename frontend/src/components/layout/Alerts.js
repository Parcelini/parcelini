import React, { Component, Fragment } from 'react';
import { withAlert } from 'react-alert';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';


export class Alerts extends Component {

    static propTypes = {
        error: PropTypes.object.isRequired,
        message: PropTypes.object.isRequired
    }


    componentDidUpdate(prevProps){
        const {error, alert, message } = this.props;
        if(error !== prevProps.error){
            if(error.msg.message)
                alert.error(error.msg.message)
            if(error.msg.non_field_errors)
                alert.error(error.msg.non_field_errors.join())
            if(error.msg.username)
                alert.error(error.msg.username.join())
        }

        if (message !== prevProps.message){
            if(message.passwordNotMatch)
                alert.show(message.passwordNotMatch) 
        }
    }

    render() {
        return (
            <Fragment />
        )
    }
}

const mapStateToProps = state => ({
    error: state.errors,
    message: state.messages
});

export default connect(mapStateToProps)(withAlert()(Alerts));
