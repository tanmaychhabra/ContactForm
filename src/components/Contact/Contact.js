import React, { useState } from "react";
import Navigation from "../Navigation/Navigation";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import ImageInfo from "../Image/ImageInfo";

function Contact(props) {
  ImageInfo;
  const addContactData = () => {
    var initialContact = {
      name: name,
      email: newEmail,
      phone: phone
    };
    if (
      initialContact.name !== "" &&
      initialContact.phone !== "" &&
      initialContact.email !== ""
    ) {
      setAddContact(true);
      contacts.push(initialContact);
    }
  };
  const [addContact, setAddContact] = useState(false);
  const [name, setName] = useState("");
  const [newEmail, setNewEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [contacts, setContacts] = useState([]);

  return (
    <div>
      <Navigation />
      <h1>Enter contact details</h1>
      <TextField
        required
        margin="none"
        type="text"
        value={name}
        label="Name"
        onChange={(e) => setName(e.target.value)}
      />
      <br />
      <br />
      <TextField
        required
        type="text"
        label="Email"
        value={newEmail}
        onChange={(e) => setNewEmail(e.target.value)}
      />
      <br />
      <br />
      <TextField
        required
        label="Phone"
        type="number"
        value={phone}
        onChange={(e) => setPhone(e.target.value)}
      />
      <br />
      <br />
      <Button
        variant="contained"
        style={{ backgroundColor: "#c0d121" }}
        onClick={addContactData}
      >
        Add Contact
      </Button>
      <br />
      <br />
      <div>
        <br />
        {addContact
          ? contacts.map((con, index) => (
              <div>
                <Card
                  style={{
                    width: "500px",
                    height: "400px",
                    alignContent: "center",
                    margin: "auto"
                  }}
                >
                  <CardContent>
                    <ul key={index}>
                      <li style={{ display: "inline" }}>
                        <h4>Contact Name:</h4> {con.name}
                      </li>
                      <li style={{ display: "inline" }}>
                        <h4>Phone: </h4>
                        {con.phone}
                      </li>
                      <li style={{ display: "inline" }}>
                        <h4>Email: </h4>
                        {con.email}
                      </li>
                    </ul>
                  </CardContent>
                  <CardActions>
                    <ImageInfo />
                  </CardActions>
                </Card>
                <br />
              </div>
            ))
          : null}
      </div>
    </div>
  );
}

export default Contact;
