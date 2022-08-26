import React from 'react'
import { Menu1Context } from '../../Menu1'

const Cart = () => {

    const ctx = React.useContext(Menu1Context)

    return (
        <div>
            {ctx.cart.length}
        </div>
    )
}

export default Cart
