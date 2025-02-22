/* eslint-disable jsx-a11y/anchor-is-valid */
import { Route, Routes } from 'react-router-dom'
import { Error500 } from './components/Error500'
import { Error404 } from './components/Error404'
import { ErrorsLayout } from './ErrorsLayout'
import { ErrorScientific } from './components/ErrorScientific'

const ErrorsPage = () => (
  <Routes>
    <Route element={<ErrorsLayout />}>
      <Route path='404/system' element={<Error404 />} />
      <Route path='404' element={<Error404 isPortal={true} />} />
      <Route path='500' element={<Error500 />} />
      <Route path='errorscientific' element={<ErrorScientific />} />
      <Route index element={<Error404 />} />
    </Route>
  </Routes>
)

export { ErrorsPage }
