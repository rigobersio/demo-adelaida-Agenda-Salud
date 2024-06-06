import React from "react";

const PaypalButton = (props) => {
  const createOrder = (data, actions) => {
    return actions.order.create({
      purchase_units: [
        {
          description: props.invoice, //factura
          amount: { // el monto de la factura
            value: props.totalValue,
          },
        },
      ]
    })
  };

  // esto podría ir al backend; captura el pago
const onApprove = async (data, actions) => {
  const order = await actions.order.capture();
  console.log("información sobre la order:", order); // esto entrega información sobre lo que se pago
  //console.log("data:", data); 
}

  return (
    <div>
    </div>
  )
}

export default PaypalButton;