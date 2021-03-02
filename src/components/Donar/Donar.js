import React, {useRef, useEffect} from "react";

function Donar () {
  const paypal = useRef ()

  useEffect(() => {
  window.paypal.Buttons ({
    createOrder: (data, actions, err) => {
      return actions.order.create({
        intent: "CAPTURE",
        purchase_units: [
          {
            description: "Cool looking table",
            amount: {
              currency_code: "EUR", // Lo añades también en la parte de index.html
              value: 1
            }
          }
        ]
      })
    },
    onApprove: async (data, actions) =>{
      const order = await actions.order.capture()
      console.log(order)
    },
    onError: (err) => {
      console.log(err)
    }
  }).render(paypal.current)
  }, [])
    return  <div ref={paypal}>
    </div>

  }

export default Donar;
