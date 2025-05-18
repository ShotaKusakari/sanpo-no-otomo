"use client";
import { Box, Button, Container, Paper, Typography } from "@mui/material";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function TopicDisplayPage() {
  const router = useRouter();
  const [topicTitle, setTopicTitle] = useState<string>('');

  useEffect(() => {
    setTopicTitle(sessionStorage.getItem('topicTitle') || '');
  }, []);

  return (
    <Container maxWidth="sm" sx={{ mt: 4 }}>
      <Paper
        elevation={3}
        sx={{
          p: { xs: 3, sm: 4, md: 5 },
          borderRadius: 4,
          background: 'linear-gradient(145deg, #ffffff 0%, #f0f7ff 100%)',
        }}
      >
        <Typography
          variant="h4"
          component="h1"
          gutterBottom
          sx={{
            color: '#2c3e50',
            fontWeight: 'bold',
            textAlign: 'center',
            mb: { xs: 3, sm: 4, md: 5 },
            fontSize: {
              xs: '1.5rem',
              sm: '2rem',
              md: '2.5rem'
            }
          }}
        >
          今日のお題
        </Typography>

        <Box sx={{
          my: 4,
          p: 3,
          borderRadius: 2,
          backgroundColor: '#f8f9fa',
          border: '2px solid #e9ecef'
        }}>
          <Typography
            sx={{
              textAlign: 'center',
              fontSize: {
                xs: '1.2rem',
                sm: '1.5rem',
                md: '1.8rem'
              },
              fontWeight: 'medium',
              color: '#495057'
            }}
          >
            {topicTitle}
          </Typography>
        </Box>

        <Box sx={{
          display: 'flex',
          gap: 2,
          flexDirection: { xs: 'column', sm: 'row' },
          justifyContent: 'center',
          mt: 4
        }}>
          <Button
            variant="contained"
            sx={{
              borderRadius: 8,
              px: { xs: 4, sm: 6 },
              py: { xs: 1, sm: 1.5 },
              fontSize: {
                xs: '0.9rem',
                sm: '1rem',
                md: '1.1rem'
              },
              background: 'linear-gradient(45deg, #4CAF50 30%, #81C784 90%)',
              '&:hover': {
                background: 'linear-gradient(45deg, #388E3C 30%, #66BB6A 90%)',
              }
            }}
            onClick={() => router.push('/topic_generation')}
          >
            完了！
          </Button>
          <Button
            variant="outlined"
            sx={{
              borderRadius: 8,
              px: { xs: 4, sm: 6 },
              py: { xs: 1, sm: 1.5 },
              fontSize: {
                xs: '0.9rem',
                sm: '1rem',
                md: '1.1rem'
              },
              color: '#6c757d',
              borderColor: '#6c757d',
              '&:hover': {
                borderColor: '#495057',
                color: '#495057',
              }
            }}
            onClick={() => router.push('/topic_generation')}
          >
            スキップ
          </Button>
        </Box>
      </Paper>
    </Container>
  );
}
