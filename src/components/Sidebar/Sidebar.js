import logo from '../../images/logo-app.png'
import { BiHome } from 'react-icons/bi'
import SidebarLinks from './SidebarLinks';
import { Link } from 'react-router-dom'
import './Sidebar.css'
import { pageLinks } from '../pageLinks';

const Sidebar = () => {
    return(
        <div className='Sidebar rounded-4 d-lg-flex flex-column justify-content-lg-between'>
            <div className='main-sidebar-content py-3 px-lg-2'>
                <img
                    src={logo}
                    alt='logo app'
                    className='my-3'
                />

                <h3 className='my-3 fs-4'>Global Warming App</h3>
                <Link to='/'>
                    <BiHome className='sidebar-icon mt-lg-3'/>
                </Link>
            </div>

            <SidebarLinks items={pageLinks} />
        </div>
    )
}

export default Sidebar