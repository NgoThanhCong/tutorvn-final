
import { Link } from 'react-router-dom';
import styles from '../Home.module.css';
import { BsFacebook, BsTelegram } from 'react-icons/bs';
import { FaFacebookMessenger } from 'react-icons/fa';
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
const Tutors =()=>{
    return(<div>
        
        <h1 style={{fontSize: '25px', color: '#4891f0', marginTop: '20px', display: 'flex',justifyContent: 'center'}}>SOME RULES FOR TUTORS WHEN TAKING CLASSES</h1>
        <div style={{ width: '1100px', marginRight: 'auto', marginLeft: 'auto', justifyContent: 'center', marginTop: '10px', alignItems: 'center', height: 'auto', fontSize: '18px', }}>

          <h1 style={{ color: 'blue' }}>Article 1: </h1>
          The tutor who receives the class will have to close the class receipt fee directly at the center's
          branch offices or transfer the bank via the scheduled party party.
          <br />
          <br />
          <h1 style={{ color: 'blue' }}>Article 2: </h1>
          Tutors must carefully explore the teaching registration class such as: Address, schedule, teaching level before enrolling, At the same time, Party B must identify itself as capable, teaching capacity.
          <br />
          <br />
          <h1 style={{ color: 'blue' }}>Article 3: </h1>
          The tutor must dress neatly, politely, mentally sensitive, ordained a teacher when meeting with the student's parents during the first contact as well as all later teaching sessions.
          <br />
          <br />
          <h1 style={{ color: 'blue' }}>Article 4: </h1>
          The tutor comes to the parent at the time of the appointment on the referral and actively presents the referral, student card, teacher card, CMND, degrees and certificates ( if there is ) for parents or students without waiting for requests.
          Do not come to life or change the appointment without the consent of the parent and tutor center for any reason.
          <br />
          <br />
          <h1 style={{ color: 'blue' }}>Article 5: </h1>
          After arriving at the class, the results must be immediately reported to the center within 4 hours of the appointment time with the parent indicated on the referral.
          If the tutor reports after this time that the problem is obstructed, the center will not be responsible.
          <br />
          <br />
          <h1 style={{ color: 'blue' }}>Article 6: </h1>
          When facing difficulties in accepting classes (for any reason), including the reason that pares propose to delay the school date, increase or decrease the study time or any other ariing difference compared to the class acceptance contract, the tutor must immiately notify the center via the hotline
          (only contact via this number: 0947.771.699) to have the direct confirmation of parents or studios at that time (only receive phone, by not receive text messages).
          . Only send message to notify the Problem when the phone is connected but not answered)
          <br />
          <br />
          <h1 style={{ color: 'blue' }}>Article 7: </h1>
          Cases such as fishonesty, received a class but lot the class, or arbitrarily negotiated to increase or decrease class hours or tuition fees, accumulate teaching sessions, etc., the Center will terminal the
          contraction and not refund fees or will not bear any responsibility thereafter.
          <br />
          <br />
          <h1 style={{ color: 'blue' }}>Article 8: </h1>
          Tutors may not arbitrarily transfer the class to another tutor without the consent of the center.
          <br />
          <br />
          <h1 style={{ color: 'blue' }}>Article 9: </h1>
          Tuts must show profissionism and responsibility for the class they teach. Must prepare appropriate lesson plans and teaching materials,
          and at the same time must have a sense of protecting the reputation of teachers
          <br />
          <br />
          <h1 style={{ color: 'blue' }}>Article 10: </h1>
          After receiving the first pay month, this contract is considered terminated.
          <br />
          <br />
          <h1 style={{ color: 'blue' }}>Article 11: </h1>
          In case of a parent's problem ( the tutor has notified the center – under article 6 ), must have a parent's signature signature on the referral, the center after the authentication test will conduct a referral for a new class tutor more appropriately.
          If it is still inappropriate, the center will refund the grade fee to the tutor.
          <br />
          <br />
          <h1 style={{ color: 'blue' }}>Article 12: </h1>
          If the tutor fails to comply with the above terms, takes the class and does not teach or is incompetent to teach, cheat, go late, come back early, raise wages, for reasons of distance,
          unreasonable schedule, personal reasons, family,. . . The center will not solve.
          <br />
          <br />
          <h1 style={{ color: 'blue' }}>Article 13: </h1>
          Tutors will receive salaries directly from parents or students at the end of the teaching month (30 days from the start of teaching ). No advance is allowed to apply for earlier pay
          or advance payment unless the parent actively recommends the agreement.

          <br />
          <br />
          <h1 style={{ color: 'blue' }}>Article 14: </h1>
          The refund period is after 7 days from the date of notification on the 3.5 pm from 15h to 17h by appointment
        </div>
        <div style={{ width: '1100px', marginRight: 'auto', marginLeft: 'auto', justifyContent: 'center', marginTop: '10px', alignItems: 'center', height: 'auto', fontSize: '18px',  color: 'black' }}>
          <h1 className={styles.h1centerStyle}>Solutions to help teachers and students earn good income by tutoring</h1>
          <h2>With the development of life and economy, more and more families want to hire private tutors for their children. This is a form of home learning that helps students become more confident in the "knowledge race" in the classroom. That's why so many teachers and students want to join a team of private tutors. However, to be able to resonate in the profession and make money effectively from this teaching method, you need to have solid knowledge.
            Besides, there is the "charm" and the update of soft skills in teaching.</h2>
          <img className={styles.images7} src={"https://i.imgur.com/u1xIeXP.jpg"} />
          <h2 style={{ color: 'blue', fontSize: '20px' }}>I. Status of tutoring profession</h2>
          <h3 style={{ color: 'green' }}>1. Parents are too difficult</h3>
          <h4>Many parents still have a rather strict view of hiring a tutor. With paying a more expensive fee than regular tutoring classes,
            parents always want to see their child's good academic results in a short time. This is what makes many of you feel hesitant about
            applying your own teaching method in teaching. For some student tutors, gaining the trust of parents is a difficult story. In addition
            to the background knowledge cultivated over many years of study, most of the tutors are "predestined" with the tutoring profession
            before they have passed any pedagogical classes. You can hardly be paid a high fee for each lesson
            because of the consideration from the parents. Normally, each two-hour private tutoring session costs 100,000 - 200,000 VND.</h4>
          <img className={styles.images7} src={"https://i.imgur.com/H9b0HEM.jpg"} />
          <h4>Of course, there are still a few tutors lucky enough to meet families who understand the difficulty of
            the profession. In addition to making lesson plans suitable for students, they must also orient their parents
            well. The process of training for students requires perseverance from both teachers and learners. Finding a
            tutor or finding suitable students is also a core issue. With good tutors or teachers who have been teaching for
            a long time, they are often paid higher fees. However, not everyone lives up to the high level of parental expectations.
            The more popular the teacher,
            the more parents demand the speed of improving grades and the higher quality of lectures.</h4>

          <h3 style={{ color: 'green' }}>2. Choosing the right student is not easy</h3>
          <h4>Subjects who come to tutors are students, students or people who have worked. Depending on the available knowledge and
            aspirations of the students, the tutor must create the most suitable lesson plan. Besides, if you want to have a common voice
            with students, you not only play the role of a teacher but also a devoted companion. For students who are said to be "good"
            and good-thinking, student tutors also struggle to build knowledge most effectively. To invest well in talented children,
            parents often look to longtime teachers. In addition, trial lessons will help tutors and
            students understand each other better. From there, the tutor has a foundation to prepare appropriate lesson plans.</h4>


          <h2 style={{ color: 'blue', fontSize: '20px' }}>II. How to build trust with students</h2>
          <h3 style={{ color: 'green' }}>1. Play and learn</h3>
          <h4>Most major subjects such as Math, Physics, Chemistry, Biology, English, etc. can be easily found tutors. To
            match the knowledge and characteristics of each subject, teachers or students need to find the most suitable teaching
            method. Integrating pictures and games into lessons is what stimulates children's interest in learning. In addition, the
            combination of many senses when learning also develops better thinking and absorption. For example, to solve the dry problem
            of Math formulas, you can use musical melodies or counter-poems to reduce the stressful study atmosphere.
            The form of playing while learning will make a good impression on students right from the first lessons.</h4>
          <img className={styles.images7} src={"https://i.imgur.com/cI70XiA.jpg"} />
          <h4>In addition, professional knowledge and ability to communicate are still the foundation for evaluating a
            good tutor. Even student tutors should prepare detailed instruction before each lesson. You need to plan in
            detail about the small content of each lesson, the class exercise questions, how to answer some questions around
            the lecture. If you choose students who are elementary or middle school children, it is also important to understand child psychology.
            They will have questions that make you skillfully incorporate knowledge into the answers.</h4>
          <h3 style={{ color: 'green' }}>2. Design a moderate exercise system</h3>
          <h4>Practicing after theoretical classes is extremely important. This is a time for students to recall
            and apply theoretical knowledge into practice. The characteristics of each subject are different, which
            is why teachers/students need to apply a separate system of exercises. The exercises should be divided by level from easy to
            difficult. The basic exercises help students more comfortable when applying the available formula. After students are sure
            of the basic content, they should give them advanced exercises. The selection of advanced question samples also affects
            students' interest in learning.
            <br />
            It is necessary to select reliable sources of exercises and the difficulty level corresponding to the student's ability. Students
            will have the opportunity to challenge their thinking with new types of lessons. In addition, homework should only be given in moderation.
            This ensures a balance of play and learning. Each subsequent lesson begins with correcting exercises that will help students review their
            knowledge and tutors to re-systemize the content of the previous lesson for them.</h4>


          <h2 style={{ color: 'blue', fontSize: '20px' }}>III. "Fall in love" with parents with enthusiasm</h2>
          <h3 style={{ color: 'green' }}>1. Always be on time and respect parents' wishes</h3>
          <h4>Tutoring means that you accept to plan and time your lessons properly. The schedule should be suitable for both students
            and parents. For example, should avoid teaching too early will cause psychological drowsiness. School hours should also avoid
            mealtimes and rest periods for the whole family. Most importantly, being on time also shows respect for the student's parents.
            In order to get the best teaching effect, tutors also import Promise from './menu/promise';
need to have a frank discussion with parents about the student's cimport Promise from './menu/promise';
ondition.
            Coordinating to maintain learning and playing for
            children in a scientific mode will help the process of acquiring knowledge.</h4>
          <img className={styles.images7} src={"https://i.imgur.com/bpdkqkR.jpg"} />
          <h3 style={{ color: 'green' }}>2. Stick to the classroom curriculum</h3>
          <h4>The best way to please parents is still compliments from the teachers in the classroom. There is no better educational achievement
            than high grades and top student achievement. That's why you need to update your child's formal curriculum. From there, there will
            be a way to build a lecture that both provides background knowledge and provides the best problem solving ability. In addition to
            the basic formulas, you should also incorporate advanced exercises. This is a good opportunity to assess the thinking level of the
            students. Regular practice is better than providing regular formulas. Teachers and learners have the opportunity to exchange to
            understand each other better.
            This active learning helps the process of acquiring knowledge.</h4>

          <b>Summarize to be able to make money effectively from tutoring, teachers and students need to have
            a passion for the profession. Even if you don't graduate from a pedagogical school, becoming a professional tutor is not far off.
            Mastering the focus of teaching, understanding the needs and thinking of students will help you have appropriate
            lesson plans. From there, each teacher/student will create his or her own brand.</b>

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

export default Tutors;