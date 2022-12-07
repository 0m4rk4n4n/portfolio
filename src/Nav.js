import React from 'react';
import AnchorLink from 'react-anchor-link-smooth-scroll'
const Nav=()=>
{
return(<div className="App">
  
   <div className="logo">

   </div>
   <div className="navBar">
   <nav className="container-fluid navbar navbar-expand-lg navbar-light bg-dark">

   <img src="logo.png" className="img-fluid pic" />

 <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
  
   <div className="navbar-toggler" data-target="#navbarsExampleDefault" data-toggle="collapse" aria-expanded="true" >
        <span className="line"></span> 
        <span className="line"></span> 
        <span className="line" style={{marginBottom:20}}></span>
</div>

 </button>
 <div className="collapse navbar-collapse floattoright" id="navbarNavDropdown">
   <ul className="navbar-nav">
     <li className="nav-item active">
     <AnchorLink href='#education'>Education</AnchorLink>
     
     </li>
     <li className="nav-item">
     <AnchorLink href='#projects'>projects</AnchorLink>
     </li>
     <li className="nav-item">
     <AnchorLink href='#skills'>Skills</AnchorLink>
     </li>
     <li className="nav-item">
     <AnchorLink href='#location'>Location</AnchorLink>
     </li>



   </ul>
 </div>
</nav>
   </div>
   </div>
 )
}
export default Nav

