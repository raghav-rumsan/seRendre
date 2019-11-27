import React from 'react'
import { Router, Switch, Route } from 'react-router-dom'
import history from '../history'
import Dashboard from '../Containers/Dashboard'
import Steps from '../Containers/Steps'
import Header from '../Containers/Header'
import SingleAppointment from '../Containers/Dashboard/Appointments/SingleAppointment'
import Upcoming from '../Containers/Upcoming'
import AppointmentCalendar from '../Containers/AppointmentCalendar'
import CreateAppointment from '../Containers/CreateAppointment'

const App = () => (
    <div>
        <Router history={history}>
            <Header />
            <div>
                <Switch>
                    <Route path='/' exact component={Dashboard} />
                    <Route path='/createAppointment' exact component={CreateAppointment} />
                    <Route path='/singleAppt/:id' component={SingleAppointment} />
                    <Route path='/upcomingAppt' component={Upcoming} />
                    <Route path='/apptCalendar' component={AppointmentCalendar} />
                </Switch>
            </div>
        </Router>
    </div>
)

export default App