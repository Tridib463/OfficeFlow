import { Link } from 'react-router-dom'

const Public = () => {
    const content = (
        <section className="public">
            <header>
                <h1>Welcome to <span className="nowrap">OfficeFlow!</span></h1>
            </header>
            <main className="public__main">
                <p>Introducing OfficeFlow, an innovative solution designed to revolutionize note-taking and communication within your organization.</p>
                <address className="public__addr">
                Streamline your workflow with an intuitive platform that offers seamless integration, efficient collaboration, and robust security features. From creating, assigning, and tracking notes to facilitating smooth communication among employees, managers, and admins, OfficeFlow empowers your team to work smarter and achieve greater productivity. 
                </address>
                <br />
                <p>Say goodbye to scattered sticky notes and hello to organized, streamlined communication with OfficeFlow.</p>
            </main>
            <footer className='foot'>
                <Link to="/login">Employee Login</Link>
                <Link to="/signin">Employee Sign In</Link>
            </footer>
        </section>

    )
    return content
}
export default Public