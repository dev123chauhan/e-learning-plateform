import styled from "styled-components";
export const FooterContainer = styled.footer`
  background-color: #1e1e2f;
  color: #ffffff;
  padding: 40px 20px;
  text-align: center;
`;

export const Logo = styled.div`
  display: inline-flex;
  align-items: center;
  margin-bottom: 20px;
`;

export const LogoText = styled.span`
  font-size: 24px;
  font-weight: bold;
  margin-right: 10px;
`;

export const LogoDiamond = styled.div`
  width: 30px;
  height: 30px;
  border: 2px solid #4fd1c5;
  transform: rotate(45deg);
  display: inline-flex;
  align-items: center;
  justify-content: center;
`;

export const SubTitle = styled.span`
  font-size: 18px;
  margin-left: 20px;
  vertical-align: middle;
`;

export const SubscribeText = styled.h2`
  font-size: 20px;
  margin-bottom: 20px;
`;

export const SubscribeForm = styled.form`
  display: flex;
  justify-content: center;
  margin-bottom: 30px;
`;

export const EmailInput = styled.input`
  padding: 10px 15px;
  width: 250px;
  border-radius: 25px 0 0 25px;
  border: none;
  background-color: rgba(255, 255, 255, 0.1);
  color: #ffffff;
  outline: none;
`;

export const SubscribeButton = styled.button`
  padding: 10px 20px;
  border-radius: 0 25px 25px 0;
  border: none;
  background-color: #4fd1c5;
  color: #ffffff;
  cursor: pointer;
`;

export const Links = styled.div`
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

export const Copyright = styled.p`
  font-size: 14px;
  opacity: 0.7;
`;