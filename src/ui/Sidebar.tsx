import {Link, NavLink, useLocation} from "react-router-dom";

const navItems = [
    {label: "Home", to: "/home"},
    {label: "기업 정보 입력", to: "/company-info"},
    {label: "AI 탄소 감축 솔루션", to: "/solution"},
    {label: "AI 최적 솔루션 제안", to: "/optimal-solution"},
];

const Sidebar = () => {
    const location = useLocation();

    return (
        <aside className="bg-mainnavy text-white min-h-screen w-64 flex flex-col">
            {/* 로고 */}
            <div className="h-16 py-5 px-6 font-bold text-xl border-b border-gray-700">
                <Link to="/home">
                    <span>Zero</span>
                    <span className="text-mainmint">Fit</span>
                </Link>
            </div>

            {/* 네비게이션 메뉴 */}
            <nav className="mt-6 flex-1">
                <ul>
                    {navItems.map((item) => {
                        const isActive =
                            item.to === "/"
                                ? location.pathname === item.to
                                : location.pathname.startsWith(item.to);

                        return (
                            <li key={item.to}>
                                <NavLink
                                    to={item.to}
                                    className={`block py-3 px-6 transition-colors ${
                                        isActive ? "bg-secondmint font-bold" : "hover:bg-gray-800"
                                    }`}
                                >
                                    {item.label}
                                </NavLink>
                            </li>
                        );
                    })}
                </ul>
            </nav>
        </aside>
    );
};

export default Sidebar;
