import Link from "next/link";

const Navbar = () => {
    return (
        <nav className="bg-gray-900 p-4 shadow-lg border-b-2 border-gray-800">
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
                            href="/inflation"
                            className="hover:text-yellow-300 transition-colors duration-300"
                        >
                            Inflation
                        </Link>
                    </li>
                    <li>
                        <Link
                            href="/savings"
                            className="hover:text-yellow-300 transition-colors duration-300"
                        >
                            Savings
                        </Link>
                    </li>
                    <li>
                        <Link
                            href="/retirement"
                            className="hover:text-yellow-300 transition-colors duration-300"
                        >
                            Retirement
                        </Link>
                    </li>
                    <li>
                        <Link
                            href="/savings-goal"
                            className="hover:text-yellow-300 transition-colors duration-300"
                        >
                            Savings Goal
                        </Link>
                    </li>
                    <li>
                        <Link
                            href="/mortgage&loans"
                            className="hover:text-yellow-300 transition-colors duration-300"
                        >
                            Mortgage and Loans
                        </Link>
                    </li>
                    <li>
                        <Link
                            href="/buy_home"
                            className="hover:text-yellow-300 transition-colors duration-300"
                        >
                            Can I buy home?
                        </Link>
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;
