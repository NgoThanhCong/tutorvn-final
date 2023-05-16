
import { Link } from 'react-router-dom';
import styles from '../Home.module.css';
import { BsFacebook, BsTelegram } from 'react-icons/bs';
import { FaFacebookMessenger } from 'react-icons/fa';
import { Button } from 'antd';
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
    backgroundColor: 'white',
    marginLeft: 'auto',
    marginRight: 'auto',
    display: 'flex',
    marginTop: '50px',
    // justifyContent: 'center',
    alignItems: 'center'
  }
const Tuition =()=>{

    return(<div>
        
        <div>
        <div style={{marginTop: '0px',marginLeft: '1060px', marginRight: '', display:'flex' }}>
        <Button style={{backgroundColor:'green'}} >LogIn</Button>
        <Button style={{backgroundColor:'green'}}  >SignUp</Button>
        </div>
            <h1 style={{ fontSize: '25px', color: '#4891f0', marginTop: '20px' }}>1. Elementary School Tutor Tuition Fees</h1>
            <h2 style={{ fontSize: '18px' }}> CONSULTING FROM US CENTER</h2>
            <h3 style={{ fontSize: '18px' }}>A note for parents to choose a tutor for their child is based on their child's learning ability and time. If your child is weak,
              slow, or unrooted, parents should choose a tutor who is a teacher, with their qualifications and experience will help their children better.
              If the child is a good student and has a sense of self-study, parents just need to find a tutor to teach at home as a student.
            </h3>
            <img className={styles.images4} src={"https://i.imgur.com/O3l4GIu.png"} />
            <br />
            <h2 style={{ color: 'red' }}>The above price list is for reference only. Tutoring fees may vary depending on family requirements.
              If you have any questions, please contact 09477.771.699  for more detailed advice</h2>

          </div>
          <div>
            <h1 style={{ fontSize: '25px', color: '#4891f0', marginTop: '20px' }}>2. Level 2 tutorial</h1>

            <h2 style={{ fontSize: '18px' }}>For middle school students, there are 5 important subjects to pay attention to: Math, Physics, Chemistry,
              English, and Literature. In which, Math, English, and Literature are 3 compulsory subjects for the 9th grade transfer exam.
              Therefore, parents need to allocate time to study subjects appropriately. Tutor Binh Minh advises parents some notes:
            </h2>
            <img className={styles.images5} src={"https://i.imgur.com/bOx9F0n.png"} />
            <br />
            <h2 style={{ color: 'red' }}>The above price list is for reference only. Tutoring fees may vary depending on family requirements.
              If you have any questions, please contact 09477.771.699  for more detailed advice</h2>

          </div>

          <div>
            <h1 style={{ fontSize: '25px', color: '#4891f0', marginTop: '20px' }}>3. Level 3 tutorial & universal examination review</h1>

            <h2 style={{ fontSize: '18px' }}>Parents should invest more in learning for their children at this high school. Because, at this time, they
              also begin to shape the exam they want and focus on those subjects more.
              <br />
              + For Maths, Chemistry, and English, you should give your child a tutor right from the 10th grade.
              <br />
              + Physics and Literature can be tutored from grade 11.
              <br />
              + Biology, History, and Geography subjects can be tutored in 12th grade depending on your child's learning ability.
            </h2>
            <img className={styles.images6} src={"https://i.imgur.com/CJ9p9aL.png"} />
            <br />
            <h2 style={{ color: 'red' }}>The above price list is for reference only. Tutoring fees may vary depending on family requirements.
              If you have any questions, please contact 09477.771.699  for more detailed advice</h2>

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
    </div>)
}

export default Tuition;