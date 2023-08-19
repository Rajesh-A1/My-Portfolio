/* Change this file to get your personal Porfolio */

// Website related settings
const settings = {
  isSplash: false, // Change this to false if you don't want Splash screen.
};

//SEO Related settings
const seo = {
  title: "Rajesh's Portfolio",
  description:
    "A passionate individual who always thrives to work on end to end products which develop sustainable and scalable social and technical systems to create impact.",
  og: {
    title: "Rajesh Portfolio",
    type: "website",
    url: "https://rajesh-a1.github.io",
  },
};

//Home Page
const greeting = {
  title: "Hey There",
  logo_name: "Rajesh",
  nickname:"I'm Rajesh",
  subTitle:
    "A studious Data Science enthusiast having an experience in Python / R / SQL / MongoDB / Excel / Tableau / PowerBI / Machine Learning and some other cool libraries and frameworks.",
  resumeLink:
    "https://drive.google.com/file/d/1AvGdd27IOqCqAKhgpDaQi_T-3wrHJSVv/view?usp=sharing",
  portfolio_repository: "https://drive.google.com/file/d/1-j3A-SFHdGyoCxV7bTKAQIvmy8dpnKzE/view?usp=sharing",
  githubProfile: "https://github.com/Rajesh-A1",
};

const socialMediaLinks = [
  /* Your Social Media Link */
  // github: "https://github.com/Rajesh-A1",
  // linkedin: "https://www.linkedin.com/in/ashutosh-hathidara-88710b138/",
  // gmail: "https://mail.google.com/mail/u/0/?fs=1&to=rajeshpandiyan1110@gmail.com&tf=cm",
  // instagram: "https://www.instagram.com/therajesh.a/"

  {
    name: "LinkedIn",
    link: "https://www.linkedin.com/in/a-rajesh/",
    fontAwesomeIcon: "fa-linkedin-in", // Reference https://fontawesome.com/icons/linkedin-in?style=brands
    backgroundColor: "#0077B5", // Reference https://simpleicons.org/?q=linkedin
  },
  {
    name: "Github",
    link: "https://github.com/Rajesh-A1",
    fontAwesomeIcon: "fa-github", // Reference https://fontawesome.com/icons/github?style=brands
    backgroundColor: "#181717", // Reference https://simpleicons.org/?q=github
  },
  {
    name: "Gmail",
    link: "https://mail.google.com/mail/u/0/?fs=1&to=rajeshalagupandiyan@gmail.com&tf=cm",
    fontAwesomeIcon: "fa-google", // Reference https://fontawesome.com/icons/google?style=brands
    backgroundColor: "#D14836", // Reference https://simpleicons.org/?q=gmail
  },
  {
    name: "Instagram",
    link: "https://www.instagram.com/therajesh.a/",
    fontAwesomeIcon: "fa-instagram", // Reference https://fontawesome.com/icons/instagram?style=brands
    backgroundColor: "#E4405F", // Reference https://simpleicons.org/?q=instagram
  },
  {
    name: "Whatsapp",
    link: "https://wa.me/+919943326068",
    fontAwesomeIcon: "fa-brands fa-whatsapp", // Reference https://fontawesome.com/icons/instagram?style=brands
    backgroundColor: "#25D366", // Reference https://simpleicons.org/?q=instagram
  },
];

