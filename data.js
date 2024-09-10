const categories = [
  { name: "All", filter: "all" },
  { name: "Newborn", filter: "newborn" },
  { name: "Baptism", filter: "baptism" },
  { name: "Pregnant", filter: "pregnant" },
  { name: "Ocassions", filter: "occasions" },
];
const images = [
  {
    id: "1",
    url: "./Assets/gallery/newborn/DSC_0008.jpg",
    category: "landscape",
  },
  {
    id: "2",
    url: "./Assets/gallery/newborn/DSC_0011.jpg",
    category: "newborn",
  },
  {
    id: "3",
    url: "./Assets/gallery/newborn/DSC_0021.jpg",
    category: "newborn",
  },
  {
    id: "4",
    url: "./Assets/gallery/newborn/DSC_0024.jpg",
    category: "newborn",
  },
  {
    id: "5",
    url: "./Assets/gallery/newborn/DSC_0024.jpg",
    category: "newborn",
  },
  {
    id: "6",
    url: "./Assets/gallery/newborn/DSC_0240.jpg",
    category: "newborn",
  },
  {
    id: "7",
    url: "./Assets/gallery/newborn/DSC_0258.jpg",
    category: "newborn",
  },
  {
    id: "8",
    url: "./Assets/gallery/newborn/DSC_0266-2.jpg",
    category: "newborn",
  },
  {
    id: "9",
    url: "./Assets/gallery/newborn/DSC_1705-2.jpg",
    category: "newborn",
  },
  {
    id: "10",
    url: "./Assets/gallery/newborn/DSC_1743.jpg",
    category: "newborn",
  },
  {
    id: "11",
    url: "./Assets/gallery/newborn/DSC_1748.jpg",
    category: "newborn",
  },
  {
    id: "12",
    url: "./Assets/gallery/newborn/DSC_1748.jpg",
    category: "newborn",
  },
  {
    id: "13",
    url: "./Assets/gallery/newborn/DSC_1769.jpg",
    category: "newborn",
  },
  {
    id: "14",
    url: "./Assets/gallery/newborn/DSC_1785.jpg",
    category: "newborn",
  },
  {
    id: "15",
    url: "./Assets/gallery/newborn/DSC_1790.jpg",
    category: "newborn",
  },
  {
    id: "13",
    url: "./Assets/gallery/newborn/DSC_1769.jpg",
    category: "newborn",
  },
  {
    id: "14",
    url: "./Assets/gallery/newborn/DSC_1785.jpg",
    category: "newborn",
  },
  {
    id: "15",
    url: "./Assets/gallery/newborn/DSC_1785.jpg",
    category: "newborn",
  },
  {
    id: "16",
    url: "./Assets/gallery/newborn/DSC_1785.jpg",
    category: "newborn",
  },
  {
    id: "17",
    url: "./Assets/gallery/newborn/DSC_1790.jpg",
    category: "newborn",
  },
  {
    id: "18",
    url: "./Assets/gallery/newborn/DSC_1792.jpg",
    category: "newborn",
  },
  {
    id: "19",
    url: "./Assets/gallery/newborn/DSC_1796.jpg",
    category: "newborn",
  },
  {
    id: "20",
    url: "./Assets/gallery/newborn/DSC_1799.jpg",
    category: "newborn",
  },
  {
    id: "21",
    url: "./Assets/gallery/newborn/DSC_1807.jpg",
    category: "newborn",
  },
  {
    id: "22",
    url: "./Assets/gallery/newborn/DSC_1886.jpg",
    category: "newborn",
  },
  {
    id: "23",
    url: "./Assets/gallery/newborn/DSC_1892.jpg",
    category: "newborn",
  },
  {
    id: "24",
    url: "./Assets/gallery/newborn/DSC_1937.jpg",
    category: "newborn",
  },
  {
    id: "25",
    url: "./Assets/gallery/newborn/DSC_1941.jpg",
    category: "newborn",
  },
  {
    id: "26",
    url: "./Assets/gallery/newborn/DSC_1951.jpg",
    category: "newborn",
  },
  {
    id: "27",
    url: "./Assets/gallery/newborn/DSC_1991.jpg",
    category: "newborn",
  },
  {
    id: "28",
    url: "./Assets/gallery/newborn/DSC_1996.jpg",
    category: "newborn",
  },
  {
    id: "29",
    url: "./Assets/gallery/newborn/DSC_2017.jpg",
    category: "newborn",
  },
  {
    id: "30",
    url: "./Assets/gallery/newborn/DSC_2180.jpg",
    category: "newborn",
  },
  {
    id: "31",
    url: "./Assets/gallery/newborn/DSC_2288.jpg",
    category: "newborn",
  },
  {
    id: "32",
    url: "./Assets/gallery/newborn/DSC_2324-Edit.jpg",
    category: "newborn",
  },
  {
    id: "33",
    url: "./Assets/gallery/newborn/DSC_2329.jpg",
    category: "newborn",
  },
  {
    id: "34",
    url: "./Assets/gallery/newborn/DSC_2335.jpg",
    category: "newborn",
  },
  {
    id: "35",
    url: "./Assets/gallery/newborn/DSC_2361.jpg",
    category: "newborn",
  },
  {
    id: "36",
    url: "./Assets/gallery/newborn/DSC_2396.jpg",
    category: "newborn",
  },
  {
    id: "37",
    url: "./Assets/gallery/newborn/DSC_2409.jpg",
    category: "newborn",
  },
  {
    id: "38",
    url: "./Assets/gallery/newborn/DSC_2460.jpg",
    category: "newborn",
  },
  {
    id: "39",
    url: "./Assets/gallery/newborn/DSC_2463.jpg",
    category: "newborn",
  },
  {
    id: "40",
    url: "./Assets/gallery/newborn/DSC_2466.jpg",
    category: "newborn",
  },
  {
    id: "41",
    url: "./Assets/gallery/newborn/DSC_2482.jpg",
    category: "newborn",
  },
  {
    id: "42",
    url: "./Assets/gallery/newborn/DSC_2501.jpg",
    category: "newborn",
  },
  {
    id: "43",
    url: "./Assets/gallery/newborn/DSC_2509.jpg",
    category: "newborn",
  },
  {
    id: "44",
    url: "./Assets/gallery/newborn/DSC_2509.jpg",
    category: "newborn",
  },
  {
    id: "45",
    url: "./Assets/gallery/newborn/DSC_2521.jpg",
    category: "newborn",
  },
  {
    id: "46",
    url: "./Assets/gallery/newborn/DSC_2522.jpg",
    category: "newborn",
  },
  {
    id: "47",
    url: "./Assets/gallery/newborn/DSC_2530.jpg",
    category: "newborn",
  },
  {
    id: "48",
    url: "./Assets/gallery/newborn/DSC_2531-2.jpg",
    category: "newborn",
  },
  {
    id: "49",
    url: "./Assets/gallery/newborn/DSC_2531.jpg",
    category: "newborn",
  },
  {
    id: "50",
    url: "./Assets/gallery/newborn/DSC_2538.jpg",
    category: "newborn",
  },
  {
    id: "51",
    url: "./Assets/gallery/newborn/DSC_2540.jpg",
    category: "newborn",
  },
  {
    id: "52",
    url: "./Assets/gallery/newborn/DSC_2548.jpg",
    category: "newborn",
  },
  {
    id: "53",
    url: "./Assets/gallery/newborn/DSC_4789.jpg",
    category: "newborn",
  },
  {
    id: "54",
    url: "./Assets/gallery/newborn/DSC_4829.jpg",
    category: "newborn",
  },
  {
    id: "55",
    url: "./Assets/gallery/newborn/DSC_9402.jpg",
    category: "newborn",
  },
  {
    id: "56",
    url: "./Assets/gallery/newborn/DSC_9412.jpg",
    category: "newborn",
  },
  {
    id: "57",
    url: "./Assets/gallery/newborn/DSC_9415.jpg",
    category: "newborn",
  },
  {
    id: "58",
    url: "./Assets/gallery/newborn/DSC_9477.jpg",
    category: "newborn",
  },
  {
    id: "59",
    url: "./Assets/gallery/newborn/DSC_9483.jpg",
    category: "newborn",
  },
  {
    id: "60",
    url: "./Assets/gallery/newborn/DSC_9546.jpg",
    category: "newborn",
  },
  {
    id: "61",
    url: "./Assets/gallery/newborn/DSC_9664.jpg",
    category: "newborn",
  },
  {
    id: "62",
    url: "./Assets/gallery/newborn/DSC_9956.jpg",
    category: "newborn",
  },
];
