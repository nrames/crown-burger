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
            <Card.Header as='h3' textAlign='center' style={{margin: 20}}>
                {location.name}
            </Card.Header>
            <Card.Content>
                {location.address}
            </Card.Content>
            <Card.Meta style={{margin: 20}}>
                {location.phone_number}
            </Card.Meta>
{/*            
                <div style='width: 800px;'>
                    <div id="map" style='width: 800px; height: 400px;'></div>
                </div>  */}
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