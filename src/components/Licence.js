function Licence() {
  return (
    <div className="p-5 bg-ngan-c" id="certification">
      <h1 className="text-center mb-5">Certifications</h1>
      <div id="carouselExampleControls" className="carousel slide" data-ride="carousel">
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src="img/licence1.jpg" className="d-block w-50 lisence-photo" alt="certification-1" />
          </div>
          <div className="carousel-item">
            <img src="img/licence2.jpg" className="d-block w-50 lisence-photo" alt="certification-2" />
          </div>
          <div className="carousel-item">
            <img src="img/licence3.jpg" className="d-block w-50 lisence-photo" alt="certification-3" />
          </div>
        </div>
        <a className="carousel-control-prev photo-control" href="#carouselExampleControls" role="button" data-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="sr-only">Previous</span>
        </a>
        <a className="carousel-control-next photo-control" href="#carouselExampleControls" role="button" data-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="sr-only">Next</span>
        </a>
</div>
    </div>
  );
}

export default Licence;
