import React from 'react';
import { Link } from 'react-router-dom';


import * as S from './styles';
import Button from '../../components/Button';
import MAQs from '../../assets/MAQs.svg';
import Medal from '../../assets/Medal.svg';

const Header = () => {
  return (
    <S.NavBar>
      <Link to="/"><img src={MAQs} alt="MAQs logo" /></Link>
      <S.Links>
        <Link>home</Link>
        <Link>about us</Link>
        <Link>courses</Link>
        <Link>adminssion</Link>
        <Link>feedback</Link>
        <Link>gallery</Link>
        <Link>contact us</Link>
      </S.Links>


      <S.ButtonsGroup>
        <div>
          <img src={Medal} alt="Medal simbol" />
          <Link>Verify Certificate</Link>
        </div>
        <Button textContent="Log in" />
      </S.ButtonsGroup>

    </S.NavBar>

  );
};


export default Header;
