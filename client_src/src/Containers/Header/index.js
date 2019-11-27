import React from 'react'
import { Link } from 'react-router-dom'
import './header.css'

const title = 'Se Rendré'

const Header = () => (
    <div style={{ background: 'rgb(0, 11, 56)', height: '50px', fontSize: '25px' }}>
        <div style={{ float: 'left' }}>
            <Link style={{ color: 'white', margin: '2px 2rem 2px 2px' }} to="/">{title}</Link>
        </div>
        <div style={{ textAlign: 'center' }}>
            <Link style={{ color: 'white', margin: '2px 2rem 2px 2px' }} to='/apptCalendar'>Appointment Calendar</Link>
            <Link style={{ color: 'white', margin: '2px 2rem 2px 2px' }} to="/upcomingAppt">Upcoming Appointments</Link>
        </div>
        <div style={{ float: 'right', 'margin': '-33px 10px 10px 13px' }}>
            <Link style={{ color: 'white' }} to='/createAppointment'>Create an Appointment</Link>
        </div>

    </div>
)

export default Header