const skills = {
  data: [
    {
      title: "Data Science & AI",
      fileName: "DataScienceImg",
      skills: [
        "CRAZY DATA SCIENCE PROGRAMMER APPLYING COOL INNOVATIVE IDEAS",
        "⚡ Developing highly scalable production ready models for various deeplearning and statistical use cases",
        "⚡ Experience of working with Python, Power BI and Excel projects",
        "⚡ Complex quantitative modelling for dynamic forecasting and time series analysis",
        "⚡ Good understanding of Data Structures and Algorithms",
      ],
      softwareSkills: [
        {
          skillName: "Python",
          fontAwesomeClassname: "logos:python",
          style: {
            backgroundColor: "transparent",
          },
        },
        {
          skillName: "R",
          fontAwesomeClassname: "devicon:r",
          style: {
            backgroundColor: "transparent",
          },
        },
        {
          skillName: "Sql",
          fontAwesomeClassname: "devicon-plain:sqldeveloper",
          style: {
            backgroundColor: "transparent",
            style:"color: #3498db;",
            color: "#3498DB",
          },
        },
        {
          skillName: "Excel",
          fontAwesomeClassname: "vscode-icons:file-type-excel",
          style: {
            backgroundColor: "transparent",
          },
        },
        {
        skillName: "Tableau",
        fontAwesomeClassname: "logos:tableau",
        },
        {
          skillName: "Power BI",
          fontAwesomeClassname: "logos:microsoft-power-bi",
          style: {
            backgroundColor: "transparent",
            style:"color: #3498db;",
            color: "#3498DB",
            },
          },
        {
          skillName: "Github",
          fontAwesomeClassname: "devicon:github",
          style: {
            backgroundColor: "transparent",
          },
        },
        {
          skillName: "jupyter",
          fontAwesomeClassname: "logos:jupyter",
          style: {
            backgroundColor: "transparent",
          },
        },
        {
          skillName: "Pandas",
          fontAwesomeClassname: "logos:pandas-icon",
          style: {
            backgroundColor: "transparent",
          },
        },
        {
          skillName: "Tensorflow",
          fontAwesomeClassname: "logos-tensorflow",
          style: {
            backgroundColor: "transparent",
          },
        },
        {
          skillName: "Keras",
          fontAwesomeClassname: "simple-icons:keras",
          style: {
            backgroundColor: "white",
            color: "#D00000",
          },
        },
        {
          skillName: "PyTorch",
          fontAwesomeClassname: "logos-pytorch",
          style: {
            backgroundColor: "transparent",
          },
        },
      ],
    },
  ],
};

// Education Page
const competitiveSites = {
  competitiveSites: [
    {
      siteName: "LeetCode",
      iconifyClassname: "simple-icons:leetcode",
      style: {
        color: "#FFA116",
      },
      profileLink: "https://leetcode.com/a_rajesh/",
    },
    {
      siteName: "GeeksforGeeks",
      iconifyClassname: "simple-icons:geeksforgeeks",
      style: {
        color: "#2F8D46",
      },
      profileLink: "https://auth.geeksforgeeks.org/user/rajesh1110",
    },
    {
      siteName: "HackerRank",
      iconifyClassname: "simple-icons:hackerrank",
      style: {
        color: "#2EC866",
      },
      profileLink: "https://www.hackerrank.com/a_rajesh",
    },
    {
      siteName: "Kaggle",
      iconifyClassname: "simple-icons:kaggle",
      style: {
        color: "#20BEFF",
      },
      profileLink: "https://www.kaggle.com/rajesh1110",
    },
  ],
};

const degrees = {
  degrees: [
    {
      title: "Oxford Engineering College,Trichy",
      subtitle: "Bachelors of Technology in Information Technology",
      logo_path: "oec.logo.png",
      alt_name: "OEC Trichy",
      duration: " June 2020 - May 2024 / Present In My Bachelor Studies",
      descriptions: [
        "⚡ I have studied basic software engineering subjects like DS, Algorithms, DBMS, OS, CA, cI, WT, etc.",
        "⚡ Apart from this, I have done courses on Python, R, SQL, Mongo DB, Excel, Power BI, Tableau, Data Engineering, Bigdata and Machine Learning 101.",
      ],
      website_link: "http://oxfordec.edu.in/",
    },
  ],
};

