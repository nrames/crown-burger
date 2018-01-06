import React from 'react';
import { Header, Card } from 'semantic-ui-react';
import { connect } from 'react-redux';
import { fetchLocations } from '../actions/locations';

class Locations extends React.Component {

    componentDidMount() {
        this.props.dispatch(fetchLocations());
    }

    displayLocations = () => {
        return this.props.locations.map( location => {
            return(
            <Card>
                <Card.Content>
                    {location.name}
                </Card.Content>
            </Card>
            )
        })
    }


     render() {
        return(
            <div>
              <Header as='h1' textAlign='center'>Locations</Header> 
              <Card.Group style={{margin: 50}} >
                { this.displayLocations() }
              </Card.Group>
            </div>
        );
    }
}
    
const mapStateToProps = (state) => {
    return{
        locations: state.locations,
        user: state.user,
    }
}


export default connect(mapStateToProps)(Locations);