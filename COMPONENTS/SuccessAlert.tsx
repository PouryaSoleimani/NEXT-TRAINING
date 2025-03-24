import React from 'react'
import { Alert } from 'antd';
import { Check } from 'lucide-react';


const SuccessAlert: React.FC = () => <Alert message="Added to Your Cart" type="success" showIcon className=' border-none py-2 font-bold w-96' />;

export default SuccessAlert