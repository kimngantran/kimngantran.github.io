import Job from "./Job";

function Background() {
  return(
    <div className="container">
    <div className="background p-5">
      <h1 className="mb-5">Professional Background</h1>
      <Job 
        job="Digital Media Consultant" 
        name="George Brown College"
        date="Sep 2020 - Dec 2020"
        description="Created digital marketing content for multiple social media channels, optimized content calendar aligned with customer life cycles that strengthen the relationship and ultimately drove web traffic."
      />
      <Job 
        job="Digital Marketing Intern" 
        name="Inbound Marketers"
        date="Jan 2019 - April 2019"
        description="Worked with clients to develop inbound marketing strategies that increase brand awareness and improve website ranking on Google."
      />
      <Job 
        job="Business Development Executive" 
        name="Young Engineers"
        date="2017 - 2018"
        description="Created brand marketing initiatives, implemented social media advertising strategies to target desired audiences achieved 10% growth of lead generation and increased Facebook engagement by 50%. For more information about the business please visit: "
        link="https://www.hcm.youngengineers.vn"
      />
      <Job 
        job="Content Marketing and Educational Consultant" 
        name="Edu2Review"
        date="2016 – 2017"
        description="Manage multiple responsibilities from sale to marketing. Participated in all aspects including researching, planning, executing and reporting marketing strategies. Created, published articles on the company website; analyzed traffic using Google Analytics to make recommendations and adjustments. For more information about the business please visit: "
        link="https://edu2review.com"
      />
      <div className="divider"></div>
      <h3 className="my-5">My Skills</h3>
      <p className="text-muted">Through my studies and experiences, I have gained a solid understanding of digital marketing, marketing management and strategic marketing and have dedicated a lot of my free time to learn new technical skills.</p>
      <ul className="mt-5">
        <li>
          <p><strong>Digital marketing:</strong> A solid knowledge in digital marketing strategies such as SEO, social media ads, content management, email marketing and experience in digital marketing segmentation.</p>
        </li>
        <li>
          <p><strong>Marketing analytics, report and research:</strong> In-depth knowledge of digital marketing analytics including web analytics in Google Analytics, native social media analytics. Strong marketing research skills in conducting qualitative and quantitative research.</p>
        </li>
        <li>
          <p><strong>Social Media Management:</strong> Solid understanding of social media channels (i.e. Website, Facebook, Instagram, LinkedIn, etc.) and online user experience.</p>
        </li>
        <li>
          <p><strong>CRM: </strong> Salesforce, Hubspot.</p>
        </li>
        <li>
          <p><strong>Tools and Technologies: </strong> Canva, Lightroom, Procreate, HTML, CSS, Google Webmaster Tools, Keyword Planner, Google Analytics, Microsoft Office, iMovie, Keynote, Survey Monkey, Mailchimp.</p>
        </li>
      </ul>
    </div>
    </div>
  );
}

export default Background;