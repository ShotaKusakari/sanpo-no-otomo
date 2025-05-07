"use client";
import { Box, Button, Container, Paper, Typography } from "@mui/material";
import WeatherSelector from "./WeatherSelector";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function TopicGenerationPage() {
    const [selectedWeather, setSelectedWeather] = useState<string>("");
    const router = useRouter();

    const handleGenerateTopic = () => {
        router.push("/topic_generation/topic_display");
    }

    return (
        <Container maxWidth="sm" sx={{ mt: 4 }}>
            <Paper
                elevation={3}
                sx={{
                    p: 4,
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
                        mb: 4,
                        fontSize: {
                            xs: '1.5rem',
                            sm: '2rem',
                            md: '2.5rem'
                        }
                    }}
                >
                    お散歩お題作成
                </Typography>

                <WeatherSelector
                    selectedWeather={selectedWeather}
                    onWeatherSelect={setSelectedWeather}
                />

                <Box sx={{ mt: 4, textAlign: 'center' }}>
                    <Button
                        variant="contained"
                        sx={{
                            borderRadius: 8,
                            px: { xs: 4, sm: 6, md: 8 },
                            py: { xs: 1.5, sm: 2, md: 2.5 },
                            background: 'linear-gradient(45deg, #2196F3 30%, #21CBF3 90%)',
                            color: 'white',
                            fontWeight: 'bold',
                            fontSize: {
                                xs: '1rem',
                                sm: '1.2rem',
                                md: '1.3rem'
                            },
                            '&:hover': {
                                background: 'linear-gradient(45deg, #1976D2 30%, #00BCD4 90%)',
                            }
                        }}
                        onClick={handleGenerateTopic}
          >
                    お題を生成する
                </Button>
            </Box>
        </Paper>
    </Container >
  );
}
