import 'react';
import Box from '@mui/material/Box';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';

const BlurryShape = () => {
    const theme = useTheme();
    const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'));
    const isMediumScreen = useMediaQuery(theme.breakpoints.between('sm', 'md'));

    return (
        <Box
            sx={{
                position: 'absolute',
                top: "-50%",
                left: "-50%",
                right: "-50%",
                bottom: "-50%",
                background: 'radial-gradient(circle at 50% 50%, rgba(246, 190, 190, 1), rgba(232, 189, 189, 0.5), rgba(232, 189, 189, 0.14), transparent 90%)',
                zIndex: 0,
                borderRadius: "50rem",
                opacity: .3,
                filter: "blur(0px)", // Strong blur effect
            }}
        >
            {/* Outer Ring */}
            <Box
                sx={{
                    position: "absolute",
                    top: isSmallScreen ? "50%" : isMediumScreen ? "50%" : "50%",
                    left: isSmallScreen ? "52%" : isMediumScreen ? "52%" : "52%",
                    transform: "translate(-50%, -50%)",
                    width: isSmallScreen ? "25%" : isMediumScreen ? "25%" : "40%",
                    height: isSmallScreen ? "31%" : isMediumScreen ? "30%" : "45%",
                    border: "2px solid rgba(110, 110, 219, 0.25)",
                    borderRadius: "50%",
                    background: "transparent",
                    zIndex: 10,
                }}
            />

            {/* Inner Faded Ring */}
            <Box
                sx={{
                    position: "absolute",
                    top: "50%",
                    left: "50%",
                    transform: "translate(-50%, -50%)",
                    width: isSmallScreen ? "25%" : isMediumScreen ? "25%" : "40%",
                    height: isSmallScreen ? "30%" : isMediumScreen ? "33%" : "45%",
                    border: "90px solid rgba(110, 110, 219, 0.25)",
                    borderRadius: "50%",
                    background: "transparent",
                    zIndex: 9,
                }}
            />
        </Box>
    );
};

export default BlurryShape;
