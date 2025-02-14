import { useState, useEffect } from "react";
import {
    AppBar,
    IconButton,
    Button,
    Drawer,
    List,
    ListItemText,
    ListItemButton,
    Collapse,
    Box,
    Container,

} from "@mui/material";
import { Link } from "react-router-dom";
import { BiChevronDown, BiMenu, BiX } from "react-icons/bi";
import logo from "../assets/Logo/logo.png";
// import DemoOne from "../assets/Navbar/Demo Image/DemoOne.jpg"
// import DemoTwo from "../assets/Navbar/Demo Image/demoTwo.jpg"
// import DemoThree from "../assets/Navbar/Demo Image/demoThree.jpg"
// import DemoFour from "../assets/Navbar/Demo Image/demoFour.jpg"
// import DemoFive from "../assets/Navbar/Demo Image/demoFive.jpg"
// import DemoSix from "../assets/Navbar/Demo Image/demoSix.jpg"
// import WomenImage from "../assets/Navbar/Demo Image/women.jpg"
// const demoItems = [
//     {
//         image: DemoOne,
//         title: "Strategy & Planning",
//         buttons: ["MultiPage", "OnePage"]
//     },
//     {
//         image: DemoTwo,
//         title: "Marketing Solutions",
//         buttons: ["MultiPage", "OnePage"]
//     },
//     {
//         image: DemoThree,
//         title: "Branding",
//         buttons: ["MultiPage", "OnePage"]
//     },
//     {
//         image: DemoFour,
//         title: "Development",
//         buttons: ["MultiPage", "OnePage"]
//     },
//     {
//         image: DemoFive,
//         title: "SEO & Analytics",
//         buttons: ["MultiPage", "OnePage"]
//     },
//     {
//         image: DemoSix,
//         title: "Consulting Services",
//         buttons: ["MultiPage", "OnePage"]
//     }
// ];


const menuItems = [
    { title: "Demo", subMenu: ["Strategy", "Marketing", "Branding"] },
    { title: "Pages", subMenu: ["About Us", "About Us Two", "Team", "Team Two", "Team Details", "Pricing", "FAQ", "Contact Us", 'Error Page'] },

    { title: "Projects", subMenu: ["Project Style One", "Project Style Two", "Project Style Three", "Strategy Devlopment"] },
    { title: "Service", subMenu: ["Service Version One", "Service Version Two", "Service Verion Three", "Advanced Bussiness"] },
    { title: "Blog", subMenu: ["Blog Standard", "Blog With SideBar", "Blog Grid Two Columns", "Blog Grid Three Column", "Blog Single"] }
];

