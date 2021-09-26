import { Button, Select, Space, Input, Modal } from 'antd'
import 'antd/dist/antd.css'; // or 'antd/dist/antd.less'
import { useState } from 'react';
const { Option } = Select;

export default function RequestFileDownload() {
    const [isModalVisible, setIsModalVisible] = useState(false);
    const options = ['Jack', 'Jone']
    const [fileName, setFileName] = useState<string | undefined>()
    const [fileType, setFileType] = useState<string | undefined>();
    const showModal = () => {
        setIsModalVisible(true);
    };
    const resetState = () => {
        setFileName(undefined)
        setFileType(undefined)
        setIsModalVisible(false);
    }
    const handleOk = () => {
        const name = fileName;
        const type = fileType;
        if(name&&type){
            alert(`${fileName}:${fileType}`)
            resetState()        
        }else{
            alert('please enter required data')
        }
    };

    return (
        <>
            <Button type="primary" onClick={showModal}>
                Download
            </Button>
            <Modal title="Basic Modal" visible={isModalVisible} onOk={handleOk} onCancel={()=>resetState()}>
                <Space>
                    <Input placeholder="Enter file name" onChange={(e) => setFileName(e.target.value)} />
                    <Select
                        defaultValue={fileType}
                        style={{ width: 120 }}
                        placeholder="select file type"
                        onChange={(e) => setFileType(e)}>
                        {options.map(op => <Option value={op}>{op}</Option>)}
                    </Select>
                </Space>
            </Modal>
        </>

    )
}
