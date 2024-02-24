/* FIX ICONS AND WORDS ON SAME LINE */

import { Link, useLocation } from "react-router-dom";
import "./index.css";
import { FaTachometerAlt, FaRegUserCircle, FaBook, FaRegCalendarAlt,
    FaInbox, FaClock, FaDesktop, FaArrowAltCircleRight, FaRegQuestionCircle, FaDog} from "react-icons/fa";
function KanbasNavigation() {
    const links = [
        { label: "Account",   icon: <FaRegUserCircle className="fs-2" />  },
        { label: "Dashboard", icon: <FaTachometerAlt className="fs-2" />  },
        { label: "Courses",   icon: <FaBook className="fs-2" />           },
        { label: "Calendar",  icon: <FaRegCalendarAlt className="fs-2" /> },
        { label: "\nInbox",  icon: <FaInbox className="fs-2" /> },
        { label: "\nHistory",  icon: <FaClock className="fs-2" /> },
        { label: "\nStudio",  icon: <FaDesktop className="fs-2" /> },
        { label: "Commons",  icon: <FaArrowAltCircleRight className="fs-2" /> },
        { label: "\nHelp",  icon: <FaRegQuestionCircle className="fs-2" /> },
    ];
    const { pathname } = useLocation();
    return (
        <ul className="wd-kanbas-navigation">
            {links.map((link, index) => (
                <li key={index} className={pathname.includes(link.label) ? "wd-active" : ""}>
                    <Link to={`/Kanbas/${link.label}`}>
                        <div>
                            {link.icon}
                        </div>
                        <div>
                            {link.label}
                        </div>
                    </Link>
                </li>
            ))}
        </ul>
    );
}

export default KanbasNavigation;