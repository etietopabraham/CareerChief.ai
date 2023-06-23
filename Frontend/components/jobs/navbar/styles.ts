import styled from 'styled-components';

export const NavStyles = styled('nav')`
  padding: 1rem;
  display: flex;
  justify-content: space-between;
  /* flex-wrap: wrap; */
  gap: 2rem;
  align-items: center;
  height: 75px;
  background: #EFF6F8 0% 0% no-repeat padding-box;
  box-shadow: 0px 3px 6px #00000029;
  position: sticky;
  top: 0;
  z-index: 100;

  .user {
    font-style: normal;
    font-weight: 700;
    font-size: 32px;
    line-height: 35px;
    color: #104fb8;
    text-transform: capitalize;
  }
 .right {
  display: flex;
  align-items: center;
  gap: 2rem;
 }
 .notifications {
  position: relative;
  cursor: pointer;
 }
 .count {
  height: 20px;
  width: 20px;
  border-radius: 100%;
  background-color: #FCA0A0;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #024973;
  font-size: 10px;
  position: absolute;
  top: -5px;
  right: -5px;
  }


  @media screen and (max-width: 500px) {
    /* flex-direction: column-reverse;
    height: 100%; */

    .right {
      display: none;
    }
  }
`;