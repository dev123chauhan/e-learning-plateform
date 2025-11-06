import { useState } from "react";
import { CiUser } from "react-icons/ci";
import { AiOutlineMail } from "react-icons/ai";
import { ClipLoader } from "react-spinners";
import toast, { Toaster } from "react-hot-toast";
import { FaFacebook, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";
import { Button, ContactDetail, ContactDetailIcon, Container, GetTitle, GridContainer, GridItem, IconContainer, InputWrapper, Map, Paper, TextArea, TextField, Title } from "../styles/contactUsStyles";
import { contactService } from "../api/services/contactService";
const ContactUs = () => {
  const [isNameFocused, setIsNameFocused] = useState(false);
  const [isEmailFocused, setIsEmailFocused] = useState(false);
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const { name, email, message } = formData;

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
     await contactService.sendMessage(formData);
      setFormData({
        name: "",
        email: "",
        message: "",
      });
      toast.success("Thanks for contacting us!");
      setTimeout(() => {
        setLoading(false);
      }, 1000);
    } catch (err) {
      console.error(err);
      setLoading(false);
      toast.error("Failed. Please try again.");
    }
  };

  return (
    <Container>
      <Title>Contact Us</Title>
      <GridContainer>
        <GridItem>
          <Paper>
            <GetTitle>Leave us a message</GetTitle>
            <form onSubmit={handleSubmit}>
              <InputWrapper>
                {isNameFocused && (
                  <IconContainer>
                    <CiUser />
                  </IconContainer>
                )}
                <TextField
                  type="text"
                  placeholder="Name"
                  name="name"
                  value={name}
                  onChange={handleChange}
                  onFocus={() => setIsNameFocused(true)}
                  onBlur={() => setIsNameFocused(false)}
                 $hasIcon={isNameFocused}
                />
              </InputWrapper>
              <InputWrapper>
                {isEmailFocused && (
                  <IconContainer>
                    <AiOutlineMail />
                  </IconContainer>
                )}
                <TextField
                  type="email"
                  placeholder="Email"
                  name="email"
                  value={email}
                  onChange={handleChange}
                  onFocus={() => setIsEmailFocused(true)}
                  onBlur={() => setIsEmailFocused(false)}
                  $hasIcon={isEmailFocused}
                />
              </InputWrapper>
              <TextArea
                placeholder="Message"
                name="message"
                value={message}
                onChange={handleChange}
              />
              <Button type="submit">
                {loading ? <ClipLoader size={20} color={"#fff"} /> : "SUBMIT"}
              </Button>
            </form>
          </Paper>
        </GridItem>
        <GridItem>
          <Paper>
            <ContactDetail>Weekend UX</ContactDetail>
            <ContactDetail>B 37/3 Ground Floor Double Story</ContactDetail>
            <ContactDetail>Ramesh Nagar, Near Raja Garden Chowk</ContactDetail>
            <ContactDetail>Delhi: 110015</ContactDetail>
            <ContactDetail>+917067529251</ContactDetail>
            <ContactDetail>hello@info.com.org</ContactDetail>
            <ContactDetailIcon>
              <FaYoutube style={{ color: "#FF0000" }} />
              <FaFacebook style={{ color: "#3b5998" }} />
              <FaTwitter style={{ color: "#1DA1F2" }} />
              <FaInstagram style={{ color: "#E1306C" }} />
            </ContactDetailIcon>
            <Map
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.019652865481!2d144.96332!3d-37.8142!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad65d43f1a38e41%3A0x5045675218ce7e0!2sMelbourne%20VIC%2C%20Australia!5e0!3m2!1sen!2sin!4v1602046785821!5m2!1sen!2sin"
              allowFullScreen=""
              aria-hidden="false"
              tabIndex="0"
              title="Google Map"
            />
          </Paper>
        </GridItem>
      </GridContainer>
      <Toaster position="top-right" reverseOrder={false} />
    </Container>
  );
};

export default ContactUs;
