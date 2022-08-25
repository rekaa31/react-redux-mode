import React from 'react'
import { connect } from 'react-redux'
import Toggle from '../toggle/Toggle'

const Navbar = ({mode}) => {
    return (
        <div>
           Navbar {mode} <Toggle />
        </div>
    )
}

const mapStateToProps = state => ({
    mode : state.mode
})

export default connect(mapStateToProps)(Navbar)
