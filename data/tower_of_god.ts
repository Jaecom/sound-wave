export type WebtoonEpisode = {
	title: string;
	rating: string;
	date: string;
	thumbnail: any; // You can use the specific type for thumbnails if available
	id: number;
	audio?: any;
};

export type WebtoonDetail = {
	id: number;
	title: string;
	author: string;
	day: string;
	summary: string;
	age: string;
	tags: string[];
	cover: any; // You can use the specific type for thumbnails if available
	episodes: WebtoonEpisode[];
};

export const towerOfGodData: WebtoonDetail = {
	id: 3,
	title: "신의탑",
	author: "SIU",
	day: "월요일툰",
	summary: "자신의 모든 것이었던 소녀를 쫓아 탑에 들어온 소년 그리고 그런 소년을 시험하는 탑",
	age: "12세 이용가",
	tags: ["판타지", "판타지 무협랭킹 TOP 20", "세계관", "이능력배틀물", "소년왕도물", "먼치킨", "관련작품더보기"],
	cover: require("@/assets/webtoons/tower_of_god_thumbnail/cover.png"),
	episodes: [
		{
			id: 0,
			title: "예고편",
			rating: "9.32",
			date: "10.06.30",
			thumbnail: require("@/assets/webtoons/tower_of_god_thumbnail/0.jpg"),
			audio: require("@/assets/tracks/tower_of_god_0.wav"),
		},
		{
			id: 1,

			title: "1화",
			rating: "9.56",
			date: "10.07.07",
			thumbnail: require("@/assets/webtoons/tower_of_god_thumbnail/1.jpg"),
		},
		{
			id: 2,
			title: "2화",
			rating: "9.78",
			date: "10.07.14",
			thumbnail: require("@/assets/webtoons/tower_of_god_thumbnail/2.jpg"),
		},
		{
			id: 3,
			title: "3화",
			rating: "9.45",
			date: "10.07.21",
			thumbnail: require("@/assets/webtoons/tower_of_god_thumbnail/3.jpg"),
		},
		{
			id: 4,
			title: "4화",
			rating: "9.85",
			date: "10.07.28",
			thumbnail: require("@/assets/webtoons/tower_of_god_thumbnail/4.jpg"),
		},
		{
			id: 5,
			title: "5화",
			rating: "9.63",
			date: "10.08.04",
			thumbnail: require("@/assets/webtoons/tower_of_god_thumbnail/5.jpg"),
		},
		{
			id: 6,
			title: "6화",
			rating: "9.92",
			date: "10.08.11",
			thumbnail: require("@/assets/webtoons/tower_of_god_thumbnail/6.jpg"),
		},
		{
			id: 7,
			title: "7화",
			rating: "9.51",
			date: "10.08.18",
			thumbnail: require("@/assets/webtoons/tower_of_god_thumbnail/7.jpg"),
		},
		{
			id: 8,
			title: "8화",
			rating: "9.77",
			date: "10.08.25",
			thumbnail: require("@/assets/webtoons/tower_of_god_thumbnail/8.jpg"),
		},
		{
			id: 9,
			title: "9화",
			rating: "9.54",
			date: "10.09.01",
			thumbnail: require("@/assets/webtoons/tower_of_god_thumbnail/9.jpg"),
		},
		{
			id: 10,
			title: "10화",
			rating: "9.88",
			date: "10.09.08",
			thumbnail: require("@/assets/webtoons/tower_of_god_thumbnail/10.jpg"),
		},
		{
			id: 11,
			title: "11화",
			rating: "9.72",
			date: "10.09.15",
			thumbnail: require("@/assets/webtoons/tower_of_god_thumbnail/11.jpg"),
		},
		{
			id: 12,
			title: "12화",
			rating: "9.93",
			date: "10.09.22",
			thumbnail: require("@/assets/webtoons/tower_of_god_thumbnail/12.jpg"),
		},
		{
			id: 13,
			title: "13화",
			rating: "9.61",
			date: "10.09.29",
			thumbnail: require("@/assets/webtoons/tower_of_god_thumbnail/13.jpg"),
		},
		{
			id: 14,
			title: "14화",
			rating: "9.79",
			date: "10.10.06",
			thumbnail: require("@/assets/webtoons/tower_of_god_thumbnail/14.jpg"),
		},
		{
			id: 15,
			title: "15화",
			rating: "9.84",
			date: "10.10.13",
			thumbnail: require("@/assets/webtoons/tower_of_god_thumbnail/15.jpg"),
		},
		{
			id: 16,
			title: "16화",
			rating: "9.66",
			date: "10.10.20",
			thumbnail: require("@/assets/webtoons/tower_of_god_thumbnail/16.jpg"),
		},
	],
};
