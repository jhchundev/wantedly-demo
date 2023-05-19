import React from 'react';
import styled from 'styled-components';
import { AiOutlineInstagram } from '@react-icons/all-files/ai/AiOutlineInstagram';
import { AiFillYoutube } from '@react-icons/all-files/ai/AiFillYoutube';
import { FaFacebook } from '@react-icons/all-files/fa/FaFacebook';
import { RiGooglePlayFill } from '@react-icons/all-files/ri/RiGooglePlayFill';

const Footer = () => {
  return (
    <Wrapper>
      <FooterBox>
        <FooterContainer>
          <FooterTop>
            <FooterTopLeft>
              <img
                src="https://wantedly-assets.wantedly.com/static/logo/logo-color-LightBG.svg"
                alt="logo"
              />
              <TopMenu>
                <MenuList>会社紹介</MenuList>
                <MenuList>プライバシーポリシ</MenuList>
              </TopMenu>
            </FooterTopLeft>
            <IconBox>
              <Icons>
                <AiOutlineInstagram />
              </Icons>
              <Icons>
                <AiFillYoutube />
              </Icons>
              <Icons>
                <FaFacebook />
              </Icons>
              <Icons>
                <RiGooglePlayFill />
              </Icons>
            </IconBox>
          </FooterTop>
          <FooterBottom>
            <BottomDescription>
               © Wantedly, Inc.
            </BottomDescription>
          </FooterBottom>
        </FooterContainer>
      </FooterBox>
    </Wrapper>
  );
};

export default Footer;

const Wrapper = styled.div`
  height: 100%;
  min-height: 100%;
`;

const FooterBox = styled.div`
  bottom: 0;
  display: flex;
  justify-content: center;
  transform: translateY(-0%);
  width: 100vw;
  height: 200px;
  padding: 18px 0 65px;
  background-color: #fff;
  border-top: 1px solid #ececec;
`;

const FooterContainer = styled.div`
  width: 60%;
`;

const FooterTop = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  border-bottom: 1px solid #ececec;

  img {
    width: 100px;
  }
`;

const FooterTopLeft = styled.div`
  display: flex;
  align-items: center;
`;

const TopMenu = styled.div`
  display: flex;
`;

const MenuList = styled.div`
  margin: 0 20px;
  color: #3a3a3a;
  font-weight: 600;
  cursor: pointer;
`;

const IconBox = styled.div`
  display: flex;
  font-size: 30px;
`;

const Icons = styled.div`
  margin: 0 10px;
  color: gray;
  cursor: pointer;
`;

const FooterBottom = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  margin-top: 30px;
`;

const BottomDescription = styled.div`
  font-size: 12px;
  line-height: 18px;
  color: #3a3a3a;
`;
