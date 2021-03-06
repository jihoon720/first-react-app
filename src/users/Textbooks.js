import React, { Component } from 'react';
import Textbook from './Textbook';

class Textbooks extends Component{

  // constructor(){
  //   super();
  //   this.state = {
  //     something...
  //   }
  // }

  //state is a reserved word in react
  state = {
    books: [
      {id: "veva", name: "Intro to Science", cost: 30},
      {id: "cvaha", name: "Big Data Python", cost: 40},
      {id: "hheh4", name: "Let's Learn React!", cost: 20}
    ],
    title: "TEXTBOOKS ON SALE!"
  };

  yayCheaper = () =>{

    //setState is asynchronous. it doenst actually change the value, it looks like its changed from its virtual DOM
    // this.setState({
    //   books: [
    //     {name: "Intro to Science", cost: 20},
    //     {name: "Big Data Python", cost: 30},
    //     {name: "Let's Learn React!", cost: 10}
    //   ],
    //   title: "TEXTBOOKS ON MEGA SALE!"
    // });

    const newState = this.state.books.map((book)=>{
      const tempBook = book;
      tempBook.cost = tempBook.cost-1;
      return tempBook;
    });

    this.setState({
      newState,
      title: "TEXTBOOKS ON MEGA SALE!"
    })
  }

  render(){
    return(
      <div>
        <h1>{this.state.title}</h1>
        <Textbook name={this.state.books[0].name} cost={this.state.books[0].cost} key={this.state.books[0].id}/>
        <Textbook name={this.state.books[1].name} cost={this.state.books[1].cost} key={this.state.books[1].id}/>
        <Textbook name={this.state.books[2].name} cost={this.state.books[2].cost} key={this.state.books[2].id}/>

        <p>Using map function to print:</p>
        {
          this.state.books.map((book)=>{
            return <Textbook name={book.name} cost={book.cost} key={book.id}/>
          })
        }
        <button onClick={this.yayCheaper}>Get Them Cheaper!</button>
      </div>
    )
  }
}

export default Textbooks;