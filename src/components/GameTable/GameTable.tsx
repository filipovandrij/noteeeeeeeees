import {
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  Paper,
  TableContainer,
  TextField,
} from "@mui/material";

import "./GameTable.css";

import ok from "../../img/Ok.svg";

import no from "../../img/No.svg";

import { useRef } from "react";

interface RowData {
  id: number;
  name: string;
  points: string;
  lastSession: string;
  questionMarks: string;
  questions: number;
}

interface Column {
  id: keyof RowData;
  label: string;
  minWidth?: number;
  maxWidth?: number;
}

type Props = {};

const columns: Column[] = [
  { id: "id", label: "№", minWidth: 15 },
  { id: "name", label: "Имя", minWidth: 100 },
  {
    id: "points",
    label: `Кількість набраних балів, %   (набрано/всього)`,
    minWidth: 50,
    maxWidth: 150,
  },
  {
    id: "lastSession",
    label: `Остання сессія 
  (дата/час/тривалість)`,
    minWidth: 120,
  },
  {
    id: "questionMarks",
    label: `Правильність по
    кожному питанню`,
    minWidth: 215,
    maxWidth: 215,
  },
];

const data: RowData[] = [
  {
    id: 1,
    name: "Иван",
    points: "1%(0.25/17.44)",
    lastSession: "17.05.2023/17:53/2:45:36",
    questionMarks: "1,6,7",
    questions: 20,
  },
  {
    id: 2,
    name: "Мария",
    points: "75%(5.60/7.45)",
    lastSession: "17.05.2023/17:53/2:45:36",
    questionMarks: "3,6",
    questions: 20,
  },
];

const GameTable = (props: Props) => {
  const mainContainerRef = useRef<HTMLDivElement>(null);
  const containerRefs = useRef<(HTMLDivElement | null)[]>([]);

  const handleScroll = () => {
    const currentPosition = mainContainerRef.current?.scrollLeft || 0;
    containerRefs.current.forEach((containerRef) => {
      if (containerRef) {
        containerRef.scrollLeft = currentPosition;
      }
    });
  };
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
                  minWidth: column.minWidth,
                  maxWidth: column.maxWidth,
                }}
              >
                {column.label}
              </TableCell>
            ))}
            <TextField
              className="search-input"
              size="small"
              label="Ведите Имя"
              variant="outlined"
            ></TextField>
            <div
              ref={mainContainerRef}
              style={{
                overflowX: "auto",
                width: "200px",
              }}
              onScroll={handleScroll}
              className="main-scroll scrollable-container"
            >
              <div className="visible-area">
                {Array.from({ length: 20 }, (_, index) => (
                  <TableCell key={index + 1} align="center">
                    {index + 1}
                  </TableCell>
                ))}
              </div>
            </div>
          </TableRow>
        </TableHead>
        <TableBody className="scrollable-students-container">
          {data.map((student) => (
            <TableRow>
              <TableCell align="center">{student.id}</TableCell>

              <TableCell align="center">{student.name}</TableCell>

              <TableCell align="center">{student.points}</TableCell>

              <TableCell align="center">{student.lastSession}</TableCell>

              <TableCell className="marks" align="center">
                <div
                  ref={(ref) => {
                    containerRefs.current[student.id] = ref;
                  }}
                  style={{
                    overflowX: "hidden",
                    width: "200px",
                  }}
                  onScroll={handleScroll}
                  className="scrollable-container"
                >
                  <div className="visible-area">
                    <TableRow>
                      {Array.from({ length: student.questions }, (_, index) => (
                        <TableCell
                          sx={{ width: 40 }}
                          key={index + 1}
                          align="center"
                        >
                          {student.questionMarks
                            .split(",")
                            .includes(String(index + 1)) ? (
                            <img width={8} height={24} src={no} alt="no"></img>
                          ) : (
                            <img width={8} height={24} src={ok} alt="ok"></img>
                          )}
                        </TableCell>
                      ))}
                    </TableRow>
                  </div>
                </div>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default GameTable;
