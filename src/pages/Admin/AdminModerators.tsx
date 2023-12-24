import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import moderatorsArray from "../../utils/moderators";
import React from "react";

type Props = {};

const AdminModerators = (props: Props) => {
  return (
    <TableContainer
      sx={{ maxWidth: 950, margin: "15px auto" }}
      component={Paper}
    >
      <Table sx={{}} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>№</TableCell>
            <TableCell>Країна</TableCell>
            <TableCell>Ім’я</TableCell>
            <TableCell>Звання</TableCell>
            <TableCell>Мовні пари</TableCell>
            <TableCell>К-сть одобр. лотів</TableCell>
            <TableCell>К-сть нов. заявок</TableCell>
            <TableCell>К-сть заявок в обробці</TableCell>
            <TableCell>Остання сессія (дата/час/тривалість)</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {moderatorsArray.map((moderator, index) => (
            <TableRow key={moderator.id}>
              <TableCell>{index + 1}</TableCell>
              <TableCell>{moderator.country}</TableCell>
              <TableCell>{moderator.name}</TableCell>

              <TableCell>{moderator.status}</TableCell>
              <TableCell>
                {moderator.languages.map((language, langIndex) => (
                  <React.Fragment key={langIndex}>
                    {langIndex > 0 && <br />}
                    {language}
                  </React.Fragment>
                ))}
              </TableCell>
              <TableCell>{moderator.lotsCount}</TableCell>
              <TableCell>{moderator.applicationsApprovedCount}</TableCell>
              <TableCell>{moderator.applicationsWaitingCount}</TableCell>
              <TableCell>{moderator.lastSesia}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default AdminModerators;
