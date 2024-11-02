import Link from "next/link";
import { MdOutlineAttachMoney, MdSavings } from "react-icons/md";
import { GiTakeMyMoney } from "react-icons/gi";
import { LiaMoneyCheckSolid } from "react-icons/lia";
import { AiOutlineHome } from "react-icons/ai"; // Additional icon for "Can I buy home?"

const Navbar = () => {
    return (
        <nav className="bg-[#333333] p-4 shadow-lg border-b-2 border-gray-800">
            <div className="flex items-center justify-between">
                {/* Company Name on the Left */}
                <div className="text-2xl font-bold text-white">
                    <Link
                        href="/"
                        className="hover:text-yellow-300 transition-colors duration-300"
                    >
                        Save Money
                    </Link>
                </div>

                {/* Centered Navigation Links */}
                <ul className="flex-grow flex justify-center space-x-8 text-white font-semibold">
                    <li>
                        <Link
                            href="/inflation-calculator"
                            className="hover:text-yellow-300 flex items-center space-x-2 transition-colors duration-300"
                        >
                            <MdOutlineAttachMoney className="h-5 w-5" />
                            <span>Inflation</span>
                        </Link>
                    </li>
                    <li>
                        <Link
                            href="/savings-calculator"
                            className="hover:text-yellow-300 flex items-center space-x-2 transition-colors duration-300"
                        >
                            <MdSavings className="h-5 w-5" />
                            <span>Savings</span>
                        </Link>
                    </li>
                    <li>
                        <Link
                            href="/retirement-calculator"
                            className="hover:text-yellow-300 flex items-center space-x-2 transition-colors duration-300"
                        >
                            <GiTakeMyMoney className="h-5 w-5" />
                            <span>Retirement</span>
                        </Link>
                    </li>
                    <li>
                        <Link
                            href="/savings-goal-calculator"
                            className="hover:text-yellow-300 flex items-center space-x-2 transition-colors duration-300"
                        >
                            <LiaMoneyCheckSolid className="h-5 w-5" />
                            <span>Savings Goal</span>
                        </Link>
                    </li>
                    <li>
                        <Link
                            href="/mortgage-loan-calculator"
                            className="hover:text-yellow-300 flex items-center space-x-2 transition-colors duration-300"
                        >
                            <MdOutlineAttachMoney className="h-5 w-5" />
                            <span>Mortgage & Loans</span>
                        </Link>
                    </li>
                    <li>
                        <Link
                            href="/buy_home"
                            className="hover:text-yellow-300 flex items-center space-x-2 transition-colors duration-300"
                        >
                            <AiOutlineHome className="h-5 w-5" />
                            <span>Can I buy home?</span>
                        </Link>
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;
