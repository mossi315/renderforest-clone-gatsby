import React from 'react';
import { Navbar, Nav, NavDropdown, Container } from 'react-bootstrap';
import { StaticImage } from 'gatsby-plugin-image';
import { Link, graphql, useStaticQuery } from 'gatsby';
import slugify from 'slugify';

const query = graphql`
{
  allContentfulNavigation(sort: {createdAt: ASC}) {
    nodes {
      id
      title
      video
    }
  }
}`
const NavbarComp = () => {
  const data = useStaticQuery(query);
  return (
    <>
      <Navbar bg="light" expand="lg" fixed="top">
        <Container className="d-flex">
          <Navbar.Brand>
            <Link to='/' className='text-decoration-none text-secondary align-items-center'>
              <StaticImage
                src="../images/Logo.png"
                alt="logo"
                layout="constrained"
                width={31}
                height={40}
              />
              {' '}Rendeforest
            </Link>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav"/>

          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mx-auto">
            {data.allContentfulNavigation.nodes.map((item, index) => {
                return (
                  <NavDropdown key={index} title={item.title} id={`nav-dropdown-${index}`} className='px-2' >
                    {item.video.map((subItem, subIndex) => (
                  <NavDropdown.Item key={subIndex}><Link to={`/${slugify(subItem, {lower: true})}`} className='text-decoration-none text-secondary'>{subItem}</Link></NavDropdown.Item>
                    ))}
                  </NavDropdown>
                );
              
            })}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default NavbarComp;
