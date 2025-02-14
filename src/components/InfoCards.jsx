import "react";
import { Box, Typography, Grid } from "@mui/material";
import { AiOutlineAim, AiOutlinePieChart, AiOutlineBarChart } from "react-icons/ai";
import CountUp from "react-countup";

const StatsCards = () => {
    const servicesList = [
        "Growth Method Analysis",
        "Business Management Consultation",
        "Team Building Leadership",
        "Assessment Report Analysis",
    ];

    const infoCards = [
        {
            icon: <AiOutlineAim size={64} style={{ color: "#3B82F6" }} />,
            title: "Approach",
            content: "Continued at necessary breakfast. Surrounded air motionless she end literature. Gay direction neglected but supported yet her.",
        },
        {
            icon: <AiOutlinePieChart size={64} style={{ color: "#3B82F6" }} />,
            title: "Information",
            content: "Continued at necessary breakfast. Surrounded air motionless she end literature. Gay direction neglected but supported yet her.",
        },
        {
            icon: <AiOutlineBarChart size={64} style={{ color: "#3B82F6" }} />,
            title: "Goal",
            content: "Continued at necessary breakfast. Surrounded air motionless she end literature. Gay direction neglected but supported yet her.",
        },
    ];

    return (
        <Box sx={{ paddingLeft: 6, paddingRight: 3, paddingBottom: 6, height: "auto" }}>
            <Grid container spacing={3} sx={{ display: "flex", gap: 2, justifyContent: "center", paddingTop: "5rem", }}>
                {/* Left Card - 28K Stats */}
                <Grid
                    item
                    xs={10}
                    md={3}
                    sx={{
                        bgcolor: "#d8e7ef", // Equivalent to bg-slate-50
                        p: 8,
                        paddingLeft: 8,
                        clipPath: "polygon(0 0, 100% 0, 100% calc(100% - 54px), calc(100% - 54px) calc(100% - 54px), calc(100% - 54px) 100%, 0 100%)",
                        borderRadius: "16px", // Apply rounding to corners
                        overflow: "hidden", // Ensures borderRadius is visible

                        width: "10vw"
                    }}
                >
                    <Typography variant="h1" fontWeight="bold" color="black" mb={2}>
                        <CountUp start={1} end={28} duration={2} separator="," suffix="K" />
                    </Typography>

                    <Typography color="black" variant="h6" fontWeight="bold" mb={3}>
                        Customers are served in our consulting services
                    </Typography>

                    {servicesList.map((service, index) => (
                        <Box key={index} display="flex" alignItems="center" gap={2} mb={2}>
                            <Box
                                sx={{
                                    width: 20,
                                    height: 20,
                                    borderRadius: "50%",

                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "center",
                                }}
                            >
                                <Box sx={{
                                    width: 8, height: 8, borderRadius: "50%",

                                    bgcolor: "#3B82F6"
                                }} />
                            </Box>
                            <Typography sx={{ color: "gray" }}>{service}</Typography>
                        </Box>
                    ))}
                </Grid>

                {/* Right Card - Info Cards */}
                <Grid
                    item
                    xs={10}
                    md={8}
                    sx={{
                        bgcolor: "#1E293B", // Equivalent to bg-gray-900
                        color: "white",
                        p: 0,
                        clipPath: "polygon(54px 0, 100% 0, 100% 100%, 0 100%, 0 50px, 54px 50px)",
                        borderRadius: "16px",
                        display: "flex",
                        justifyContent: "center",
                        height: "auto",

                    }}
                >
                    <Grid
                        container
                        spacing={3}
                        sx={{
                            justifyContent: "center",
                            alignItems: "center",
                            width: "auto",
                            height: "auto",
                            justifyItems: "center"


                        }}
                    >
                        {infoCards.map((card, index) => (
                            <Grid
                                key={index}
                                item
                                xs={10} // Full width on small screens
                                md={4} // 4 columns wide on medium+ screens
                                sx={{

                                    width: "auto",
                                    height: { xs: "60vh", sm: "60vh", md: "60vh" },
                                    display: "flex",
                                    flexDirection: "column",
                                    alignItems: "start",
                                    textAlign: "start", // Center text for better look
                                    p: 2,
                                    justifyContent: "center"
                                }}
                            >

                                {card.icon}
                                <Typography variant="h4" fontWeight="bold" mt={2} mb={2}>
                                    {card.title}
                                </Typography>
                                <Typography sx={{ color: "#94A3B8", fontSize: "0.9rem" }}>
                                    {card.content}
                                </Typography>
                            </Grid>

                        ))}
                    </Grid>

                </Grid>
            </Grid>
        </Box>
    );
};

export default StatsCards;
