type ModeratosTable = {
  id: number;
  country: string;
  name: string;
  status: string;
  languages: string[];
  lotsCount: string;
  applicationsApprovedCount: string;
  applicationsWaitingCount: string;
  lastSesia: string;
};

const moderatorsArray: ModeratosTable[] = [
  {
    id: 1,
    country: "ukraine",
    name: "natalia",
    status: "profi",
    languages: ["EN-UA", "ES-UA"],
    lotsCount: "1485",
    applicationsApprovedCount: "41",
    applicationsWaitingCount: "10",
    lastSesia: "17.05.2023/17:53/2:45:36",
  },
  {
    id: 2,
    country: "usa",
    name: "john",
    status: "beginner",
    languages: ["EN"],
    lotsCount: "750",
    applicationsApprovedCount: "20",
    applicationsWaitingCount: "5",
    lastSesia: "16.05.2023/14:20/1:30:15",
  },
  {
    id: 3,
    country: "spain",
    name: "luisa",
    status: "expert",
    languages: ["ES", "EN"],
    lotsCount: "2000",
    applicationsApprovedCount: "60",
    applicationsWaitingCount: "15",
    lastSesia: "18.05.2023/21:45/3:15:42",
  },
  {
    id: 4,
    country: "germany",
    name: "martin",
    status: "profi",
    languages: ["DE", "EN"],
    lotsCount: "1200",
    applicationsApprovedCount: "35",
    applicationsWaitingCount: "8",
    lastSesia: "19.05.2023/10:15/2:10:20",
  },
  {
    id: 5,
    country: "france",
    name: "sophie",
    status: "beginner",
    languages: ["FR", "EN"],
    lotsCount: "500",
    applicationsApprovedCount: "18",
    applicationsWaitingCount: "7",
    lastSesia: "20.05.2023/13:30/1:50:55",
  },
  {
    id: 6,
    country: "italy",
    name: "marco",
    status: "profi",
    languages: ["IT", "EN"],
    lotsCount: "1800",
    applicationsApprovedCount: "50",
    applicationsWaitingCount: "12",
    lastSesia: "21.05.2023/19:20/3:00:10",
  },
  {
    id: 7,
    country: "japan",
    name: "yuki",
    status: "expert",
    languages: ["JA", "EN"],
    lotsCount: "1000",
    applicationsApprovedCount: "30",
    applicationsWaitingCount: "9",
    lastSesia: "22.05.2023/15:45/2:25:48",
  },
  {
    id: 8,
    country: "canada",
    name: "olivia",
    status: "beginner",
    languages: ["EN"],
    lotsCount: "600",
    applicationsApprovedCount: "25",
    applicationsWaitingCount: "6",
    lastSesia: "23.05.2023/12:10/1:40:30",
  },
];

export default moderatorsArray;
