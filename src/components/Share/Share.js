import React, { Component } from "react";
import {InlineShareButtons} from 'sharethis-reactjs';
import './Share.scss';

class Share extends Component {
  render() {
    return <div className="compartir">
  <InlineShareButtons
    config={{
      display: 'inline-block',
      width: '100%',
      alignment: 'center',  // alignment of buttons (left, center, right)
      color: 'white',      // set the color of buttons (social, white)
      enabled: true,        // show/hide buttons (true, false)
      font_size: 16,        // font size for the buttons
      labels: 'null',        // button labels (cta, counts, null)
      language: 'es',       // which language to use (see LANGUAGES)
      min_count: 1000,
      networks: [        // which networks to include (see SHARING NETWORKS)
        'whatsapp',
        'twitter',
      ],
      padding: 12,          // padding within buttons (INTEGER)
      radius: 4,            // the corner radius on each button (INTEGER)
      show_total: true,
      size: 45,             // the size of each button (INTEGER)

      // OPTIONAL PARAMETERS
      url: "@FundacionLuzon " + "Yo he logrado " + parseInt(localStorage.getItem('Puntos Acumulados')) +" puntos, y tú? " + `https://elalife.netlify.app/`, // (defaults to current url)
      image: '',  // (defaults to og:image or twitter:image)
      description: '¡Logro conseguido!',       // (defaults to og:description or twitter:description)
      //title: "ELALIFE - He logrado " + parseInt(localStorage.getItem('Puntos Acumulados')) + ' puntos y ya he donado, ¿porqué no te animas?',   // (defaults to og:title or twitter:title)
      //username:'FundacionLuzon' // (only for twitter sharing)
    }}
  />
  <InlineShareButtons
    config={{
      display: 'inline-block',
      width: '100%',
      alignment: 'center',  // alignment of buttons (left, center, right)
      color: 'white',      // set the color of buttons (social, white)
      enabled: true,        // show/hide buttons (true, false)
      font_size: 16,        // font size for the buttons
      labels: 'null',        // button labels (cta, counts, null)
      language: 'es',       // which language to use (see LANGUAGES)
      min_count: 1000,
      networks: [        // which networks to include (see SHARING NETWORKS)
        'twitter',
        'whatsapp'
      ],
      padding: 12,          // padding within buttons (INTEGER)
      radius: 4,            // the corner radius on each button (INTEGER)
      show_total: true,
      size: 45,             // the size of each button (INTEGER)

      // OPTIONAL PARAMETERS
      url: "@FundacionLuzon " + "Yo he logrado " + parseInt(localStorage.getItem('Puntos Acumulados')) +" puntos, ¿y tú? " + `https://elalife.netlify.app/`, // (defaults to current url)
      image: '',  // (defaults to og:image or twitter:image)
      description: '¡Logro conseguido!',       // (defaults to og:description or twitter:description)
      //title: "ELALIFE - He logrado " + parseInt(localStorage.getItem('Puntos Acumulados')) + ' puntos y ya he donado, ¿porqué no te animas?',   // (defaults to og:title or twitter:title)
      //username:'FundacionLuzon' // (only for twitter sharing)
    }}
  />
  <InlineShareButtons
    config={{
      width: '100%',
      alignment: 'center',  // alignment of buttons (left, center, right)
      color: 'white',      // set the color of buttons (social, white)
      enabled: true,        // show/hide buttons (true, false)
      font_size: 16,        // font size for the buttons
      labels: 'null',        // button labels (cta, counts, null)
      language: 'es',       // which language to use (see LANGUAGES)
      min_count: 1000,
      networks: [        // which networks to include (see SHARING NETWORKS)
        'linkedin',
        'facebook'
      ],
      padding: 12,          // padding within buttons (INTEGER)
      radius: 4,            // the corner radius on each button (INTEGER)
      show_total: true,
      size: 45,             // the size of each button (INTEGER)

      // OPTIONAL PARAMETERS
      url: `https://elalife.netlify.app/`, // (defaults to current url)
      image: '',  // (defaults to og:image or twitter:image)
      description: 'custom text',       // (defaults to og:description or twitter:description)
      title: 'ELALIFE - He logrado 20.000 puntos y ya he donado, ¿porqué no te animas?',   // (defaults to og:title or twitter:title)
      username: 'FundacionLuzon' // (only for twitter sharing)
    }}
  />
  <InlineShareButtons
    config={{
      width: '100%',
      alignment: 'center',  // alignment of buttons (left, center, right)
      color: 'white',      // set the color of buttons (social, white)
      enabled: true,        // show/hide buttons (true, false)
      font_size: 16,        // font size for the buttons
      labels: 'null',        // button labels (cta, counts, null)
      language: 'es',       // which language to use (see LANGUAGES)
      min_count: 1000,
      networks: [        // which networks to include (see SHARING NETWORKS)
        'facebook',
        'linkedin'
      ],
      padding: 12,          // padding within buttons (INTEGER)
      radius: 4,            // the corner radius on each button (INTEGER)
      show_total: true,
      size: 45,             // the size of each button (INTEGER)

      // OPTIONAL PARAMETERS
      url: `https://elalife.netlify.app/`, // (defaults to current url)
      image: '',  // (defaults to og:image or twitter:image)
      description: 'custom text',       // (defaults to og:description or twitter:description)
      title: 'ELALIFE - He logrado 20.000 puntos y ya he donado, ¿porqué no te animas?',   // (defaults to og:title or twitter:title)
      username: 'FundacionLuzon' // (only for twitter sharing)
    }}
  />
    </div> 

  }
}

export default Share;
