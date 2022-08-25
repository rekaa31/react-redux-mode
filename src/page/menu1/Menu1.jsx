import React from 'react'
import { connect } from 'react-redux'

const Menu1 = ({mode}) => {
    return (
        <div>
            Menu 1  {mode}
        </div>
    )
}

const mapStateToProps = (state) => ({
    mode: state.mode
})

export default connect(mapStateToProps)(Menu1)
