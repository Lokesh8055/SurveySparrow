import styled from "styled-components";

const NavbarWrapper = styled.nav`
  grid-column: center-start / center-end;
  .nav-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 1rem;
  }
  .nav-toggle {
    font-size: 3rem;
    color: var(--clr-tertiary);
    background: transparent;
    border-color: transparent;
    transition: var(--transition);
    cursor: pointer;
  }
  .nav-toggle:hover {
    transform: rotate(90deg);
  }
  .logo {
    height: 40px;
  }
  .links {
    li {
      padding: 0.5rem 1.5rem;
      &:last-child {
        border-radius: 25px;
        background-color: var(--clr-white);
        font-weight: bold;

        a {
          color: var(--clr-black);
        }
      }
    }
    a {
      font-size: 1.6rem;
      text-transform: capitalize;
      letter-spacing: var(--spacing);
      color: var(--clr-text);
      display: block;
      transition: var(--transition);

      &:hover {
        padding-left: 1.5rem;
      }
    }
  }
  .links-container {
    height: 0;
    overflow: hidden;
    transition: var(--transition);
  }
  .show-container {
    height: 10rem;
  }
  @media screen and (min-width: 800px) {
    .nav-center {
      max-width: 1170px;
      margin: 2rem auto 5rem auto;
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 1rem;
    }
    .nav-header {
      padding: 0;
    }
    .nav-toggle {
      display: none;
    }
    .links-container {
      height: auto !important;
    }
    .links {
      display: flex;
    }
    .links a {
      padding: 0;
      margin: 0 0.5rem;
    }
    .links a:hover {
      padding: 0;
      background: transparent;
    }
  }
`;

export default NavbarWrapper;
