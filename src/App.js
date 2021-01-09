import DropboxSaver  from './component/saver'
function App() {

  let files =[{
    url: 'https://bloodhound-staging.s3.us-east-2.amazonaws.com/5ef9a2324792584d3a611a21/AS-Co-1000/20.jpg', 
    filename: 'asdf.jpg'
  }]
  const APP_KEY = "fghhg34gsfsf"
  return (
    <div align="center" >
     <DropboxSaver  
        files={files}
        appKey={APP_KEY}
        success={files => console.log('files:', files)}
        cancel={() => console.log('closed')}
        progress={(progress)=>console.log("progress",progress)} 
        error={(err)=>console.log("error",err)}
     >
     </DropboxSaver>
    </div>
  );
}

export default App;
