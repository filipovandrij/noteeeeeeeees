import {
  Avatar,
  Button,
  Card,
  CardActions,
  CardContent,
  CardHeader,
} from "@mui/material";
import gold from "../../img/student_info_img/gold-removebg-preview.svg";
import bronz from "../../img/student_info_img/Bronz-removebg-preview.svg";
import money from "../../img/student_info_img/money.svg";
import points from "../../img/student_info_img/points.svg";
import timer from "../../img/student_info_img/timer.svg";
import token from "../../img/student_info_img/token.svg";
import silver from "../../img/student_info_img/silver-removebg-preview.svg";
import status from "../../img/student_info_img/status.svg";
import photo from "../../img/student_info_img/Photo.svg";

import "./StudentCard.css";
type Props = {};

const StudentCard = (props: Props) => {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardHeader
        sx={{
          display: "grid",
          placeItems: "center",
        }}
        avatar={
          <Avatar
            sx={{
              width: "142px",
              height: "142px",
              backgroundColor: "white",
              border: "1px solid black",
              borderRadius: "10px",
              margin: "auto",
            }}
          >
            <img src={photo} alt="avatar"></img>
          </Avatar>
        }
      />

      <CardContent className="card-content">
        <div className="name-block">
          <span className="title-content">Ім'я:</span>
          <span>Andrew_pav</span>
        </div>
        <div>
          <span className="title-content">Звання:</span>
          <img src={status} className="status-image" alt="status" />
          <span className="hover-span">Apprentice</span>
        </div>
        <div>
          <span className="title-content">Бали:</span>
          <img src={points} alt="points" />
          <span> 395860</span>
        </div>
        <div>
          <span className="title-content">Гроші:</span>
          <img src={money} alt="monye" />
          <span> 999,031,925</span>
        </div>
        <div>
          <span className="title-content">Токени:</span>
          <img src={token} alt="token" /> <span>1,000</span>
        </div>
        <div>
          <span className="title-content">Ігровий час:</span>

          <img src={timer} alt="timer" />
          <span> 124:58:41</span>
        </div>
        <div className="price_place">
          <span>Призові місця:</span>
          <div>
            <img src={gold} alt="gold" /> x 2
          </div>
          <div>
            <img src={silver} alt="silver" /> x 4
          </div>
          <div>
            <img src={bronz} alt="bronz" /> x 1
          </div>
        </div>
        <div>
          <span className="title-content">Баланс:</span>
          <span>0.7 $</span>
        </div>
      </CardContent>

      <CardActions className="actions-contaner">
        <Button
          sx={{
            borderRadius: "15px",
            padding: "6px 32px",
          }}
          variant="contained"
          color="success"
        >
          Доступ до <br /> Freeplay
        </Button>
      </CardActions>
    </Card>
  );
};

export default StudentCard;
