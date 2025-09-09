// MegaMenuPolicies.jsx
import * as React from 'react';
import { Box, Paper, Grid, Typography, List, ListItemButton } from '@mui/material';
import { Link } from 'react-router-dom';
import { POLICIES } from './PoliciesData';

export default function MegaMenuPolicies({ anchorEl, open, onClose }) {
  // close when mouse leaves the panel
  const handleMouseLeave = () => onClose?.();

  return (
    <Box
      role="dialog"
      aria-label="Policies menu"
      tabIndex={-1}
      onMouseLeave={handleMouseLeave}
      sx={{
        position: 'absolute',
        left: 0,
        right: 0,
        top: '100%',
        zIndex: 1200,
        display: open ? 'block' : 'none',
      }}
    >
      <Paper
        elevation={8}
        sx={{
          mx: 'auto',
          mt: 1,
          maxWidth: '1200px',
          px: 3,
          py: 3,
          bgcolor: '#1f1f1f',
          color: '#fff',
          borderRadius: 2,
        }}
      >
        <Typography variant="h6" sx={{ mb: 2, fontWeight: 800 }}>
          Policies
        </Typography>

        <Grid container spacing={4}>
          {POLICIES.map((col) => (
            <Grid item xs={12} sm={6} md={3} key={col.title}>
              <Typography
                variant="subtitle2"
                sx={{ color: 'rgba(255,255,255,.7)', mb: 1, letterSpacing: '.02em' }}
              >
                {col.title}
              </Typography>

              <List dense sx={{ p: 0 }}>
                {col.items.map((it) => (
                  <ListItemButton
                    key={it.to}
                    component={Link}
                    to={it.to}
                    onClick={onClose}
                    sx={{
                      px: 0,
                      color: '#fff',
                      '&:hover': { color: '#8ee1ff' },
                    }}
                  >
                    {it.label}
                  </ListItemButton>
                ))}
              </List>
            </Grid>
          ))}
        </Grid>
      </Paper>
    </Box>
  );
}
