const categories = [
  { name: "All", filter: "all" },
  { name: "Newborn", filter: "newborn" },
  { name: "Baptism", filter: "baptism" },
  { name: "Pregnant", filter: "pregnant" },
  { name: "Occasions", filter: "occasions" },
];
const images = [
  {
    id: "0",
    src: "./Assets/gallery/newborn/DSC_0008.jpg",
    category: "landscape",
  },
  {
    id: "1",
    src: "./Assets/gallery/newborn/DSC_0011.jpg",
    category: "newborn",
  },
  {
    id: "2",
    src: "./Assets/gallery/newborn/DSC_0021.jpg",
    category: "newborn",
  },
  {
    id: "3",
    src: "./Assets/gallery/newborn/DSC_0024.jpg",
    category: "newborn",
  },
  {
    id: "4",
    src: "./Assets/gallery/newborn/DSC_0024.jpg",
    category: "newborn",
  },
  {
    id: "5",
    src: "./Assets/gallery/newborn/DSC_0240.jpg",
    category: "newborn",
  },
  {
    id: "6",
    src: "./Assets/gallery/newborn/DSC_0258.jpg",
    category: "newborn",
  },
  {
    id: "7",
    src: "./Assets/gallery/newborn/DSC_0266-2.jpg",
    category: "newborn",
  },
  {
    id: "8",
    src: "./Assets/gallery/newborn/DSC_1705-2.jpg",
    category: "newborn",
  },
  {
    id: "9",
    src: "./Assets/gallery/newborn/DSC_1743.jpg",
    category: "newborn",
  },
  {
    id: "10",
    src: "./Assets/gallery/newborn/DSC_1748.jpg",
    category: "newborn",
  },
  {
    id: "11",
    src: "./Assets/gallery/newborn/DSC_1748.jpg",
    category: "newborn",
  },
  {
    id: "12",
    src: "./Assets/gallery/newborn/DSC_1769.jpg",
    category: "newborn",
  },
  {
    id: "13",
    src: "./Assets/gallery/newborn/DSC_1785.jpg",
    category: "newborn",
  },
  {
    id: "14",
    src: "./Assets/gallery/newborn/DSC_1790.jpg",
    category: "newborn",
  },
  {
    id: "15",
    src: "./Assets/gallery/newborn/DSC_1769.jpg",
    category: "newborn",
  },
  {
    id: "16",
    src: "./Assets/gallery/newborn/DSC_1785.jpg",
    category: "newborn",
  },
  {
    id: "17",
    src: "./Assets/gallery/newborn/DSC_1785.jpg",
    category: "newborn",
  },
  {
    id: "18",
    src: "./Assets/gallery/newborn/DSC_1785.jpg",
    category: "newborn",
  },
  {
    id: "19",
    src: "./Assets/gallery/newborn/DSC_1790.jpg",
    category: "newborn",
  },
  {
    id: "20",
    src: "./Assets/gallery/newborn/DSC_1792.jpg",
    category: "newborn",
  },
  {
    id: "21",
    src: "./Assets/gallery/newborn/DSC_1796.jpg",
    category: "newborn",
  },
  {
    id: "22",
    src: "./Assets/gallery/newborn/DSC_1799.jpg",
    category: "newborn",
  },
  {
    id: "23",
    src: "./Assets/gallery/newborn/DSC_1807.jpg",
    category: "newborn",
  },
  {
    id: "24",
    src: "./Assets/gallery/newborn/DSC_1886.jpg",
    category: "newborn",
  },
  {
    id: "25",
    src: "./Assets/gallery/newborn/DSC_1892.jpg",
    category: "newborn",
  },
  {
    id: "26",
    src: "./Assets/gallery/newborn/DSC_1937.jpg",
    category: "newborn",
  },
  {
    id: "27",
    src: "./Assets/gallery/newborn/DSC_1941.jpg",
    category: "newborn",
  },
  {
    id: "28",
    src: "./Assets/gallery/newborn/DSC_1951.jpg",
    category: "newborn",
  },
  {
    id: "29",
    src: "./Assets/gallery/newborn/DSC_1991.jpg",
    category: "newborn",
  },
  {
    id: "30",
    src: "./Assets/gallery/newborn/DSC_1996.jpg",
    category: "newborn",
  },
  {
    id: "31",
    src: "./Assets/gallery/newborn/DSC_2017.jpg",
    category: "newborn",
  },
  {
    id: "32",
    src: "./Assets/gallery/newborn/DSC_2180.jpg",
    category: "newborn",
  },
  {
    id: "33",
    src: "./Assets/gallery/newborn/DSC_2288.jpg",
    category: "newborn",
  },
  {
    id: "34",
    src: "./Assets/gallery/newborn/DSC_2324-Edit.jpg",
    category: "newborn",
  },
  {
    id: "35",
    src: "./Assets/gallery/newborn/DSC_2329.jpg",
    category: "newborn",
  },
  {
    id: "36",
    src: "./Assets/gallery/newborn/DSC_2335.jpg",
    category: "newborn",
  },
  {
    id: "37",
    src: "./Assets/gallery/newborn/DSC_2361.jpg",
    category: "newborn",
  },
  {
    id: "38",
    src: "./Assets/gallery/newborn/DSC_2396.jpg",
    category: "newborn",
  },
  {
    id: "39",
    src: "./Assets/gallery/newborn/DSC_2409.jpg",
    category: "newborn",
  },
  {
    id: "40",
    src: "./Assets/gallery/newborn/DSC_2460.jpg",
    category: "newborn",
  },
  {
    id: "41",
    src: "./Assets/gallery/newborn/DSC_2463.jpg",
    category: "newborn",
  },
  {
    id: "42",
    src: "./Assets/gallery/newborn/DSC_2466.jpg",
    category: "newborn",
  },
  {
    id: "43",
    src: "./Assets/gallery/newborn/DSC_2482.jpg",
    category: "newborn",
  },
  {
    id: "44",
    src: "./Assets/gallery/newborn/DSC_2501.jpg",
    category: "newborn",
  },
  {
    id: "45",
    src: "./Assets/gallery/newborn/DSC_2509.jpg",
    category: "newborn",
  },
  {
    id: "46",
    src: "./Assets/gallery/newborn/DSC_2509.jpg",
    category: "newborn",
  },
  {
    id: "47",
    src: "./Assets/gallery/newborn/DSC_2521.jpg",
    category: "newborn",
  },
  {
    id: "48",
    src: "./Assets/gallery/newborn/DSC_2522.jpg",
    category: "newborn",
  },
  {
    id: "49",
    src: "./Assets/gallery/newborn/DSC_2530.jpg",
    category: "newborn",
  },
  {
    id: "50",
    src: "./Assets/gallery/newborn/DSC_2531-2.jpg",
    category: "newborn",
  },
  {
    id: "51",
    src: "./Assets/gallery/newborn/DSC_2531.jpg",
    category: "newborn",
  },
  {
    id: "52",
    src: "./Assets/gallery/newborn/DSC_2538.jpg",
    category: "newborn",
  },
  {
    id: "53",
    src: "./Assets/gallery/newborn/DSC_2540.jpg",
    category: "newborn",
  },
  {
    id: "54",
    src: "./Assets/gallery/newborn/DSC_2548.jpg",
    category: "newborn",
  },
  {
    id: "55",
    src: "./Assets/gallery/newborn/DSC_4789.jpg",
    category: "newborn",
  },
  {
    id: "56",
    src: "./Assets/gallery/newborn/DSC_4829.jpg",
    category: "newborn",
  },
  {
    id: "57",
    src: "./Assets/gallery/newborn/DSC_9402.jpg",
    category: "newborn",
  },
  {
    id: "58",
    src: "./Assets/gallery/newborn/DSC_9412.jpg",
    category: "newborn",
  },
  {
    id: "60",
    src: "./Assets/gallery/newborn/DSC_9415.jpg",
    category: "newborn",
  },
  {
    id: "61",
    src: "./Assets/gallery/newborn/DSC_9477.jpg",
    category: "newborn",
  },
  {
    id: "62",
    src: "./Assets/gallery/newborn/DSC_9483.jpg",
    category: "newborn",
  },
  {
    id: "63",
    src: "./Assets/gallery/newborn/DSC_9546.jpg",
    category: "newborn",
  },
  {
    id: "64",
    src: "./Assets/gallery/newborn/DSC_9664.jpg",
    category: "newborn",
  },
  {
    id: "65",
    src: "./Assets/gallery/newborn/DSC_9956.jpg",
    category: "newborn",
  },
];
