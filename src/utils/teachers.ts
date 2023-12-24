type Teacherstable = {
  id: number;
  country: string;
  name: string;
  status: string;
  tarif: string;
  balance: string;
  paymentBy: string;
  place: string;
  lastSesia: string;
  languages: string[];
  gameCount: string;
  wordsCount: string;
  audioCount: string;
  videoCount: string;
  photoCount: string;
  lotsCount: string;
  studentsCount: string;
};

const teachersArray: Teacherstable[] = [
  {
    id: 1,
    country: "ukraine",
    name: "igor",
    status: "advice",
    tarif: "123",
    balance: "12414",
    paymentBy: "20.04.2025",
    place: "123",
    lastSesia: "20.12.2023",
    languages: ["EN-UA", "CH-UA"],
    gameCount: "54",
    wordsCount: "5566",
    audioCount: "12",
    videoCount: "12",
    photoCount: "11",
    lotsCount: "123",
    studentsCount: "255",
  },
  {
    id: 2,
    country: "ukraine",
    name: "olga",
    status: "consultation",
    tarif: "150",
    balance: "10000",
    paymentBy: "15.05.2025",
    place: "456",
    lastSesia: "18.11.2023",
    languages: ["EN-UA", "FR-UA"],
    gameCount: "30",
    wordsCount: "4000",
    audioCount: "8",
    videoCount: "10",
    photoCount: "9",
    lotsCount: "80",
    studentsCount: "180",
  },
  {
    id: 3,
    country: "germany",
    name: "natalia",
    status: "mentorship",
    tarif: "200",
    balance: "8000",
    paymentBy: "10.06.2025",
    place: "789",
    lastSesia: "15.09.2023",
    languages: ["EN-UA", "ES-UA"],
    gameCount: "45",
    wordsCount: "6000",
    audioCount: "10",
    videoCount: "15",
    photoCount: "8",
    lotsCount: "100",
    studentsCount: "200",
  },
  {
    id: 4,
    country: "ukraine",
    name: "viktor",
    status: "advice",
    tarif: "180",
    balance: "12000",
    paymentBy: "25.07.2025",
    place: "234",
    lastSesia: "12.03.2023",
    languages: ["EN-UA", "DE-UA"],
    gameCount: "40",
    wordsCount: "5000",
    audioCount: "9",
    videoCount: "14",
    photoCount: "10",
    lotsCount: "90",
    studentsCount: "190",
  },
  {
    id: 5,
    country: "ukraine",
    name: "maria",
    status: "consultation",
    tarif: "160",
    balance: "11000",
    paymentBy: "05.08.2025",
    place: "567",
    lastSesia: "22.06.2023",
    languages: ["EN-UA", "IT-UA"],
    gameCount: "35",
    wordsCount: "4500",
    audioCount: "7",
    videoCount: "11",
    photoCount: "12",
    lotsCount: "70",
    studentsCount: "170",
  },
  {
    id: 6,
    country: "ukraine",
    name: "sergey",
    status: "mentorship",
    tarif: "220",
    balance: "9000",
    paymentBy: "15.09.2025",
    place: "890",
    lastSesia: "28.01.2023",
    languages: ["EN-UA", "RU-UA"],
    gameCount: "50",
    wordsCount: "6500",
    audioCount: "11",
    videoCount: "13",
    photoCount: "7",
    lotsCount: "110",
    studentsCount: "210",
  },
  {
    id: 7,
    country: "ukraine",
    name: "anna",
    status: "advice",
    tarif: "140",
    balance: "13000",
    paymentBy: "30.10.2025",
    place: "345",
    lastSesia: "10.05.2023",
    languages: ["EN-UA", "FR-UA"],
    gameCount: "25",
    wordsCount: "3500",
    audioCount: "6",
    videoCount: "9",
    photoCount: "13",
    lotsCount: "60",
    studentsCount: "160",
  },
  {
    id: 8,
    country: "ukraine",
    name: "dmitry",
    status: "consultation",
    tarif: "190",
    balance: "14000",
    paymentBy: "18.11.2025",
    place: "678",
    lastSesia: "05.04.2023",
    languages: ["EN-UA", "ES-UA"],
    gameCount: "48",
    wordsCount: "6000",
    audioCount: "10",
    videoCount: "14",
    photoCount: "8",
    lotsCount: "120",
    studentsCount: "220",
  },
  {
    id: 9,
    country: "ukraine",
    name: "irina",
    status: "mentorship",
    tarif: "210",
    balance: "9500",
    paymentBy: "25.12.2025",
    place: "123",
    lastSesia: "15.08.2023",
    languages: ["EN-UA", "DE-UA"],
    gameCount: "42",
    wordsCount: "5500",
    audioCount: "9",
    videoCount: "13",
    photoCount: "9",
    lotsCount: "100",
    studentsCount: "200",
  },
  {
    id: 10,
    country: "ukraine",
    name: "alexander",
    status: "advice",
    tarif: "170",
    balance: "12500",
    paymentBy: "05.02.2026",
    place: "901",
    lastSesia: "18.07.2023",
    languages: ["EN-UA", "IT-UA"],
    gameCount: "38",
    wordsCount: "4800",
    audioCount: "8",
    videoCount: "12",
    photoCount: "10",
    lotsCount: "80",
    studentsCount: "180",
  },
];

export default teachersArray;