const certifications = {
  certifications: [
    {
      title: "Short Term Training Programme ",
      subtitle: " ",
      logo_path: "79c231c1-4f16-435b-b04d-374ca800cca8_page-0001.jpg",
      certificate_link:"https://credsverse.com/credentials/79c231c1-4f16-435b-b04d-374ca800cca8",
      alt_name: "Short Term Training Programme",
      color_code: "#F5F5F5",
    },
    {
      title: "National Service Scheme",
      subtitle: " ",
      logo_path: "NSS1.png",
      certificate_link:"https://drive.google.com/file/d/1oyR6Jdg2HO9M2ZQ8vJCKfoSW79fn1rpK/view?usp=sharing",
      alt_name: "National Service Scheme",
      color_code: "#F7F9F9",
    },
    {
      title: "Introduction to Data Science by VISA",
      subtitle: "- Kritika ",
      logo_path: "visalogo.png",
      certificate_link:"https://drive.google.com/file/d/1Py-n-HnRo6vet-N4pKOmesHL4Bpe4CJg/view?usp=sharing",
      alt_name: "MIT Workshop",
      color_code: "#E74C3C",
    },
    {
      title: "Introduction to Data Science",
      subtitle: "- Lavanya Vijayan and Madecraft",
      logo_path: "1lll.png",
      certificate_link:"https://www.linkedin.com/learning/certificates/982df9c271b720c2f8a9ef009f4e01a2a511fc0c8d6b013a71bcf64f825ddbb6",
      alt_name: "LinkedInLearning",
      color_code: "#F7F9F9",
    },
    {
      title: "Become a Data Scientist",
      subtitle: "- Jungwoo Ryoo, Barton Poulson, Eddie Davila, Bill Shander, Jonathan Reichental",
      logo_path: "LinkedInLearningLogo.png",
      certificate_link:
        "https://www.linkedin.com/learning/paths/become-a-data-scientist?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_certifications_details%3Bt3i6T5wASkmE%2FM4pxqFzdg%3D%3D",
      alt_name: "LinkedInLearning",
      color_code: "#0174b1",
    },
    {
      title: "Python Programming",
      subtitle: "- M.Arunprakash",
      logo_path: "guvi.png",
      certificate_link:
        "https://www.guvi.in/verify-certificate?id=3kI1897Q4f6hY60051",
      alt_name: "Guvi",
      color_code: "#F7F9F9",
    },
    {
      title: "Master SQL for Data Science",
      subtitle: "- Bill Weinman, Scott Simpson, Emma Saunders, Dan Sullivan, Ben Sullins",
      logo_path: "1lll.png",
      certificate_link:"https://drive.google.com/file/d/1kDzkM4OeyBLywYxC6uYbuHFQvIjyPbcf/view?usp=sharing",
      alt_name: "LinkedInLearning",
      color_code: "#34345E",
    },
    {
      title: "Advanced Google Analytics",
      subtitle: "- Madecraft and Brad Batesole",
      logo_path: "1lll.png",
      certificate_link:
        "https://drive.google.com/file/d/1uJ__jBJp5m5PYIaqFy82b-vP_PdZya_E/view?usp=sharing",
      alt_name: "LinkedInLearning",
      color_code: "#F7F9F9",
    },
    {
      title: "Statistics Foundations: Probability",
      subtitle: "- Eddie Davila",
      logo_path: "1lll.png",
      certificate_link:
        "https://www.linkedin.com/learning/certificates/52bc95c78fac7a02ca51a77717f23da6607b7d9ca8987f811192f302583d6d3d?trk=share_certificate&lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_certifications_details%3BeAV6x3qwQMab2LMvLZtcow%3D%3D",
      alt_name: "LinkedInLearning",
      color_code: "#34495E",
    },
  ],
};

