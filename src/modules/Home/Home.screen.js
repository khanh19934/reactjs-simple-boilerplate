// @flow
import {compose,lifecycle} from 'recompose'
import {connect} from 'react-redux'

import {actions as homeActions} from './Home.reducer'

import Home from './Home.view'

const mapStateToProps = state => ({
  photoList: state.home.photoList
})
const mapDispatchToProps = {
  getPhotoList: homeActions.getPhotoList
}
const callback = {
  async componentDidMount(){
    await this.props.getPhotoList()
  }
}

const enhance = compose(
  connect(mapStateToProps,mapDispatchToProps),
  lifecycle(callback)
)

export default enhance(Home)