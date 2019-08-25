import React from "react";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem
} from "reactstrap";
import {
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  CardSubtitle,
  Button
} from "reactstrap";

export default class MainNav extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }
  render() {
    return (
      <div>
        <Navbar expand="md">
          <CardBody className="dot-holder">
            <div className="row dot-row">
              <img
                src="https://img.icons8.com/material-rounded/10/FFFFFF/unchecked-checkbox.png"
                alt="dot"
              />

              <img
                src="https://img.icons8.com/material-rounded/10/FFFFFF/unchecked-checkbox.png"
                alt="dot"
              />

              <img
                src="https://img.icons8.com/material-rounded/10/FFFFFF/unchecked-checkbox.png"
                alt="dot"
              />
            </div>
            <div className="row dot-row">
              <img
                src="https://img.icons8.com/material-rounded/10/FFFFFF/unchecked-checkbox.png"
                alt="dot"
              />

              <img
                src="https://img.icons8.com/material-rounded/10/FFFFFF/unchecked-checkbox.png"
                alt="dot"
              />

              <img
                src="https://img.icons8.com/material-rounded/10/FFFFFF/unchecked-checkbox.png"
                alt="dot"
              />
            </div>
            <div className="row dot-row">
              <img
                src="https://img.icons8.com/material-rounded/10/FFFFFF/unchecked-checkbox.png"
                alt="dot"
              />

              <img
                src="https://img.icons8.com/material-rounded/10/FFFFFF/unchecked-checkbox.png"
                alt="dot"
              />

              <img
                src="https://img.icons8.com/material-rounded/10/FFFFFF/unchecked-checkbox.png"
                alt="dot"
              />
            </div>
          </CardBody>
          {/* <NavbarBrand className="logo" href="/">
            S
    </NavbarBrand> */}
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto mini-nav nav-icons" navbar>
              <NavItem className="nav-icon">
                <NavLink href="/components/">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    x="0px"
                    y="0px"
                    width="32"
                    height="32"
                    viewBox="0 0 172 172"
                  >
                    <g
                      fill="none"
                      fill-rule="nonzero"
                      stroke="none"
                      stroke-width="1"
                      stroke-linecap="butt"
                      stroke-linejoin="miter"
                      stroke-miterlimit="10"
                      stroke-dasharray=""
                      stroke-dashoffset="0"
                      font-family="none"
                      font-weight="none"
                      font-size="none"
                      text-anchor="none"
                    >
                      <path d="M0,172v-172h172v172z" fill="none" />
                      <g fill="#ffffff">
                        <path d="M74.53333,17.2c-31.59642,0 -57.33333,25.73692 -57.33333,57.33333c0,31.59642 25.73692,57.33333 57.33333,57.33333c13.73998,0 26.35834,-4.87915 36.24766,-12.97839l34.23203,34.23203c1.43802,1.49778 3.5734,2.10113 5.5826,1.57735c2.0092,-0.52378 3.57826,-2.09284 4.10204,-4.10204c0.52378,-2.0092 -0.07957,-4.14458 -1.57735,-5.5826l-34.23203,-34.23203c8.09924,-9.88932 12.97839,-22.50768 12.97839,-36.24766c0,-31.59642 -25.73692,-57.33333 -57.33333,-57.33333zM74.53333,28.66667c25.39937,0 45.86667,20.4673 45.86667,45.86667c0,25.39937 -20.46729,45.86667 -45.86667,45.86667c-25.39937,0 -45.86667,-20.46729 -45.86667,-45.86667c0,-25.39937 20.4673,-45.86667 45.86667,-45.86667z" />
                      </g>
                    </g>
                  </svg>
                </NavLink>
              </NavItem>
              <NavItem className="nav-icon">
                <NavLink href="https://github.com/MonicaHoward/react-sneaker-head">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    x="0px"
                    y="0px"
                    width="32"
                    height="32"
                    viewBox="0 0 172 172"
                  >
                    <g
                      fill="none"
                      fill-rule="nonzero"
                      stroke="none"
                      stroke-width="1"
                      stroke-linecap="butt"
                      stroke-linejoin="miter"
                      stroke-miterlimit="10"
                      stroke-dasharray=""
                      stroke-dashoffset="0"
                      font-family="none"
                      font-weight="none"
                      font-size="none"
                      text-anchor="none"
                    >
                      <path d="M0,172v-172h172v172z" fill="none" />
                      <g fill="#ffffff">
                        <g id="surface1">
                          <path d="M6.235,6.88c-0.1075,0.02688 -0.215,0.06719 -0.3225,0.1075c-3.34594,0.47031 -5.9125,3.30563 -5.9125,6.7725c0,3.80281 3.07719,6.88 6.88,6.88c3.80281,0 6.88,-3.07719 6.88,-6.88h16.0175c4.28656,0 6.51719,0.88688 8.17,2.365c1.62594,1.46469 2.94281,3.93719 4.085,7.74l27.52,111.0475c1.03469,3.93719 2.06938,7.99531 4.945,11.2875c1.19594,1.37063 2.70094,2.48594 4.515,3.3325c-2.01562,2.39188 -3.3325,5.36156 -3.3325,8.7075c0,7.56531 6.19469,13.76 13.76,13.76c7.56531,0 13.76,-6.19469 13.76,-13.76c0,-2.52625 -0.73906,-4.8375 -1.935,-6.88h21.07c-1.19594,2.0425 -1.935,4.35375 -1.935,6.88c0,7.56531 6.19469,13.76 13.76,13.76c7.56531,0 13.76,-6.19469 13.76,-13.76c0,-3.53406 -1.43781,-6.69187 -3.655,-9.1375c0.38969,-1.04812 0.22844,-2.23062 -0.40312,-3.14437c-0.645,-0.92719 -1.69313,-1.47813 -2.82188,-1.47813h-52.5675c-5.30781,0 -7.47125,-1.12875 -8.9225,-2.795c-1.43781,-1.65281 -2.31125,-4.54187 -3.3325,-8.385v-0.1075l-2.365,-9.3525h63.1025c1.43781,0 2.74125,-0.90031 3.225,-2.2575l24.725,-65.36c0.40313,-1.04812 0.25531,-2.23062 -0.38969,-3.15781c-0.645,-0.92719 -1.70656,-1.47812 -2.83531,-1.46469h-105.6725l-7.31,-29.3475c0,-0.06719 0,-0.14781 0,-0.215c-1.31687,-4.43437 -3.02344,-8.2775 -6.1275,-11.0725c-3.10406,-2.795 -7.47125,-4.085 -12.7925,-4.085h-22.8975c-0.1075,0 -0.215,0 -0.3225,0c-0.1075,0 -0.215,0 -0.3225,0zM57.7275,58.48h99.0075l-22.145,58.48h-62.35zM89.44,151.36c3.84313,0 6.88,3.03688 6.88,6.88c0,3.84313 -3.03687,6.88 -6.88,6.88c-3.84312,0 -6.88,-3.03687 -6.88,-6.88c0,-3.84312 3.03688,-6.88 6.88,-6.88zM134.16,151.36c3.84313,0 6.88,3.03688 6.88,6.88c0,3.84313 -3.03687,6.88 -6.88,6.88c-3.84312,0 -6.88,-3.03687 -6.88,-6.88c0,-3.84312 3.03688,-6.88 6.88,-6.88z" />
                        </g>
                      </g>
                    </g>
                  </svg>
                </NavLink>
              </NavItem>

              <UncontrolledDropdown nav inNavbar className="nav-icon">
                <DropdownToggle nav caret>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    x="0px"
                    y="0px"
                    width="32"
                    height="32"
                    viewBox="0 0 172 172"
                  >
                    <g
                      fill="none"
                      fill-rule="nonzero"
                      stroke="none"
                      stroke-width="1"
                      stroke-linecap="butt"
                      stroke-linejoin="miter"
                      stroke-miterlimit="10"
                      stroke-dasharray=""
                      stroke-dashoffset="0"
                      font-family="none"
                      font-weight="none"
                      font-size="none"
                      text-anchor="none"
                    >
                      <path d="M0,172v-172h172v172z" fill="none" />
                      <g fill="#ffffff">
                        <g id="surface1">
                          <path d="M86,10.32c-19.04094,0 -34.4,15.35906 -34.4,34.4v20.64c0,11.13969 5.45563,21.13719 13.76,27.4125v15.5875c0,0.36281 -0.06719,0.67188 -0.9675,1.505c-0.90031,0.83313 -2.49937,1.94844 -4.6225,3.01c-4.23281,2.12313 -10.34687,4.3 -16.555,7.31c-6.20812,3.01 -12.64469,6.83969 -17.63,12.3625c-4.98531,5.52281 -8.385,12.92688 -8.385,22.2525v3.44h137.6v-3.44c0,-9.40625 -3.39969,-16.83719 -8.385,-22.36c-4.98531,-5.52281 -11.42187,-9.28531 -17.63,-12.255c-6.20812,-2.96969 -12.33562,-5.21375 -16.555,-7.31c-2.10969,-1.04812 -3.73562,-2.06937 -4.6225,-2.9025c-0.88687,-0.83312 -0.9675,-1.1825 -0.9675,-1.6125v-15.5875c8.30438,-6.27531 13.76,-16.27281 13.76,-27.4125v-20.64c0,-19.04094 -15.35906,-34.4 -34.4,-34.4zM86,17.2c15.35906,0 27.52,12.16094 27.52,27.52v20.64c0,9.48688 -4.95844,18.03313 -12.255,22.8975l-1.505,1.075v19.0275c0,2.66063 1.37063,5.01219 3.1175,6.665c1.74688,1.65281 3.93719,2.88906 6.3425,4.085c4.81063,2.39188 10.72313,4.515 16.555,7.31c5.83188,2.795 11.43531,6.16781 15.48,10.6425c3.35938,3.70875 5.30781,8.46563 6.02,14.2975h-122.55c0.71219,-5.76469 2.67406,-10.46781 6.02,-14.19c4.04469,-4.48812 9.64813,-7.91469 15.48,-10.75c5.83188,-2.83531 11.75781,-5.02562 16.555,-7.4175c2.39188,-1.19594 4.60906,-2.45906 6.3425,-4.085c1.73344,-1.62594 3.1175,-3.91031 3.1175,-6.5575v-19.0275l-1.505,-1.075c-7.29656,-4.86437 -12.255,-13.41062 -12.255,-22.8975v-20.64c0,-15.35906 12.16094,-27.52 27.52,-27.52z" />
                        </g>
                      </g>
                    </g>
                  </svg>
                </DropdownToggle>
                <DropdownMenu right>
                  <DropdownItem>Option 1</DropdownItem>
                  <DropdownItem>Option 2</DropdownItem>
                  <DropdownItem divider />
                  <DropdownItem>Reset</DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}
