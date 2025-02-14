import React from "react";
import { Box, Grid, Typography, Paper } from "@mui/material";
import CountUp from "react-countup";

const stats = [
    { value: 56, suffix: "K", label: "CLIENTS AROUND THE WORLD" },
    { value: 30, suffix: "+", label: "AWARD WINNING" },
    { value: 97, suffix: "%", label: "BUSINESS GROWTH" },
    { value: 60, suffix: "+", label: "TEAM MEMBERS" },
];

const StatsSection = () => {
    return (
        <Box sx={{ py: 5, px: 16 }}>
            <Grid container spacing={1} justifyContent="center">
                {stats.map((stat, index) => (
                    <Grid item xs={12} sm={6} md={3} key={index}>
                        <Paper
                            variant="outlined"
                            sx={{
                                display: "flex",
                                flexDirection: "column",
                                alignItems: "center",
                                justifyContent: "center",
                                p: 4,
                                border: ".5px solid gray",
                                borderRadius: "12px",
                                minHeight: "100%",  // Equal height
                                textAlign: "center",
                            }}
                        >
                            <Typography variant="h2" fontWeight="bold">
                                <CountUp end={stat.value} duration={3} suffix={stat.suffix} />
                            </Typography>
                            <Typography variant="body2" color="textSecondary">
                                {stat.label}
                            </Typography>
                        </Paper>
                    </Grid>
                ))}
            </Grid>
        </Box>
    );
};

export default StatsSection;
