import React from "react";
import { Container, Grid, Box, Typography, Link, TextField, Button } from "@mui/material";
import { FaFacebookF, FaLinkedinIn, FaDribbble, FaPaperPlane } from "react-icons/fa";

const Footer = () => {
    return (
        <Box component="footer" sx={{ backgroundColor: "#1f2b38", color: "white", py: 5 }}>
            <Container>
                <Grid container spacing={4}>
                    <Grid item xs={12} sm={6} md={4}>
                        <Typography variant="h6">Want to connect?</Typography>
                        <Link href="mailto:wordpressriver@gmail.com" color="inherit" underline="none">
                            wordpressriver@gmail.com
                        </Link>
                        <Typography variant="h6" sx={{ mt: 2 }}>Call us anytime</Typography>
                        <Link href="tel:+4733378901" color="inherit" underline="none">
                            +4733378901
                        </Link>
                        <Typography variant="h6" sx={{ mt: 2 }}>Our Location</Typography>
                        <Typography variant="body2">175 10h Street, Office 375 Berlin, Devolina 21562</Typography>
                    </Grid>

                    <Grid item xs={12} sm={6} md={2}>
                        <Typography variant="h6">Quick Links</Typography>
                        {['Company Profile', 'Help Center', 'Projects', 'Plans & Pricing', 'News & Blog'].map((text) => (
                            <Typography key={text} variant="body2" component={Link} href="#" color="inherit" display="block" sx={{ mt: 1 }}>
                                {text}
                            </Typography>
                        ))}
                    </Grid>

                    <Grid item xs={12} sm={6} md={2}>
                        <Typography variant="h6">Our Services</Typography>
                        {['Data Analytics', 'Cyber Related', 'Growth Hacking', 'Strategy Development', 'Business Intelligence'].map((text) => (
                            <Typography key={text} variant="body2" component={Link} href="#" color="inherit" display="block" sx={{ mt: 1 }}>
                                {text}
                            </Typography>
                        ))}
                    </Grid>

                    <Grid item xs={12} sm={6} md={4}>
                        <Typography variant="h6">Join Our Newsletter</Typography>
                        <Typography variant="body2">Subscribe to get the latest updates and offers.</Typography>
                        <Box component="form" sx={{ display: "flex", mt: 2 }}>
                            <TextField fullWidth placeholder="Your Email" variant="outlined" size="small" sx={{ bgcolor: "white", borderRadius: 1 }} />
                            <Button type="submit" variant="contained" color="primary" sx={{ ml: 1 }}>
                                <FaPaperPlane />
                            </Button>
                        </Box>
                    </Grid>
                </Grid>

                <Box sx={{ borderTop: "1px solid gray", mt: 4, pt: 3, textAlign: "center" }}>
                    <Typography variant="body2">© Copyright 2024. All Rights Reserved by WordPressRiver</Typography>
                    <Box sx={{ mt: 1 }}>
                        {['About', 'Team', 'Support'].map((text) => (
                            <Link key={text} href="#" color="inherit" underline="none" sx={{ mx: 1 }}>
                                {text}
                            </Link>
                        ))}
                    </Box>
                </Box>
            </Container>
        </Box>
    );
};

export default Footer;
