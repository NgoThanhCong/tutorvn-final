import { DatePicker, Radio, Upload } from "antd";
import TextArea from "antd/es/input/TextArea";
import React from "react";
import { useLocation } from "react-router-dom";


const DetailTutor = () => {
    const { state } = useLocation();
    console.log(state.value);
    
     return <body class="antialiased font-sans bg-gray-200">
    <div class="container mx-auto px-4 sm:px-8">
      <div class="py-8">
        <div>
          <h2 class="text-2xl font-semibold leading-tight">Edit Tutor</h2>
        </div>
      </div>

      <Upload
        name="avatar"
        listType="picture-circle"
        className="avatar-uploader"
        showUploadList={false}
        action="https://www.mocky.io/v2/5cc8019d300000980a055e76"

      >
        <img
          // src={imageUrl}
          alt="avatar"
          style={{
            width: '100%',
          }}
        />

      </Upload>
      <TextArea value={state.value.id} placeholder="ID" autoSize onChange={(e) => {
        e.preventDefault();
        
      }} />

    <br/>
    <br/>
      <TextArea defaultValue={state.value.name} placeholder="FullName" autoSize onChange={(e) => {
        e.preventDefault();
        
      }} />
      <br />

      <br />
      <TextArea defaultValue={state.value.email} placeholder="Email" autoSize onChange={(e) => {}} />
      <br />
      <br />
      <TextArea defaultValue={state.value.phone} placeholder="Phone" autoSize onChange={(e) => {
        e.preventDefault();
       
      }} />
      <br />
      <br />
      <TextArea defaultValue={state.value.address} placeholder="Address" autoSize onChange={(e) => {
        e.preventDefault();
       
      }} />
      <br />
      <br />
      <TextArea defaultValue={state.value.university}  placeholder="University" autoSize onChange={(e) => {
        e.preventDefault();
        
      }} />
      <br />
      <br />
      <TextArea defaultValue={state.value.major} placeholder="Major" autoSize onChange={(e) => {
        e.preventDefault();
        
      }} />
      <br />
      <br />
      <Radio.Group defaultValue={state.value.gender===true?1:2} name="radiogroup"  >
        <Radio value={1}>Male</Radio>
        <Radio value={2}>Female</Radio>
      </Radio.Group>
      <br />
      <br />
      <Radio.Group defaultValue={state.value.graduated===true?1:2} name="radiogroup2"    >
        <Radio value={1}>Graduated</Radio>
        <Radio value={2}>Student</Radio>
      </Radio.Group>
      <br />
      <br />
      {/* <DatePicker defaultValue={dayjs('2015/01/01', dateFormat) }
        placeholder="BirthDay" format={dateFormat}  />
      <br /> */}
      <TextArea defaultValue={state.value.currentJob} rows={4} placeholder="Current Job" maxLength={400} />
      <br />
      <br/>
      <TextArea defaultValue={state.value.experiences} rows={4} placeholder="Description your experients" maxLength={400}  />
      <br />
      
      <br />
      {/* <TextArea placeholder="Subject" autoSize /> */}
      <br />
      <br />

      <div class="w-full flex justify-start space-x-2">
        <button 
          
          type="Save"
          class="inline-block rounded  bg-red-500 px-6 pt-2.5 pb-2 text-xs font-medium
           uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition 
           duration-150 ease-in-out hover:bg-primary-600 
           hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)]
            focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 
            active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)]">
              
          Insert Tutor
        </button>
        {/* <button
                            type="button"
                            class="inline-block rounded  bg-red-500 px-6 pt-2.5 pb-2 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)]">
                            Add Tutor2
                        </button> */}
      </div>

      <br />
      <br />
    </div>

  </body>
};

export default DetailTutor;