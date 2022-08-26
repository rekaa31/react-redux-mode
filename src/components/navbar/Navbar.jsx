import React from 'react'

// 1. import method core connect di react-redux
import { connect } from 'react-redux'
import Toggle from '../toggle/Toggle'

// 3. definisikan object yang sudah di definisikan di map state to props
const Navbar = ({mode}) => {
    return (
        <div>
           Navbar {mode} <Toggle />
        </div>
    )
}


// 2. Membuat variable dengan nama mapStateToProps 
const mapStateToProps = state => ({
    mode : state.mode
})

export default connect(mapStateToProps)(Navbar)
