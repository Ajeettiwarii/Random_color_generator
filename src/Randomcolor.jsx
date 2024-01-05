import react, { useEffect, useState } from "react" 
function Randomcolor(){    
      const[typeofcolor,settypeofcolor]=useState('hex'); 
      const[color,setcolor]=useState('#000000')   

       function randomutility(length){ 
        return Math.floor(Math.random()*length)

       }

     function handlecreatehexcolor(){ 
        const hex = [1,2,3,4,5,6,7,8,9,'A','B','C','D','E','F']  
        let hexcolor="#";
        for(let i=0;i<6;i++){
            hexcolor+=hex[randomutility(hex.length)]
        }
 
        setcolor(hexcolor)
     } 

     function handlecreatergbcolor(){ 
        const r =randomutility(256);
        const g=randomutility(256);
        const b= randomutility(256);  
        setcolor(`rgb(${r},${g},${b})`) 

     }  
     useEffect(()=>{ 
        if(typeofcolor==='rgb')handlecreatergbcolor ()
        else handlecreatehexcolor ()

     },[typeofcolor])

    return(
        <> 
              <div style={{
                width:'100vw',
                height:'100vh',
                background:color,  
                justifyContent:"center"
              }}> 

              <button onClick={()=>settypeofcolor('hex')}>Create Hex Color</button> 
              <button onClick={()=>settypeofcolor('rgb')}>Create RGB Color</button>
                <button onClick={typeofcolor=='hex' ? handlecreatehexcolor : handlecreatergbcolor}> Generate Random color</button>
               <div style={{
                display:'flex',
                justifyContent : 'center',
                alignItems:'center',
                color:'white',
                fontSize:'60px' , 
                marginTop:'50px',
                flexDirection:'column',
                gap:'20px'

                               }}>  
                               <h3>{typeofcolor==='rgb' ? 'RGB Color' :"HEX Color"}</h3>
                               <h1>{color}</h1>

               </div>
             
              </div>
        </>
    )

} 
export default Randomcolor;