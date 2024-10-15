import { Link, useNavigate } from "react-router-dom";
import { FaSearch, FaShoppingCart, FaLinkedinIn, FaFacebook, FaInstagram, FaTwitter, FaMapMarkerAlt } from "react-icons/fa";
import axios from "axios";
import { toast } from "react-toastify";

export default function Header({setIsLoggedIn}) {
    const authToken = localStorage.getItem('authToken');
    const navigate = useNavigate();

    const handleLogout = async () => {
        try {
            const URL = `${process.env.REACT_APP_BACKEND_URL}/api/v1/logout`;
            const response = await axios.get(URL, {}, { withCredentials: true });

            if (response.data.success) {
                toast(response.data.msg, {
                    position: "top-center",
                    type: 'success',
                });
                setIsLoggedIn(false);
                localStorage.removeItem('authToken');
                navigate('/');
            }
        } catch (error) {
            console.error('Logout failed:', error);
            toast("Logout failed", {
                position: "top-center",
                type: 'error',
            });
        }
    };

    return (
        <header className="bg-white">
            {/* Top bar */}
            <div className="bg-red-600 text-white py-1 px-8 flex justify-between items-center">
                <div className="text-sm">
                    <span>Free Delivery on all orders Over $50</span>
                </div>
                <div className="flex items-center space-x-4 text-sm">
                    <FaMapMarkerAlt className="mr-1" /> 
                    <span>Rd. Allentown, New Mexico 31134</span>
                    <div className="flex space-x-4">
                        <FaFacebook className="hover:text-gray-300" />
                        <FaLinkedinIn className="hover:text-gray-300" />
                        <FaTwitter className="hover:text-gray-300" />
                        <FaInstagram className="hover:text-gray-300" />
                    </div>
                </div>
            </div>

            {/* Main header */}
            <div className="bg-black text-white py-4 px-8">
                <div className="flex justify-between items-center">
                    {/* Logo and navigation */}
                    <div className="flex items-center space-x-6">
                        <h1 className="text-3xl font-bold">SLICE OF HEAVEN</h1>
                        <nav className="flex space-x-6 text-sm">
                            <Link to="/" className="hover:text-gray-300">HOME +</Link>
                            <Link to="/menu" className="hover:text-gray-300">MENU +</Link>
                            <Link to="/shop" className="hover:text-gray-300">SHOP +</Link>
                            <Link to="/pages" className="hover:text-gray-300">PAGES +</Link>
                            <Link to="/news" className="hover:text-gray-300">NEWS +</Link>
                            <Link to="/contact" className="hover:text-gray-300">CONTACT US</Link>
                            {!authToken && <Link to="/login" className="hover:text-gray-300">LOGIN</Link>}
                            {authToken && (
                                <>
                                    <button
                                        onClick={handleLogout}
                                        className="hover:text-gray-300"
                                    >
                                        LOGOUT
                                    </button>
                                    <Link to="/admin/dashboard" className="hover:text-gray-300">DASHBOARD</Link>
                                </>
                            )}
                        </nav>
                    </div>

                    {/* Search, Cart, and Button */}
                    <div className="flex items-center space-x-6">
                        <button className="hover:text-gray-300">
                            <FaSearch />
                        </button>
                        <Link to="/cart" className="relative">
                            <FaShoppingCart className="hover:text-gray-300" />
                            <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full px-2 py-0.5">0</span>
                        </Link>
                        <button className="bg-red-500 px-6 py-2 text-sm rounded hover:bg-red-600">
                            BOOK A TABLE
                        </button>
                    </div>
                </div>
            </div>
        </header>
    );
}