// Experience Page
const experience = {
  title: "Experience",
  subtitle: "",
  description:
    "Use Every Opportunity to Raise My Experience to Understand The Real-World Scenarios to Become an Expert in the Field of Data Science.",
  header_image_path: "experience.svg",
  sections: [
    
    {
      title: "Short Term Training Programme ",
      experiences: [
        
        {
          title: "Machine Learning & Deep learning with Data science",
          company: "Show credential",
          company_url: "https://credsverse.com/credentials/79c231c1-4f16-435b-b04d-374ca800cca8",
          logo_path: "Training.png",
          duration: "17/07/2023 - 21/07/2023",
          location: "Trichy, Tamil Nadu",
          description:"I am pleased to report that I participated in the Short Term Training Programme (STTP) on Machine Learning & Deep Learning with Data Science, organized by the Department of CSE, AI&DS at CARE College of Engineering, Trichy.  The training was conducted online.I found the STTP to be very informative and well-organized.  The lecturers were all highly qualified and experienced in their respective fields.  The course covered a wide range of topics, including: * Introduction to Machine Learning and Deep Learning * Supervised Learning * Unsupervised Learning * Reinforcement Learning * Natural Language Processing * Computer Vision * Data Mining. I found the most interesting topics to be supervised learning, unsupervised learning, and reinforcement learning.  I was also particularly interested in the applications of Machine Learning and Deep Learning in the real world.  I am confident that the knowledge and skills that I gained during the STTP will be valuable in my future career.  I am currently considering pursuing a career in Machine Learning or Deep Learning.  I believe that these are two of the most promising fields in the tech industry, and I am excited to be a part of this growing field.  I would like to thank the organizers of the STTP for providing me with this valuable opportunity.  I would also like to thank the lecturers for their excellent instruction.  I am confident that the knowledge and skills that I gained during the STTP will be valuable in my future career.",
          color: "#117864",
        },
      ],
    },
    {
      title: "Workshops",
      experiences: [
        
        {
          title: "Data Science",
          company: "Show credential",
          company_url: "https://drive.google.com/file/d/1Py-n-HnRo6vet-N4pKOmesHL4Bpe4CJg/view?usp=sharing",
          logo_path: "visalogo.png",
          duration: "14 May 2022",
          location: "Chennai, Tamil Nadu",
          description:
            "I Participated Madras Institute of Technology, Computer Society of MIT Conducted a CARTE BLANCHE ' 22 to Introduction to Data Science Workshop. In that Workshop Increase My Knowledge in Data Science Field and give more Ideas about Data Science Methodologies and Tools.",
          color: "#C0392B",
        },
        {
          title: "Artificial intelligence & Internet of Things",
          company: "Show credential",
          company_url: "https://drive.google.com/file/d/1DdBfA82TQTrSyEfgJlnl-exViV2qf74g/view?usp=sharing",
          logo_path: "au.trichy.png",
          duration: "27 March 2023",
          location: "Trichy, Tamil Nadu",
          description:
            "The Artificial Intelligence and Internet of Things Workshop was conducted by the Department of Computer Science and Engineering (CSE) at Anna University, Tiruchirappalli, on March 27, 2023.The workshop was part of a national level technical symposium, which was attended by students and professionals from all over India and The workshop covered a wide range of topics related to artificial intelligence and the Internet of Things, including: The basics of * artificial intelligence, * Machine learning, * Natural language processing, * The Internet of Things. The application of artificial intelligence and the Internet of Things in various industries and this workshop was delivered by a team of experienced experts in the field of artificial intelligence and the Internet of Things. The workshop was interactive and engaging, and participants had the opportunity to ask questions and get hands-on experience with artificial intelligence and the Internet of Things. The workshop was a valuable opportunity to learn about the latest trends in artificial intelligence and the Internet of Things and to network with other professionals in the field.",
          color: "#3498DB",
        },
      ],
    },
    {
      title: "Volunteerships",
      experiences: [
        {
          title: "National Service Scheme",
          company: "Show credential",
          company_url: "https://drive.google.com/file/d/1oyR6Jdg2HO9M2ZQ8vJCKfoSW79fn1rpK/view?usp=sharing",
          logo_path: "nss-removebg-preview.png",
          duration: "22 September 2018",
          location: "Pudukkottai, Tamil Nadu",
          description:
            "I am a responsible person for leading and managing a group of individuals who are committed to making a positive impact on our community through social service activities. My role involves organizing and overseeing various initiatives and projects that aim to promote social awareness, instill a sense of responsibility and encourage volunteerism. By fostering teamwork, promoting leadership, and facilitating personal growth.",
          color: "#4285F4",
        },
      ],
    },
  ],
};

