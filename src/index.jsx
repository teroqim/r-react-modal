import React from 'react'
import Modal from 'react-modal'
require('./index.css')

class tModal extends React.Component {
  render(){
    return (
      <Modal
        contentLabel='Modal'
        isOpen={this.props.isOpen}
        onRequestClose={this.props.onRequestClose}>
        {this.renderSpinnerOverlay(this.props.isLoading).bind(this)}
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

export default tModal
