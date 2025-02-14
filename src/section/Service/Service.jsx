import 'react'
import { Box, Typography } from '@mui/material'
import ServiceCards from '../../components/ServiceCards'
import StripImage from '../../assets/icons/Service_strip.png'
function Service() {
    return (
        <Box sx={{
            height: "auto",
            padding: "3rem",
            paddingBottom: "6rem",
            backgroundImage: `url(${StripImage})`,
            backgroundRepeat: 'no-repeat',
            backgroundPosition: "100% 100% "

        }}>
            <Box sx={{

                padding: { xs: "0rem", sm: "2rem", md: "6rem" },
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                flexDirection: "column",
                paddingBottom: 4,
                gap: 2

            }}>
                <Typography variant="body1" textAlign='center' fontWeight='bold' color="black" sx={{
                    backgroundColor: "#d8e7ef",
                    display: "inline-block",
                    padding: ".5rem",
                    borderRadius: 2

                }}>
                    Our Services
                </Typography>
                <Typography variant="h3" textAlign='center' fontWeight='bold' color="black"
                    sx={{ fontSize: { xs: "2rem", sm: "2rem", md: "3rem" }, pb: { xs: 3, sm: 3, md: 1 } }}
                >
                    Empower your business <br />
                    with our services.
                </Typography>
            </Box>
            <ServiceCards />
        </Box>
    )
}

export default Service