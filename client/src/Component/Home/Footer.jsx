import styled from "styled-components";
import { Link } from "react-router-dom";
import axios from "axios";
import { useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import { LoadingOutlined } from "@ant-design/icons";

import { Spin } from "antd";
const FooterContainer = styled.footer`
  background-color: #1e1e2f;
  color: #ffffff;
  padding: 40px 20px;
  text-align: center;
`;

const Logo = styled.div`
  display: inline-flex;
  align-items: center;
  margin-bottom: 20px;
`;

const LogoText = styled.span`
  font-size: 24px;
  font-weight: bold;
  margin-right: 10px;
`;

const LogoDiamond = styled.div`
  width: 30px;
  height: 30px;
  border: 2px solid #4fd1c5;
  transform: rotate(45deg);
  display: inline-flex;
  align-items: center;
  justify-content: center;
`;

const SubTitle = styled.span`
  font-size: 18px;
  margin-left: 20px;
  vertical-align: middle;
`;

const SubscribeText = styled.h2`
  font-size: 20px;
  margin-bottom: 20px;
`;

const SubscribeForm = styled.form`
  display: flex;
  justify-content: center;
  margin-bottom: 30px;
`;

const EmailInput = styled.input`
  padding: 10px 15px;
  width: 250px;
  border-radius: 25px 0 0 25px;
  border: none;
  background-color: rgba(255, 255, 255, 0.1);
  color: #ffffff;
  outline: none;
`;

const SubscribeButton = styled.button`
  padding: 10px 20px;
  border-radius: 0 25px 25px 0;
  border: none;
  background-color: #4fd1c5;
  color: #ffffff;
  cursor: pointer;
`;

const Links = styled.div`
  margin-bottom: 20px;

  a {
    color: #ffffff;
    text-decoration: none;
    margin: 0 10px;

    &:hover {
      text-decoration: underline;
    }
  }
`;

const Copyright = styled.p`
  font-size: 14px;
  opacity: 0.7;
`;

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
