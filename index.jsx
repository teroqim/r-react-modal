import React from 'react'
import Modal from 'react-modal'

class Default extends React.Component {
  render(){
    return (
      <Modal contentLabel='Modal' {...this.props}>
        {this.renderSpinnerOverlay(this.props.isLoading)}
        {this.props.children}
      </Modal>
    )
  }

  renderSpinnerOverlay(visible){
    if (!visible) {
      return null
    }
    return (
      <div className='spinner-overlay'>
        <div className='spinner'>
          <div className='preloader-wrapper small active'>
            <div className='spinner-layer'>
              <div className='circle-clipper left'>
                <div className='circle'></div>
              </div>
              <div className='gap-patch'>
                <div className='circle'></div>
              </div>
              <div className='circle-clipper right'>
                <div className='circle'></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Default
