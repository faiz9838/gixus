import { useState } from "react";
import { Box, Typography, Avatar, IconButton } from "@mui/material";
import { FaLinkedin, FaDribbble, FaFacebookF, FaPlus } from "react-icons/fa";
import CardOne from '../assets/Team/CardOne.jpg'
import CardTwo from '../assets/Team/CardTwo.jpg'
import CardThree from '../assets/Team/CardThree.jpg'
import CardFour from '../assets/Team/CardFour.jpg'
import CardFive from '../assets/Team/CardFive.jpg'
import CardSix from '../assets/Team/CardSix.jpg'
import PropTypes from "prop-types";
const TeamCard = ({ member }) => {
    const [, setHover] = useState(false);

    return (
        <Box
            sx={{
                position: "relative",
                width: { xs: 281, sm: 281, md: 222 },
                textAlign: "start",
                cursor: "pointer",
                transition: "0.3s",
                "&:hover .social-overlay": { opacity: 1, transform: "translateY(0)" },
                "&:hover .plus-icon": { transform: "rotate(45deg)" },

            }}
            onMouseEnter={() => setHover(true)}
            onMouseLeave={() => setHover(false)}
        >
            {/* Profile Image with Clip-Path Effect */}
            <Avatar
                src={member.img || ""}
                alt={member.name || ""}
                sx={{
                    width: { xs: 280, sm: 280, md: 221 },
                    height: { xs: 280, sm: 280, md: 221 },
                    borderRadius: 2,
                    clipPath: "circle(0 0, 100% 0, 100% 80%, 50% 100%, 0 80%)",
                    transition: "0.3s",
                }}
            />

            {/* Social Media Overlay (Vertical on Hover) */}
            <Box
                className="social-overlay"
                sx={{
                    position: "absolute",
                    top: { xs: "30%", sm: "30%", md: "20%" },
                    left: "65%",
                    transform: "translateY(-40%)",
                    display: "flex",
                    flexDirection: "column",
                    gap: 1,
                    opacity: 0,
                    transition: "0.3s ease-in-out",
                }}
            >
                <IconButton sx={{ bgcolor: "white", boxShadow: 1 }}>
                    <FaLinkedin color="#0077B5" />
                </IconButton>
                <IconButton sx={{ bgcolor: "white", boxShadow: 1 }}>
                    <FaDribbble color="#E4405F" />
                </IconButton>
                <IconButton sx={{ bgcolor: "white", boxShadow: 1 }}>
                    <FaFacebookF color="#1877F2" />
                </IconButton>
            </Box>

            {/* Plus Icon at the Bottom (Rotates on Hover) */}
            <IconButton
                className="plus-icon"
                sx={{
                    bgcolor: "black",
                    color: "white",
                    position: "absolute",
                    bottom: "50px",
                    left: "65%",
                }}
            >
                <FaPlus />
            </IconButton>

            {/* Name & Role at Bottom */}
            <Box mt={3}>
                <Typography fontSize="14px" color="gray">
                    {member?.role || ""}
                </Typography>
                <Typography fontWeight="bold">{member.name}</Typography>
            </Box>
        </Box>
    );
};

// **PropTypes Validation**
TeamCard.propTypes = {
    member: PropTypes.shape({
        img: PropTypes.string,
        name: PropTypes.string.isRequired,
        role: PropTypes.string.isRequired,
    }).isRequired,
};


export default function TeamSection() {
    const teamMembers = [
        { name: "Aleesha Brown", role: "CEO & Founder", img: CardOne },
        { name: "Kevin Martin", role: "Product Manager", img: CardTwo },
        { name: "Sarah Albert", role: "Financial Consultant", img: CardThree },
        { name: "Amanulla Joey", role: "Developer", img: CardFour },
        { name: "Kamal Abraham", role: "Co Founder", img: CardFive },
        { name: "Daniyel", role: "Marketing Leader", img: CardSix },
    ];

    return (
        <Box textAlign="center">


            <Box
                sx={{
                    display: "flex",
                    flexDirection: "column",
                    gap: { xs: 6, sm: 6, md: 6 },
                    width: "100%",
                    maxWidth: "1200px",
                    mx: "auto",
                    px: 6,
                    paddingBottom: 4
                }}
            >
                {/* First Grid: Left-aligned, taking 50% width */}
                <Box sx={{ display: "flex", flexDirection: { xs: "column", sm: "column", md: "row" }, gap: { xs: 6, sm: 6, md: 2 }, width: "100%", ml: "auto", justifyContent: { xs: "center", sm: "center", md: "flex-start" }, alignItems: { xs: "center", sm: "center", md: "center" } }}>
                    {teamMembers.slice(0, 3).map((member, index) => (
                        <TeamCard key={index} member={member} />
                    ))}
                </Box>

                {/* Second Grid: Right-aligned, taking 50% width */}
                <Box sx={{ display: "flex", flexDirection: { xs: "column", sm: "column", md: "row" }, gap: { xs: 6, sm: 6, md: 2 }, width: "100%", mr: "auto", justifyContent: { xs: "center", sm: "center", md: "flex-end" }, alignItems: { xs: "center", sm: "center", md: "center" } }}>
                    {teamMembers.slice(3, 6).map((member, index) => (
                        <TeamCard key={index + 3} member={member} />
                    ))}
                </Box>
            </Box>
        </Box>
    );
}
