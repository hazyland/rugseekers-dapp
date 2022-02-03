export function ResponsiveImage(props: {src: string}) {
    return (
      <>
        <div  style={{position: 'relative', height: '100%', width: '100%'}}>
          <div style={{position: 'absolute', height: '100%', width: '100%', display: "flex", justifyContent: 'center'}}>
            <img src={props.src} style={{height: '100%'}} alt="image" />
          </div>
        </div>
      </>
    );
  }
  