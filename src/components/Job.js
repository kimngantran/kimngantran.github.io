function Job(props) {
  return (
    <div className="row">
      <div className="col col-auto col-sm-auto col-lg-4">
        <h5>{props.job}</h5>
        <h6>{props.name}</h6>
        <p>
          <em>{props.date}</em>
        </p>
      </div>
      <div className="col col-12 col-sm-10 col-lg-7">
        <p className="text-muted">
          {props.description} <a href="{props.link}" target="_blank" rel='noreferrer'>{props.link}</a>
        </p>
        
      </div>
    </div>
  );
}

export default Job;
