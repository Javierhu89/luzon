import { Component } from "react";
import ReactDom from 'react-dom';

const portalRoot = document.getElementById('portal')

class Portal extends Component {
  constructor(props) {
    super(props)
    this.el = document.createElement('div')
  }
  componentDidMount = () =>{
    portalRoot.appendChild(this.el);
  }
  componentWillUnmount = () =>{
    portalRoot.removeChild(this.el);
  }
  render() {
      const {children} = this.props;
    return ReactDom.createPortal (children,this.el)
  }
}

export default Portal;