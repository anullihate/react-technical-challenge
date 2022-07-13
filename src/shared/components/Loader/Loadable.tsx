/* eslint-disable react/jsx-props-no-spreading */
import { ComponentType, Suspense } from 'react'
import Loader from './Loader'

function Loadable<P>(Component: ComponentType) {
  return function F(props: P) {
    return (
      <Suspense fallback={<Loader />}>
        <Component {...props} />
      </Suspense>
    )
  }
}

export default Loadable
