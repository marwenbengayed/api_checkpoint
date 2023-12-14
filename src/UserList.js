import { React, useState, useEffect } from "react";
import "./App.css";
import axios from "axios";
import UserCard from "./userCard/UserCard";
import Grid from "@mui/material/Unstable_Grid2";
import Box from "@mui/material/Box";

const UserList = () => {
  const [listOfUSer, setListOfUSer] = useState([]);
  const [error, setError] = useState("");

  const fetchUser = () => {
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((response) => setListOfUSer(response.data))
      .catch((err) => setError(err));
  };
  useEffect(() => {
    fetchUser();
  }, []);

  return (
    <Box sx={{ flexGrow: 1 }}>
      {!listOfUSer.length || error ? (
        <h1>Emplty list or {error}</h1>
      ) : (
        <Grid
          container
          spacing={{ xs: 2, md: 3 }}
          columns={{ xs: 4, sm: 8, md: 12 }}
        >
          {listOfUSer.map((element, index) => (
            <Grid xs={2} sm={4} md={4} key={index}>
              <UserCard user={element} />
            </Grid>
          ))}
        </Grid>
      )}
    </Box>
  );
};

export default UserList;