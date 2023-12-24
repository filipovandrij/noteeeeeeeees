import { Box, Button, Modal, TextField, Typography } from "@mui/material";

import photo from "../../img/student_info_img/Photo.svg";
import { useState } from "react";
type ProfileObj = {
  name: string;
  lastName: string;
  mail: string;
  phone: string;
  country: string;
  language: string;
  login: string;
};
type Props = {};

const ProfileAdmin = (props: Props) => {
  const [open, setOpen] = useState(false);

  const [profileValue, setProfileValue] = useState<ProfileObj>({
    name: "andrew",
    lastName: "filipov",
    mail: "asdkla@asd.com",
    phone: "1516465684",
    country: "Ukraine",
    language: "Unkranian",
    login: "andr",
  });

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const handleSave = () => {
    // Обновить profileValue с новыми значениями из модального окна
    setProfileValue((prevProfile) => ({
      ...prevProfile,
      name: newName,
      lastName: newLastName,
      mail: newMail,
      phone: newPhone,
      country: newCountry,
      language: newLanguage,
      login: newLogin,
    }));

    // Закрыть модальное окно
    handleClose();
  };

  const [newName, setNewName] = useState(profileValue.name);
  const [newLastName, setNewLastName] = useState(profileValue.lastName);
  const [newMail, setNewMail] = useState(profileValue.mail);
  const [newPhone, setNewPhone] = useState(profileValue.phone);
  const [newCountry, setNewCountry] = useState(profileValue.country);
  const [newLanguage, setNewLanguage] = useState(profileValue.language);
  const [newLogin, setNewLogin] = useState(profileValue.login);

  return (
    <Box
      sx={{
        display: "flex",
        margin: "15px 22px",
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "10px",
          width: "10%",
        }}
      >
        <Typography>Моє фото:</Typography>
        <img src={photo} alt="avatar" />
      </Box>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-around",
          width: "90%",
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "start",
            gap: "10px",
            marginTop: "24px",
          }}
        >
          <Box
            sx={{
              display: "flex",
            }}
          >
            <Typography
              sx={{
                width: "210px",
              }}
            >
              Ім’я:
            </Typography>
            <Typography>{profileValue.name}</Typography>
          </Box>
          <Box
            sx={{
              display: "flex",
            }}
          >
            <Typography
              sx={{
                width: "210px",
              }}
            >
              Прізвище:
            </Typography>
            <Typography>{profileValue.lastName}</Typography>
          </Box>
          <Box
            sx={{
              display: "flex",
            }}
          >
            <Typography
              sx={{
                width: "210px",
              }}
            >
              Електронна пошта:
            </Typography>
            <Typography>{profileValue.mail}</Typography>
          </Box>
          <Box
            sx={{
              display: "flex",
            }}
          >
            <Typography
              sx={{
                width: "210px",
              }}
            >
              Номер телефону:
            </Typography>
            <Typography>{profileValue.phone}</Typography>
          </Box>
          <Box
            sx={{
              display: "flex",
            }}
          >
            <Typography
              sx={{
                width: "210px",
              }}
            >
              Країна:
            </Typography>
            <Typography>{profileValue.country}</Typography>
          </Box>
          <Box
            sx={{
              display: "flex",
            }}
          >
            <Typography
              sx={{
                width: "210px",
              }}
            >
              Мова:
            </Typography>
            <Typography>{profileValue.language}</Typography>
          </Box>
        </Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "start",
            justifyContent: "space-between",
            gap: "10px",
            marginTop: "24px",
          }}
        >
          <Box
            sx={{
              display: "flex",
            }}
          >
            <Typography
              sx={{
                width: "70px",
              }}
            >
              Логін:
            </Typography>
            <Typography>{profileValue.login}</Typography>
          </Box>
          <Button variant="contained" color="success" onClick={handleOpen}>
            Open modal
          </Button>
          <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
          >
            <Box
              sx={{
                position: "absolute",
                top: "50%",
                left: "50%",
                transform: "translate(-50%, -50%)",
                width: 600,
                bgcolor: "background.paper",
                border: "2px solid #000",
                boxShadow: 24,
                p: 4,
                display: "flex",
                justifyContent: "space-between",
              }}
            >
              <Box
                sx={{ display: "flex", flexDirection: "column", gap: "10px" }}
              >
                <TextField
                  required
                  id="outlined-required"
                  label="Ім’я:"
                  defaultValue={profileValue.name}
                  onChange={(e) => setNewName(e.target.value)}
                />
                <TextField
                  required
                  id="outlined-required"
                  label="Прізвище:"
                  defaultValue={profileValue.lastName}
                  onChange={(e) => setNewLastName(e.target.value)}
                />

                <TextField
                  required
                  id="outlined-required"
                  label="Електронна пошта:"
                  defaultValue={profileValue.mail}
                  onChange={(e) => setNewMail(e.target.value)}
                />
                <TextField
                  required
                  id="outlined-required"
                  label="Номер телефону:"
                  defaultValue={profileValue.phone}
                  onChange={(e) => setNewPhone(e.target.value)}
                />
              </Box>
              <Box
                sx={{ display: "flex", flexDirection: "column", gap: "10px" }}
              >
                <TextField
                  required
                  id="outlined-required"
                  label="Країна:"
                  defaultValue={profileValue.country}
                  onChange={(e) => setNewCountry(e.target.value)}
                />
                <TextField
                  required
                  id="outlined-required"
                  label="Мова:"
                  defaultValue={profileValue.language}
                  onChange={(e) => setNewLanguage(e.target.value)}
                />
                <TextField
                  required
                  id="outlined-required"
                  label="Логін:"
                  defaultValue={profileValue.login}
                  onChange={(e) => setNewLogin(e.target.value)}
                />
                <Button
                  variant="contained"
                  color="success"
                  onClick={handleSave}
                >
                  Save
                </Button>
              </Box>
            </Box>
          </Modal>
        </Box>
      </Box>
    </Box>
  );
};

export default ProfileAdmin;
