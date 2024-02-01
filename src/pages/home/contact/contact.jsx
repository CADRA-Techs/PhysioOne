import './style.css';
export default function Contact()
{
    return(<div><center>
        <section>
          <span className='txt1'>Contact us</span>
          <h2>Drop Us Message For Any Query</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
        </section>
        <form className="component">
          <input type='text' placeholder='NAME' className="name"/>
          <input type='email' placeholder='EMAIL' className="e-mail" />
          <input type='text' placeholder='SUBJECT' className="subject" />
          <input type='tel' placeholder='PHONE NUMBER' className="phone" pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}" required/>
          <input type='text' placeholder='Write something'  className="your-message" />
          <button className="rectangle" > SUBMIT </button>
        </form>
      </center>
      <br/>
      <center>
      <div id="google_map">
        <iframe
          title="Google Map"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3914.985681352466!2d77.33375001469823!3d11.114444092092679!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba907a52e380aff%3A0x15457ba0fab7546d!2sRK%20Residency!5e0!3m2!1sen!2sin!4v1572006867944!5m2!1sen!2sin"
          width="90%"
          height="600"
          frameBorder="10"
          style={{ border: 10 ,paddingLeft:40,paddingRight:40,paddingBottom:40, justifyContent: 'end' }}
          allowFullScreen=""
        >
          GLADIS
        </iframe>
      </div>
      </center></div>)
}