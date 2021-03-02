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
              value:650.00
            }
          }
        ]
      })
    }
  }).render(paypal.current)
  }, [])
    return <div>
        <div ref={paypal}></div>
      </div>;
  }

export default Donar;
