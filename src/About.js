// import React,{useState} from 'react'//removed


function About(props) {
// const [myStyle, setmyStyle] = useState({//M capital--(camelcase use by harry------------------------>>>><<<<<<<<<<<>>>>>>>>>><<<<<<<<

//     color: 'black' ,
//     backgroundColor: 'white'
//     //write css properties in camelcase only 
//     // use "$0"  to apply proeprties to selected area
// })//removed
let myStyle ={
    color:props.mode ==='dark'?'white':'black',
    backgroundColor: props.mode ==='dark'?'rgb(85,85,85)':'white',
    // border : '2px solid',
    // borderColor: props.mode==='dark'? 'white':'#042743'
}
// const [btntext, setbtntext] = useState("Enable Dark Mode")//removed
    //  let togglestyle = ()=>{
    //      if(myStyle.color === 'black'){//here === use only for error removal instead == can also work
    //          setmyStyle({

    //             color: 'white' ,
    //             backgroundColor: 'black',
    //             border: '1px solid white'
               
    //         })
    //         setbtntext("Enable Light Mode")
    //      }
    //      else{
    //          setmyStyle({

    //             color: 'black' ,
    //             backgroundColor: 'white',
    //             border: '1px solid black'
               
    //         })
    //         setbtntext("Enable Dark Mode")
    //      }
    //  }//removed

    return (
        <div className="container" style={{color: props.mode==='dark'?'white':'black'}}>
            <h2 className="my-3">About us</h2>
          <div className="accordion" id="accordionExample">
                <div className="accordion-item">
                <h2 className="accordion-header" id="headingOne">
                    <button className="accordion-button" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                    <strong>Analyze your text</strong> 
                    </button>
                </h2>
                <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                    <div className="accordion-body" style={myStyle}>
                    <strong>This is the first item's accordion body.</strong> It is shown by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                    </div>
                </div>
                </div>
                <div className="accordion-item">
                <h2 className="accordion-header" id="headingTwo">
                    <button className="accordion-button collapsed" style={myStyle}type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                    <strong>free to use</strong>
                    </button>
                </h2>
                <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                    <div className="accordion-body" style={myStyle}>
                    <strong>This is the second item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                    </div>
                </div>
                </div>
                <div className="accordion-item">
                <h2 className="accordion-header" id="headingThree">
                    <button className="accordion-button collapsed" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                    <strong>Browser Compatible</strong>
                    </button>
                </h2>
                <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                    <div className="accordion-body" style={myStyle}>
                    <strong>This is the third item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                    </div>
                </div>
                </div>
                </div> 
                {/* <div className="container my-3">
                    <button onClick={togglestyle} type="button" className="btn btn-primary">{btntext}</button>
                </div>  */}{/*removed*/}
        </div>
    )
}


export default About;