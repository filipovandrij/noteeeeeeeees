type AdminsTable = {
  id: number;
  country: string;
  name: string;
  phone: string;
  mail: string;
  lastSesia: string;
};
const adminsArray: AdminsTable[] = [
  {
    id: 1,
    country: "ukraine",
    name: "natalia",
    phone: "146546546585",
    mail: "asdasda@jasidj.com",
    lastSesia: "17.05.2023/17:53/2:45:36",
  },
  {
    id: 2,
    country: "usa",
    name: "john",
    phone: "9876543210",
    mail: "john@example.com",
    lastSesia: "18.05.2023/10:30/1:15:20",
  },
  {
    id: 3,
    country: "canada",
    name: "emily",
    phone: "1234567890",
    mail: "emily@example.com",
    lastSesia: "19.05.2023/15:45/3:20:10",
  },
  {
    id: 4,
    country: "germany",
    name: "alexander",
    phone: "1122334455",
    mail: "alexander@example.com",
    lastSesia: "20.05.2023/12:20/4:10:45",
  },
  {
    id: 5,
    country: "france",
    name: "isabelle",
    phone: "9988776655",
    mail: "isabelle@example.com",
    lastSesia: "21.05.2023/08:15/1:55:30",
  },
  {
    id: 6,
    country: "australia",
    name: "liam",
    phone: "4455667788",
    mail: "liam@example.com",
    lastSesia: "22.05.2023/19:10/2:30:15",
  },
];

export default adminsArray;
