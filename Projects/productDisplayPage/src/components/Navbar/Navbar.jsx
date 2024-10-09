import "./navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar" role="navigation" aria-label="Main navigation">
      <span className="company-title">Company name</span>
      <ul className="navbar__link-container">
        <li>
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#">Category</a>
        </li>
        <li>
          <a href="#">Category 2</a>
        </li>
        <li className="navbar__icon-container">
          <svg
            aria-label="Wishlist Icon"
            width="20px"
            height="20px"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M12 6.00019C10.2006 3.90317 7.19377 3.2551 4.93923 5.17534C2.68468 7.09558 2.36727 10.3061 4.13778 12.5772C5.60984 14.4654 10.0648 18.4479 11.5249 19.7369C11.6882 19.8811 11.7699 19.9532 11.8652 19.9815C11.9483 20.0062 12.0393 20.0062 12.1225 19.9815C12.2178 19.9532 12.2994 19.8811 12.4628 19.7369C13.9229 18.4479 18.3778 14.4654 19.8499 12.5772C21.6204 10.3061 21.3417 7.07538 19.0484 5.17534C16.7551 3.2753 13.7994 3.90317 12 6.00019Z"
              stroke="#788896"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>{" "}
          <a href="#">Wishlist</a>
        </li>
        <li className="navbar__icon-container">
          <svg
            aria-label="Shopping cart Icon"
            width="20px"
            height="20px"
            viewBox="0 -0.5 20 20"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            xmlns:xlink="http://www.w3.org/1999/xlink"
          >
            <title>shopping_cart_plus_round [#1130]</title>
            <desc>Created with Sketch.</desc>
            <defs></defs>
            <g
              id="Page-1"
              stroke="none"
              stroke-width="1"
              fill="none"
              fillRule="evenodd"
            >
              <g
                id="Dribbble-Light-Preview"
                transform="translate(-420.000000, -3120.000000)"
                fill="#788896"
              >
                <g id="icons" transform="translate(56.000000, 160.000000)">
                  <path
                    d="M371.000402,2972.95319 C371.000402,2972.39688 371.44825,2971.94539 372.000062,2971.94539 L372.999723,2971.94539 L372.999723,2970.57478 C372.999723,2970.01747 373.447571,2969.56698 373.999384,2969.56698 C374.551197,2969.56698 374.999045,2970.01747 374.999045,2970.57478 L374.999045,2971.94539 L375.998705,2971.94539 C376.550518,2971.94539 376.998366,2972.39688 376.998366,2972.95319 C376.998366,2973.5095 376.550518,2973.96099 375.998705,2973.96099 L374.999045,2973.96099 L374.999045,2974.60599 C374.999045,2975.16229 374.551197,2975.61379 373.999384,2975.61379 C373.447571,2975.61379 372.999723,2975.16229 372.999723,2974.60599 L372.999723,2973.96099 L372.000062,2973.96099 C371.44825,2973.96099 371.000402,2973.5095 371.000402,2972.95319 L371.000402,2972.95319 Z M379.457532,2976.16405 C379.367562,2976.63973 378.955702,2976.9844 378.474865,2976.9844 L369.541896,2976.9844 C369.054062,2976.9844 368.636204,2976.62864 368.556231,2976.14187 L367.362636,2968.92198 L380.81707,2968.92198 L379.457532,2976.16405 Z M382.996331,2966.90638 L380.997009,2966.90638 L377.475204,2960.57436 C377.198298,2960.09264 376.587506,2959.83665 376.108668,2960.11481 C375.63083,2960.39296 375.466886,2961.14579 375.743792,2961.62752 L378.688793,2966.90638 L369.309975,2966.90638 L372.254976,2961.58217 C372.531882,2961.10044 372.367938,2960.39296 371.8901,2960.11481 C371.411262,2959.83665 370.800469,2960.13799 370.523563,2960.61972 L367.001758,2966.90638 L365.002437,2966.90638 C363.791848,2966.90638 363.428971,2968.92198 365.335324,2968.92198 L366.722853,2977.31596 C366.883798,2978.28748 367.718515,2979 368.695184,2979 L379.303584,2979 C380.280253,2979 381.114969,2978.28748 381.275915,2977.31596 L382.663444,2968.92198 C384.58979,2968.92198 384.189926,2966.90638 382.996331,2966.90638 L382.996331,2966.90638 Z"
                    id="shopping_cart_plus_round-[#1130]"
                  ></path>
                </g>
              </g>
            </g>
          </svg>
          <a href="#">Shopping Cart</a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
