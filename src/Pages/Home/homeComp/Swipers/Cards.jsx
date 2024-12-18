
function Cards(props) {
  return (
    <div className=" h-full w-[20rem] shadow-xl rounded-xl flex items-center justify-center bg-fuchsia-500">
        <img src={props.img} alt="" />
    </div>
  )
}

export default Cards