import React, {useRef, useEffect} from "react";

function Donar () {
  const paypal = useRef

  useEffect(() => {
  window.paypal.Buttons ({
    createOrder: (data, actions, err) => {
      return actions.order.create({
        intent: "CAPTURE",
        purchase_units: [
          {
            description: "Cool looking table",
            amout: {
              currency_code: "CAD", // Lo añades también en la parte de index.html
              value:650.00
            }
          }
        ]
      })
    },
    onApprove: async (data, actions) =>{
      const order = await (actions.order.capture())
    }
  }).render(paypal.current)
  }, [])
    return <div>
        <div ref={paypal}></div>
      </div>;
  }

export default Donar;
