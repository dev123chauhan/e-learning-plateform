import { Link } from "react-router-dom";
import axios from "axios";
import { useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import { LoadingOutlined } from "@ant-design/icons";
import { Spin } from "antd";
import { FooterContainer, Logo, LogoText, LogoDiamond, SubTitle, SubscribeText, SubscribeForm, EmailInput, Links, Copyright, SubscribeButton  } from "../styles/footerStyle";
const Footer = () => {
  const [email, setEmail] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      await axios.post("http://localhost:8000/api/subscribe", { email });
      toast.success("Subscription successful!");
      setEmail("");
    } catch (error) {
      console.error("Subscription failed:", error);
      toast.error("Subscription failed. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };
  return (
    <FooterContainer>
      <Logo>
        <LogoText>
          <LogoDiamond>LEARN</LogoDiamond>
        </LogoText>
        <SubTitle>Virtual Class for Zoom</SubTitle>
      </Logo>

      <SubscribeText>Subscribe to get our Newsletter</SubscribeText>

      <SubscribeForm onSubmit={handleSubmit}>
        <EmailInput
          type="email"
          placeholder="Your Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <SubscribeButton type="submit">
          {" "}
          {isLoading ? (
            <Spin
              indicator={
                <LoadingOutlined
                  style={{
                    color: "#ffffff",
                    marginLeft: "20px",
                    marginRight: "20px",
                  }}
                  spin
                />
              }
            />
          ) : (
            "Subscribe"
          )}
        </SubscribeButton>
      </SubscribeForm>

      <Links>
        <Link to="/contact">Contact us</Link>
        <Link to="">Privacy Policy</Link>
        <Link to="">Terms & Conditions</Link>
      </Links>

      <Copyright>© All rights reserved designed by | Devesh Chauhan</Copyright>
      <Toaster position="top-right" reverseOrder={false} />
    </FooterContainer>
  );
};

export default Footer;
