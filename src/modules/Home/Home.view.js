// @flow
import React from 'react';
import ReactDOM from 'react-dom'

import type {PhotoType} from '../../types'

type Props = {
  photoList: PhotoType[]
}
const Home = ({photoList}: Props) => {
  console.log(photoList)
  return (
    <div>
      <h1>Home View</h1>
    </div>
  )
}

export default Home