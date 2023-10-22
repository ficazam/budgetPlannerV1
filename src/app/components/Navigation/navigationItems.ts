import ExpensesIcon from "../Icons/ExpensesIcon";
import HomeIcon from "../Icons/HomeIcon";
import PlusIcon from "../Icons/PlusIcon";
import SavingsIcon from "../Icons/SavingsIcon";
import UserIcon from "../Icons/UserIcon";

const sizeSmall: string = "h-10 w-10";
const paddingSmall: string = "p-2";
export const iconClassName: string =
	"text-color-alt-three items-center justify-center h-full w-full";

export const navItems = [
	{
		name: "Home",
		icon: HomeIcon,
		size: "h-24 w-24",
		padding: "p-5",
		bottomPosition: "bottom-5",
		rightPosition: "right-5",
		link: "/",
	},
	{
		name: "Add New",
		icon: PlusIcon,
		size: sizeSmall,
		padding: paddingSmall,
		bottomPosition: "bottom-3",
		rightPosition: "right-32",
		link: "/add-new",
	},
	{
		name: "Home",
		icon: ExpensesIcon,
		size: sizeSmall,
		padding: paddingSmall,
		bottomPosition: "bottom-16",
		rightPosition: "right-32",
		link: "/expenses",
	},
	{
		name: "Home",
		icon: SavingsIcon,
		size: sizeSmall,
		padding: paddingSmall,
		bottomPosition: "bottom-28",
		rightPosition: "right-24",
		link: "/savings",
	},
	{
		name: "Home",
		icon: UserIcon,
		size: sizeSmall,
		padding: paddingSmall,
		bottomPosition: "bottom-32",
		rightPosition: "right-10",
		link: "/user",
	},
];
