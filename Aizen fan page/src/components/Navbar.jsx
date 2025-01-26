const Navbar = () => {
    return (
        <div className="">
            <nav className="fixed top-0 w-full shadow-2xl pb-2 border-b-1 flex justify-between bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
                <ul className="pl-2">
                    <img src="https://www.pngall.com/wp-content/uploads/13/Bleach-Anime-PNG-Pic-1.png" alt="Bleach" width={"100px"}/>
                </ul>
  
                <ul className="flex justify-end"> 
                    <a href="#" className="font-light text-[#ffffff] hover:text-[#6cbdff] p-3"> Home </a>
                    <a href="#" className="font-light text-[#ffffff] hover:text-[#6cbdff] p-3"> About </a>
                    <a href="#" className="font-light text-[#ffffff] hover:text-[#6cbdff] p-3"> Team </a>
                    <a href="https://www.911.gov/calling-911/#:~:text=In%20an%20emergency%2C%20dial%20911%20from%20your%20phone,to%20answer%20the%20call-taker%27s%20questions%2C%20which%20may%20include%3A" className="font-light text-[#ffffff] hover:text-[#6cbdff] p-3"> Support </a>
                </ul>
            </nav>
        </div>
     
    )
}

export default Navbar