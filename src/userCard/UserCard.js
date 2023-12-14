import React from "react";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import Avatar from "@mui/material/Avatar";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Divider from "@mui/material/Divider";
import PhoneRoundedIcon from "@mui/icons-material/PhoneRounded";
import LanguageRoundedIcon from "@mui/icons-material/LanguageRounded";
import PlaceRoundedIcon from "@mui/icons-material/PlaceRounded";

function stringToColor(string) {
  let hash = 0;
  let i;
  for (i = 0; i < string.length; i += 1) {
    hash = string.charCodeAt(i) + ((hash << 5) - hash);
  }
  let color = "#";
  for (i = 0; i < 3; i += 1) {
    const value = (hash >> (i * 8)) & 0xff;
    color += `00${value.toString(16)}`.slice(-2);
  }
  return color;
}

function stringAvatar(name) {
  return {
    sx: {
      bgcolor: stringToColor(name),
    },
    children: `${name.split(" ")[0][0]}${name.split(" ")[1][0]}`,
  };
}

const UserCard = ({ user }) => {
  return (
    <Card
      variant="outlined"
      sx={{
        maxWidth: "100%",
        backgroundColor: "rgb(71, 98, 130)",
      }}
    >
      <CardHeader
        sx={{
          backgroundColor: "rgb(5, 30, 52)",
        }}
        titleTypographyProps={{
          fontSize: 22,
          fontWeight: "bold",
          color: "primary",
        }}
        subheaderTypographyProps={{
          fontSize: 14,
          fontWeight: "bold",
          color: "white",
        }}
        avatar={<Avatar {...stringAvatar(user.name)} />}
        title={user.name}
        subheader={user.username}
      />

      <List
        sx={{
          width: "93%",
          color: "white",
          marginLeft: "15px",
        }}
      >
        <ListItem>
          <ListItemAvatar>
            <Avatar sx={{ backgroundColor: "rgb(5, 30, 52)" }}>
              <PhoneRoundedIcon />
            </Avatar>
          </ListItemAvatar>
          <ListItemText primary={user.phone} />
        </ListItem>
        <Divider
          variant="inset"
          component="li"
          sx={{ backgroundColor: "rgb(5, 30, 52)" }}
        />
        <ListItem>
          <ListItemAvatar>
            <Avatar sx={{ backgroundColor: "rgb(5, 30, 52)" }}>
              <LanguageRoundedIcon />
            </Avatar>
          </ListItemAvatar>
          <ListItemText
            secondaryTypographyProps={{
              color: "white",
            }}
            primary={user.email}
            secondary={user.website}
          />
        </ListItem>
        <Divider
          variant="inset"
          component="li"
          sx={{ backgroundColor: "rgb(5, 30, 52)" }}
        />
        <ListItem>
          <ListItemAvatar>
            <Avatar sx={{ backgroundColor: "rgb(5, 30, 52)" }}>
              <PlaceRoundedIcon />
            </Avatar>
          </ListItemAvatar>
          <ListItemText
            secondaryTypographyProps={{
              color: "white",
            }}
            primary={user.address.suite + ", " + user.address.street}
            secondary={user.address.city + ", " + user.address.zipcode}
          />
        </ListItem>
      </List>
    </Card>
  );
};

export default UserCard;