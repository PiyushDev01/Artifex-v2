import { useContext } from "react";
import { Dashcontext } from "../../contex/DashContext.jsx";
import OrderDetails from "./comp/OrderDetails.jsx";
import PersonalDetail from "./comp/PersonalDetail";
import { formatDate } from "../../../Pages/Orders/Orderlisting/OrderList.jsx";
import Payment from "./comp/Payment";

function OrderDetailsAdm() {
  const { curAdminOrder } = useContext(Dashcontext);
  // console.log(curAdminOrder)
  const {
    orderId,
    name,
    phone,
    price,
    shipping,
    date,
    status,
    payment,
    email,
    downloadURL,
    size,
    person,
    orientation,
    flat,
    street,
    district,
    state,
    pin,
    paymentDate,
    paymentId,
  } = curAdminOrder;

  return (
    <>
      <div className=" w-full flex flex-wrap gap-2 h-full">
        <div className=" w-full flex gap-2">
          <OrderDetails
            id={orderId}
            downloadURL={downloadURL}
            size={size}
            person={person}
            orientation={orientation}
          />
          <PersonalDetail
            email={email}
            name={name}
            phone={phone}
            flat={flat}
            street={street}
            pin={pin}
            district={district}
            state={state}
            date={formatDate(date)}
          />
          <Payment
            price={price}
            paymentDate={paymentDate}
            paymentId={paymentId}
            shipping={shipping}
            status={status}
            payment={payment}
            orderId={orderId}
          />
        </div>
      </div>
    </>
  );
}

export default OrderDetailsAdm;
