import Link from 'next/link';
import React from 'react';
import { AiFillGithub, AiFillLinkedin } from 'react-icons/ai';
import { DiCssdeck } from 'react-icons/di';

import { Container, Div1, Div2, Div3, NavLink, SocialIcons, Span } from './HeaderStyles';

const Header = () =>  (
  <Container>
    <Div1>
      <Link href="/">
        <a style={{ display: "flex", alignItems: "center", color: 'white', marginBottom: '20px'}}>
          <DiCssdeck size="3rem" /> <Span>Portfolio</Span>
        </a>
      </Link>
    </Div1>
    <Div2>
      <li>
        <Link href="#projects">
          <NavLink>Projects</NavLink>
        </Link>
      </li>
      <li>
        <Link href="#tech">
          <NavLink>Projects</NavLink>
        </Link>
      </li>
      <li>
        <Link href="#about">
          <NavLink>Projects</NavLink>
        </Link>
      </li>
    </Div2>
    <Div3>
      <SocialIcons href ="https://github.com/elidallen">
        <AiFillGithub />
      </SocialIcons>
      <SocialIcons href ="https://www.linkedin.com/in/eli-allen-mitchell-92b506256/">
        <AiFillLinkedin />
      </SocialIcons>
    </Div3>
  </Container>
);

export default Header;
