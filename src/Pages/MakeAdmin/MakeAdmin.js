import { Button, Container, Grid, TextField } from "@mui/material";
import React, { useState } from "react";
import Swal from "sweetalert2";
import useAuth from "../../Hooks/useAuth";

export default function MakeAdmin() {
  const [admin, setAdmin] = useState("");
  const [isSuccess, setIsSuccess] = useState(false);
  const { token } = useAuth();

  const newadminHandaler = e => {
    e.preventDefault();
    let name = document.getElementById("makeAdmin").value;
    setAdmin(name);
    const user = { admin };
    fetch("https://rocky-sierra-48199.herokuapp.com/users/admin", {
      method: "PUT",
      headers: {
        authorization: `Bearer ${token}`,
        "content-type": "application/json",
      },
      body: JSON.stringify(user),
    })
      .then(res => res.json())
      .then(data => {
        if (data.modifiedCount) {
          console.log(data);
          setIsSuccess(true);
          setAdmin("");
        }
      });
    if (isSuccess === true) {
      Swal.fire({
        icon: "success",
        title: "Admin added successfully",
      });
    }
  };

  return (
    <div>
      <Container>
        <Grid style={{ margin: "50px auto 0px", textAlign: "center" }}>
          <Grid>
            <form onSubmit={newadminHandaler}>
              <TextField
                style={{ width: "50%", margin: "auto" }}
                label="Make admin"
                type="text"
                id="makeAdmin"
                name="makeAdmin"
                variant="filled"
              />
              <Button
                variant="h6"
                type="submit"
                style={{
                  width: "25%",
                  textAlign: "center",
                  display: "block",
                  backgroundColor: "var(--secondary-color)",
                  padding: "10px 20px",
                  color: "white",
                  borderRadius: "3px",
                  margin: " 30px auto",
                }}
              >
                Make a new Admin
              </Button>
            </form>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}
