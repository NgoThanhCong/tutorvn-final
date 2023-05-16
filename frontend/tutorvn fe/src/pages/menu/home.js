
import { Button, Carousel, Input, Modal } from 'antd';
import styles from '../Home.module.css';
import { Link } from 'react-router-dom';
import { BsFacebook, BsTelegram } from 'react-icons/bs';
import { FaFacebookMessenger } from 'react-icons/fa';
import { useState } from 'react';
import TextArea from 'antd/es/input/TextArea';


const bannerStyle = {
    height: '360px',
    width: '100%',
    color: '#fff',
    lineHeight: '160px',
    textAlign: 'center',
    background: '#364d79',
    marginTop:'60px',
  };
  const fooderStyle = {

    width: '100%',
    height: '30px',
    color: 'white',
    marginLeft: 'auto',
    marginRight: 'auto',
    backgroundColor: '#bfb2bf',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  };
  const contactStyle = {
    width: '100%',
    height: '150px',
    color: 'black',
    backgroundColor: '#fcf8f7',
    marginLeft: 'auto',
    marginRight: 'auto',
    display: 'flex',
    // justifyContent: 'center',
    alignItems: 'center',
    marginTop:'80px',
    

  }
 
const Home =()=>{
    const [isModalOpen, setIsModalOpen] = useState(false);
    const showModal = () => {
      setIsModalOpen(true);
    };
    const handleOk = () => {
      setIsModalOpen(false);
    };
    const handleCancel = () => {
      setIsModalOpen(false);
    };
   
    return(   
      <div>
        <div style={{marginTop: '0px',marginLeft: '1060px', marginRight: '', display:'flex' }}>
        <Button style={{backgroundColor:'green'}} >LogIn</Button>
        <Button style={{backgroundColor:'green'}}  >SignUp</Button>
        </div>
        <div className={styles.divContent2}>
          <h style={{ fontSize: '25px', justifyContent: 'center', display: 'flex' }}>TutorVN's tutors include</h>

          <h2 style={{ fontSize: '18px' }}> - The tutors are selected according to the regulations on ethics, expertise, experience and pedagogical skills. The selected tutors are all students of the top schools in Hanoi: University of Education, Foreign Trade University, National University, University of Science and Technology...
            <br />
            - Tutoring center not only helps students lose their roots to regain their knowledge base but also helps students know how to think to solve problems.
            <br />
            - Teaching 2 free trial sessions to assess the quality of students.
            <br />
            - Committed after 10 sessions, students will be converted into practice and have a sense of learning.</h2>
        </div>
        
        <div style={{Display: 'flex',justifyContent: 'center',marginLeft:'auto',marginRight:'auto' , width:'500px',height:'100px', backgroundColor:'green'}}>
        
      <Button style={{backgroundColor:'red', display: 'flex', marginLeft:'auto', marginRight:'auto'}} onClick={showModal}>
        Open Modal
      </Button>
      <Modal title="Requaiment contact" open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
      <Input placeholder="Name" />
      <br/>
      <br/>
      <Input placeholder="Phone" />
      <br/>
      <br/>
      <Input placeholder="Address" />
      
      <br/>
      <br/>
      </Modal>
      </div>
    


        <Carousel autoplay>
        <div style={{marginTop:'20px'}}>
          {/* <h3 style={bannerStyle}>1</h3> */}
          <img style={bannerStyle} src={"https://i.imgur.com/rhmiCa8.png"} />
        </div>
        <div>
          {/* <h3 style={bannerStyle}>2</h3> */}
          <img style={bannerStyle} src={"https://i.imgur.com/VyRNrFh.jpg"} />
        </div>
        <div>
          {/* <h3 style={bannerStyle}>3</h3> */}
          <img style={bannerStyle} src={"https://i.imgur.com/rhmiCa8.png"} />
        </div>
        <div>
          {/* <h3 style={bannerStyle}>4</h3> */}
          <img style={bannerStyle} src={"https://i.imgur.com/rhmiCa8.png"} />
        </div>
      </Carousel>
      <div style={{ width: '1100px', marginLeft: 'auto', marginRight: 'auto', marginTop: '0px', height: 'auto', left: '50', top: '360px' }}>

<h1 style={{marginTop:'50px', fontSize: '25px', justifyContent: 'center', alignItems: 'center', display: 'flex', color: 'black' }}>TutorVN's teaching goals</h1>

<h2 style={{ color: 'black', fontSize: '18px' }}>Helping students lose their subject knowledge to master
  the basic knowledge learned at school,
  practice and improve their logical thinking ability as well as the ability to be sensitive and
  flexible. With enthusiasm and always putting the spirit of DECLARATION & RESPONSIBILITY on top,
  TutorVN center is committed to working with you to build and expand
  your child's knowledge treasure to a high level like the family has and are desiring .


</h2>





<img style={{marginTop:'50px',
  width: '1000px', marginLeft: 'auto', marginRight: 'auto', alignItems: 'center',
  justifyContent: 'center', display: 'flex', height: '400px'
}} src={"https://i.imgur.com/ekdsfzT.png"} />

</div>



<div className={styles.divContent}>
<img className={styles.images3} src={"https://i.imgur.com/onBM0lJ.jpg"} />
<img className={styles.images2} src={"https://i.imgur.com/bzLsAYv.jpg"} />
<img className={styles.images2} src={"https://i.imgur.com/VyRNrFh.jpg"} />

</div>
<div className={styles.divContent}>
          <iframe width="660" height="315" src="https://www.youtube.com/embed/U6nC8sRTXaY"
            title="YouTube video player" frameborder="0" allow="accelerometer; autoplay;
 clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen>

          </iframe>
          <h1 style={{
            display: 'flex', marginTop: '0px', fontSize: '25px', marginLeft: '20px', marginRight: 'auto', color: 'black'
          }}>Please watch the video to understand more about TutorVN</h1>


        </div>
        
        <div style={{ width: '1100px', borderRadius: '10px', marginRight: 'auto', marginLeft: 'auto', justifyContent: 'center', marginTop: '80px', alignItems: 'center', display: 'flex', height: 'auto', fontSize: '18px', border: '1px solid red', borderColor: '#2f85f5', color: 'black' }}>
          With 7 years in tutoring service, owning a team of more than 200+ tutors for grade 1 , TutorVN tutoring center is committed to
          providing the best and most professional tutoring service, guaranteed to help students progressive students.
          Call now Hotline: 0947.771.699 we are always ready to advise 24/7 on all your child's learning problems.
          <img className={styles.images8} src={"https://i.imgur.com/VLKivFE.jpg"} />
        </div>
        <div id="contact" style={contactStyle} >
        <div style={{ justifyContent: 'space-between', marginLeft: '10px', marginRight: '' }}>
          <h1 style={{ color: 'black', fontSize: '25px' }}>Contact</h1>
          <div style={{ marginTop: '0px' }}>
            <br />
            Address: 10 Alley 180 Dinh Thon, My Dinh 1 ward, Nam Tu Niem district, Hanoi
            <br />
            Hotline: 0947.771.699
            <br />
            Email: ntc2882@gmail.com
            <br />
          </div>
        </div>
        <div style={{ justifyContent: 'space-between', marginLeft: '300px', marginRight: '' }} >
          <div style={{ display: 'flex', }}>
            <Link target={"_blank"} to="https://www.facebook.com/congnthp">  < BsFacebook style={{ display: 'flex', color: '#2967e3', fontSize: '50px' }} /> </Link>
            <br />
            <Link target={"_blank"} to="https://www.facebook.com/congnthp">  < BsTelegram style={{ display: 'flex', color: '#4db0f7', fontSize: '50px', marginLeft: '20px' }} /> </Link>
            <Link target={"_blank"} to="https://www.facebook.com/congnthp">  < FaFacebookMessenger style={{ display: 'flex', color: '#1584d4', fontSize: '50px', marginLeft: '20px' }} /> </Link>
          </div>
        </div>

      </div>

      <div id="fooder" style={fooderStyle} >
        Design by Ngo Thanh Cong
      </div>

</div>
    
    
    )
}

export default Home;