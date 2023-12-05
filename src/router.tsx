import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Main from './pages/main'

const Router = () => (
	<BrowserRouter>
		<Routes>
       <Route index path="/" element={<Main />} />
		</Routes>
	</BrowserRouter>
)
export default Router