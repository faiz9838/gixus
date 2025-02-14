import "react";
import { Box, Typography, Grid, Stack } from "@mui/material";
import { BiPlay } from "react-icons/bi";
import { FaAward } from "react-icons/fa";
import { TbTrendingUp } from "react-icons/tb";
import WomenImage from "../assets/Navbar/Demo Image/women.jpg"
const ExecutiveSection = () => {
    return (
        <Box
            sx={{
                display: "flex",
                flexDirection: { xs: "column", md: "row" },
                alignItems: "center",
                gap: { xs: 0, sm: 0, md: 4 },
                position: "relative",
                height: { xs: "auto", sm: "auto", md: "100vh" },

            }}
        >
            <Box
                sx={{
                    zIndex: 2,
                    width: { xs: "95%", sm: "75%", md: "100%" },
                    height: { xs: "60vh", sm: "60vh", md: "70vh" },
                    borderRadius: 2,
                    overflow: "hidden", // Changed from visible to hide overflow
                    marginRight: { md: "0%" },

                    top: { xs: 30, sm: 50, md: 0 },
                    left: { xs: "0", sm: "0%", md: "5%" },
                    position: "relative", // Added for absolute positioning context
                }}
            >
                {/* Marketing Solutions Section */}
                <Box
                    sx={{
                        position: "absolute", // Changed to absolute positioning
                        width: { xs: "150%", md: "100%" }, // Wider on mobile
                        height: { xs: "60vh", sm: "60vh", md: "70vh" },
                        backgroundImage: `url(${WomenImage})`,
                        backgroundSize: "cover",
                        backgroundRepeat: 'no-repeat',
                        backgroundPosition: { xs: "right center", md: "center" }, // Right-align image on mobile
                        borderRadius: 2,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        left: { xs: "-60%", sm: "-55%", md: "0%" }, // Shift left to show right half
                        transform: { xs: "translateX(25%)", sm: "translateX(20%)", md: "none" }, // Fine-tune positioning
                        transition: "transform 0.3s ease",
                    }}
                >
                    {/* Rest of your animation/button code remains the same */}
                    <Box sx={{ position: "relative" }}>
                        {[0, 0.75, 1.5].map((delay, index) => (
                            <Box
                                key={index}
                                sx={{
                                    position: "absolute",
                                    inset: 0,
                                    borderRadius: "50%",
                                    border: "2px solid white",
                                    animation: `ripple 2s ease-out infinite`,
                                    animationDelay: `${delay}s`,
                                    opacity: 0,
                                }}
                            />
                        ))}
                        {/* Play Button */}
                        <Box
                            component="button"
                            sx={{
                                position: "relative",
                                width: 84,
                                height: 84,
                                backgroundColor: "primary.main",
                                borderRadius: "50%",
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                                border: "none",
                                cursor: "pointer",
                                transition: "transform 0.2s",
                                "&:hover": { transform: "scale(1.1)" },
                                "&:focus": {
                                    outline: "none",
                                    boxShadow: (theme) => `0 0 0 2px ${theme.palette.primary.light}`,
                                },
                            }}
                            aria-label="Play video"
                        >
                            <BiPlay style={{ width: 52, height: 52, color: "white" }} />
                        </Box>
                    </Box>
                </Box>

                {/* Keyframes remain the same */}
                <style>
                    {`
            @keyframes ripple {
                0% { transform: scale(1); opacity: 0.4; }
                100% { transform: scale(4); opacity: 0; }
            }
        `}
                </style>
            </Box>


            {/* Right Side - Text Content */}
            <Box sx={{
                width: { xs: "100%", md: "80vw" },
                paddingTop: { xs: 10, sm: 12, md: 10 },
                paddingLeft: { xs: 4, sm: 12, md: 9 },
                paddingRight: { xs: 4, sm: 12, md: 9 },
                paddingBottom: { xs: 4, sm: 14, md: 10 },
                backgroundColor: "#f7f7f7", height: "100%",

            }}>
                <Typography variant="h3" sx={{ fontSize: { xs: '3rem' } }} fontWeight="bold" color="black">
                    Meet the executives driving our success.
                </Typography>
                <Typography sx={{ color: "gray", mt: 2 }}>
                    Businesses operate in various industries, including technology, finance, healthcare,
                    retail, and manufacturing. They play a crucial role in the economy by providing goods,
                    services, and employment.
                </Typography>

                {/* Stats Section */}
                <Grid container spacing={3} sx={{ mt: 2 }}>
                    {/* Award Winning Company */}
                    <Grid item xs={12} md={6}>
                        <Stack direction="row" alignItems="center" spacing={2}>
                            <FaAward size={56} color="blue" />
                            <Box >
                                <Typography variant="h5" fontWeight="bold" color="black">Award Winning Company</Typography>
                            </Box>
                        </Stack>
                    </Grid>

                    {/* Economic Growth */}
                    <Grid item xs={12} md={6} sx={{ display: { xs: "none", sm: "none", md: "block" } }}>
                        <Stack direction="row" alignItems="center" spacing={2}>
                            <TbTrendingUp size={44} color="blue" />
                            <Box>
                                <Typography variant="h4" fontWeight="bold" color="blue">
                                    3.8X
                                </Typography>
                                <Typography color="gray">Economical Growth</Typography>
                            </Box>
                        </Stack>
                    </Grid>
                </Grid>
            </Box>
        </Box >
    );
};

export default ExecutiveSection;
