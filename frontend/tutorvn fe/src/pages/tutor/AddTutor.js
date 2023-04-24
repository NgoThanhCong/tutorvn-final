/* eslint-disable no-unused-vars */
import { DatePicker, Modal, Radio, Upload } from 'antd';
import TextArea from 'antd/es/input/TextArea';
import { GrGroup } from 'react-icons/gr';
import { PlusOutlined } from '@ant-design/icons';
import {message } from 'antd';
import dayjs from 'dayjs';
import { useState } from 'react';


export function AddTutor(props) {
    // [isShow, setIsShow] = useState(false);
    const dateFormat = 'YYYY/MM/DD';
    const [imageUrl, setImageUrl] = useState('https://www.pixelstalk.net/wp-content/uploads/2016/10/Download-Beautiful-Girl-Picture.jpg');

    const handleOk = () => {

        // setIsShow(false)
        props.close()

    }

    const handleCancel = () => {
        // setIsShow(false)
        props.close()

    }

    return <div>
        <Modal centered={true}
            open={props.isShow}
            title="Add Tutor"
            onOk={handleOk}
            onCancel={handleCancel}>
            {/* okType={'default'} */}

    <Upload
            name="avatar"
            listType="picture-circle"
            className="avatar-uploader"
            showUploadList={false}
            action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
            // beforeUpload={beforeUpload}
            // onChange={handleChange}
        >
            <img
               // src={imageUrl}
                alt="avatar"
                style={{
                width: '100%',
                }}
            />
        </Upload>
            <TextArea placeholder="FullName" autoSize />
            <br />
            <br />
            <TextArea placeholder="Email" autoSize />
            <br />
            <br />
            <TextArea placeholder="Phone" autoSize />
            <br />
            <br />
            <TextArea placeholder="Address" autoSize />
            <br />
            <br />
            <TextArea placeholder="University" autoSize />
            <br />
            <br />
            <TextArea  placeholder="Major" autoSize />
            <br />
            <br />
            <Radio.Group name="radiogroup" defaultValue={1}>
            <Radio value={1}>Male</Radio>
            <Radio value={2}>Female</Radio>
            </Radio.Group>
            <br />
            <br />
            <Radio.Group name="radiogroup2" defaultValue={1}>
                <Radio value={1}>Graduated</Radio>
                <Radio value={2}>Student</Radio>
            </Radio.Group>
            <br />
            <br />
            <DatePicker defaultValue={dayjs('2015/01/01', dateFormat)} placeholder="BirthDay" format={dateFormat} />
            <br />
            <br />
            <TextArea rows={4} placeholder="Description your experients" maxLength={4} />             
        </Modal>
    </div>
}