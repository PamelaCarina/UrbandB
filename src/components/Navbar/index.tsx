import React, {FC} from 'react';
import { Link } from 'react-router-dom';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';

interface MenuNav {
  menuArr: {
    name: string;
    rute: string;
  }[];
}

const MyNavbar: FC<MenuNav> = ({ menuArr }) => {
  console.log(menuArr);

  return (
    <div>
      <Navbar bg="dark" variant="dark" fixed="top">
        <Navbar.Brand href="#home">US URBAN</Navbar.Brand>
        <Nav className="mr-auto">
          {menuArr.map((elem)=>{
            return(
              <Nav.Link as={Link} key={"#" + elem.rute} to={elem.rute}> {elem.name}</Nav.Link>
            )
          })}
        </Nav>
      </Navbar>
    </div>
  );
};

export default MyNavbar;
