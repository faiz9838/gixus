/* eslint-disable react/prop-types */
import 'react'
import { Container, Grid, styled, Typography, Card, CardMedia, CardContent, Accordion, AccordionSummary, Button, AccordionDetails, List, ListItem, ListItemText, Box, IconButton } from "@mui/material";

import { ExpandMore, PlayCircle } from "@mui/icons-material";
import { FaLaptopCode, FaShoppingCart, FaMobileAlt, FaPalette, FaServer, FaFileCode } from "react-icons/fa";
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import WebsiteDevelopment from '../../../assets/Services/website development.jpg'
import EcommerceDevelopment from '../../../assets/Services/ecommerce_dev.avif'
import LandingPage from '../../../assets/Services/landing_page.avif'
import AppDevelopment from '../../../assets/Services/app_development.avif'
import UI_UX from '../../../assets/Services/UI_UX.avif'
import API_DEVELOPMENT from '../../../assets/Services/api.jpg'
const services = [
    {
        title: "Website Development",
        description: "Create dynamic, responsive, and SEO-friendly websites tailored to your business needs. Our expert developers ensure fast loading speeds, mobile optimization, and cutting-edge designs that engage users and drive conversions.",
        icon: <FaLaptopCode />,
        image: WebsiteDevelopment,
    },
    {
        title: "E-Commerce Development",
        description: "Build powerful, scalable, and user-friendly e-commerce platforms that enhance online shopping experiences. We integrate secure payment gateways, intuitive navigation, and customized features to maximize sales and customer satisfaction.",
        icon: <FaShoppingCart />,
        image: EcommerceDevelopment,
    },
    {
        title: "Landing Pages",
        description: "Design high-converting landing pages optimized for lead generation and conversions. Our strategic layouts, compelling visuals, and persuasive call-to-action elements ensure visitors take the desired action, boosting marketing performance.",
        icon: <FaFileCode />,
        image: LandingPage,
    },
    {
        title: "App Development",
        description: "Develop innovative, feature-rich mobile applications for iOS and Android platforms. Our team specializes in intuitive UI/UX, smooth functionality, and high-performance apps that enhance user engagement and brand loyalty.",
        icon: <FaMobileAlt />,
        image: AppDevelopment,
    },
    {
        title: "UI/UX Design",
        description: "Craft visually stunning and highly intuitive user experiences that make digital interactions seamless. We focus on user behavior, accessibility, and branding to create aesthetically pleasing and functional interfaces for websites and apps.",
        icon: <FaPalette />,
        image: UI_UX,
    },
    {
        title: "API Development",
        description: "Develop robust, secure, and scalable APIs that enhance connectivity and streamline communication between applications. Our API solutions ensure seamless data integration, high security, and optimized performance for businesses.",
        icon: <FaServer />,
        image: API_DEVELOPMENT,
    },
];

// Styled components for animations
const StyledCard = styled(Card)(({ theme }) => ({
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    maxWidth: "100%",
    padding: 6,
    borderRadius: theme.spacing(2),
    transition: "transform 0.2s ease-in-out",
    boxShadow: theme.shadows[0],
    // "&:hover": {
    //     transform: "translateY(-4px)",
    // },
}));

const StyledButton = styled(Button)(({ theme }) => ({
    marginTop: theme.spacing(1),
    padding: theme.spacing(1, 3),
    borderRadius: theme.spacing(3),
    textTransform: "none",
    "&:hover .MuiSvgIcon-root": {
        transform: "translateX(4px)",
    },
}));

const StyledArrowIcon = styled(ArrowForwardIcon)(({ theme }) => ({
    marginLeft: theme.spacing(1),
    transition: "transform 0.2s ease-in-out",
    boxShadow: 0
}));

