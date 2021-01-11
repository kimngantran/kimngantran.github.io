function Footer() {
  return (
    <div className="text-center py-5" id="footer">
      <h1 className="text-white footer">Get in touch!</h1>
      <p className="text-white">Feel free to reach out if you're looking for a team player to join your marketing team, or just want to connect.</p>
      <a href="mailTo:kimngan.tran.2095@gmail.com" className="bt-footer btn btn-light"><i className="fas fa-envelope"></i> send me an email</a>

      <a href="https://www.linkedin.com/in/trankimngan2011/" target="_blank" rel='noreferrer' className="bt-footer btn btn-light"> connect with me on <i className="fab fa-linkedin"></i></a>
    </div>
  )
}

export default Footer;