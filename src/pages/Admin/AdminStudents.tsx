import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import studentarray from "../../utils/students";
import React from "react";

type Props = {};

const Adminstudents = (props: Props) => {
  return (
    <TableContainer
      sx={{
        margin: "15px auto",
      }}
      component={Paper}
    >
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>№</TableCell>
            <TableCell>Країна</TableCell>
            <TableCell>Ім’я</TableCell>
            <TableCell>Викладач</TableCell>
            <TableCell>Звання</TableCell>
            <TableCell>Тариф</TableCell>
            <TableCell>Баланс</TableCell>
            <TableCell>Проплата до</TableCell>
            <TableCell>Остання сесія</TableCell>
            <TableCell>Заг. час активності</TableCell>
            <TableCell>Мовні пари</TableCell>
            <TableCell>К-сть ігор</TableCell>
            <TableCell>К-сть ігрових грошей</TableCell>
            <TableCell>К-сть токенів</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {studentarray.map((student, index) => (
            <TableRow key={student.id}>
              <TableCell>{index + 1}</TableCell>
              <TableCell>{student.country}</TableCell>
              <TableCell>{student.name}</TableCell>

              <TableCell>{student.teacher}</TableCell>
              <TableCell>{student.status}</TableCell>
              <TableCell>{student.tarif}</TableCell>
              <TableCell>{student.balance}</TableCell>
              <TableCell>{student.paymentBy}</TableCell>
              <TableCell>{student.lastSesia}</TableCell>
              <TableCell> {student.totalTime}</TableCell>
              <TableCell>
                {student.languages.map((language, langIndex) => (
                  <React.Fragment key={langIndex}>
                    {langIndex > 0 && <br />}
                    {language}
                  </React.Fragment>
                ))}
              </TableCell>
              <TableCell>{student.gameCount}</TableCell>
              <TableCell>{student.gamesMoneyCount}</TableCell>
              <TableCell>{student.tokenCount}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default Adminstudents;
