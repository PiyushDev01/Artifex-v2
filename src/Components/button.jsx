import './nav.css'

export default function Button(props){
    return<>
    <button
 className='p-2 my-3 h-fit w-fit text-white rounded-full px-4 transition-all hidden md:block' id='btn'>{props.name}</button>
    </>;
}