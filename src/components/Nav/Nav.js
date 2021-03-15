import React , {useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import { Redirect } from "react-router-dom";
import './Nav.scss';

export default function Nav () {
const [value, setValue] = useState(null);

const useStyles = makeStyles({
  root: {
    width: '100%',
    color: 'black',
  borderTop: '2px solid black'},
  root1:{
    fontFamily: 'Roboto',
    fontStyle: 'normal',
    fontWeight: 'bold',
    fontSize: '13px',
    lineHeight: '15px',
    color: '#000000',
    paddingBottom:'8px',
    marginLeft:'10px',
    marginRight: '10px'
  },
});

  const classes = useStyles();
  let redireccionar = (i) =>{
      if (i===1){
        setValue('/')
      } else if (i===2){
        setValue('/donar')
      }else {
        setValue('/game')
      }
  }
  return (
    <div className="fijo" style={{ 
      backgroundImage: `url(${process.env.PUBLIC_URL + 'assets/img/barraNavegacion.png'})`,
      backgroundRepeat: 'no-repeat', BackgroundSize: 'cover'
    }}>
      
    <BottomNavigation
     showLabels
      className={classes.root}>
      <BottomNavigationAction onClick={() => redireccionar(1)} className={classes.root1} label="HOME" icon={<img src={process.env.PUBLIC_URL + '/assets/img/home.png'}></img>} />
      <BottomNavigationAction onClick={() => redireccionar(2)} className={classes.root1} label="DONAR" icon={<img src={process.env.PUBLIC_URL + '/assets/img/crecimiento.png'}></img>} />
      <BottomNavigationAction onClick={() => redireccionar(3)} className={classes.root1}label="PLAY" icon={<img src={process.env.PUBLIC_URL + '/assets/img/play.png'}></img>} />
    </BottomNavigation>
    {value?(<Redirect to={{ pathname: value }}/>):<></> }
    </div>
  );
}


