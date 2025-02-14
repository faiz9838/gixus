import 'react'
import { Box, Typography } from '@mui/material'
import TeamSection from '../../components/TeamCards'
function Team() {
    return (
        <Box>

            <Box sx={{

                paddingTop: { xs: "0rem", sm: "2rem", md: "5rem" },
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
                    TEAM MEMBERS
                </Typography>
                <Typography variant="h3" textAlign='center' fontWeight='bold' color="black"
                    sx={{ fontSize: { xs: "2rem", sm: "2rem", md: "3rem" }, pb: { xs: 3, sm: 3, md: 1 } }}
                >
                    Meet the talented team <br />
                    from our company
                </Typography>
            </Box>
            <TeamSection />
        </Box>
    )
}

export default Team