import React from 'react';
import { Header, Card } from 'semantic-ui-react';
import { connect } from 'react-redux';
import { fetchLocations } from '../actions/locations';
import GoogleMapReact from 'google-map-react';

class Locations extends React.Component {
    static defaultProps = {
        center: { lat: 59.95, lng: 30.33 },
        zoom: 11
    };

    componentDidMount() {
        this.props.dispatch(fetchLocations());
    }

    displayLocations = () => {
        return this.props.locations.map( location => {
            return(
            <div>
            <Card style={{margin: 60, height: 300, width: 500}}>
            <Card.Header as='h3' textAlign='center' style={{margin: 20}}>
                {location.name}
            </Card.Header>
            <Card.Content>
            <Card.Description textAlign='center'>
              <a>
                {location.address}
              </a>
            </Card.Description>
            <Card.Meta style={{margin: 20}} textAlign='center'>
                {location.phone_number}
            </Card.Meta>
            </Card.Content>
                <GoogleMapReact
                    defaultCenter={this.props.center}
                    defaultZoom={this.props.zoom}
                >
                    <Card.Content
                        lat={location.latitude}
                        lng={location.longitude}
                        text={location.name}
                    />
                </GoogleMapReact>
                </Card>
                </div>
            )
        })
    }


     render() {
        return(
            <div>
              <Header as='h1' textAlign='center'>Locations</Header> 
              <Card.Group  >
                { this.displayLocations() }
              </Card.Group>
            </div>
        );
    }
}

const AnyReactComponent = ({ text }) => <div>{text}</div>;

    
const mapStateToProps = (state) => {
    return{
        locations: state.locations,
        user: state.user,
    }
}


export default connect(mapStateToProps)(Locations);