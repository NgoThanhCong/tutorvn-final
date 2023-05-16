/* eslint-disable jsx-a11y/alt-text */
import { Button, Carousel, Dropdown, Layout, Menu, Space, Tabs } from 'antd';
import styles from './Home.module.css';
import Test1 from './menu/home';
import Test2 from './menu/parent';
import Home from './menu/home';
import Parent from './menu/parent';
import Tutors from './menu/tutors';
import Tuition from './menu/tuition';
import Promises from './menu/promises';


// const headerStyle = {
//   marginLeft: 'auto',
//   marginRight: 'auto',
//   // justifyContent: 'center',
//   width: '80%',
//   height: '100%',
//   color: 'blue',
//   backgroundColor: 'pink',
//   // alignItems: 'center',
//   display: 'flex',



// };
// const menuStyle = {
//   fontFamily: 'sans-serif',
//   color: '#333',
//   fontFamily: 'sansSerif',
//   color: '333',
//   direction: 'column',
//   paddingLeft: '0',
//   marginBottom: '0',
//   listStyle: 'none',
//   backgroundColor: '#white',

// };
const fooderStyle = {

  width: '80%',
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
  width: '80%',
  height: '150px',
  color: 'black',
  backgroundColor: 'white',
  marginLeft: 'auto',
  marginRight: 'auto',
  display: 'flex',
  // justifyContent: 'center',
  alignItems: 'center'
}
const backgroudStyle = {
  backgroundColor: '#edd1e3'

};
const menuStyle = {
  width: '80%',
  height: '80%',
  color: 'blue',
  border: '1px solid rgba(0, 0, 0, 0.05)',
  marginLeft: 'auto',
  marginRight: 'auto',
  backgroundColor: '#ff80ff',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center'
};
const contentStyle = {
  width: '80%',
  color: 'white',
  marginLeft: 'auto',
  marginRight: 'auto',
  // marginTop:'0px',
  backgroundColor: '#fff6ff',
  // display: 'flex', 
  // justifyContent: 'center',
  // alignItems: 'center'
}
const bodyStyle = {

  flexDirection: 'column',
};


const onChange = (key) => {
  console.log(key);
};
const items = [
  {
    key: '1',
    label: `Tab 1`,
    children: <Test1 />,
  },
  {
    key: '2',
    label: `Tab 2`,
    children: <Test2 />,
  },
  {
    key: '3',
    label: `Tab 3`,
    children: `Content of Tab Pane 3`,
  },
  {
    key: '3',
    label: `Tab 3`,
    children: `Content of Tab Pane 3`,
  },

];

const HomePage = () => (

  <div id="backgroud" style={backgroudStyle}>
    <div id="body" style={bodyStyle}>

      <div className={styles.headerStyle}>

        <div style={{}}>
          <img style={{ width: '170px', marginLeft: '30px', marginRight: '50px', height: '170px' }} src={"https://i.imgur.com/wJ2sF0r.png"} />
        </div>
        {/* <div style={{width:'170', height:'170', marginLeft: ''}}> */}


        <div style={{ fontSize: '40px', color: 'white', width: '900px', height: '10px', marginLeft: '2px', marginRight: '50px', marginTop: '3px' }}>
        <h1 style={{ fontSize: '42px', color: 'white', width: '1100px', height: '10px', marginLeft: '30px', marginRight: '50px',  }}>
          The number one reputable tutor search website in Ha Noi</h1>
          <br/>
        <h2 style={{ fontSize: '30px', color: '#b3e4fc', width: '970px', height: '50px', marginLeft: '300px',marginBottom:'40px', marginRight: '0px', marginTop: '0px' }}>Prestige - Dedication - Professional</h2>
        
      
        </div>
        <Button >LogIn</Button>
        <Button >Log</Button>


        <img style={{ width: '300px', marginLeft: '100px', marginRight: '0px', height: '170px' }} src={"https://i.imgur.com/qZH2Vxt.png"} />


      </div>

      <div id="menu" style={menuStyle}>

        <Tabs style={{ backgroundColor: '#faf5f8', width: '100%', height: 'auto', }}
          defaultActiveKey="1"
          items={[
            {
              label: <div style={{ fontSize: '18px', marginLeft: '80px', textAlign: 'center' }}>Home</div>,

              key: '1',
              children: <Home />,
            },
            {
              label: <div style={{ fontSize: '18px', marginLeft: '80px' }}>Parent</div>,
              key: '2',
              children: <Parent />,
              // disabled: true,
            },
            {
              label: <div style={{ fontSize: '18px', marginLeft: '80px' }}>Tutor</div>,
              key: '3',
              children: <Tutors />,
              // disabled: true,
            },
            {
              label: <div style={{ fontSize: '18px', marginLeft: '80px' }}>Tuition</div>,
              key: '4',
              children: <Tuition />,
            },
            {
              label: <div style={{ fontSize: '18px', marginLeft: '80px' }}>Promise</div>,
              key: '5',

              children: <Promises />,
            },
            {

            },
          ]}
        />
      </div>



    </div>
  </div>

);
export default HomePage;