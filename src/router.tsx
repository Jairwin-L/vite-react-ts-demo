import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Demo from './pages/demo'

const Router = () => (
	<BrowserRouter>
		<Routes>
       <Route index path="/" element={<Demo />} />
		</Routes>
	</BrowserRouter>
)
export default Router