const Header = () => {
    const [mobileOpen, setMobileOpen] = useState(false);

    const [openDropdown, setOpenDropdown] = useState({});
    const [scrolling, setScrolling] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolling(window.scrollY > 50);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const toggleDrawer = (open) => () => {
        setMobileOpen(open);
    };

    const toggleDropdown = (item) => {
        setOpenDropdown((prev) => ({ ...prev, [item]: !prev[item] }));
    };

    return (
        <>
            <AppBar position="fixed" color="transparent" elevation={0} sx={{
                backgroundColor: { xs: "white", md: scrolling ? "white" : "transparent" },
                transition: "background-color 0.3s ease-in-out",
            }}>
                <Container sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", py: 2, }}>
                    <IconButton
                        edge="start"
                        color="inherit"
                        onClick={toggleDrawer(true)}


                        sx={{
                            display: { md: "none" },
                            pl: 6,
                            fontWeight: 250,
                            backgroundColor: "transparent", // Ensure no background color
                            "&:hover": {
                                backgroundColor: "transparent", // Prevent hover effect
                            },
                            "&:active": {
                                backgroundColor: "transparent", // Prevent click effect
                            }
                        }}
                    >
                        <BiMenu size={36} />
                    </IconButton>


                    {/* Logo */}
                    <Box component="a" href="#" sx={{ display: "flex", alignItems: "center", mx: "auto", ml: { md: 0 } }}>
                        <Link to='/'>
                            <img src={logo} alt="Logo" width={125} />
                        </Link>
                    </Box>

                    {/* Desktop Menu */}
                    <Box sx={{ display: { xs: "none", md: "flex" }, alignItems: "center", justifyContent: "start", mx: "auto", gap: 1 }}>
                        {menuItems.map((item) => (
                            <Box
                                key={item.title}

                                sx={{ position: "relative" }}
                            >
                                <Button
                                    color="inherit"

                                    sx={{
                                        fontSize: "0.75rem",
                                        fontWeight: 600,
                                        textTransform: "none",
                                        color: "black",
                                        "&:hover": { background: "none", color: "#246bfd" },
                                    }}
                                >
                                    {item.title}
                                </Button>


                            </Box>

                        ))}
                        <Button color="inherit" sx={{
                            fontSize: "0.75rem",
                            fontWeight: 600,
                            textTransform: "none",
                            color: "black",
                            "&:hover": { background: "none", color: "#246bfd" },

                        }}>
                            Contact
                        </Button>
                    </Box>

                    {/* Get Consultant Button */}
                    <Button
                        variant="contained"
                        sx={{
                            position: "relative",
                            overflow: "hidden",
                            display: { xs: "none", lg: "block" },
                            fontSize: "1rem",
                            fontWeight: 600,
                            textTransform: "none",
                            px: 5,
                            py: 1.5,
                            color: "white", // Ensure text remains visible
                            backgroundColor: "blue", // Default blue background
                            transition: "background-color 0.3s ease-in-out",
                            zIndex: 2, // Ensure button stays above moving elements

                            "&::before, &::after": {
                                content: '""',
                                position: "absolute",
                                top: 0,
                                width: "52%", // Slight overlap to remove gaps
                                height: "100%",
                                backgroundColor: "blue",
                                transition: "transform 0.4s ease-out",
                                zIndex: -1, // Behind the text
                            },

                            "&::before": {
                                left: 0,
                                clipPath: "polygon(0 0, 100% 0, 85% 100%, 0 100%)", // Adjusted for smoother cut
                            },

                            "&::after": {
                                right: 0,
                                clipPath: "polygon(15% 0, 100% 0, 100% 100%, 0 100%)", // Adjusted for smoother cut
                            },

                            "&:hover::before": {
                                transform: "translateX(-110%) skewX(-15deg)", // Move left with skew
                            },

                            "&:hover::after": {
                                transform: "translateX(110%) skewX(15deg)", // Move right with skew
                            },

                            "&:hover": {
                                backgroundColor: "black", // Final black background
                            },
                        }}
                    >
                        Get Consultant
                    </Button>



                </Container>
            </AppBar >

            {/* Mobile Drawer (Offcanvas) */}
            < Drawer anchor="left" open={mobileOpen} onClose={toggleDrawer(false)}
                transitionDuration={600} // Smooth animation
            >
                <Box sx={{ width: 380, padding: 2 }}>
                    {/* Drawer Header with Logo & Close Button */}
                    <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", p: 2 }}>
                        <Box component="a" href="#" sx={{ display: "flex", alignItems: "center" }}>
                            <img src={logo} alt="Logo" width={120} />
                        </Box>
                        <IconButton onClick={toggleDrawer(false)} sx={{
                            border: "2px solid gray",
                            padding: 0,
                            opacity: .5,
                            '& hover:': {
                                background: "none"
                            }
                        }}>
                            <BiX size={28} />
                        </IconButton>
                    </Box>

                    <List>
                        {menuItems.map((item) => (
                            <Box key={item.title} sx={{ borderBottom: "1px solid #ddd" }}> {/* Bottom border for each item */}
                                <ListItemButton
                                    sx={{
                                        fontWeight: 700, // Increased font weight
                                        color: "black", // Default text color
                                        "& .MuiTypography-root": { fontWeight: 700 }, // Ensuring text is bold
                                        "&:hover .MuiTypography-root": { color: "#246bfd" }, // Text turns blue on hover
                                        "&:hover, &:focus, &:active": { backgroundColor: "transparent" } // No bg color on hover or click
                                    }}
                                    onClick={() => toggleDropdown(item.title)}
                                >
                                    <ListItemText sx={{
                                        fontWeight: 700, // Increased font weight
                                        color: "black", // Default text color
                                        "&:hover .MuiTypography-root": { color: "#246bfd" }, // Text turns blue on hover
                                        "& .MuiTypography-root": { fontWeight: 700 }, // Ensuring text is bold
                                        "&:hover": { backgroundColor: "transparent" } // Prevent background color change on hover
                                    }} primary={item.title} />
                                    {item.subMenu.length > 0 && (
                                        <BiChevronDown
                                            style={{
                                                transition: "0.3s",
                                                transform: openDropdown[item.title] ? "rotate(0deg)" : "rotate(270deg)",
                                            }}
                                        />
                                    )}
                                </ListItemButton>

                                {/* Dropdown in Mobile Menu */}
                                {item.subMenu.length > 0 && (
                                    <Collapse in={openDropdown[item.title]} timeout="auto" unmountOnExit>
                                        <List component="div" disablePadding sx={{ pl: 2 }}>
                                            {item.subMenu.map((subItem, index) => (
                                                <ListItemButton
                                                    key={subItem}
                                                    sx={{
                                                        borderBottom: index !== item.subMenu.length - 1 ? "1px solid #eee" : "none", // Border between sub-items
                                                        "& .MuiTypography-root": { fontWeight: 500, fontSize: "0.95rem" },
                                                        "&:hover": { backgroundColor: "transparent" } // Slightly larger & bold sub-items
                                                    }}
                                                >
                                                    <ListItemText primary={subItem} />
                                                </ListItemButton>
                                            ))}
                                        </List>
                                    </Collapse>
                                )}
                            </Box>
                        ))}

                        {/* Contact Item */}
                        <ListItemButton sx={{
                            // Border between sub-items
                            borderBottom: "1px solid #eee",
                            "& .MuiTypography-root": { fontWeight: 600, fontSize: "0.95rem" },
                            color: "black", // Default text color
                            "&:hover .MuiTypography-root": { color: "#246bfd" },
                            "&:hover": { backgroundColor: "transparent" } // Slightly larger & bold sub-items
                        }}>
                            <ListItemText primary="Contact" />
                        </ListItemButton>


                        {/* <ListItem sx={{ justifyContent: "center", mt: 2 }}>
                            <Button variant="contained" fullWidth>
                                Get Consultant
                            </Button>
                        </ListItem> */}
                    </List>

                </Box>
            </Drawer >
        </>
    );
};

export default Header;
