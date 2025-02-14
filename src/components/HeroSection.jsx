import 'react';
import {
    Box,
    Container,
    Typography,
    Button,
    Grid,
    styled
} from '@mui/material';
import PieChartOutlineOutlinedIcon from '@mui/icons-material/PieChartOutlineOutlined';
import RocketOutlinedIcon from '@mui/icons-material/RocketOutlined';
import { keyframes } from '@mui/system';
import WomenImage from "../assets/Hero/women.png"
import BackgroundDesign from "../assets/Hero/anim-2.png"
import BlurryShape from './BlurryShape';

// Animation keyframes
const fadeInUp = keyframes`
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const fadeInLeft = keyframes`
  from {
    opacity: 0;
    transform: translateX(-20px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
`;

const fadeInRight = keyframes`
  from {
    opacity: 0;
    transform: translateX(20px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
`;

// // Styled components
// const StyledBox = styled(Box)(({ theme }) => ({
//     backgroundColor: '#f7f7f7',
//     position: 'relative',
//     overflow: 'hidden',
//     paddingTop: theme.spacing(10),
//     height: "auto",
//     display: "flex",
//     alignItems: "center"
// }));
const StyledBox = styled(Box)(({ theme }) => ({
    backgroundColor: '#f7f7f7',
    position: 'relative',
    overflow: 'hidden',
    height: "100vh",
    display: "flex",
    alignItems: "center",
    paddingTop: theme.spacing(10), // Default padding

    [theme.breakpoints.down('md')]: {
        paddingTop: theme.spacing(20),
        height: "auto" // Increase space when screen is less than md
    }
}));


// const BlurryShape = styled(Box, Box)({
//     position: 'absolute',
//     top: 0,
//     left: 0,
//     right: 0,
//     bottom: 0,
//     background: 'radial-gradient(circle at 50% 50%, rgba(232, 189, 189, 0.8), transparent)',
//     zIndex: 0,
// });


// const reverseGradientAnimation = keyframes`
//   0% { background-position: 100% 50%; }
//   50% { background-position: 0% 50%; }
//   100% { background-position: 100% 50%; }
// `;

const gradientAnimation = keyframes`
  0% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }
`;

// eslint-disable-next-line no-unused-vars
const GradientButton = styled(Button)(({ theme }) => ({
    background: `linear-gradient(90deg, blue, skyblue, purple)`,
    backgroundSize: "300% 100%",
    color: 'white',
    padding: '12px 30px',
    borderRadius: '25px',
    transition: "all 0.4s ease-in-out",

    '&:hover': {
        animation: `${gradientAnimation} 3s infinite linear`,
        backgroundSize: "300% 100%",
    }
}));


const HeroSection = () => {
    return (
        <StyledBox id="home">
            <Box sx={{
                animation: `${fadeInUp} 0.4s ease-out forwards`,
                '& img': {

                    maxWidth: { xs: 350, sm: 250, md: 250 }, // Smaller image on md and below
                    display: 'block',
                    position: "absolute",
                    bottom: { xs: 150, sm: 200, md: 100 },
                    left: -30,
                    opacity: 0.7

                }
            }}>
                <img
                    src={BackgroundDesign}
                    alt="Business advisor"
                />
            </Box>
            <Container maxWidth="lg">
                <Grid container alignItems="center" spacing={4} justifyContent="center">

                    {/* Left Content */}
                    <Grid item xs={12} md={6} sx={{ textAlign: { xs: "center", md: "left" } }}>
                        <Box sx={{ pr: { md: 16 }, pl: { md: 1 }, mt: { xs: 0, sm: 0, md: -5 } }} >
                            <Typography variant="h5" fontWeight='bold' color="black" gutterBottom>
                                Business Advisor
                            </Typography>

                            <Typography
                                variant="h2"
                                component="h2"
                                fontWeight="bold"
                                sx={{

                                    fontSize: { xs: "2.5rem", sm: "4rem", md: "3rem", lg: "3.5rem" }
                                }}
                            >
                                Grow <Box component="span" color="#246bfd">business</Box> <br />
                                with great  advice
                            </Typography>


                            <Typography variant="body1" sx={{
                                mb: 4,
                                padding: { xs: "1rem", sm: " 0rem", md: " 0", lg: "0" },
                                paddingTop: { xs: "1rem", sm: "1.5rem", md: "2rem", lg: "2rem" }


                            }}>
                                Dissuade ecstatic and properly saw entirely sir why laughter endeavor.
                                In on my jointure horrible margaret suitable he followed speedily.
                            </Typography>

                            <GradientButton variant="contained" size="large">
                                Get Started
                            </GradientButton>
                        </Box>
                    </Grid>

                    {/* Right Content */}
                    <Grid item xs={12} md={6}>
                        <Box sx={{
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "flex-end", // Ensures image stays at the bottom
                            position: 'relative',
                            height: "100%", // Keeps container height consistent
                        }}>
                            <BlurryShape />
                            <Box sx={{
                                animation: `${fadeInUp} 0.4s ease-out forwards`,
                                '& img': {
                                    width: '100%',
                                    maxWidth: { xs: 350, sm: 380, md: 350 }, // Smaller image on md and below
                                    display: 'block',
                                    mt: { xs: 2, sm: 2, md: 10 }
                                }
                            }}>
                                <img
                                    src={WomenImage}
                                    alt="Business advisor"
                                />
                            </Box>

                            {/* Stats Cards - Hidden on Small Screens */}
                            <Box sx={{
                                position: 'absolute',
                                top: '50%',
                                left: -30,
                                display: { xs: "none", md: "flex" }
                            }}>
                                <Box sx={{
                                    display: "flex",
                                    alignItems: "center",
                                    backgroundColor: 'white',
                                    padding: 2,
                                    borderRadius: 2,
                                    boxShadow: 2,
                                    animation: `${fadeInLeft} 0.4s ease-out forwards`,
                                    opacity: 0,
                                }}>
                                    <Box sx={{
                                        backgroundColor: "#246bfd",
                                        display: "flex",
                                        justifyContent: "center",
                                        alignItems: "center",
                                        padding: '1.2rem',
                                        borderRadius: 2
                                    }}>
                                        <PieChartOutlineOutlinedIcon sx={{ fontSize: "3rem", color: "white" }} />
                                    </Box>
                                    <Box sx={{ display: "flex", flexDirection: "column", gap: 1, ml: 2 }}>
                                        <Typography variant="h4" sx={{ fontWeight: "600" }}>
                                            86%
                                        </Typography>
                                        <Typography variant="body1" color="gray">
                                            Business Growth
                                        </Typography>
                                    </Box>
                                </Box>
                            </Box>

                            <Box sx={{
                                position: 'absolute',
                                bottom: '50%',
                                right: -80,
                                display: { xs: "none", md: "flex" }
                            }}>
                                <Box sx={{
                                    display: "flex",
                                    alignItems: "center",
                                    backgroundColor: 'white',
                                    padding: 2,
                                    borderRadius: 2,
                                    boxShadow: 2,
                                    animation: `${fadeInRight} 0.4s ease-out forwards`,
                                    opacity: 0,
                                }}>
                                    <Box sx={{
                                        backgroundColor: "#246bfd",
                                        display: "flex",
                                        justifyContent: "center",
                                        alignItems: "center",
                                        padding: '1.2rem',
                                        borderRadius: 2
                                    }}>
                                        <RocketOutlinedIcon sx={{ fontSize: "3rem", color: "white" }} />
                                    </Box>
                                    <Box sx={{ display: "flex", flexDirection: "column", gap: 1, ml: 2 }}>
                                        <Typography variant="h4" sx={{ fontWeight: "600" }}>
                                            70%
                                        </Typography>
                                        <Typography variant="body1" color="gray">
                                            Marketing
                                        </Typography>
                                    </Box>
                                </Box>
                            </Box>
                        </Box>
                    </Grid>

                </Grid>
            </Container>
        </StyledBox >
    );
};

export default HeroSection;
