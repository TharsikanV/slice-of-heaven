import { Link } from "react-router-dom";
import { FaSearch, FaShoppingCart, FaLinkedinIn, FaFacebook, FaInstagram, FaTwitter, FaMapMarkerAlt } from "react-icons/fa";

export default function Header() {
    return (
        <header className="bg-red-500 text-white py-4 px-8">
            <div className="flex justify-between">
                <div className="flex items-center">
                    <h1 className="text-2xl font-bold">PIZZAN</h1>
                    <nav className="ml-4 flex space-x-4">
                        <Link to="/" className="hover:text-gray-200">HOME+</Link>
                        <Link to="/menu" className="hover:text-gray-200">MENU+</Link>
                        <Link to="/shop" className="hover:text-gray-200">SHOP+</Link>
                        <Link to="/pages" className="hover:text-gray-200">PAGES+</Link>
                        <Link to="/news" className="hover:text-gray-200">NEWS+</Link>
                        <Link to="/contact" className="hover:text-gray-200">CONTACT US</Link>
                    </nav>
                </div>
                <div className="flex flex-col">

                    <div className="flex space-x-2">
                        <div className="text-gray-300">
                            <FaMapMarkerAlt /> <span>Allentown, New Mexico 31134</span>
                        </div>
                        <div className="flex space-x-8">
                            <FaFacebook />
                            <FaLinkedinIn />
                            <FaTwitter />
                            <FaInstagram />
                        </div>

                    </div>
                    <div className="flex items-center space-x-10 ">

                        <input type="text" className="border border-gray-300 rounded px-3 py-2 hidden" placeholder="Search" />
                        <button className="bg-black-500 text-white p-2 rounded hover:bg-black-600">
                            <FaSearch />
                        </button>

                        <Link to="/cart" className="relative">
                            <span className="absolute top-2 right-0 bg-white-500 text-white rounded-full px-2 py-1 text-xs">0</span>
                            <FaShoppingCart />
                        </Link>
                        <button className="bg-red-500 border border-gray-300 rounded px-10 py-2 hover:bg-gray-100">BOOK A TABLE</button>
                    </div>
                </div>

            </div>
        </header>
    );
}