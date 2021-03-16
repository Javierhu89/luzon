import React, { Component } from "react";
import Portal from '../Portal/Portal'
class Modal extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       
    }
  }
  
  render() {
    const {children, toggle, active} = this.props; 
    return <>
      <Portal>
        {active && ( <>
          <div onClick={toggle} style={styles.background} />
          <div style = {styles.wrapper}>
            <div style={styles.window}>
              <img style={styles.closeBtn} onClick ={toggle} src={process.env.PUBLIC_URL + '/assets/img/cruz.png'}></img>
              <div>{children}</div>
            </div>
          </div>
          </>
        )}
      </Portal>
      </>
  }
}

const styles = {
  wrapper: {
    position: 'absolute',
    top:'30%',
    marginLeft:'28px',
    marginRight:'28px',
    width: '82.7%',
    heigth: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
    fontFamily: 'Roboto',
    fontStyle: 'normal',
    fontWeight: 'normal',
    fontSize: '19px',
    lineHeight: '28px',
    color: '#666666'
  }, 
  window: {
    position: 'relative',
    background: '#fff',
    borderRadius: 5,
    padding: 0,
    boxShadow: '2px 2px 10px rgba(0,0,0,0.3)',
    zIndex:10,
    minWidth:280,
  },
  closeBtn: {
    position: 'absolute',
    top: '10px',
    right: '10px'
  }, 
  background: {
    position: 'absolute',
    top:0,
    left:0,
    width: '100%',
    height: '100%',
    background: '#000',
    opacity:0.4,
  }
};

export default Modal;
