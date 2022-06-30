import styled from "styled-components";

export const NavbarWrapper = styled.div`
  width: 100%;
  padding: 30px;
  box-sizing: border-box;
  margin-bottom: 80px;

  ul {
    display: flex;
    margin: 0 auto;
    align-items: center;
    justify-content: flex-end;

    .logo {
      font-weight: bold;
      color: #fff;
      letter-spacing: 1px;
      display: flex;
      align-items: center;
      margin-right: auto;

      img {
        margin-right: 10px;
        filter: invert(25%);
        width: 36px;
        margin-top: 8px;
      }
    }

    a {
      color: #333;
      text-decoration: none;
      margin-right: 20px;
    }
  }
`;
