

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
    // justifyContent: 'center',
    alignItems: 'center',
    marginTop: '50px',
  }
const Parent =()=>{

    return(
        <div>
             <div style={{marginTop: '0px',marginLeft: '1060px', marginRight: '', display:'flex' }}>
        <Button style={{backgroundColor:'green'}} >LogIn</Button>
        <Button style={{backgroundColor:'green'}}  >SignUp</Button>
        </div>
        <h1 style={{
          fontSize: '25px', color: '#4891f0', marginTop: '20px', display: 'flex',
          justifyContent: 'center'
        }}>5 THINGS PARENTS SHOULD DO WHEN HIRING A TUTOR</h1>
        <br />
        <h2 style={{ fontSize: '18px' }}>
          <h2 className={styles.h2Style}>Determine your child's academic strength</h2>

          Parents can talk to the teacher to know the most accurate. Parents need to know what their child's weakness
          is in order to find the right math tutor for their child.
          <br />
          <br />
          <h2 className={styles.h2Style}>Learn more about tutor information</h2>

          This is necessary, because currently, some non-center centers have dishonest expressions about tutor information .
          There are some cases where the center announces that the tutor is a teacher, but in fact, the tutor is only a final year
          student or a graduate of another school who is not a teacher. However, this is also a rare case.
          <img className={styles.images7} src={"https://i.imgur.com/eVaCdN1.jpg"} />
          <h2 className={styles.h2Style}>Chat with the tutor in the first session</h2>
          Parents need to spend some time at first sitting and talking with the tutor. The most important thing to ask about tutor information (student card, CMT ...)
          <br />
          Second, you should discuss your child's academic performance as well as his/her personality. It is also the basis for tutors to offer appropriate teaching methods
          <br />
          <img className={styles.images7} src={"https://i.imgur.com/9EnkBo1.jpg"} />
          <br />
          <h2 className={styles.h2Style}>Test how to teach</h2>
          Parents should not sit directly watching the tutor teach their children during the whole lesson.
          This puts pressure on both the tutor and the child. But parents also cannot leave tutors and children to study.
          To be clever, parents can bring water or fruit from time to time to invite tutors. This shows both interest and
          observation of the child's teaching and learning situation.
          <br />
          <br />
          <h2 className={styles.h2Style}>Periodic inspection report</h2>
          Parents should ask tutors for their children to take periodic tests every month, to check their child's progress.
          <br />
        </h2>

        <div style={{ width: '1100px', borderRadius: '10px', marginRight: 'auto', marginLeft: 'auto', justifyContent: 'center', marginTop: '10px', alignItems: 'center', display: 'flex', height: 'auto', fontSize: '18px', border: '1px solid red', borderColor: '#2f85f5', color: 'black' }}>
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

export default Parent;