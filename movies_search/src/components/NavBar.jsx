import { Link, useNavigate } from "react-router-dom"
import { BiFastForwardCircle, BiCameraMovie } from "react-icons/bi"
import { useState } from "react"

const NavBar = () => {
  const [search, setSearch] = useState("")
  const navigate = useNavigate()

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if(!search) return

    navigate(`/search?q=${search}`);
    setSearch("")
  }


  return (
    <div>
        <nav id='navbar'>
            <h2>
            <img src="./logo.png"/>
            <Link to="/">Movies<span>Search</span></Link>
            </h2>
            <form onSubmit={handleSubmit}>
                <input type="text" name="" placeholder="Digite Um Filme" onChange={(e) => setSearch(e.target.value)} value={search}/>
                <button type="submit">Buscar</button>
            </form>
        </nav>
        <br />
    </div>
  )
}

export default NavBar