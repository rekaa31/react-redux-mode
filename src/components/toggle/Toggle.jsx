import React from 'react'
import { connect } from 'react-redux'
import { changeMode } from '../../store/actions'

const Toggle = ({mode, changeMode}) => {

    const handleChangeMode = () => {
        if(mode === 'light'){
            changeMode('dark')
        }else{
            changeMode('light')
        }
    }

    return (
        <>
            <button onClick={() => handleChangeMode()}>{mode}</button>
        </>
    )
}

const mapStateToProps = (state) => ({
    mode : state.mode
})

export default connect(mapStateToProps, {changeMode})(Toggle)