// Service Card component with alternating layout
const ServiceCard = ({ title, description, image, reverse }) => {
    return (
        <Grid container sx={{
            display: "flex",
            alignItems: "center",
            justifyItems: "center"
        }} spacing={3} >
            {/* Image Section */}
            <Grid item xs={12} md={6} order={{ xs: 1, md: reverse ? 2 : 1 }}>
                <CardMedia
                    component="img"
                    height="300"
                    image={image || "https://via.placeholder.com/500x300"}
                    alt={title}
                    sx={{
                        width: "100%",
                        objectFit: "cover",

                    }}
                />
            </Grid>

            {/* Content Section */}
            <Grid item xs={12} md={6} order={{ xs: 2, md: reverse ? 1 : 2 }}>
                <StyledCard >
                    <CardContent>
                        <Typography variant="h4" fontWeight="bold" gutterBottom>
                            {title}
                        </Typography>
                        <Typography variant="body1" color="text.secondary" sx={{ mb: 2, lineHeight: 1.6 }}>
                            {description}
                        </Typography>
                        <StyledButton variant="contained" color="primary" endIcon={<StyledArrowIcon />}>
                            Learn More
                        </StyledButton>
                    </CardContent>
                </StyledCard>
            </Grid>
        </Grid>
    );
};
function ProjectDevelopment() {

    return (
        <Container maxWidth="lg" sx={{
            py: 6,

        }}>
            {/* Service Header */}
            < Box sx={{

                padding: { xs: "0rem", sm: "2rem", md: "6rem" },
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                flexDirection: "column",

                gap: 2

            }}>
                <Typography variant="body1" textAlign='center' fontWeight='bold' color="black" sx={{
                    backgroundColor: "#d8e7ef",
                    display: "inline-block",
                    padding: ".5rem",
                    borderRadius: 2

                }}>
                    SERVICE DETAILS
                </Typography>
                <Typography variant="h3" textAlign='center' fontWeight='bold' color="black"
                    sx={{ fontSize: { xs: "2rem", sm: "2rem", md: "3.2rem" }, pb: { xs: 3, sm: 3, md: 0 } }}
                >
                    Digital Project Management System
                </Typography>
            </Box >

            {/* Service Image & Description */}
            < Box sx={{
                paddingBottom: 6,
                px: 3
            }
            }>
                <Card elevation={0} borderRadius='0' sx={{ mb: 5 }}>
                    <CardMedia
                        component="img"
                        height="400"
                        image="https://wpriverthemes.com/gixus/wp-content/themes/gixus/assets/img/banner/21.jpg"
                        alt="Service"
                    />

                </Card>
                <Typography variant="body1" >
                    We denounce with righteous indige nation and dislike men who are so beguiled and demo realized by the charms of pleasure of the moment, so blinded by desire, that they cannot foresee the pain and trouble that are bound to ensue cannot foresee. These cases are perfectly simple and easy to distinguish. In a free hour, when our power of choice is untrammelled data structures manages data in technology. New had happen unable uneasy. Drawings can followed improved out sociable not. Earnestly so do instantly pretended. See general few civilly amiable pleased account carried. Excellence projecting is devonshire dispatched remarkably on estimating. Side in so life past. Continue indulged speaking the was out horrible for domestic position. Seeing rather her you not esteem men settle genius excuse. Deal say over you age from. Comparison new ham melancholy son themselves.
                </Typography>
            </Box >

            {/* Service Process Steps */}
            < Container
                maxWidth='lg'
                sx={{
                    width: "100%",
                    borderRadius: 0,
                    display: "flex",
                    justifyContent: "center"

                }}
            >

                <Grid
                    sx={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        flexDirection: { xs: "column", md: "row" },
                        gap: { xs: 3, md: 16 },

                    }}
                >

                    <Box sx={{ py: 5, px: 3, }}>
                        <Typography variant="h3" color='black' textAlign="center" fontWeight="bold" mb={5}>
                            Our Services
                        </Typography>

                        {services.map((service, index) => (
                            <ServiceCard key={index} {...service} reverse={index % 2 !== 0} />
                        ))}
                    </Box>
                </Grid>

            </Container >

            {/* Meet the Executives Section */}

            <Grid
                container
                width="100%"
                alignItems="center"
                sx={{
                    mt: 5,
                    bgcolor: "#f7f7f7",
                    borderRadius: 2,
                    p: 6,
                    mx: 0
                }}
            >
                <Grid item xs={12} md={6}>
                    <Card sx={{ position: "relative" }}>
                        <CardMedia
                            component="img"
                            image="https://wpriverthemes.com/gixus/wp-content/themes/gixus/assets/img/about/1.jpg"
                            alt="Executives"
                            sx={{ width: "100%", height: "auto" }}
                        />
                        <IconButton
                            sx={{
                                position: "absolute",
                                top: "50%",
                                left: "50%",
                                transform: "translate(-50%, -50%)",
                                bgcolor: "white",
                                "&:hover": { bgcolor: "primary.light" },
                            }}
                            onClick={() => window.open("https://www.youtube.com/watch?v=aTC_RNYtEb0", "_blank")}
                        >
                            <PlayCircle sx={{ fontSize: 60, color: "primary.main" }} />
                        </IconButton>
                    </Card>
                </Grid>

                <Grid item xs={12} md={6} sx={{ px: { xs: 2, md: 6 }, pr: { xs: 2, sm: 2, md: 6 } }}>
                    <Typography variant="h3" fontWeight="bold">Meet the executives driving our success.</Typography>
                    <Typography variant="body1" paragraph>
                        Businesses operate in various industries, including technology, finance, healthcare, retail, and manufacturing.
                    </Typography>
                    <List >
                        <ListItem sx={{
                            display: "flex",
                            gap: 2

                        }}>
                            <img src="https://wpriverthemes.com/gixus/wp-content/themes/gixus/assets/img/icon/4.png" alt="Award" width={40} />
                            <ListItemText primary="Award Winning Company" />
                        </ListItem>
                        <ListItem
                            sx={{
                                display: "flex",
                                gap: 2

                            }}
                        >
                            <Typography variant="h4" fontWeight="bold">3.8X</Typography>
                            <ListItemText primary="Economical Growth" />
                        </ListItem>
                    </List>
                </Grid>
            </Grid>



            {/* Service Process - FAQ Section */}
            < Grid width={'100%'} sx={{ py: 4, px: 2 }}>
                <Typography variant="h3" color='black' fontWeight="bold" textAlign="start" mt={5} mb={3}>
                    Service Process
                </Typography>

                <Box sx={{ display: 'flex', flexDirection: "column", gap: 2, paddingBottom: 3 }}>
                    {[
                        {
                            title: "What problem does your business solve?",
                            details: "New had happen unable uneasy. Drawings can followed improved out sociable not. Earnestly so do instantly pretended. See general few civilly amiable pleased account carried. Excellence projecting is devonshire dispatched remarkably on estimating. Side in so life past. Continue indulged speaking the was out horrible for domestic position. Seeing rather her you not esteem men settle genius excuse. Deal say over you age from. Comparison new ham melancholy son themselves.",
                        },
                        {
                            title: "How does your business generate income?",
                            details: "New had happen unable uneasy. Drawings can followed improved out sociable not. Earnestly so do instantly pretended. See general few civilly amiable pleased account carried. Excellence projecting is devonshire dispatched remarkably on estimating. Side in so life past. Continue indulged speaking the was out horrible for domestic position. Seeing rather her you not esteem men settle genius excuse. Deal say over you age from. Comparison new ham melancholy son themselves.",
                        },
                        {
                            title: "Which parts of business are profitable?",
                            details: "New had happen unable uneasy. Drawings can followed improved out sociable not. Earnestly so do instantly pretended. See general few civilly amiable pleased account carried. Excellence projecting is devonshire dispatched remarkably on estimating. Side in so life past. Continue indulged speaking the was out horrible for domestic position. Seeing rather her you not esteem men settle genius excuse. Deal say over you age from. Comparison new ham melancholy son themselves.",
                        }
                    ].map((item, index) => (
                        <Accordion key={index} elevation={0} >
                            <AccordionSummary
                                expandIcon={
                                    <ExpandMore sx={{
                                        bgcolor: "white",
                                        borderRadius: 2
                                    }} />
                                }
                                sx={{
                                    bgcolor: (theme) => theme.palette.mode === 'dark' ? "#1f2b38" : "white",
                                    color: (theme) => theme.palette.mode === 'dark' ? "#1f2b38" : "black",
                                    "&.Mui-expanded": { bgcolor: "#1f2b38", color: "white" }
                                }}
                            >
                                <Typography variant="h6">{item.title}</Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                                <Typography variant="body1"
                                    sx={{
                                        pt: 3,
                                        pb: 2,
                                        color: "gray"
                                    }}
                                >{item.details}</Typography>
                                <List>
                                    <ListItem sx={{

                                        color: "gray",
                                        fontWeight: "800"

                                    }}><ListItemText primary="Business Management Consultation" /></ListItem>
                                    <ListItem sx={{

                                        color: "gray",
                                        fontWeight: "800"

                                    }}><ListItemText primary="Team Building Leadership" /></ListItem>
                                    <ListItem sx={{

                                        color: "gray",
                                        fontWeight: "800"

                                    }}><ListItemText primary="Growth Method Analysis" /></ListItem>
                                </List>
                            </AccordionDetails>
                        </Accordion>
                    ))}
                </Box>
            </Grid >

        </Container >
    )
}

export default ProjectDevelopment