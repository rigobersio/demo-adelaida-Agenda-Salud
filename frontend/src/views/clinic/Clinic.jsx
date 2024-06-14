/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Helmet } from 'react-helmet'

import Footer from '../../components/footer/Footer'
import scheludes from './scheludes.json'
import ClinicTable from '../../components/clinicTable/ClinicTable'
import Calendar from '../../components/calendar/Calendar'
import './clinic.css'
import { toast } from 'react-toastify'
import { updateUser } from '../../redux/actions/user'
import { useDispatch, useSelector } from "react-redux";
import { getUserScheludes } from '../../utils/user/getAppointments'
import { placeAppointment } from '../../redux/slices/pabloSlices'

const Clinic = () => {
  const dispatch = useDispatch()
  const { user } = useSelector(state => state.auth)
  const { appointment } = useSelector(state => state.pablo)

  const navigate = useNavigate()
  const [showMenu, setShowMenu] = useState()
  const [showCalendar, setShowCalendar] = useState(false)
  const [selectedDay, setSelectedDay] = useState(1)
  const [appointments, setAppointments] = useState(scheludes)

  useEffect(() => {
    if (!user) dispatch(updateUser())
    const tkn = localStorage.getItem('tkn')
    if (!tkn) navigate('/login')
    const aux = scheludes.map(({ hour }) => { return { [hour]: false } })
    setShowMenu(aux);
    getUserScheludes({ doctor_name: 'Martin', doctor_last_name: 'Gamboa', day: '06/13/2024' })
      .then(data => {
        console.log(data);
        let temp = [...scheludes]
        data.forEach(({ hour, patient_name, patient_last_name }) => {
          for (const schelude of temp) {
            if (schelude.hour === hour) {
              schelude.patient = `${patient_name} ${patient_last_name}`
              break
            }
          }
        });
        setAppointments(temp)
      })
  }, [])

  const [count, setCount] = useState(1)
  useEffect(() => {
    console.log(count);
    setCount(prev => prev + 1)
    console.log(user);
    if (user && user.id) {
      let aux = {}
      if (appointment && Object.keys(appointment).length > 0) {
        aux = { ...appointment }
      }
      aux.clinic_id = user.clinic_id
      aux.specialty_id = user.specialty_id
      aux.doctor_id = user.id
      dispatch(placeAppointment(aux))
    }
  }, [user])

  const handleOpenMenu = hour => {
    setShowMenu({
      ...showMenu,
      [hour]: true
    })
  }

  const handleMenuItem = (hour, item) => {
    if (item === 'agendar')
      toast(hour)
    setShowMenu({
      ...showMenu,
      [hour]: false
    })
  }

  return (
    <div className="clinic-container">
      <Helmet>
        <title>Clínica - AgendaSalud</title>
        <meta property="og:title" content="Clinic - AgendaSalud" />
      </Helmet>
      <div className="clinic-header">
        <div className="clinic-links-container">
          <img
            alt="logo Agenda Salud"
            src="/logonew.png"
            className="nav-logo"
          />
          <span className="clinic-text">
            Agenda Salud
          </span>
        </div>
      </div>
      <div className="clinic-scheludes-calendar">
        <ClinicTable
          handleMenuItem={handleMenuItem}
          showMenu={showMenu}
          scheludes={appointments}
          handleOpenMenu={handleOpenMenu}
        />

        <Calendar
          setShowCalendar={setShowCalendar}
          selectedDay={selectedDay}
          setSelectedDay={setSelectedDay}
        />

      </div>
      <div className="clinic-buttons-container">
        <button type="button" className="clinic-button1" onClick={() => navigate('/agendar-paciente')}>
          <img
            alt="agendar icon"
            src="agendar_icon.svg"
            className="clinic-vector"
          />
          <span className="clinic-text41">
            Agendar turnos
          </span>
        </button>
        <button type="button" className="clinic-button2" onClick={() => navigate('/lista-pacientes')} >
          <img
            alt="listado icon"
            src="listado_icon.svg"
            className="clinic-vector1"
          />
          <span className="clinic-text43">
            Listado de pacientes
          </span>
        </button>
        <button type="button" className="clinic-button3" onClick={() => navigate('/novedades-clinico')} >
          <img
            alt="novedades icon"
            src="novedades_icon.svg"
            className="clinic-vector2"
          />
          <span className="clinic-text45">
            Novedades
          </span>
        </button>
        <button type="button" className="clinic-button4" onClick={() => navigate('/ayuda')} >
          <img
            alt="ayuda icon"
            src="ayuda_icon.svg"
            className="clinic-icon"
          />
          <span className="clinic-text47">
            Ayuda
          </span>
        </button>
        <button type="button" className="clinic-button5" onClick={() => navigate('/membership')} >
          <img
            alt="membresía icon"
            src="membresia_icon.svg"
            className="clinic-icon1"
          />
          <span className="clinic-text49">
            Membresía
          </span>
        </button>
        <button type="button" className="clinic-button6" onClick={() => navigate('/clinic-profile')}>
          <img
            alt="perfil icon"
            src="perfil_icon.svg"
            className="clinic-icon2"
          />
          <span className="clinic-text51">
            Mi perfil
          </span>
        </button>
      </div>
      <Footer />
    </div>
  )
}

export default Clinic
