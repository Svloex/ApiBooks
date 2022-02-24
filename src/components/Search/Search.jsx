import React from "react"
import {thunkSetQuery, thunkSetBooks, thunkSetSort} from "../reduxPapka/reducer-All"
import { connect } from "react-redux"
import axios from "axios"

 function Search(props){

   let cleanData = (data) => {
       console.log(data.data.items)
         const cleanedData = data.data.items.map((book) => {
             if(book.volumeInfo.hasOwnProperty("publishedDate") === false ) {
                 book.volumeInfo['publishedDate'] = "000"
             }

             return book
         })

         return cleanedData
     }

    let searchBook = (e) => {
        e.preventDefault()
        axios.get(`https://www.googleapis.com/books/v1/volumes?q=${props.mapState}`)
        .then((res)=>{
            console.log(res)
            const cleaningData = cleanData(res)
            console.log(cleaningData)
            props.thunkSetBooks(cleaningData)
            //props.thunkSetBooks(res.data.items)
        })
    }
    let handleSort = (e) => {
            
            console.log(e.target.value)
            props.thunkSetSort(e.target.value)
        
    }
    
    return(
        <div style={{textAlign:"center",backgroundColor:'yellow'}}>
            <form onSubmit={ (e) => { searchBook(e) } } action="">
                <div>
                    <h1>Search for books</h1>
                    <div>
                        <input type={'text'} value={props.mapState}
                        onChange={ (e) => { props.thunkSetQuery(e.target.value) } }
                        placeholder={"write the title"}
                        />
                        <span>
                            <button type="submit">Serch</button>
                        </span>
                        <select defaultValue={"Sort"} onChange={(e) => { handleSort(e) }} >
                            <option disabled value="Sort">Sort</option>
                            <option value="Newest">Newest</option>
                            <option value="Oldest">Oldest</option>
                        </select>
                    </div>
                    
                </div>
            </form>
            
        </div>
    )
}

let mapStateToProps = (state) => {
    return {
        mapState:state.general.query
    }
    
  }
export default connect(mapStateToProps,
    {
        thunkSetQuery,
        thunkSetBooks,
        thunkSetSort
    }
    )(Search)