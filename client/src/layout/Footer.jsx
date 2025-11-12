import { Link } from "react-router-dom";
import { useState } from "react";
import {toast} from "sonner";
import { LoadingOutlined } from "@ant-design/icons";
import { Spin } from "antd";
import { FooterContainer, Logo, LogoText, LogoDiamond, SubTitle, SubscribeText, SubscribeForm, EmailInput, Links, Copyright, SubscribeButton  } from "../styles/footerStyle";
import { subscribeService } from "../api/services/subscribeService";
const Footer = () => {
  const [email, setEmail] = useState("");
  const [isLoading, setIsLoading] = useState(false);
 const handleSubmit = async (e) => {
    e.preventDefault();
    if (!email || !email.includes('@')) {
      toast.error("Please enter a valid email address");
      return;
    }
    setIsLoading(true);
    try {
      const response = await subscribeService.subscribe(email);
      toast.success(response.message || "Subscription successful!");
      setEmail("");
    } catch (error) {
      console.error("Subscription failed:", error);
      const errorMessage = error.response?.data?.message || "Subscription failed. Please try again.";
      toast.error(errorMessage);
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
    </FooterContainer>
  );
};

export default Footer;
