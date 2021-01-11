import Job from "./Job";

function Background() {
  return(
    <div className="background p-5">
      <h1 className="mb-5">Professional Background</h1>
      <Job 
        job="Digital Media Consultant" 
        name="George Brown College"
        date="Sep 2020 - Dec 2020"
        description="Creating digital marketing content for multiple social media channels, optimizing content calendar aligned with customer life cycles that strengthen the relationship and ultimately drive web traffic and conversions."
      />
      <Job 
        job="Digital Marketing Intern" 
        name="Inbound Marketers"
        date="Jan 2019 - April 2019"
        description="Work with clients to develop inbound marketing strategies that increase brand awareness and improve website ranking on Google."
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
        description="Responsible for multiple roles from sale to marketing. Participated in all aspects including researching, planning, executing and reporting marketing strategies. Created, published articles on the company website; analyzed traffic using Google Analytics to make recommendations and adjustments. For more information about the business please visit: "
        link="https://edu2review.com"
      />
    </div>
  );
}

export default Background;