import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import teachersArray from "../../utils/teachers";
import React, { useState } from "react";
import { TextField } from "@mui/material";
import EmailIcon from "@mui/icons-material/Email";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import PersonRemoveIcon from "@mui/icons-material/PersonRemove";

type Props = {};

const AdminTeachers = (props: Props) => {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredTeachers = teachersArray.filter((teacher) => {
    const lowerCaseSearch = searchTerm.toLowerCase();
    return (
      teacher.name.toLowerCase().includes(lowerCaseSearch) ||
      teacher.country.toLowerCase().includes(lowerCaseSearch)
    );
  });
  return (
    <>
      <TextField
        sx={{
          margin: "25px",
        }}
        id="outlined-basic"
        label="Search by name or country"
        variant="outlined"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <TableContainer
        sx={{
          margin: "25px auto",
          width: "1300px",
          display: "flex",
          alignItems: "center",
        }}
        component={Paper}
      >
        <Table
          sx={{ maxWidth: 1170, margin: "0 50px 0 50px" }}
          aria-label="simple table"
        >
          <TableHead>
            <TableRow>
              <TableCell>№</TableCell>
              <TableCell>Країна</TableCell>
              <TableCell>Ім’я</TableCell>
              <TableCell>Звання</TableCell>
              <TableCell>Тариф</TableCell>
              <TableCell>Баланс</TableCell>
              <TableCell>Проплата до</TableCell>
              <TableCell>
                Використ. <br /> місце
              </TableCell>
              <TableCell>Остання сесія</TableCell>
              <TableCell>Мовні пари</TableCell>
              <TableCell>
                К-сть <br /> ігор
              </TableCell>
              <TableCell>
                К-сть <br /> слів
              </TableCell>
              <TableCell>
                К-сть <br /> Аудіо
              </TableCell>
              <TableCell>
                К-сть <br /> Відео
              </TableCell>
              <TableCell>
                К-сть <br /> Фото
              </TableCell>
              <TableCell>
                К-сть <br /> п. лотів
              </TableCell>
              <TableCell>
                К-сть <br /> студ.
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {filteredTeachers.map((teacher, index) => (
              <TableRow sx={{ position: "relative" }} key={teacher.id}>
                <TableCell>
                  {index + 1}
                  <EmailIcon
                    color="secondary"
                    sx={{
                      position: "absolute",
                      left: "-38px",
                    }}
                  ></EmailIcon>
                </TableCell>
                <TableCell>{teacher.country}</TableCell>
                <TableCell>{teacher.name}</TableCell>
                <TableCell>{teacher.status}</TableCell>
                <TableCell>{teacher.tarif}</TableCell>
                <TableCell>{teacher.balance}</TableCell>
                <TableCell>{teacher.paymentBy}</TableCell>
                <TableCell>{teacher.place}</TableCell>
                <TableCell>{teacher.lastSesia}</TableCell>
                <TableCell>
                  {teacher.languages.map((language, langIndex) => (
                    <React.Fragment key={langIndex}>
                      {langIndex > 0 && <br />}
                      {language}
                    </React.Fragment>
                  ))}
                </TableCell>
                <TableCell>{teacher.gameCount}</TableCell>
                <TableCell>{teacher.wordsCount}</TableCell>
                <TableCell>{teacher.audioCount}</TableCell>
                <TableCell>{teacher.videoCount}</TableCell>
                <TableCell>{teacher.photoCount}</TableCell>
                <TableCell>{teacher.lotsCount}</TableCell>
                <TableCell>
                  {teacher.studentsCount}

                  <PersonRemoveIcon
                    color="error"
                    sx={{
                      position: "absolute",
                      right: "-38px",
                    }}
                  ></PersonRemoveIcon>
                  <DeleteForeverIcon
                    color="disabled"
                    sx={{
                      position: "absolute",
                      right: "-68px",
                    }}
                  ></DeleteForeverIcon>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
};

export default AdminTeachers;