// Projects Page
const projectsHeader = {
  title: "Projects",
  description:
    "My projects makes use of vast variety of latest technology tools. My best experience is to create Data Science projects and deploy them to web applications using cloud infrastructure.",
  avatar_image_path: "projects_image.svg",
};

const publicationsHeader = {
  title: "Publications",
  description:
    "I have worked on and published a few research papers and publications of my own.",
  avatar_image_path: "projects_image.svg",
};

const publications = {
  data: [
    {
      id: "MDEwOlJlcG9zaXRvcnkyNDU0NjcyNzQ=",
      name: "Artificial Intelligence Paper",
      createdAt: "2020-03-06T16:26:54Z",
      description: "Paper Written on Artificial Intelligence published in xyz ",
      url:
        "https://www.andrewng.org/publications/building-high-level-features-using-large-scale-unsupervised-learning/",
    },
    {
      id: "MDEwOlJlcG9zaXRvcnkyNDU0NjcyNzi=",
      name: "Artificial Intelligence Paper",
      createdAt: "2020-03-06T16:26:54Z",
      description: "Paper Written on Artificial Intelligence published in xyz ",
      url:
        "https://www.andrewng.org/publications/building-high-level-features-using-large-scale-unsupervised-learning/",
    },
    {
      id: "MDEwOlJlcG9zaXRvcnkyNDU0NjcyNze=",
      name: "Artificial Intelligence Paper",
      createdAt: "2020-03-06T16:26:54Z",
      description: "Paper Written on Artificial Intelligence published in xyz ",
      url:
        "https://www.andrewng.org/publications/building-high-level-features-using-large-scale-unsupervised-learning/",
    },
    {
      id: "MDEwOlJlcG9zaXRvcnkyNDU0NjcyNzt=",
      name: "Artificial Intelligence Paper",
      createdAt: "2020-03-06T16:26:54Z",
      description: "Paper Written on Artificial Intelligence published in xyz ",
      url:
        "https://www.andrewng.org/publications/building-high-level-features-using-large-scale-unsupervised-learning/",
    },
    {
      id: "MDEwOlJlcG9zaXRvcnkyNDU0NjcyNzb=",
      name: "Artificial Intelligence Paper",
      createdAt: "2020-03-06T16:26:54Z",
      description: "Paper Written on Artificial Intelligence published in xyz ",
      url:
        "https://www.andrewng.org/publications/building-high-level-features-using-large-scale-unsupervised-learning/",
    },
  ],
};

// Contact Page
const contactPageData = {
  contactSection: {
    title: "Contact Me",
    profile_image_path: "my-pic-fotor-2023072561213.png",
    description:
      "I am available on almost every social media. You can message me, I will reply within 24 hours. I can help you with SQL, ML, AI and Python.",
  },
  blogSection: {
    title: "Blogs",
    subtitle:
      "For individual fundamental empowerment, I like to write powerful lessons that create impact on each of the reader individually to change the core of their character.",
    link: "https://ashutoshhathidara.wordpress.com",
  avatar_image_path: "blogs_image.svg",
  },
  addressSection: {
    title: "Address",
    subtitle:
      "328/A North Street Kallupatti, Perambur-Post, Viralimalai-TK, Pudukkottai-Dist 621316",
    avatar_image_path: "address_image.svg",
    location_map_link: "https://www.google.com/maps/place/10%C2%B036'26.5%22N+78%C2%B039'09.3%22E/@10.6073526,78.6503847,17z/data=!3m1!4b1!4m5!3m4!1s0x0:0xd17eb6e958d7a2fd!8m2!3d10.6073473!4d78.6525734",
  },
  phoneSection: {
    title: "Phone Number",
    subtitle: "+91 9943326068",
  },
};

export {
  settings,
  seo,
  greeting,
  socialMediaLinks,
  skills,
  competitiveSites,
  degrees,
  certifications,
  experience,
  projectsHeader,
  publicationsHeader,
  publications,
  contactPageData,
};
