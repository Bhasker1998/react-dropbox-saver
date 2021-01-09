React dropbox saver
============
Simple react wrapper for [Dropbox Chooser API](https://www.dropbox.com/developers/saver)

Installation 
============
```
npm install react-dropbox-saver
```

Usage
=====
```
files =
[
        // You can specify up to 100 files.
        {'url': '...', 'filename': '...'},
        {'url': '...', 'filename': '...'},
        // ...
    ]

<DropboxSaver 
    appKey={'your-uniq-app-key'}
    success={files => this.onSuccess(files)}
    cancel={() => this.onCancel()}
    progress={(progress)=>this.onProgress(progress)}
    error={(err)=this.Onerror(err)}
    files={files}    
</DropboxSaver>
```

Demo 
====
```
npm install
npm start
open http://localhost:3000
```