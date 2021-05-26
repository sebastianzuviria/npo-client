import React, { useEffect, useState } from 'react';

const MenuView = ({ icon, menuRef, scrollTo = '', pace = null }) => {
  const [left, setLeft] = useState(0);

  useEffect(() => {
    if (scrollTo === 'right') setLeft(pace || 150);
    else if (scrollTo === 'left') setLeft(-pace || -150);
  }, []);

  const handleClick = () => {
    const { current } = menuRef;
    current.scrollLeft += left;
  };
  return (
    <button className="nav__color border-0 px-0 py-1">
      <span
        onClick={handleClick}
        className={`d-flex nav-link nav__color ${icon}`}
      />
    </button>
  );
};

export default MenuView;
