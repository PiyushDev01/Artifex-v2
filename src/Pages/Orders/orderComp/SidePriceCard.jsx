import '../order.css'




import { useNavigate } from "react-router-dom";
import UserContext from "../../../Context/UserContex";
import { useContext } from 'react';




function SidePriceCard(props) {

  const navigate = useNavigate();
  const {isUserlogged, setprice }= useContext(UserContext);

  const openForm = () => {
    if(isUserlogged){
      setprice({...props.price, person: props.person, price: props.price});
      navigate('/Order-Details');
    }else{
      props.errormsg();
    }
  }





  return (
    <>
        <div id="outercontainer" className=' z-[10px] w-[300px] h-[435px] bg-[#E6E6E6] rounded-[30px] flex flex-col transition-all m-8 ' >
            <div id="innercontainer" className='w-[280px] h-[155px] m-[10px] rounded-[20px] bg-[#FFFFFF] flex flex-col '>
                    <div id="tag" className=' flex flex-row item-center justify-between'>
                      <h4 className=' text-black text-xs mx-3 my-3' >{props.person}</h4>

                    </div>
                    <div id="pricetag" className=' mx-3 items-center gap-1 h-fit flex flex-row  '>
                        <h2 className=' text-3xl text-zinc-900 '>₹</h2>
                        <h5 id='whitePrice' className=' text-5xl font-extrabold' >{props.price}</h5>
                      {
                        props.tandc && <h2 
                        onClick={() => {
                          navigate('/Policies', { replace: true });
                          setTimeout(() => {
                              const element = document.getElementById('productprice');
                              if (element) {
                                  element.scrollIntoView({ behavior: 'smooth' });
                              }
                          }, 100); // Small delay to ensure navigation completes
                      }}
                        className=' text-3xl text-red-500 cursor-pointer font-semibold' >*</h2>
                      }
                        <h2 className='text-zinc-900 text-xs'>+ Shipping Charge</h2>

                    </div>
                    <div onClick={openForm} id="orderbutton" className=' bg-zinc-900  py-2 mx-4 my-2 rounded-full flex justify-center cursor-pointer hover:bg-black transition-all '><h2
                    className=' font-bold text-zinc-100'>Order</h2></div>
            </div>
            <h1 className=' px-6 pt-2 font-bold '>{props.title}</h1>
            <p className=' text-sm px-6 text-slate-700' >{props.desc} </p>

            <div id="bottomContent" className=' w-auto h-[270px] p-4'>
                <div className=' flex gap-2'>
                <h2 className=' text-black'>&#9737;</h2>
                <h2  id='cardDetail' > {props.d1} </h2></div>

                <div className=' flex gap-2'>
                <h2 className=' text-black'>&#9737; </h2>  
                <h2 id='cardDetail' > {props.d2} </h2></div>

                <div  id='cardDetail' className=' flex gap-2'><h2 className=' text-black'>&#9737; </h2>

                <h2 > {props.d3} </h2></div>


                
            

            </div>
        </div>
    </>
  )
}

export default SidePriceCard