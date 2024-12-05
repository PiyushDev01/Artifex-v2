import '../order.css'

import { useNavigate } from "react-router-dom";
import UserContext from "../../../Context/UserContex";
import { useContext } from 'react';



const price=349;

function PriceCard(props) {

  const navigate = useNavigate();
  const {isUserlogged, setprice }= useContext(UserContext);

  const openForm = () => {
    if(isUserlogged){
      setprice({...price, person: 'Single Person', price: price});
      // setDetails({...details, person: 'Single Person', price: price});
      navigate('/Order-Details');
    }else{
      props.errormsg();
    }
  }

  return (
    <>
        <div 
        id="outercontainer" className=' z-[10px] w-[300px] h-[435px] bg-[#3C3C3C] rounded-[30px] flex flex-col transition-all m-8 ' >
            <div id="innercontainer" className='w-[280px] h-[155px] m-[10px] rounded-[20px] bg-[#605F5F] flex flex-col '>
                    <div id="tag" className=' flex flex-row item-center justify-between'>
                      <h4 className=' text-zinc-200 text-xs mx-3 my-3' >Single Person</h4>
                      <h4  className='text-zinc-200 text-xs mx-3 bg-gradient-to-r from-[#C850C0] to-[#7C4DFF] px-2 py-1 rounded-full my-3'>Most Populer</h4>  
                    </div>
                    <div id="pricetag" className=' mx-3 items-center gap-1 h-fit flex flex-row  '>
                        <h2 className=' text-3xl text-zinc-100 '>₹</h2>
                        <h5 className=' text-5xl font-extrabold' >{price}</h5>
                        <h2 className='text-zinc-200 text-xs'>+ Shipping Charge</h2>
                    </div>
               <div onClick={openForm} id="orderbutton" className=' bg-zinc-200  py-2 mx-4 my-2 rounded-full flex justify-center cursor-pointer hover:bg-white transition-all '><h2
                    className=' font-bold text-zinc-800'>Order</h2></div>
            </div>
            <h1 className=' px-6 pt-2 font-bold text-slate-50 '>Single Person Pencil Sketch</h1>
            <p className=' text-sm px-6 text-slate-300' >Preserve your memories with a finely detailed pencil sketch featuring only one individual in the frame. </p>

            <div id="bottomContent" className=' p-4 '>
                <div className=' flex gap-2'>
                <h2 className=' text-white'>&#9737; </h2>
                <h2  id='cardDetail' className=' text-white'>Available Sizes: A4, A5, and A3.</h2></div>

                <div className=' flex gap-2'>
                <h2 className=' text-white'>&#9737; </h2>
                <h2 id='cardDetail' className=' text-white'>Perfect for personal keepsakes or thoughtful gifts.</h2></div>

                <div  id='cardDetail' className=' flex gap-2'>
                <h2 className=' text-white'>&#9737; </h2>
                <h2 className=' text-white'>Expertly handcrafted with precision and care.</h2></div>

                
        </div>
        </div>
        
    </>
  )
}

export default PriceCard
