"use client";

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { TextField, Button, Grid, Container } from '@mui/material';

export default function AuthenticationPage() {
  const [password, setPassword] = useState('');
  const router = useRouter();

  const handlePasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
  };

  const handleAuthentication = () => {
    if (password === 'osanpo') {
      router.push('/topic_generation');
    } else {
      alert('合言葉が間違っています');
    }
  };

  return (
    <Container maxWidth="sm">
      <Grid container spacing={2} direction="column" alignItems="center" justifyContent="center" style={{ minHeight: '50vh' }}>
        <Grid size={{ xs: 12, sm: 6 }}>
          <TextField
            label="合言葉を入力してください"
            variant="outlined"
            value={password}
            onChange={handlePasswordChange}
            fullWidth
            sx={{
              '& .MuiOutlinedInput-root': {
                backgroundColor: 'white',
              }
            }}
          />
        </Grid>
        <Grid style={{textAlign: 'center'}}>
          <Button variant="contained" color="primary" onClick={handleAuthentication}>
            認証
          </Button>
        </Grid>
      </Grid>
    </Container>
  );
}