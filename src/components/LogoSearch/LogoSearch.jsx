import React from 'react'
import './LogoSearch.css'
const LogoSearch = () => {
  return (
    <div className="LogoSearch">
        <img src='https://is3-ssl.mzstatic.com/image/thumb/Purple60/v4/5e/3f/de/5e3fdea0-94db-1908-ce3f-2d7e407b71fd/source/512x512bb.jpg' alt='l' height='50px' width='50px'></img>
        {/* l-logo
            s- search
             */
        }
        <div className="SearchInput">
            <input type="text" placeholder='Search'/>
            <div className="SearchIcon">
            <img src='https://th.bing.com/th/id/R.e133029a9d2d6af4dc98fdfafe1c3924?rik=c9kWNVY5sc0Kng&riu=http%3a%2f%2fwww.clker.com%2fcliparts%2fg%2fY%2fP%2fo%2fh%2fU%2fsearch-logo-hi.png&ehk=P6kODexMGBmdwzU4vP3r6F6qBj0%2b1vivzypylcz2lng%3d&risl=&pid=ImgRaw&r=0' alt='l' height='20px' width='20px'></img>
            </div>
        </div>
    </div>
  )
}

export default LogoSearch
