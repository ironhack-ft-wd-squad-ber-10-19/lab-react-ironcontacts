import React, { Component } from "react";
import contacts from "../contacts.json";

class IterationOne extends Component {
  getContactsArr() {
    let arr = [];
    for (let i = 0; i <= 4; i++) {
      arr.push(contacts[i]);
    }
    return arr;
  }

  handleClickedContact = () =>{

    this.newContact = this.state.contactsArr
    this.newContact.push(contacts[Math.floor(Math.random()*(contacts.length))])
    // console.log(this.newContact);
      this.setState({
        contactsArr: this.newContact
      })
  }

  state = {
    contactsArr: this.getContactsArr()
  };

  sortByName = () => {
      const shan = (a, b) =>{
          if (a.name < b.name) return -1;
          else if (a.name > b.name) return 1;
          return 0;
      };

      this.setState({
          contactsArr: [...this.state.contactsArr].sort(shan)
      })
  }

  handleClickedName = () =>{
  let sortedArray = (a,b) => {
       // console.log(a.name);
        if(a.name < b.name) return -1
        else if (a.name > b.name) return 1
        return 0
    }
    console.log("CURRENT STATE,    ", this.state.contactsArr)
    console.log("SORTED ARRAY LOOK HEEEEERE, ", sortedArray);
      this.setState({
        contactsArr:[...this.state.contactsArr].sort(sortedArray)
        // contactsArr: sortedArray
      })
  }

  handleClickedDelete = props =>{
      let arr = this.state.contactsArr
    arr.splice(props, 1)

console.log(props)
        this.setState({
          contactsArr: arr
        })
    }



//   handleClickedPop = () =>{

//     this.newContact = this.state.contactsArr
//     this.newContact.push(contacts[Math.floor(Math.random()*(contacts.length))])
//     console.log(this.newContact);
//       this.setState({
//         contactsArr: this.newContact
//       })
//   }

//   state = {
//     contactsArr: this.getContactsArr()
//   };

  render() {
      let displayArr = this.state.contactsArr.map((el,index)=>{
          return (
        
           
            <tr key={index}>
              <td><img width="200px" src={el.pictureUrl} alt=""></img></td>
              <td>{el.name}</td>
              <td>{Math.round(el.popularity * 100) / 100}</td>
              <td> <button key={index} onClick={()=>{this.handleClickedDelete(index)}}>delete</button> </td>
            </tr>

          )
      })
   

    return <div>

    <button onClick={this.handleClickedContact}>Add Random Contact</button>
    {/* <button onC\ick={this.sortByName}>Sort by name</button> */}
    <button onClick={this.handleClickedName}>Sort by name</button>
    <button onClick={this.handleClickedPop}>Sort by popularity</button>
    <table>
    <tr>
    <th>Pictire</th>
     <th>Name</th>
    <th>Popularity</th>
     </tr>
      {displayArr}
</table>
    </div>;
  }
}

export default IterationOne;
