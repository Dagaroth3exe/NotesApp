import React from 'react'
import { useNavigate } from 'react-router-dom';
import ProfileInfo from '../Cards/ProfileInfo';
import Searchbar from '../Search/Searchbar';


const Navbar = () => {

  const [searchQuery, setSearchQuery] = React.useState("");

  const navigate = useNavigate();

  const onLogout = () => {
    navigate("/login");
  };

  const handleSearch = () => {};

  const onClearSearch = () => setSearchQuery("");


  return (
    <div className="navbar bg-white flex items-center justify-between py-2 drop-shadow-md px-4">
      <h2 className="text-3xl font-medium text-black pt-2">Notes</h2>

      <Searchbar
        value={searchQuery}
        onChange={({ target }) => setSearchQuery(target.value)}
        handleSearch={handleSearch}
        onClearSearch={onClearSearch}
      />
      
      <ProfileInfo onLogout={onLogout} />
    </div>
  );
};

export default Navbar;
