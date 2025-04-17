function ContactForm() {
  return (
    <>
      <div className='col-md-8'>
        <div className='contact-form'>
          <form>
            <div className='form-row'>
              <div className='form-group col-md-6'>
                <input type='text' className='form-control' placeholder='Tên của bạn' />
              </div>
              <div className='form-group col-md-6'>
                <input type='email' className='form-control' placeholder='Email' />
              </div>
            </div>
            <div className='form-group'>
              <input type='text' className='form-control' placeholder='Chủ đề' />
            </div>
            <div className='form-group'>
              <textarea className='form-control' rows={5} placeholder='Lời nhắn' />
            </div>
            <div>
              <button className='btn' type='submit'>
                Gửi lời nhắn
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  )
}

export default ContactForm
