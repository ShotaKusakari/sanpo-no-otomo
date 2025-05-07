'use client';

import React, { useState } from 'react';
import { AppBar, Toolbar, IconButton, Typography, Drawer, List, ListItem, ListItemText, Box } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import AccountCircle from '@mui/icons-material/AccountCircle';
import ExitToApp from '@mui/icons-material/ExitToApp';
import Login from '@mui/icons-material/Login';
import { useRouter } from 'next/navigation';

const Header = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const router = useRouter();
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const toggleDrawer = (open: boolean) => (event: React.KeyboardEvent | React.MouseEvent) => {
    if (
      event.type === 'keydown' &&
      ((event as React.KeyboardEvent).key === 'Tab' ||
        (event as React.KeyboardEvent).key === 'Shift')
    ) {
      return;
    }

    setDrawerOpen(open);
  };

  const handleMenuClick = (path: string) => {
    router.push(path);
    setDrawerOpen(false);
  };

  const handleLogin = () => {
    // TODO: ログイン処理 (仮)
    setIsLoggedIn(true);
  };

  const handleLogout = () => {
    // TODO: ログアウト処理 (仮)
    setIsLoggedIn(false);
  };

  const handleMyPage = () => {
    // TODO: マイページへの遷移処理
    router.push('/mypage'); // '/mypage' はマイページのパスに合わせて変更
  };

  return (
    <AppBar position="static">
      <Toolbar>
        <IconButton
          size="large"
          edge="start"
          color="inherit"
          aria-label="menu"
          sx={{ mr: 2 }}
          onClick={toggleDrawer(true)}
        >
          <MenuIcon />
        </IconButton>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1, textAlign: 'center' }}>
          さんぽのおとも
        </Typography>
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          {isLoggedIn ? (
            <>
              <IconButton color="inherit" onClick={handleMyPage}>
                <AccountCircle />
              </IconButton>
              <IconButton color="inherit" onClick={handleLogout}>
                <ExitToApp />
              </IconButton>
            </>
          ) : (
            <IconButton color="inherit" onClick={handleLogin}>
              <Login />
            </IconButton>
          )}
        </Box>
      </Toolbar>
      <Drawer open={drawerOpen} onClose={toggleDrawer(false)}>
        <List>
          <ListItem component="button" key="topic_generation" onClick={() => handleMenuClick('/topic_generation')}>
            <ListItemText primary="お題作成画面" />
          </ListItem>
          {/* TODO: ログアウト処理 */}
          <ListItem component="button" key="authentication" onClick={() => handleMenuClick('/authentication')}>
            <ListItemText primary="ログアウト" />
          </ListItem>
        </List>
      </Drawer>
    </AppBar>
  );
};

export default Header;