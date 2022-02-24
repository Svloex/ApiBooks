import React from "react"
import photo from "../IMG_src/errorImg.png"
import { connect } from "react-redux"

function Books(props){
    //document.title="App"
    let books = props.books
    console.log(books)
     if(props.books.length>0){
        books = props.books.sort((a,b) => {
         if(props.sort === "Newest"){
             console.log("B:",parseInt(b.volumeInfo.publishedDate.substring(0,4)))
             console.log("A:",parseInt(a.volumeInfo.publishedDate.substring(0,4)))
             console.log("Newest:",parseInt(b.volumeInfo.publishedDate.substring(0,4))-(a.volumeInfo.publishedDate.substring(0,4)))
             return parseInt(b.volumeInfo.publishedDate.substring(0,4)-a.volumeInfo.publishedDate.substring(0,4))
         }else if(props.sort === "Oldest"){
             return parseInt(a.volumeInfo.publishedDate.substring(0,4)-b.volumeInfo.publishedDate.substring(0,4))
         }else{
             return(a,b)
         }
         

     })
 }
    console.log(books.length)
    return(
        <div
        style={{display:"flex",border:"solid 1px green",flexWrap:"wrap"}}>
            {props.books.map(item => {
                return(
                    <div key={item.id} style={{flex:"1 0 15%",border:'dashed 1px red',boxSizing: "border-box"}}>
                        <div style={{textAlign:"center"}}>
                            <img style={{height:200 ,border:'dashed 1px red',width:"100%"}} src={item.volumeInfo.imageLinks ? item.volumeInfo.imageLinks.smallThumbnail:
                            photo } alt="" />
                        </div>
                        <div id="2" style={{textAlign:"center"}} >
                        : {item.volumeInfo.title}
                        </div>
                        <div id="2" style={{textAlign:"center"}} >
                           Автор: {item.volumeInfo.authors}
                        </div>
                        <div id="2" style={{textAlign:"center"}} >
                        Публикация: {item.volumeInfo.publishedDate}
                        </div>
                         
                    </div>
                    )})}
            
        </div>
    )
}

let mapStateToProps = (state) => {
    return {
        books: state.general.books,
        sort: state.general.sort
    }
    
  }
export default connect(mapStateToProps,null)(Books)