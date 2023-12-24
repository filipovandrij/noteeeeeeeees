import {
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  Paper,
  TableContainer,
} from "@mui/material";

import FieldMarshall from "../../img/FieldMarshall.svg";

import "./StudentTable.css";

interface RowData {
  number: number;
  name: string;
  lastSession: string;
  activiti: string;
  allPoints: number;
  money: string;
  mToken: number;
  status: string;
}

interface Column {
  id: keyof RowData;
  label: React.ReactNode;
  maxWidth: number;
  minWidth: number;
}

type Props = {};

const columns: Column[] = [
  { id: "number", label: "№", maxWidth: 33, minWidth: 33 },
  { id: "name", label: "Ім’я", maxWidth: 210, minWidth: 210 },

  {
    id: "activiti",
    label: (
      <>
        Назва
        <br /> активності
      </>
    ),
    maxWidth: 135,
    minWidth: 135,
  },
  {
    id: "allPoints",
    label: (
      <>
        Загальна
        <br /> кількість <br />
        балів
      </>
    ),
    maxWidth: 135,
    minWidth: 135,
  },
  {
    id: "money",
    label: (
      <>
        Кількість <br /> грошей
      </>
    ),
    maxWidth: 135,
    minWidth: 135,
  },

  {
    id: "mToken",
    label: (
      <>
        Кількість <br /> м-токенів
      </>
    ),
    maxWidth: 135,
    minWidth: 135,
  },
  {
    id: "status",
    label: <>Звання</>,
    maxWidth: 135,
    minWidth: 135,
  },
];
const data: RowData[] = [
  {
    number: 1,
    name: "Іннокентій Бистрицький",
    lastSession: "17.05.2023/17:53/2:45:36",
    activiti: "Multiple answer",
    allPoints: 500935,
    money: "999,031,925",
    mToken: 1000,
    status: "string",
  },
  {
    number: 2,
    name: "Данів Максим",
    lastSession: "17.05.2023/17:53/2:45:36",
    activiti: "Multiple answer",
    allPoints: 500935,
    money: "999,031,925",
    mToken: 1000,
    status: "string",
  },
  {
    number: 3,
    name: "Борис",
    lastSession: "17.05.2023/17:53/2:45:36",
    activiti: "Multiple answer",
    allPoints: 500935,
    money: "999,031,925",
    mToken: 1000,
    status: "string",
  },
];

const StudentTable = (props: Props) => {
  return (
    <TableContainer className="table-container" component={Paper}>
      <Table stickyHeader aria-label="sticky table">
        <TableHead>
          <TableRow
            className="head-row"
            style={{
              position: "relative",
            }}
          >
            {columns.map((column) => (
              <TableCell
                key={column.id}
                align="center"
                className="head-cell"
                style={{
                  maxWidth: column.maxWidth,
                  minWidth: column.minWidth,
                }}
              >
                {column.label}
              </TableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody className="scrollable-students-container">
          {data.map((student) => (
            //   number: number;
            //   name: string;
            //   lastSession: string;
            //   activiti: string;
            //   allPoints: number;
            //   money: string;
            //   mToken: number;
            //   status: string;
            <TableRow>
              <TableCell align="center">{student.number}</TableCell>

              <TableCell align="center">{student.name}</TableCell>

              <TableCell align="center">{student.lastSession}</TableCell>

              <TableCell align="center">{student.activiti}</TableCell>
              <TableCell align="center">{student.allPoints}</TableCell>
              <TableCell align="center">{student.money}</TableCell>
              <TableCell align="center">{student.mToken}</TableCell>
              <TableCell align="center">
                <img width={40} src={FieldMarshall} alt={student.status} />
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default StudentTable;
