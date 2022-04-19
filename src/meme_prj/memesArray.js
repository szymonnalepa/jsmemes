export const memesArray = [
	{
		title: "Mem 1",
		upvotes: 6,
		downvotes: 0,
		img: "/assets/1.jpg",
	},
	{
		title: "Mem 2",
		upvotes: 6,
		downvotes: 0,
		img: "/assets/2.jpg",
	},
	{
		title: "Mem 3",
		upvotes: 6,
		downvotes: 0,
		img: "/assets/3.jpg",
	},
	{
		title: "Mem 4",
		upvotes: 6,
		downvotes: 0,
		img: "/assets/4.jpg",
	},
	{
		title: "Mem 5",
		upvotes: 6,
		downvotes: 0,
		img: "/assets/5.jpg",
	},
	{
		title: "Mem 6",
		upvotes: 6,
		downvotes: 0,
		img: "/assets/6.png",
	},
	{
		title: "Mem 7",
		upvotes: 6,
		downvotes: 0,
		img: "/assets/7.png",
	},
	{
		title: "Mem 8",
		upvotes: 6,
		downvotes: 0,
		img: "/assets/8.png",
	},
	{
		title: "Mem 9",
		upvotes: 6,
		downvotes: 0,
		img: "/assets/9.png",
	},
	{
		title: "Mem 10",
		upvotes: 6,
		downvotes: 0,
		img: "/assets/10.png",
	},
].map((item) => ({
	...item,
	upvotes: Math.floor(Math.random() * 11),
	downvotes: Math.floor(Math.random() * 11),
}));
