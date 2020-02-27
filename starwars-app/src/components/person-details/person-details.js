import React, { Component } from 'react';

import './person-details.css';
import SwapiService from "../../services/swapi-service";
import ErrorButton from '../error-button';
import ErrorIndicator from '../error-indicator';
import Spinner from '../spinner';

export default class PersonDetails extends Component {

  state ={
    data: {},
    error: false,
    loading: true
  };

  swapiServise = new SwapiService();

  componentDidCatch(){
      this.setState({
          error: true
      });
  }

  componentDidUpdate(prevProps){
      if (prevProps.selectedItem !== this.props.selectedItem){
          this.swapiServise.getPerson(this.props.selectedItem).then((data) =>{
              this.setState({
                  data,
                  loading:false
                  });
          console.log(this.state)}
          )
      }
  }

  renderCard({id, name, gender, eyeColor, birthYear}){
    if(this.state.data.id){
      return(
          <div className="person-details card">
              <img className="person-image"
                   src={`https://starwars-visualguide.com/assets/img/characters/${id}.jpg`} />

              <div className="card-body">
                  <h4>{name}</h4>
                  <ul className="list-group list-group-flush">
                      <li className="list-group-item">
                          <span className="term">Gender</span>
                          <span>{gender}</span>
                      </li>
                      <li className="list-group-item">
                          <span className="term">Birth Year</span>
                          <span>{birthYear}</span>
                      </li>
                      <li className="list-group-item">
                          <span className="term">Eye Color</span>
                          <span>{eyeColor}</span>
                      </li>
                  </ul>
                  <ErrorButton/>
              </div>
          </div>
      );
    }
    return null;
  }

  render() {
    const {id, name, gender, eyeColor, birthYear} = this.state.data;
    if (this.state.error){
      return<ErrorIndicator/>
    }
    if(this.state.loading){
      return <Spinner/>
    }
    return this.renderCard({id, name, gender, eyeColor, birthYear});
  }
}
