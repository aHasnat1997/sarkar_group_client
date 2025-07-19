import { useState } from 'react';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';

type TMenuList = {
  list: React.ReactNode
};

export default function MenuButton({ buttonTitle, menuList }: { buttonTitle: React.ReactNode, menuList: TMenuList[] }) {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

  const handleClick = (event: React.MouseEvent<HTMLDivElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <>
      <div onClick={handleClick} id="basic-button" className='cursor-pointer'>
        {buttonTitle}
      </div>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
      >
        {
          menuList?.map((item, i) => <MenuItem
            key={i}
            onClick={handleClose}
          >
            {item.list}
          </MenuItem>)
        }
      </Menu>
    </>
  );
};
