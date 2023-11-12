import Image from "next/image";
import Link from "next/link";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Offcanvas from "react-bootstrap/Offcanvas";
import Assets from "../assets";
import Style from "./Menu.module.scss";
import Icon from "../../Icons";
import { useWindowSize } from "../../../../logic/useDimension";
import { useEffect, useRef, useState } from "react";
import { useRouter } from 'next/router'
import { Fragment } from "react";
import { Accordion, Button } from "react-bootstrap";

const Menu = ({ props }) => {
  const { width } = useWindowSize();
  const [slimHeader, setSlimHeader] = useState(false);
  const [loadHeader, setloadHeader] = useState(false);
  const [activeIndex, setActiveIndex] = useState(null);
  // const [visible, setVisible] = useState(false);
  const getPathName = useRouter();
  const isprojectClass = (getPathName.asPath == '/project-list');
  
  const [anim, setAnim] = useState(false)
  
  const links = [
    {
      link: "/",
      title: "Home",
    },
    {
      link: "/aboutus",
      title: "About",
    },
    {
      link: "/project-list",
      title: "Projects",
    }
  ];


  const headRef = useRef();
  const handleScroll = () => {
    if (window.scrollY >= 400) {
      setSlimHeader(true);

      setTimeout(() => {
        setAnim(true)
      }, 100);
    } else {
      setSlimHeader(false);
      setAnim(false)
    }
  };

  useEffect(()=>{
    if (typeof window !== "undefined") {
      window.addEventListener("scroll", handleScroll);
    }
    return () => {window.removeEventListener('scroll',handleScroll)}
  },[])
  
  useEffect(() => {
    setTimeout(() => {
      setloadHeader(true);
      // setVisible(true);
    }, 100);
  }, []);

  return (
    <>
      <header
        className={`${Style.header} ${slimHeader || isprojectClass ? Style.slim_header : ""} ${loadHeader || isprojectClass  && Style.loadHeadernew
          } ${anim || isprojectClass ? Style.anim_header : ""} `}
        ref={headRef}
      >

        <Navbar bg="light" expand={"xl"}>
          <Container>
            <Navbar.Brand href="/">
              <div className={Style.nav_brand}>
                <div className={Style.img_wrap}>
                  <Image
                    src={Assets.logo}
                    priority={true}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    alt="kent logo"
                  />
                </div>
              </div>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-lg`}>
              <span></span>
              <span></span>
              <span></span>
            </Navbar.Toggle>
            <Navbar.Offcanvas
              id={`offcanvasNavbar-expand-lg`}
              aria-labelledby={`offcanvasNavbarLabel-expand-lg`}
              placement="end"
            >
              <Offcanvas.Header closeButton>
                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-lg`}>
                  {/* Menu */}
                </Offcanvas.Title>
              </Offcanvas.Header>

              {width >= 1200 ?
                <Offcanvas.Body className="d-xl-block d-none">
                  <Nav className="justify-content-end align-items-center flex-grow-1 ">
                    {links.map((item, i) => {
                      return (
                        <Fragment key={i} >
                          {item?.submenu?.length > 0 ? (
                            <div key={item.link}
                              className=" dropdown_projects"
                              onMouseEnter={() => handleMouseEnter(i)}
                              onMouseLeave={() => handleMouseEnter(null)}
                            >
                              <Link href="/" className="nav-link ">
                                {item.title}
                              </Link>
                              {activeIndex == i && (
                                <ul
                                  className="dropdown-menu"
                                  aria-labelledby="dropdownMenuButton1"
                                >
                                  {item.submenu.map((subLink, index) => {
                                    return (
                                      <li key={index}>
                                        <Link className="dropdown-item" href={subLink.link}>
                                          {subLink.title}
                                        </Link>
                                      </li>
                                    );
                                  })}
                                </ul>


                              )}
                            </div>
                          ) : (
                            <Link href={item.link} className="nav-link">
                              {item.title} {item?.submenu?.length}
                            </Link>
                          )}
                        </Fragment>
                      );
                    })}

                  
                  </Nav>
                </Offcanvas.Body>
                :
                <Offcanvas.Body className="d-xl-none d-flex">
                  <Accordion flush className={`${Style.mob_menu} `}>
                    <Accordion.Item eventKey="0" className="menu-link">
                      <Accordion.Header>
                        <Link href="" className="no-decoration">
                          Home
                        </Link>
                      </Accordion.Header>
                    </Accordion.Item>
                    <Accordion.Item eventKey="1" className="menu-link">
                      <Accordion.Header>
                        <Link href="/aboutus" className="no-decoration">
                          About
                        </Link>
                      </Accordion.Header>
                    </Accordion.Item>
                    <Accordion.Item eventKey="2" className="menu-link">
                      <Accordion.Header>
                        <Link href="/project-list" className="no-decoration">
                          Projects
                        </Link>
                      </Accordion.Header>
                    </Accordion.Item>

                  </Accordion>
                </Offcanvas.Body>

              }
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
      </header>
    </>
  );
};

export default Menu;
