import Youtube from "./Youtube";
import Vimeo from "./Vimeo";
import Article from "./Article";

function Portfolio() {
	return (
		<div className="p-5 bg-ngan-a" id="portfolio">
			<h1 className="mb-5">Portfolio</h1>
			<p className="text-muted">
				My experience is mainly focused on the educational environment. I have
				worked with various customer groups from millennials to gen Z. Take a
				look at some of my works I’ve dedicated my time to.
			</p>

			<h3>Videos</h3>
			<div className="row row-cols-1 row-cols-sm-2 row-cols-lg-2 row-cols-xl-4">
				<Youtube
					title="youtube1"
					className="col"
					src="https://www.youtube.com/embed/3Alr1o5hw58"
				/>
				<Youtube
					title="youtube2"
					className="col"
					src="https://www.youtube.com/embed/QCV3OddQigU"
				/>
				<Youtube
					title="youtube3"
					className="col"
					src="https://www.youtube.com/embed/QYwG8bRX7hc"
				/>
				<Youtube
					title="youtube4"
					className="col"
					src="https://www.youtube.com/embed/ktfk8UKDYWA"
				/>
			</div>
			<div className="divider"></div>

			<h3 className="mt-5 mb-3">Stories</h3>
			<div className="row row-cols-2 row-cols-sm-4">
				<Vimeo
          title="viemo1"
					src="https://player.vimeo.com/video/498978750?title=0\&byline=0\&portrait=0"
					className="col"
				></Vimeo>
				<Vimeo
          title="viemo2"
					src="https://player.vimeo.com/video/498979129?title=0\&byline=0\&portrait=0"
					className="col"
				></Vimeo>
				<Vimeo
          title="viemo3"
					src="https://player.vimeo.com/video/498980003?title=0\&byline=0\&portrait=0"
					className="col"
				></Vimeo>
				<Vimeo
          title="viemo4"
					src="https://player.vimeo.com/video/498978733?title=0\&byline=0\&portrait=0"
					className="col"
				></Vimeo>
				<Vimeo
          title="viemo5"
					src="https://player.vimeo.com/video/498978688?title=0\&byline=0\&portrait=0"
					className="col"
				></Vimeo>
				<Vimeo
          title="viemo6"
					src="https://player.vimeo.com/video/498978486?title=0\&byline=0\&portrait=0"
					className="col"
				></Vimeo>
				<Vimeo
          title="viemo7"
					src="https://player.vimeo.com/video/498978382?title=0\&byline=0\&portrait=0"
					className="col"
				></Vimeo>
				<Vimeo
          title="viemo8"
					src="https://player.vimeo.com/video/498978023?title=0\&byline=0\&portrait=0"
					className="col"
				></Vimeo>
			</div>
			<div className="divider"></div>
			
			<h3 className="mt-5 mb-3">Newsletters</h3>
			<div className="row row-cols-2 row-cols-sm-3 row-cols-lg-5">
				<Article
					className="col"
					img="img/Picture1.jpeg"
					src="http://eml.georgebrown.ca/m/e6920c0f92ac4f6baa45812b1e80d373/m/fa4fc4dc9c9b8b367bc5fce3d8e74a39/c62df00615e9d0d06be634424ca7836b?utm_medium=email&utm_campaign=Fall-2020---December-16&utm_source=Envoke-Fall2020-September9GBCE&utm_term=CONGRATULATIONS%21-YOU-DID-IT%21"
				/>
				<Article
					className="col"
					img="img/Picture2.jpeg"
					src="http://eml.georgebrown.ca/m/e6920c0f92ac4f6baa45812b1e80d373/m/40fb6f2969a8804d5355fc6a4bfc4f1f/c62df00615e9d0d06be634424ca7836b?utm_medium=email&utm_campaign=Fall-2020--December-9&utm_source=Envoke-Fall2020-September9GBCE&utm_term=1-week-left"
				/>
				<Article
					className="col"
					img="img/Picture3.jpeg"
					src="http://eml.georgebrown.ca/m/e6920c0f92ac4f6baa45812b1e80d373/m/1bab3b9879511ab9b155fbd521e0cc0d/c62df00615e9d0d06be634424ca7836b?utm_medium=email&utm_campaign=Fall-2020---December-2&utm_source=Envoke-Fall2020-September9GBCE&utm_term=You%27ve-got-this%21"
				/>
				<Article
					className="col"
					img="img/Picture4.jpeg"
					src="http://eml.georgebrown.ca/m/e6920c0f92ac4f6baa45812b1e80d373/m/a07480a45e8e03a060a5fa063e8573e1/c62df00615e9d0d06be634424ca7836b?utm_medium=email&utm_campaign=Fall-2020---November-11&utm_source=Envoke-Fall2020-September9GBCE&utm_term=Online-Career-Resources"
				/>
				<Article
					className="col"
					img="img/Picture5.jpeg"
					src="http://eml.georgebrown.ca/m/e6920c0f92ac4f6baa45812b1e80d373/m/96509b514a3cdd067505f8ede6558bf1/c62df00615e9d0d06be634424ca7836b?utm_medium=email&utm_campaign=Fall-2020---October-28&utm_source=Envoke-Fall2020-September9GBCE&utm_term=Reading-week-is-around-the-cor"
				/>
			</div>
		</div>
	);
}

export default Portfolio;
