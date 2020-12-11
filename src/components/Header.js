import React from "react";
import { Link, withRouter } from "react-router-dom";
import styled from "styled-components";
import { IoSearchCircleSharp } from "react-icons/io5";
import { BiCameraMovie } from "react-icons/bi";
import { FaTv } from "react-icons/fa";
import { FaRegHeart } from "react-icons/fa";
import { FaUserCircle } from "react-icons/fa";
import { FaBell } from "react-icons/fa";
import { BsCaretDown } from "react-icons/bs";

const Bit = styled.div`
  display: flex;
  justify-content: center;
  align-content: center;
  text-align: center;
  font-size: 2rem;
  font-weight: bolder;
  color: red;
`;
const Header = styled.header`
  color: white;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 50px;
  display: flex;
  align-items: center;
  padding: 0px 10px;
  background-color: rgba(20, 20, 20, 0.8);
  box-shadow: 0px 1px 5px 2px rgba(0, 0, 0, 0.8);
  z-index: 10;
`;

const List = styled.ul`
  display: flex;
`;

const StyledLink = styled(Link)`
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  &:hover {
    ${List} {
      opacity: 0.3;
    }
  }
`;

const RightList = styled.ul`
  display: flex;
  margin-left: auto;
`;

const Item = styled.li`
  width: flex;
  margin: 10px;
  text-align: center;
  height: 50px;
  border-bottom: 3px solid
    ${(props) => (props.current ? "#3498db" : "transparent")};
  transition: border-bottom 0.5s ease-in-out;
  &:hover {
    ${StyledLink} {
      opacity: 0.3;
    }
  }
`;

function DropdownMenu() {
  const Dropdown_Item = styled.div`
    width: flex;
    align-self: flex-end;
  `;
  function DropdownItem(props) {
    return (
      <a href="#" className="menu-item">
        <span className="icon-button">{props.leftIcon}</span>
        {props.children}
        <span className="icon-right">{props.rightIcon}</span>
      </a>
    );
  }
  return (
    <div className="dropdown">
      <Dropdown_Item>
        <DropdownItem
          leftIcon={<FaBell size="20" />}
          rightIcon={<BsCaretDown size="10" />}
        ></DropdownItem>

        <DropdownItem
          leftIcon={<FaUserCircle size="20" />}
          rightIcon={<BsCaretDown size="10" />}
        ></DropdownItem>
      </Dropdown_Item>
    </div>
  );
}

// 라우터로 인해 컴포넌트가 교체되면 Header에 변화를 줘야한다.
// 탭 아래에 파란색 밑줄이 생기는 효과를 줄 것이다.
// 어떠한 라우터로 이동하는지 알아야 하기 때문에 withRouter를 사용해야 한다.
export default withRouter(({ location: { pathname } }) => (
  <Header>
    <Bit>BIT-FLIX</Bit>
    <List>
      <Item current={pathname === "/"}>
        <StyledLink to="/">
          <BiCameraMovie size="20" />
          영화
        </StyledLink>
      </Item>
      <Item current={pathname === "/tv"}>
        <StyledLink to="/tv">
          <FaTv size="20" />
          TV
        </StyledLink>
      </Item>
      <Item current={pathname === "/wish"}>
        <StyledLink to="/wish">
          <FaRegHeart size="20" color="red" />
          내가 찜한 콘텐츠
        </StyledLink>
      </Item>
    </List>
    <RightList>
      <Item current={pathname === "/search"}>
        <StyledLink to="/search">
          <IoSearchCircleSharp size="25" />
        </StyledLink>
      </Item>
      <Item>
        <StyledLink>
          <DropdownMenu />
        </StyledLink>
      </Item>
    </RightList>
  </Header>
));
