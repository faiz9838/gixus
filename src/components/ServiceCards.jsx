import { useState } from "react";
import { Box, Card, Grid2, Typography } from "@mui/material";
import { BiRightArrowAlt } from "react-icons/bi";
import HectaIcon from '../assets/icons/hectagonal_icon.png'
import BarGraphIcon from '../assets/icons/bar_graph.png'
import ManRating from '../assets/icons/man_goal.png'
import { Link } from "react-router-dom";
const services = [
    {
        title: "Advanced Business Intelligence",
        description:
            "Seeing rather her you not esteem men settle genius excuse. Deal say over you age devonshire Comparison new ham melancholy son themselves instrument out reasonably.",
        icon: HectaIcon,
        id: "01",
        route: "/service/pages/Bussiness-intelligence",
    },
    {
        title: "Business Research And Development",
        description:
            "Explore the research and development aspects that can drive your business forward with cutting-edge solutions.",
        icon: BarGraphIcon,
        id: "02",
        route: "/service/pages/Bussiness-development",
    },
    {
        title: "Digital Project Management System",
        description:
            "Optimize workflows and enhance project execution with an intelligent digital management system.",
        icon: ManRating,
        id: "03",
        route: "/service/pages/Project-management",
    },
];


const ServiceCards = () => {
    const [hovered, setHovered] = useState(null);

    return (
        <Grid2
            sx={{
                display: "flex",
                justifyContent: "center",
                gap: 3,
                flexWrap: "wrap",
                padding: "1rem",

                height: "auto",

            }}
        >
            {services.map((service, index) => (
                <Card
                    key={index}
                    onMouseEnter={() => setHovered(index)}
                    onMouseLeave={() => setHovered(null)}
                    sx={{
                        width: { xs: "480px", sm: "480px", md: hovered === index ? "445px" : "300px" },
                        height: { xs: "auto", sm: "auto", md: "80vh" },
                        transition: { md: "all 0.3s ease-in-out" }, // Only transition on md and larger
                        padding: { xs: "1rem", sm: "2rem", md: "2rem" },
                        borderRadius: "12px",
                        boxShadow: {
                            xs: "0px 4px 10px rgba(0,0,0,0.1)",
                            sm: "0px 4px 10px rgba(0,0,0,0.1)",
                            md: hovered === index ? "0px 4px 20px rgba(0,0,0,0.2)" : "0px 4px 10px rgba(0,0,0,0.1)",
                        },
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "space-between",
                        backgroundColor: {
                            xs: "#fff",
                            sm: "#fff",
                            md: hovered === index ? "#f5f8ff" : "#fff",
                        },
                        position: "relative",
                    }}
                >
                    {/* Icon and Title */}
                    <img
                        src={service.icon}
                        alt={service.title}
                        style={{
                            width: 74,
                            height: 74,
                            objectFit: "contain",
                        }}
                    />
                    <Link
                        to={service.route}
                        style={{ textDecoration: "none" }}
                    >
                        <Typography
                            variant="h5"
                            fontWeight={700}
                            sx={{
                                color: "black", // Default color
                                transition: "color 0.3s ease-in-out", // Smooth transition effect
                                "&:hover, &:focus": {
                                    color: "blue", // Change color on hover or focus (click)
                                }
                            }}
                        >
                            {service.title}
                        </Typography>
                    </Link>

                    {/* Description (Fixed Layout Shift) */}
                    <Box sx={{ position: "relative", paddingBottom: { xs: "2rem", sm: "2rem", md: hovered === index ? "4rem" : "0rem" } }}>
                        <Typography
                            variant="body1"
                            sx={{
                                color: "#555",
                                visibility: {
                                    xs: "visible",
                                    sm: "visible",
                                    md: hovered === index ? "visible" : "hidden",
                                },
                                opacity: {
                                    xs: 1,
                                    sm: 1,
                                    md: hovered === index ? 1 : 0,
                                },
                                position: {
                                    xs: "relative",
                                    sm: "relative",
                                    md: hovered === index ? "relative" : "absolute",
                                },
                                transition: { md: "opacity 0.3s ease-in-out" },
                            }}
                        >
                            {service.description}
                        </Typography>
                    </Box>

                    {/* Footer with ID and Arrow */}
                    <Box display="flex" justifyContent="space-between" alignItems="center"
                        flexDirection='row-reverse'
                    >
                        <Typography variant="h3" sx={{ color: "#E0E7FF", fontWeight: "bold" }}>
                            {service.id}
                        </Typography>
                        <Box
                            sx={{
                                width: 40,
                                height: 40,
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                                backgroundColor: "#1E3A8A",
                                borderRadius: "50%",
                                cursor: "pointer",
                                transition: "transform 0.3s",
                                transform: "rotate(-45deg)", // Rotates the button
                                "&:hover": { md: { transform: "scale(1.1) rotate(0deg)" } }, // Keeps rotation on hover
                            }}
                        >
                            <BiRightArrowAlt size={24} color="white" />
                        </Box>

                    </Box>
                </Card>

            ))}
        </Grid2>
    );
};

export default ServiceCards;
