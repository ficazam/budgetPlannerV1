import { BsCurrencyDollar } from "react-icons/bs";
import { AiFillHome, AiOutlinePlus } from "react-icons/ai";
import { MdSavings } from "react-icons/md";
import { FaUserAlt } from "react-icons/fa";

const iconClassName: string =
	"text-color-alt-three items-center justify-center h-full w-full";

const ExpensesIcon = () => {
	return <BsCurrencyDollar className={iconClassName} />;
};

const UserIcon = () => {
	return <FaUserAlt className={iconClassName} />;
};

const HomeIcon = () => {
	return <AiFillHome className={iconClassName} />;
};

const PlusIcon = () => {
	return <AiOutlinePlus className={iconClassName} />;
};

const SavingsIcon = () => {
	return <MdSavings className={iconClassName} />;
};

export { ExpensesIcon, UserIcon, HomeIcon, PlusIcon, SavingsIcon };
