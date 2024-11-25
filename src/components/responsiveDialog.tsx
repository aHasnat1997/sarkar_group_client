import React, { ReactNode } from 'react';
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  IconButton,
  Typography,
  Slide,
  useTheme,
  useMediaQuery
} from '@mui/material';
import CloseIcon from '@mui/icons-material/Close'
import { TransitionProps } from '@mui/material/transitions';

interface ResponsiveDialogProps {
  open: boolean;
  onClose: () => void;
  children: ReactNode;
  title?: ReactNode;
  footer?: ReactNode;
  fullWidth?: boolean;
  maxWidth?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
  isDrawer?: boolean;
}

const SlideTransition = React.forwardRef(function SlideTransition(
  props: TransitionProps & { children: React.ReactElement },
  ref: React.Ref<unknown>
) {
  return <Slide direction="left" ref={ref} {...props} />;
});

export const ResponsiveDialog: React.FC<ResponsiveDialogProps> = ({
  open,
  onClose,
  children,
  title,
  footer,
  fullWidth = true,
  maxWidth = 'sm',
  isDrawer = false,
}) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <Dialog
      fullScreen={isDrawer}
      open={open}
      onClose={onClose}
      fullWidth={fullWidth}
      maxWidth={isDrawer ? false : maxWidth} // Drawer ignores maxWidth
      aria-labelledby="dialog-title"
      TransitionComponent={isDrawer ? SlideTransition : undefined}
      PaperProps={{
        sx: isDrawer
          ? {
            width: isMobile ? '80%' : '60%', // Width adjustment for drawer
            margin: 0,
            borderRadius: 0,
            position: 'fixed',
            right: 0,
            top: 0,
            bottom: 0,
            overflow: 'hidden', // Prevent overflow
            display: 'flex', // Stack content vertically
            flexDirection: 'column',
          }
          : undefined,
      }}
    >
      {title && (
        <>
          <DialogTitle
            sx={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
            }}
          >
            <Typography variant="h6" id="dialog-title">
              {title}
            </Typography>
          </DialogTitle>
        </>
      )}
      <IconButton
        aria-label="close"
        onClick={onClose}
        sx={(theme) => ({
          position: 'absolute',
          right: 8,
          top: 8,
          color: theme.palette.grey[500],
        })}
      >
        <CloseIcon />
      </IconButton>
      <DialogContent
        sx={{
          flex: 1, // Allow content to take remaining space
          padding: 2,
          overflowY: 'auto', // Enable scrolling for overflow content
        }}
      >
        {children}
      </DialogContent>
      {footer && (
        <DialogActions
          sx={{
            padding: 2,
            borderTop: `1px solid ${theme.palette.divider}`, // Footer border for clarity
          }}
        >
          {footer}
        </DialogActions>
      )}
    </Dialog>
  );
};
