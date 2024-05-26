export type Webtoon = {
	id: number;
	title: string;
	author: string;
	rating: number;
	image: any;
};

export const webtoonList: Webtoon[] = [
	{
		id: 1,
		title: "참교육",
		author: "채용택 / 한가람",
		rating: 9.95,
		image: require("@assets/webtoons/home_thumbnails/1.jpg"),
	},
	{
		id: 2,
		title: "2024 내일 뭐 입지?",
		author: "네이버웹툰 작가",
		rating: 9.91,
		image: require("@assets/webtoons/home_thumbnails/2.jpg"),
	},
	{
		id: 3,
		title: "신의 탑",
		author: "SIU",
		rating: 9.94,
		image: require("@assets/webtoons/home_thumbnails/3.jpg"),
	},
	{
		id: 4,
		title: "귀촌리",
		author: "화양 / 이대한",
		rating: 9.89,
		image: require("@assets/webtoons/home_thumbnails/4.jpg"),
	},
	{
		id: 5,
		title: "윈드브레이커",
		author: "조용석",
		rating: 9.91,
		image: require("@assets/webtoons/home_thumbnails/5.jpg"),
	},
	{
		id: 6,
		title: "뷰티풀 군바리",
		author: "설이 / 윤성원",
		rating: 9.91,
		image: require("@assets/webtoons/home_thumbnails/6.jpg"),
	},
	{
		id: 7,
		title: "소녀의 세계",
		author: "모랑지 / 이대한",
		rating: 9.95,
		image: require("@assets/webtoons/home_thumbnails/7.jpg"),
	},
	{
		id: 8,
		title: "퀘스트지상주의",
		author: "박만사 / 유니나",
		rating: 9.95,
		image: require("@assets/webtoons/home_thumbnails/8.jpg"),
	},
	{
		id: 9,
		title: "백수세끼",
		author: "치즈",
		rating: 9.95,
		image: require("@assets/webtoons/home_thumbnails/9.jpg"),
	},
	{
		id: 10,
		title: "버림받은 왕녀의 은밀한 침실",
		author: "헤니 / 성해현",
		rating: 9.95,
		image: require("@assets/webtoons/home_thumbnails/10.jpg"),
	},
	{
		id: 11,
		title: "회귀한 공작가의 막내아들은 암살자",
		author: "스윙뱃 / 커피라면",
		rating: 9.95,
		image: require("@assets/webtoons/home_thumbnails/11.jpg"),
	},
	{
		id: 12,
		title: "별난식당",
		author: "HO9",
		rating: 9.95,
		image: require("@assets/webtoons/home_thumbnails/12.jpg"),
	},
];
