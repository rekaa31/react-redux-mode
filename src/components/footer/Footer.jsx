import React from 'react'
import { connect } from 'react-redux'

const Footer = ({mode}) => {
    return (
        <div> 
            Footer {mode}
        </div>
    )
}

const mapStateToProps = (state) => ({
    mode : state.mode
})

export default connect(mapStateToProps)(Footer)
