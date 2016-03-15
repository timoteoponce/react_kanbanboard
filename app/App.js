import React, {Component} from 'react';
import styles from './App.css';

class App extends Component{
  render() {
    var place = "Santa Cruz";
    return (
      <div className={styles.root}>
        <h1>Hello World Timoteo Ponce at {place}</h1>
        <GroceryList/>
      </div>
    );
  }
}

class GroceryList extends Component{
  render(){
    return (
      <ul>
        <ListItem quantity="1" name="Bread"/>
        <ListItem quantity="5" name="Eggs"/>
        <ListItem quantity="3" name="Milk"/>
        <ListItem quantity="5" name="Meat"/>
      </ul>
    );
  }
}

class ListItem extends Component{
  render(){
    return (
      <li>
      {this.props.quantity} x {this.props.name}
      </li>
    );
  }
}

export default App 
