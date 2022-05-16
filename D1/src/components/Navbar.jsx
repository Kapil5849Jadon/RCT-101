import React from "react";
import Link from "./Link";
import Button from "./Button";
import Logo from "./Logo";

const Navbar = ()=>{
    return <>

        <nav id="navbar" >
            <Logo />
            <Link />
            <Button />
        </nav>
    </>
}
// style={{border:"1px solid black",display:"flex"}}
export default Navbar;