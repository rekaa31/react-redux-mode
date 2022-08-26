import React from 'react'
import { Menu1Context } from '../../Menu1'

const Product = ({
	nameProduct
}) => {

	const ctx = React.useContext(Menu1Context)

	return (
		<div>
			{nameProduct} <button onClick={() => ctx.setCart([...ctx.cart, nameProduct])}>Add to Cart</button>
		</div>
	)
}

export default Product
