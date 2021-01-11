function Vimeo(props) {
  return (
    <div className="embed-responsive embed-responsive-1by1">
      <iframe title={props.title} className="embed-responsive-item pb-3" 
      src={props.src} allowFullScreen></iframe>
    </div>
  );
}

export default Vimeo;