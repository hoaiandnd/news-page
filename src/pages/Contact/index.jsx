import Breadcrumb from './Breadcrumb'
import ContactForm from './ContactForm'
import ContactInfo from './ContactInfo'

function Contact() {
  return (
    <>
      <Breadcrumb />
      <div className='contact'>
        <div className='container'>
          <div className='row align-items-center'>
            <ContactForm />
            <ContactInfo />
          </div>
        </div>
      </div>
    </>
  )
}

export default Contact
