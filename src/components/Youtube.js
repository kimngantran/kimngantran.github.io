function Youtube(props) {
  return (
    <div className="embed-responsive embed-responsive-16by9">
      <iframe title={props.title} className="embed-responsive-item p-2" 
      src={props.src} allowFullScreen></iframe>
    </div>
  );
}

export default Youtube;
