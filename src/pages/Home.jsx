import '../index.css'
import {Button} from '@headlessui/react'
import appleLaptop from '../assets/Apple Computers.png'
import icon1 from '../assets/home-icon 1.png'
import icon2 from '../assets/home-icon 2.png'
import icon3 from '../assets/home-icon 3.png'
import icon4 from '../assets/home-icon 4.png'
import icon5 from '../assets/home-icon 5.png'
import singleIphone from '../assets/single-iphone.png' 
import realTime from '../assets/real time.png'
import sendNreceive from '../assets/sendnreceive.png'
import tradingChart from '../assets/trading chart.png'
import secureWallet from '../assets/secure wallet.png'
import phones from '../assets/groupPhones.png'
import fees from '../assets/fees.png'
import fast from '../assets/FastnSecure.png'
import secure from '../assets/Encryption.png'
import privateData from '../assets/private.png'
import uptime from '../assets/99.png'
import support from '../assets/support.png'
import phone2 from '../assets/phone2.png'
import Carousel from '../components/Carousel.jsx'

function Home() {
    return(
        <div className = "flex flex-col gap-20 px-0">

            <div className = "flex items-center justify-between px-26 py-2 ">
                <div className = "flex flex-col gap-5">
                    <h1 className="text-white text-6xl font-bold">Buy, Hold and Trade 350+ Cryptocurrencies</h1>
                    <p className="text-white text-md">Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus sunt soluta laborum quas est. Numquam, architecto.</p>
                    <div className = 'flex gap-6 items-center justify-start'>
                        <Button className="bg-light-blue text-white px-6 py-3 rounded-full font-bold hover:bg-neutral-blue duration-300 ease-in-out cursor-pointer">Download App</Button>
                        <Button className="bg-gray-600 text-white px-6 py-3 rounded-full font-bold hover:bg-light-blue duration-300 ease-in-out cursor-pointer">View Pricing</Button>
                    </div>
                </div>

                <img src={appleLaptop} alt="Apple Laptop" className="w-auto h-auto mt-8 -mr-26"/>

            </div>   

            <div className = "flex flex-col gap-10 items-center justify-center py-4 px-26 mt-40"> 
                <p className="text-white text-lg">Finance Flow has been featured on</p>

                <div className = "flex gap-16 items-center justify-center">
                    <img src={icon1} alt="Icon 1" className="w-auto h-auto"/>
                    <img src={icon2} alt="Icon 2" className="w-auto h-auto"/>
                    <img src={icon3} alt="Icon 3" className="w-auto h-auto"/>
                    <img src={icon4} alt="Icon 4" className="w-auto h-auto"/>
                    <img src={icon5} alt="Icon 5" className="w-auto h-auto"/>
                </div>
            </div>


            <div className = "flex flex-col gap-10 items-center justify-center py-4 px-26 mt-40">
                <h1 className="text-white text-4xl font-bold">Build your Crypto Portfolio</h1>
                <p className="text-white text-md w-[50%] text-center -mt-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores dolorum et aliquid. Amet odio laborum fugiat eligendi iste facilis similique quasi doloremque.</p>

                <div className = "grid grid-cols-[2fr_2.5fr_2fr] grid-rows-2 gap-8 gap-x-10 mt-10">

                    <div className ="flex flex-col gap-4 justify-center items-start bg-neutral-blue rounded-3xl p-8">
                        <img src={sendNreceive} alt="Send and Receive" className="w-auto h-auto"/>
                        <h1 className="text-white text-xl font-bold uppercase">Send and Receive</h1>
                        <p className="text-white">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et, deleniti. Quia nihil excepturi dolorem veniam dignissimos.</p>
                    </div>

                    <div className = "row-span-2 bg-light-blue rounded-3xl p-8 pb-0 flex flex-col gap-4 justify-center items-center">
                        <h1 className="text-white text-xl font-bold uppercase">Ios and Android App</h1>
                        <p className="text-white text-md">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores dolorum et aliquid. Amet odio laborum fugiat eligendi iste facilis similique quasi doloremque.</p>
                        <img src={singleIphone} alt="Single Iphone" className="w-auto h-auto "/>
                    </div>

                    <div className ="flex flex-col gap-4 justify-center items-start bg-neutral-blue rounded-3xl p-8">
                        <img src={tradingChart} alt="Trading Chart" className="w-auto h-auto"/>
                        <h1 className="text-white text-xl font-bold uppercase">Trading Chart</h1>
                        <p className="text-white">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et, deleniti. Quia nihil excepturi dolorem veniam dignissimos.</p>
                    </div>

                    <div className ="flex flex-col gap-4 justify-center items-start bg-neutral-blue rounded-3xl p-8">
                        <img src={secureWallet} alt="Secure Wallet" className="w-auto h-auto"/>
                        <h1 className="text-white text-xl font-bold uppercase">Secure Wallet</h1>
                        <p className="text-white">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et, deleniti. Quia nihil excepturi dolorem veniam dignissimos.</p>
                    </div>

                    <div className ="flex flex-col gap-4 justify-center items-start bg-neutral-blue rounded-3xl p-8">
                        <img src={realTime} alt="Real Time" className="w-auto h-auto"/>
                        <h1 className="text-white text-xl font-bold uppercase">Real Time Trading</h1>
                        <p className="text-white">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et, deleniti. Quia nihil excepturi dolorem veniam dignissimos.</p>
                    </div>

                </div>

                <Button className="bg-light-blue text-white text-md px-7 py-4 rounded-full font-bold hover:bg-neutral-blue duration-300 ease-in-out cursor-pointer mt-10">Download App</Button>

            </div>

            <div className = "flex justify-between py-4 px-26 gap-60 mt-50">
                <div>
                    <img src ={phones} alt ="Phones" className = "h-auto w-auto"/>
                </div>

                <div className = "flex flex-col gap-6 items-start">
                    <h1 className="text-white text-5xl font-bold ">Earn daily task rewards on your idle tokens</h1>
                    <p className="text-white text-sm">Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur, aliquid?</p>

                    <div className = "flex flex-col items-center justify-center gap-8">
                        <div className ="flex items-center gap-3">
                            <img src={fees} alt="Fees" className="w-auto h-auto"/>
                            <p className="text-white text-md font-bold">Lowest fees in market</p>
                        </div>

                        <div className ="flex items-center gap-3">
                            <img src={fast} alt="Fast and Secure" className="w-auto h-auto"/>
                            <p className="text-white text-md font-bold">Fast and secure transactions</p>
                        </div>

                        <div className ="flex items-center gap-3">
                            <img src={secure} alt="Encryption" className="w-auto h-auto"/>
                            <p className="text-white text-md font-bold">256-bit secure encryption</p>
                        </div>
                    </div>

                </div>
            </div>

            <div className='flex gap-10 items-center mt-40'>

                <div className='flex flex-col items-start py-4 px-26 gap-6'>
                    <h1 className='text-5xl font-bold text-white'>Earn daily task rewards on your idle tokens</h1>
                    <p className='text-md text-white'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Hic, sit!</p>

                    <div className='flex flex-col gap-5'>
                        <div className='flex gap-3 items-center'>
                            <img src={privateData} alt="Secure Data" className='h-auto w-auto'/>
                            <p className='text-md text-white font-bold'>100% Private Data</p>
                        </div>

                        <div className='flex gap-3 items-center'>
                            <img src={uptime} alt='99% Uptime' className='h-auto w-auto'/>
                            <p className='text-md text-white font-bold'>99% Uptime guaranteed</p>
                        </div>

                        <div className='flex gap-3 items-center'>
                            <img src={support} alt='Support' className='h-auto w-auto'/>
                            <p className='text-md text-white font-bold '>24/7 Dedicated Support</p>
                        </div>
                    </div>
                </div>

                <img src={appleLaptop} alt='Laptop' className='h-auto w-auto'/>
            </div>

            <div className='h-90 w-full py-10 px-26 bg-light-blue relative flex items-center gap-10 mt-50'>

                <div className='flex flex-col justify-center align-bottom gap-6 w-[50%]'>

                    <h1 className='font-bold text-4xl text-white'>Explore endless possibilities with FinanceFlow</h1>
                    <p className = "text-white text-md">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fugiat maxime illum magnam similique ullam dolore dolorem?</p>
                    <Button className = "text-light-blue bg-white rounded-full py-3 px-6 uppercase font-bold hover:duration-400 hover:text-white hover:bg-neutral-blue cursor-pointer w-45">Download App</Button>

                </div>

                <img src={phone2} alt="phones" className='h-auto w-auto absolute right-6 bottom-0'/>
            </div>

            <div className='mt-40 px-26 py-10 flex flex-col gap-12 w-full relative'>
                <div className='flex justify-between items-center'>
                    <h1 className='text-3xl font-bold text-white'>What our Users Say?</h1>
                    <Button className= 'py-3 px-6 bg-light-blue text-white font-bold uppercase hover:bg-neutral-blue cursor-pointer duration-300 rounded-full'>download app</Button>
                </div>

                <Carousel/>

            </div>

            <div>

            </div>
        

        </div>
    );
}

export default Home;