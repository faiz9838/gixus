import React from 'react';
import { Box, Container } from '@mui/material';
import { styled } from '@mui/material/styles';
import Header from '../components/Header';
import Footer from '../components/Footer';

// Styled Components
const LayoutWrapper = styled(Box)({
    display: 'flex',
    flexDirection: 'column',
    minHeight: '100vh', // Full viewport height
});

const MainContent = styled(Box)({
    flexGrow: 1,
    display: 'flex',
    flexDirection: 'column',
    width: '100%',
});

const Layout = ({ children }) => {
    return (
        <LayoutWrapper>
            {/* Header */}
            {/* <Header /> */}

            {/* Main Content */}
            <MainContent component="main">
                <Container sx={{ flexGrow: 1, py: 4 }}>
                    {children}
                </Container>
            </MainContent>

            {/* Footer */}

            {/* <Footer /> */}

        </LayoutWrapper>
    );
};

export default Layout;