import React, { Component } from 'react';
import PropTypes from 'prop-types';
import loadScript from 'load-script';

const DROPBOX_SDK_URL = 'https://www.dropbox.com/static/api/2/dropins.js';
const SCRIPT_ID = 'dropboxjs';

let scriptLoadingStarted = false;

// read more
// https://www.dropbox.com/developers/saver
export default class Saver extends Component {

  static propTypes = {
    children: PropTypes.node,
    appKey: PropTypes.string.isRequired,
    success: PropTypes.func.isRequired,
    cancel: PropTypes.func,
    error:PropTypes.func,
    progress:PropTypes.func,
    files:PropTypes.array,
    disabled: PropTypes.bool
  };

  constructor(props) {
    super(props);

  }

  componentDidMount() {
    if (!this.isDropboxReady() && !scriptLoadingStarted) {
      scriptLoadingStarted = true;
      loadScript(DROPBOX_SDK_URL, {
        attrs : {
          id: SCRIPT_ID,
          'data-app-key': this.props.appKey
        }
      },(err,script)=>{
          if(err)
            console.log("script not added")
          else{
            var button = window.Dropbox.createSaveButton(this.props);
            document.getElementById("saver").appendChild(button);
          }
      });
    }
  }

  isDropboxReady=()=> {
    return !!window.Dropbox;
  }

  onSave=()=> {
    if (!this.isDropboxReady() || this.props.disabled) {
      return null;
    }

  }

  render() {
    return (
      <div onClick={this.onSave} id="saver"></div>
    );
  }
}