
import Home from './MyComponents/Home'
import Home1 from './MyComponents/Home1'
import Homehero from './MyComponents/Homehero'
import About1 from './MyComponents/About1'
import About from './MyComponents/About'
import Service from './MyComponents/Service'
import Team from './MyComponents/Team'
import Testimonial from './MyComponents/Testimonial'
import Component from './MyComponents/Component'


function App() {

  const Nav=[
    {
    Home:'Home',
    about:'About',
    service:'Service',
    team:'Team',
    testimonial:'Testimonial',
    contact:'Contact',
    component:'Component'
  }
]

//home section

  const Datahome1 =[
    {
      p:'Small Team With Big Ideas',
      h6:'Creative Studio',
      Button1:'Our Service',
      Button2:'Contact Us'
    }
  ]

  //home hero section
  const Herodata =[
    {
      icon:<i class="bi bi-bezier text-danger fs-1"></i>,
      title:'UX/UI Design',
      description:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Omnis excepturi, repellat esse laborum explicabo quia.',
      
    },
    {
      icon:<i class="bi bi-funnel  text-danger fs-1"></i>,
      title:'Web Development',
      description:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Omnis excepturi, repellat esse laborum explicabo quia.'
    },
    {
      icon:<i class="bi bi-phone-landscape text-danger fs-1"></i>,
      title:'App Design',
      description:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Omnis excepturi, repellat esse laborum explicabo quia.'
    }
  ]
  //About section
 //about part1
  const Abdata=[
    {
      img:'./images/Background/about.jpg',
      // img:'../images/Backround/about.jpg',
      title:'We Create',
      thead:'Awesome Work',
      para1:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente cupiditate quas, amet harum perferendis minus, cum dolorum obcaecati iste aspernatur voluptatum aut." ,
      para2:"Cum laudantium unde nemo doloribus eligendi quodarum ea vitae dicta. Accusantium vero, ea? Alias, atque libero. Id, ut harum.",
      para3:"consectetur adipisicing elit. Omnis quidem, quos iure a dolorum illum culpa quia nemo soluta, ratione harum beatae minus doloribus consectetur! Similique tempora sunt doloribus molestias."
    }
  ]
  //about part2
  const Aboutdata =[
    {
      icon1:<i class="bi bi-card-checklist text-danger fs-1"></i>,
      title:'planning'
    },
    {
      icon1:<i class="bi bi-columns text-danger fs-1"></i>,
      title:'Mockup'
    },
    {
      icon1:<i class="bi bi-funnel  text-danger fs-1"></i>,
      title:'Develop'
    },
    {
      icon1:<i class="bi bi-hand-thumbs-up text-danger fs-1"></i>,
      title:'Provide'
    },

  ]

  //service section
  const servicedata=[
    {
      icon:<i class="bi bi-funnel  text-danger fs-1"></i>,
      Name:'corporis assumenda',
      Para:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Debitis amet saepe et!'
    },
    {
      icon:<i class="bi bi-easel2 text-danger fs-1"></i>,
      Name:'Debitis amet',
      Para:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Debitis amet saepe et!'
    },
    {
      icon:<i class="bi bi-pencil-square text-danger fs-1"></i>,
      Name:'Libero temporibus',
      Para:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Debitis amet saepe et!'
    },
    {
      icon:<i class="bi bi-back text-danger fs-1"></i>,
      Name:'Perspiciatis explicabo',
      Para:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Debitis amet saepe et!'
    },
    {
      icon:<i class="bi bi-lightning text-danger fs-1"></i>,
      Name:'Nihil dicta',
      Para:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Debitis amet saepe et!'
    },
    {
      icon:<i class="bi bi-palette text-danger fs-1"></i>,
      Name:'Repellendus maxime',
      Para:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Debitis amet saepe et!'
    },
    {
      icon:<i class="bi bi-graph-up-arrow text-danger fs-1"></i>,
      Name:'Sint vitae',
      Para:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Debitis amet saepe et!'
    },
    {
      icon:<i class="bi bi-arrow-up-left-circle text-danger fs-1"></i>,
      Name:'Poluptatum',
      Para:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Debitis amet saepe et!'
    }
  ]

  //Team section
  const Teamdata=[
    {
      img:'../images/illustration/avatar.jpg',
      profile:'FOUNDER',
      Name:'Matthew Davis',
      Description:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magni quos esse tenetur illo qui, nostrum.'
    },
    {
      img:'../images/illustration/avatar1.jpg',
      profile:'CEO',
      Name:'Barbara Ross',
      Description:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magni quos esse tenetur illo qui, nostrum.'
    },
    {
      img:'../images/illustration/avatar3.jpg',
      profile:'Designer',
      Name:'Karen Perry',
      Description:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magni quos esse tenetur illo qui, nostrum.'
    },
    {
      img:'../images/illustration/avatar6.jpg',
      profile:'App Designer',
      Name:'Ashley Diaz',
      Description:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magni quos esse tenetur illo qui, nostrum.'
    },
    {
      img:'../images/illustration/avatar5.jpg',
      profile:'Developer',
      Name:'Edward Harris',
      Description:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magni quos esse tenetur illo qui, nostrum.'
    },
    {
      img:'../images/illustration/avatar4.jpg',
      profile:'Photographer',
      Name:'Brian Scott',
      Description:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magni quos esse tenetur illo qui, nostrum.'
    }
  ]
  //Testimonialsection
  const Testimonialdata=[
    {
      img:'../images/illustration/avatar2.jpg',
      description:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eaque doloribus autem aperiam earum nostrum omnis blanditiis corporis perspiciatis adipisci nihil.',
      clientname:'Richard Reb'
    },
    {
      img:'../images/illustration/avatar4.jpg',
      description:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eaque doloribus autem aperiam earum nostrum omnis blanditiis corporis perspiciatis adipisci nihil.',
      clientname:'John Doe'
    }
  ]
  //component section
  const Data1=[{
        title1:'ABOUT US',
        img:"./src/images/logo.png",
        tname:'Creative studio',
        title2:'Useful link',
        link1:'about',
        link2:'service',
        title3:'Contact info',
        info1:'name',
        info2:'address'

  }]


  return(
    <div>
      <Home Navdata={Nav}/>
      <Home1 Newhome1={Datahome1}/>
      <Homehero Herodata1 ={Herodata}/>
      <About1 Abdetails={Abdata}/>
      <About Abdata={Aboutdata}/>
      <Service newdata={servicedata}/>
      <Team newteam={Teamdata}/>
      <Testimonial testdata={Testimonialdata}/>
      <Component compdata={Data1}/>
      
    </div> 
  )
}

export default App
