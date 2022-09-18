// use sfc to use extension to generate boilerplate component (stateless function compoenet) 
const Navbar = () => { // depends on us we can have arrow func or normal func
    return ( 
        // inside here we need to return some kind of template
        <nav className="navbar">
            <h1>the blog</h1>
            <div className="links">
                <a href="/">Home</a>
                <a href="/create">blog</a>
            </div>
        </nav>
     );
}
 
export default Navbar;