import React from 'react';
import DriveHeader from './components/DriveHeader'
import DriveNav from './components/DriveNav'
import { Router, Route } from 'react-router-dom';
import { createHashHistory } from 'history';
import firebase from "firebase/app";
import "firebase/storage";
import config from './config'
const history = createHashHistory();
class App extends React.Component {
  constructor() {
    super()
    this.state = {}
    if (!firebase.apps.length) {
      firebase.initializeApp(config);
    }
    this.clickCount = 0;
    this.singleClickTimer = '';
  }

  singleClick = () => {

    console.log('only fire click')
  }
  handleDoubleClick = () => {
    console.log('only fire double click')
  }
  handleFolderClicks = event => {
    console.log("TCL: App -> event", event.target)
    const bucket = event.target.getAttribute("data-bucket")
    const fullpath = event.target.getAttribute("data-fullpath")
    const name = event.target.getAttribute("data-name")
    console.log({
      bucket,
      fullpath,
      name
    })
    this.clickCount++;
    if (this.clickCount === 1) {
      this.singleClickTimer = setTimeout(() => {
        this.clickCount = 0;
        this.singleClick(event);
      }, 300);

    } else if (this.clickCount === 2) {
      clearTimeout(this.singleClickTimer);
      this.clickCount = 0;
      this.handleDoubleClick(event);
    }
  }

  handleFileClicks = event => {
    console.log("TCL: App -> event", event.target)
    const bucket = event.target.getAttribute("data-bucket")
    const fullpath = event.target.getAttribute("data-fullpath")
    const name = event.target.getAttribute("data-name")
    this.getFileDownload(fullpath,name)
  }

  getFileDownload = (fullpath, name) => {
    const fileReference = firebase.storage().ref(fullpath)
    fileReference.getDownloadURL().then(url => {
      fetch(url)
        .then(res => res.blob())
        .then(blob => {
          var a = document.createElement('a');
          var url = window.URL.createObjectURL(blob);
          a.href = url;
          a.download = name;

          // Firefox 需要將 JS 建立出的 element appendChild 到 DOM 上才可以 work
          a.style.display = "none";
          document.body.appendChild(a);

          a.click();

          // 釋放多餘的 DOM 與 記憶體 
          a.remove()
          window.URL.revokeObjectURL(url);
        })
    })
  }

  deleteFile = fullpath => {
    console.log("TCL: App -> deleteFile -> fullpath", fullpath)
    const fileReference = firebase.storage().ref(fullpath)
    fileReference.delete().then(() => {
      console.log("刪除成功")
      this.getStorageList()
    }).catch(error => {
      console.log("刪除失敗")
    })
  }

  getStorageList = () => {
    const storageReference = firebase.storage().ref();
    storageReference.listAll().then(res => {
      this.setState({
        folder: res.prefixes,
        file: res.items
      })
      res.prefixes.forEach(folderRef => {
        //console.log("ROOT 資料夾", folderRef)
      })
      res.items.forEach(function (itemRef) {
        //console.log("itemRef 檔案", itemRef)
      })
    })
  }


  componentDidMount() {
    this.getStorageList()
  }

  render() {
    console.log(this.state)
    const { folder, file } = this.state
    if (!folder) return false
    return (
      <div>
        <DriveHeader />
        <DriveNav />
        <h2>Folder</h2>
        <div className="floder-block">
          {folder.map(item => {
            return (
              <div className="floder-item"
                onClick={this.handleFolderClicks}
                data-bucket={item.bucket}
                data-fullpath={item.fullPath}
                data-name={item.name}
                key={item.name}>
                {item.name}
              </div>
            )
          })
          }
        </div>
        <hr />
        <div>
          <h2>File</h2>
          <div className="file-block">
            {file.map(item => {
              return (
                <div className="file-item"
                  onClick={this.handleFileClicks}
                  data-bucket={item.bucket}
                  data-fullpath={item.fullPath}
                  data-name={item.name}
                  key={item.name}>
                  {item.name}
                </div>
              )
            })
            }
          </div>
        </div>
      </div>
    )
  }
}

export default App;
