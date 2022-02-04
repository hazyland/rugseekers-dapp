export function ResponsiveImage(props: {src: string}) {
    return (
      <>
        <div  style={{position: 'relative', height: '100%', width: '100%'}}>
          <div style={{position: 'absolute', height: '100%', width: '100%', display: "flex", justifyContent: 'center', alignItems: "center"}}>
            <img src={props.src} style={{ maxWidth: "100%", maxHeight: "100%"}} alt="image" />
          </div>
        </div>
      </>
    );
  }
  
  export function Divider() {
   return  <div style={{
      height: "2px",
      width: "100%",
      background: "white",
      margin: "3px 0",   
    }}>

    </div>
  }