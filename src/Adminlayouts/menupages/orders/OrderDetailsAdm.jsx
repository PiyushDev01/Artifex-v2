import { useContext } from "react";
import { Dashcontext } from "../../contex/DashContext.jsx";
import OrderDetails from "./comp/OrderDetails.jsx";
import PersonalDetail from "./comp/PersonalDetail";
import { formatDate } from "../../../Pages/Orders/Orderlisting/OrderList.jsx";
import Payment from "./comp/Payment";
import StatusUpdate from "./comp/StatusUpdate";
import StatusDesc from './comp/StatusDesc';
import { useEffect, useState } from "react";

function OrderDetailsAdm() {
  const { curAdminOrder } = useContext(Dashcontext);
 

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
    notes,
    paymentDate,
    paymentId,
  } = curAdminOrder;

  return (
    <>
      <div className=" w-full flex flex-wrap gap-2 h-full">
        <div className=" w-full flex gap-2 ">
          <div className=" flex flex-col gap-2 w-1/3">
            <OrderDetails
              id={orderId}
              downloadURL={downloadURL}
              size={size}
              person={person}
              orientation={orientation}
            />
            <StatusUpdate />
          </div>
            <div className=" flex flex-col gap-2">

            <div className=" flex h-fit w-auto gap-2">
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
              note={notes}
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
             <StatusDesc />
            </div>
        </div>
      </div>
    </>
  );
}

export default OrderDetailsAdm;
