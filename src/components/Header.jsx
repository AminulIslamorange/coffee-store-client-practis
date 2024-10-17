import { NavLink } from "react-router-dom";


const Header = () => {
    return (

     <div> 
          <NavLink to='/'>Home</NavLink>
          <NavLink to='/users'>Users</NavLink>
          <NavLink to='/login'>Login</NavLink>
          <NavLink to='addCoffee'>Add Coffee</NavLink>
          <NavLink to='/signUp'>Sign Up</NavLink>
          <NavLink to='/'>Home</NavLink>
            
     
     </div>
    );
};

export default Header;