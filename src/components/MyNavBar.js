import React, {useState} from "react";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import {
    BrowserRouter,
    Routes,
    Route,
    Link
} from "react-router-dom";
import SearchPage from "./SearchPage";
import FollowingPage from "./FollowingPage";



function MyNavBar() {
    const [isSearch, setIsSearch] = useState(true);
    const [isFollowing, setIsFollowing] = useState(false);

    function handleSearch() {
        setIsSearch(true);
        setIsFollowing(false);
    }

    function handleFollowing() {
        setIsSearch(false);
        setIsFollowing(true);
    }

    return (
        <BrowserRouter>
            <div>
                <Navbar className="nav">
                    <Container>
                        <Navbar.Brand as={Link} to="/">Noa's Flights App</Navbar.Brand>
                        <Navbar.Toggle aria-controls="basic-navbar-nav" />
                        <Navbar.Collapse id="basic-navbar-nav">
                            <Nav className="me-auto">
                                <Nav.Link Classname={isSearch? "nav-link active" : "nav-link"} as={Link} to="/" onClick={handleSearch}>Search</Nav.Link>
                                <Nav.Link Classname={isFollowing? "nav-link active" : "nav-link"} as={Link} to="/following" onClick={handleFollowing}>Following</Nav.Link>
                            </Nav>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
            </div>
            <div>
                <Routes>
                    <Route path="/" element={<SearchPage />} />
                    <Route path="/following" element={<FollowingPage />} />
                </Routes>
            </div>
        </BrowserRouter>

    );
}

export default MyNavBar;