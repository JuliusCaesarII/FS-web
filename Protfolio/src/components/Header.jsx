const Header = () => {
    return (
        <header>
            <nav className="navbar w-full flex items-center justify-between p-2">
                <div className="">
                    <h1>My Protfolio</h1>
                </div>
                <ul className="flex flex-row-reverse ">
                    <li className="m-3"><a herf="About"> About </a> </li>
                    <li className="m-3"><a herf="Projects"> Project </a> </li>
                    <li className="m-3"><a herf="Contact"> Contact </a> </li>
                </ul>
            </nav>
        </header>
    );
}

export default Header;