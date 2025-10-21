import styles from './css/Cover.module.css'


const Cover = () => {
    return (
        <div>
            <div className="mt-[90px] w-full sm:h-[400px] h-[300px] rounded-[20px] bg-[center] flex justify-center items-center text-[100px] text-white bg-[linear-gradient(rgba(0,0,0,0.8),rgba(0,0,0,0.8)),url('https://cdn.shopify.com/s/files/1/0627/5517/files/02-26-20_Aidan_264883.jpg?v=1603213851')] bg-center bg-cover "><p className="sm:text-center text-[80px] " >HM Store</p></div>
            <div className="h-[60px] bg-[#dedbd2] border-2  border-[#d5bdaf] rounded-[5px] flex m-[5px]  justify-center content-center overflow-hidden ">                
                <p className={`sm:items-center sm:font-serif sm:font-light sm:tracking[5px] text-lg text-nowrap font-serif content-center m-0 font-bold tracking-[5px] text-2xl ${styles.slide}`}>WE BELIEVE IN QUALITY</p>
            </div>
        </div>
    )
}

export default Cover