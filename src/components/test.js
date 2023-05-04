import React, { useContext, useEffect }  from 'react'
// import NoteContext from '../context/NoteContext'

// const About = () => {
//   const a = useContext(NoteContext)

//   useEffect(() => {
//     a.update()
//   }, [])


//   return (
//     <>
//     <p>This is about page, Hi I am  {a.state.name}, My Job role is {a.state.role}</p>
//     </>
//   )
// }

import Photo from './photos/photo.png'

const About = () => {
    return (
      <>
      <p>This is about page</p>
      <div className="row">
        <div className="col-sm-6">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">Special title treatment</h5>
              <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
              <a href="#" className="btn btn-primary">Go somewhere</a>
            </div>
          </div>
        </div>
        <div className="col-sm-6">
          <div className="card">
            <div className="card-body">
            <div className="card">
        <div className="card-body contentboxwrap overflow-auto" style={{height: '300px'}}>
          <div className="twitter-timeline twitter-timeline-rendered" style={{display: 'flex',height:'600', maxWidth: '100%', marginTop: '0px', marginBottom: '0px'}}><iframe id="twitter-widget-0" scrolling="no" frameBorder={0} allowTransparency="true" allowFullScreen="true" className style={{position: 'static', visibility: 'visible', width: '300px', height: '10100px', display: 'block', flexGrow: 1}} title="Twitter Timeline" src="https://syndication.twitter.com/srv/timeline-profile/screen-name/mr_madhe_P2114?dnt=false&embedId=twitter-widget-0&features=eyJ0ZndfdGltZWxpbmVfbGlzdCI6eyJidWNrZXQiOltdLCJ2ZXJzaW9uIjpudWxsfSwidGZ3X2ZvbGxvd2VyX2NvdW50X3N1bnNldCI6eyJidWNrZXQiOnRydWUsInZlcnNpb24iOm51bGx9LCJ0ZndfdHdlZXRfZWRpdF9iYWNrZW5kIjp7ImJ1Y2tldCI6Im9uIiwidmVyc2lvbiI6bnVsbH0sInRmd19yZWZzcmNfc2Vzc2lvbiI6eyJidWNrZXQiOiJvbiIsInZlcnNpb24iOm51bGx9LCJ0ZndfbWl4ZWRfbWVkaWFfMTU4OTciOnsiYnVja2V0IjoidHJlYXRtZW50IiwidmVyc2lvbiI6bnVsbH0sInRmd19leHBlcmltZW50c19jb29raWVfZXhwaXJhdGlvbiI6eyJidWNrZXQiOjEyMDk2MDAsInZlcnNpb24iOm51bGx9LCJ0Zndfc2hvd19iaXJkd2F0Y2hfcGl2b3RzX2VuYWJsZWQiOnsiYnVja2V0Ijoib24iLCJ2ZXJzaW9uIjpudWxsfSwidGZ3X2R1cGxpY2F0ZV9zY3JpYmVzX3RvX3NldHRpbmdzIjp7ImJ1Y2tldCI6Im9uIiwidmVyc2lvbiI6bnVsbH0sInRmd191c2VfcHJvZmlsZV9pbWFnZV9zaGFwZV9lbmFibGVkIjp7ImJ1Y2tldCI6Im9uIiwidmVyc2lvbiI6bnVsbH0sInRmd192aWRlb19obHNfZHluYW1pY19tYW5pZmVzdHNfMTUwODIiOnsiYnVja2V0IjoidHJ1ZV9iaXRyYXRlIiwidmVyc2lvbiI6bnVsbH0sInRmd19sZWdhY3lfdGltZWxpbmVfc3Vuc2V0Ijp7ImJ1Y2tldCI6dHJ1ZSwidmVyc2lvbiI6bnVsbH0sInRmd190d2VldF9lZGl0X2Zyb250ZW5kIjp7ImJ1Y2tldCI6Im9uIiwidmVyc2lvbiI6bnVsbH19&frame=false&hideBorder=false&hideFooter=false&hideHeader=false&hideScrollBar=false&lang=en&origin=https%3A%2F%2Fmpsc.gov.in%2F&sessionId=045285bb12ed8dba70fb647bcd4316f183067e56&showHeader=true&showReplies=false&transparent=false&widgetsVersion=aaf4084522e3a%3A1674595607486" /></div> 
        </div>
      </div>
            </div>
          </div>
        </div>
      </div>
      </>
    )
  }

export default About