import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Header from './Header';
import Container from './container';

const AppRoutes = () => {
    return (
        <BrowserRouter>
            <Header />
            <Routes>
                <Route path="/" element={<Container />} />
            </Routes>
        </BrowserRouter>
    );
};

export default AppRoutes;
