

const header = {
  // all the properties are optional - can be left empty or deleted
  homepage:'AK',
  title: "Ashwaq Khazi",
}

const about = {
  // all the properties are optional - can be left empty or deleted
  name: 'Ashwaq Khazi',
  role: 'Front End Developer, Data Science Enthusiast and a Student',
  description:
    'I am a 3rd year EnTC student at',
  resume: 'file:///C:/college%20stuff/32331_Ashwaq_Khazi_Resume.pdf',
  social: {
    linkedin: 'https://linkedin.com',
    github: 'https://github.com',
  },
}

const projects = [
  // projects can be added an removed
  // if there are no projects, Projects section won't show up
  {
    name: 'PISB Hackathon Website',
    description:
      'Created a hackathon website called as Ideathon for PICT IEEE Computer Society using HTML, CSS, Bootstrap, JavaScript',
    stack: ['HTML,CSS,JavaScript,BOOTSTRAP'],
    sourceCode: 'https://github.com',
    livePreview: 'https://hackathon-20-pisb.netlify.app/',
  },
  {
    name: 'Portfolio',
    description:
      'Created my portfolio that you are going through right now from scratch using ReactJS and TailwindCSS, MaterialUI, Bootstrap as UI Library. A responsive website which is solely for the purpose of showcasing my portfolio.',
    stack: ['ReactJS', 'NodeJS','TailwindCSS','BootStrap','MaterialUI'],
    sourceCode: 'https://github.com',
    livePreview: 'https://github.com',
  },
  
]

const skills = [
  "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original-wordmark.svg",
  "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-plain-wordmark.svg",
  "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-plain-wordmark.svg",
  "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg",
          
  "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-plain.svg",
  "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original-wordmark.svg",
  "https://cdn-icons-png.flaticon.com/512/5968/5968672.png",
  
  "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original-wordmark.svg",
  "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg",
  "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg",
  "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/c/c-original.svg",
  "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/materialui/materialui-original.svg",
  "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tensorflow/tensorflow-original.svg",
  "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",    
  "https://cdn-icons-png.flaticon.com/512/5968/5968520.png",
  "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg",
  "https://cdn-icons-png.flaticon.com/512/5968/5968525.png",
  "https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Scikit_learn_logo_small.svg/390px-Scikit_learn_logo_small.svg.png?20180808062052",
  "https://coreui.io/docs/2.1/assets/brand/logo.svg",
  "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/arduino/arduino-original-wordmark.svg",
  "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flask/flask-original.svg",
  "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
  "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg",
  "https://cdn-icons-png.flaticon.com/512/5968/5968559.png"
          
          
          

          


          
          
];

const certification = [
  {
    name: 'Machine Learning by Stanford University',
    img:'https://identity.stanford.edu/wp-content/uploads/sites/3/2020/07/block-s-right.png',
    des: 'This course provides a broad introduction to machine learning,datamining and statistical pattern recognition.',
    link:'https://www.coursera.org/account/accomplishments/certificate/XFNXLEDYSWNF',
  },
  {
    name: 'Neural Networks and Deep Learning',
    img:'https://www.deeplearning.ai/wp-content/uploads/2021/02/LogoFiles_DeepLearning_PrimaryLogo.png',
    des: 'Build, train, and apply fully connected deep neural networks; implement efficient neural networks; identify key parameters in a neural network architecture and apply deep learning to your own applications.',
    link:'https://www.coursera.org/account/accomplishments/certificate/Q6NRE5XM7F35',
  },
  {
    name: 'Introduction to Data Science in Python',
    img:'https://1000logos.net/wp-content/uploads/2018/08/University-of-Michigan-Logo.png',
    des: 'This course will introduce data manipulation and cleaning techniques using the popular python pandas data science library and introduce the abstraction of the Series and DataFrame as the central data structures for data analysis, along with tutorials on how to use functions such as groupby, merge, and pivot tables effectively.',
    link:'https://www.coursera.org/account/accomplishments/certificate/8JWCAKCNR9JE',
  },
  {
    name: 'Introduction to Google SEO',
    img:'https://i.pinimg.com/originals/c6/bb/81/c6bb81774cfe35561c0899dfff1422b9.jpg',
    des: 'This course will introduce the foundational elements of how the most popular search engine, Google, works, how the SEO landscape is constantly changing and what you can expect in the future. It discusses on core SEO strategies and tactics used to drive more organic search results to a specific website or set of websites, as well as tactics to avoid preventing penalization from Google.',
    link:'https://www.coursera.org/account/accomplishments/verify/7BY6JMLU3XRK',
  },
];
  


const social = [
  {
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linkedin/linkedin-original.svg',
    link: 'https://www.linkedin.com/in/ashwaq-khazi-20a8811a7/',
  },
  {
    icon: 'https://cdn-icons-png.flaticon.com/512/889/889192.png',
    link: 'https://github.com/khaziashwaq',
  },
  {
    icon: 'https://cdn-icons-png.flaticon.com/512/1384/1384063.png',
    link: 'https://www.instagram.com/ashwaq-khazi/',
  },
  {
    icon: 'https://cdn-icons-png.flaticon.com/512/732/732200.png',
    link: 'mailto: ashwaqkhazi1729@gmail.com',
  },
];

export { header, about, projects,skills,certification, social}
