import { useState } from "react";
import axios from "axios";
import styled from "styled-components";
import { CiUser } from "react-icons/ci";
import { AiOutlineMail } from "react-icons/ai";
import { ClipLoader } from "react-spinners";
import toast, { Toaster } from "react-hot-toast";
import { FaFacebook, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";

const Container = styled.div`
  flex-grow: 1;
  padding: 1rem;
  margin-top: 3rem;

  @media (min-width: 768px) {
    padding: 2rem;
    margin-top: 5rem;
  }
`;

const GridContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;

  @media (min-width: 768px) {
    flex-direction: row;
    flex-wrap: wrap;
  }
`;

const GridItem = styled.div`
  flex: 1;
  min-width: 100%;

  @media (min-width: 768px) {
    min-width: calc(50% - 2rem);
  }
`;

const Paper = styled.div`
  padding: 1.5rem;
  background-color: #fff;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  border-radius: 8px;

  @media (min-width: 768px) {
    padding: 2rem;
  }
`;

const Title = styled.h1`
  margin-bottom: 1.5rem;
  color: #49bbbd;
  font-weight: bold;
  text-align: center;
  font-size: 1.5rem;

  @media (min-width: 768px) {
    font-size: 2rem;
    margin-bottom: 2rem;
  }
`;

const GetTitle = styled.h6`
  margin-bottom: 1rem;
  color: black;
  font-size: 1rem;
`;

const InputWrapper = styled.div`
  position: relative;
  margin-bottom: 1rem;
`;

const IconContainer = styled.div`
  position: absolute;
  left: 0.5rem;
  top: 50%;
  transform: translateY(-50%);
  color: #49bbbd;
  font-size: 1.2rem;
`;

const TextField = styled.input`
  width: 100%;
  padding: 0.5rem;
  padding-left: ${(props) => (props.hasIcon ? "2rem" : "0.5rem")};
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 1rem;

  &:focus {
    border-color: #49bbbd;
    outline: none;
  }
`;

const TextArea = styled.textarea`
  width: 100%;
  padding: 0.5rem;
  margin-bottom: 1rem;
  border: 1px solid #ccc;
  border-radius: 4px;
  min-height: 8rem;
  font-size: 1rem;

  &:focus {
    border-color: #49bbbd;
    outline: none;
  }

  @media (min-width: 768px) {
    min-height: 10rem;
  }
`;

const Button = styled.button`
  background-color: #49bbbd;
  color: #fff;
  width: 100%;
  padding: 0.75rem 1rem;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 1rem;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #3a9da1;
  }
`;

const ContactDetail = styled.h4`
  font-weight: 400;
  margin-bottom: 0.5rem;
  font-size: 0.9rem;

  @media (min-width: 768px) {
    font-size: 1rem;
  }
`;

const ContactDetailIcon = styled.div`
  display: flex;
  gap: 20px;
  margin-top: 1rem;
  margin-bottom: 1rem;
`;

const Map = styled.iframe`
  width: 100%;
  height: 300px;
  border: none;
  border-radius: 8px;

  @media (min-width: 768px) {
    height: 400px;
  }
`;

const Contact = () => {
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
      const res = await axios.post(
        "http://localhost:8000/api/contact",
        formData
      );
      console.log(res.data);
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
                  hasIcon={isNameFocused}
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
                  hasIcon={isEmailFocused}
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

export default Contact;
