
import { Nav, NavLink, NavMenu } from "./NavbarElem";
// import { Input } from "@nextui-org/react";

// var request = new XMLHttpRequest();
// request.open("GET", "./ListOFGames.json", false);
// request.send(null)
// var GameList = JSON.parse(request.responseText)
// var SearchValue = ''
const Navbar = () => {
  return (
    <>
      <Nav>
        <NavMenu>
          <NavLink to="/">
            Games
          </NavLink>
          <NavLink to="/Player">
            Player
          </NavLink>
          {/* <Input
            clearable label="Search" placeholder="  " initialValue=""
            // onChange={event => {
            //   SearchValue = event.target.value
            //   Object.entries(GameList).map(([Game], i) => {
            //     //console.log(SearchValue, (Game.indexOf(SearchValue) !=-1? true: false))
            //     var ContainsSearch = Game.indexOf(SearchValue) !=-1? true: false
            //     console.log(Game, ContainsSearch)
            //   })
            // }}
          /> */}
        </NavMenu>
      </Nav>
    </>
  );
};
export default Navbar;