import Navbar from './navbar';
import Footer from './footer.jsx';

const Layout = ({ children }) => {
    return (
        <>
            <Navbar />
            <main>{children}</main>
            <Footer />
        </>
    )
}

export default Layout;