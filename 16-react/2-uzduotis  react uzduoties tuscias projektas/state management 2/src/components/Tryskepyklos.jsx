import { useState } from "react"

Function <Tryskepyklos() {

    const[orders, setOrders] = useState(0)

    
    const[bakery1, setBakery1] = useState(0)
    
    const[bakery2, setBakery2] = useState(0)
    
    const[bakery3, setbakery3] = useState(0)

    const bakerysTotal = Number(bakery1) + Number(bakery2) + Number(bakery3);

    function handleOrders(evt) {
        return setOrders(evt.target.value)
    }

    function handleBakery(setBakery, evt) {
        return setBakery(evt.target.value)
    }

    function bakeryCalc() {
        if (bakerysTotal>orders) {
            return 'Kepyklos speja igyvendinti dienos uzsakymus! Kepyklos turi $ {bakerysTotal - orders
        } vnt. pervirsiu.
    }
    else {
        return 'Kepyklos nespeja igyvendinti dienos uzsakymu! Truksta $ {bakerysTotal - Nnumber(orders)
        } vnt. 
    }
    }
}