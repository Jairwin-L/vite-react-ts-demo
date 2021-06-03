import React, { useEffect, useState } from 'react'
import { useHistory } from "react-router-dom"
import { List, InputItem, Button } from 'antd-mobile';
import '@css/login.less'

export default (): JSX.Element => {
	const [formValues, setFormValues] = useState({
		name: '',
	});
	useEffect(() => {
		// document.title = `登录 | ${window.title}`
	}, [])
	const onLogin = () => {
		console.log('form=====>：', formValues);
	}

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
					{/* TODO:报错如图：vendor.dc84d456.js:27 ReferenceError: require is not defined */}
					<List>
						<InputItem
							clear
							value={formValues.name}
							placeholder="请输入名字"
							onChange={(value) => updateFormValues({ name: value })}
							className="input"
						>
							<span className="info">名字</span>
						</InputItem>
					</List>
					<Button className="login_btn" type="primary" onClick={onLogin}>登录</Button>
				</div>
			</div>
		</div>
	)
}
