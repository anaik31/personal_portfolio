import { useState } from "react";
import { Box, TextField, Button, Typography } from "@mui/material";
import emailjs from "@emailjs/browser";
import { createTheme, ThemeProvider } from "@mui/material/styles";

// Create theme at the top level
const theme = createTheme({
  typography: {
    fontFamily: '"Inknut Antiqua", serif',
  },
});

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    message: ""
  });

  const [success, setSuccess] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs.send(
      "service_y17csej",
      "template_zzimp0u",
      formData,
      "8hZ-f8P_4LfB3xGqJ"
    ).then(
      (result) => {
        console.log(result.text);
        setSuccess("Message sent successfully!");
        setFormData({ name: "", company: "", message: "" });
      },
      (error) => {
        console.log(error.text);
        setSuccess("Failed to send message. Try again.");
      }
    );
  };

  return (
    <div>
      <h2 className="contactHeader">Contact Me!</h2>
      <ThemeProvider theme={theme}>
        <Box sx={{ width: 400, margin: "auto", mt: 5 }}>
          <form onSubmit={handleSubmit}>
            <TextField
              fullWidth
              label="Name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              margin="normal"
              required
            />
            <TextField
              fullWidth
              label="Company"
              name="company"
              value={formData.company}
              onChange={handleChange}
              margin="normal"
            />
            <TextField
              fullWidth
              label="Message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              multiline
              rows={4}
              margin="normal"
              required
            />
            <Button type="submit" variant="contained" color="primary" sx={{ mt: 2 }}>
              Send
            </Button>
          </form>
          {success && <Typography sx={{ mt: 2 }}>{success}</Typography>}
        </Box>
      </ThemeProvider>
    </div>
  );
}

export default Contact;
