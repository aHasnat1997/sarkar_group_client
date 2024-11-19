import React, { ReactNode } from 'react';
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  IconButton,
  Typography,
} from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';

interface ResponsiveDialogProps {
  open: boolean;
  onClose: () => void;
  children: ReactNode;
  title?: ReactNode; // Allow title to be fully customized (e.g., strings, elements)
  footer?: ReactNode; // Actions like buttons can be passed here
  fullWidth?: boolean;
  maxWidth?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
}

export const ResponsiveDialog: React.FC<ResponsiveDialogProps> = ({
  open,
  onClose,
  children,
  title,
  footer,
  fullWidth = true,
  maxWidth = 'sm',
}) => {
  return (
    <Dialog
      open={open}
      onClose={onClose}
      fullWidth={fullWidth}
      maxWidth={maxWidth}
      aria-labelledby="dialog-title"
    >
      <DialogTitle sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        {title ? (
          <Typography variant="h6" id="dialog-title">
            {title}
          </Typography>) :
          (<Typography id="dialog-title"></Typography>)
        }
        <IconButton onClick={onClose} aria-label="close" size='small'>
          <CloseIcon />
        </IconButton>
      </DialogTitle>
      <DialogContent>{children}</DialogContent>
      {footer && <DialogActions>{footer}</DialogActions>}
    </Dialog>
  );
};
