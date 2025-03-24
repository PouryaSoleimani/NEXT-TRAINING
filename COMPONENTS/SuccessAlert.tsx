import React from 'react'
import { Alert } from 'antd';
import { Check } from 'lucide-react';


const SuccessAlert: React.FC = () => <Alert message="Success Text" type="success" showIcon className=' border-none py-2 font-bold w-96' />;

export default SuccessAlert