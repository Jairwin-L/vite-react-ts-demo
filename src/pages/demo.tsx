import React, { useState } from 'react'
import { List } from 'antd-mobile';
import { DatePicker } from 'antd';
import '@css/login.less'

export default (): JSX.Element => {
	const [formValues, setFormValues] = useState({
		name: '',
	});

	const updateFormValues = (values: any) => {
    setFormValues((state) => {
      return {
        ...state,
        ...values,
      };
    });
  };

	return (
		<div className="login_container animated fadeIn">
			<div className="login_main">
				<div className="login_form">
					<h3>登录</h3>
					{/* TODO:触发的时候报错：ReferenceError: module is not defined */}
					<DatePicker placeholder="请选择日期" />
					{/* TODO:报错如图：vendor.dc84d456.js:27 ReferenceError: require is not defined(已解决，请看issue) */}
				</div>
			</div>
		</div>
	)
}
