import { useState } from 'react';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';

type TMenuList = {
  list: React.ReactNode
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export default function MenuButton({ buttonTitle, menuList }: { buttonTitle: any, menuList: TMenuList[] }) {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <>
      <Button
        id="basic-button"
        aria-controls={open ? 'basic-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
      >
        {buttonTitle}
      </Button>
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
