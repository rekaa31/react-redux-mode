import React, { useState } from 'react'
import { connect } from 'react-redux'
import Cart from './components/Cart/Cart'
import Product from './components/Product/Product'

// 1. Definisikan variable dengan tipe context 
export const Menu1Context = React.createContext()

const Menu1 = ({mode}) => {

    const [cart, setCart] = useState([])

    return (
        // 2. Context yang telah dibuat didefiniskan menjadi Provider
        <Menu1Context.Provider value={{
            // value yang disini merupakan state atau fungsi yang mau di kirimkan ke child
            cart,
            setCart
        }}>
            <div>
                <br />
                Menu 1  {mode}

                <br />
                <br />

                <div>
                    Jumlah Dalam keranjang : <Cart />
                </div>

                <div>
                    Barang yang dipesan : 

                    <ul>
                        {cart.map((item) =>
                            <li>{item}</li>
                        )}
                    </ul>
                </div>

                <ul>
                    <li><Product nameProduct={"Tahu"}/></li>
                    <li><Product nameProduct={"Kepiting"}/></li>
                    <li><Product nameProduct={"Jambu"}/></li>
                    <li><Product nameProduct={"Sapi"}/></li>
                    <li><Product nameProduct={"Ayam"}/></li>
                </ul>

                

                <br />
            </div>
        </Menu1Context.Provider>
    )
}

const mapStateToProps = (state) => ({
    mode: state.mode
})

export default connect(mapStateToProps)(Menu1)
