import { Link, useNavigate } from "react-router-dom";
import { FaSearch, FaShoppingCart, FaLinkedinIn, FaFacebook, FaInstagram, FaTwitter, FaMapMarkerAlt } from "react-icons/fa";
import axios from "axios";
import { toast } from "react-toastify";


export default function Header() {
    const authToken = localStorage.getItem('authToken');
    const navigate = useNavigate()
    const handleLogout = async () => {
        try {
            const URL = `${process.env.REACT_APP_BACKEND_URL}/api/v1/logout`;
            const response = await axios.get(URL ,{}, { withCredentials: true });

            if (response.data.success) {
                toast(response.data.msg, {
                    position: "top-center",
                    type: 'success',
                })
                localStorage.removeItem('authToken');
                navigate('/login');
            }

        } catch (error) {
            console.error('Logout failed:', error);
            toast("Logout failed", {
                position: "top-center",
                type: 'error',
            })
        }
    };
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
                        {!authToken && (<Link to="/login" className="hover:text-gray-200">Login</Link>)}
                        {authToken && (<button
                            onClick={handleLogout}
                            className="hover:text-gray-200 px-4 py-2 bg-red-500 text-white rounded-lg transition hover:bg-red-600"
                        >
                            Logout
                        </button>)}
                        {authToken && (<Link to="/admin/dashboard" className="hover:text-gray-200">Dashboard</Link>)}
                        
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