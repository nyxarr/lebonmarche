import React from 'react';

import { Container, Row, Col } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

import SearchForm from './components/search/SearchForm';
import ListPanel from './components/panel/ListPanel';
import CardItem from './components/panel/CardItem';
import OlMap from './components/map/OlMap';


class App extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            query: null,
            region: null,
            department: null,
            location: null,
            min: null,
            max: null,
            center: [],
            page: 1,
            results: []
        }

        this.updateResults = this.updateResults.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.handleClick = this.handleClick.bind(this);
    }

    handleChange(event) {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    updateResults(event) {
        event.preventDefault();

        let s = this.state;

        delete s.results;

        fetch('/search', {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(s)
        }).then((response) => {
            response.json().then((apiResult) => {
                console.log(apiResult)
                this.setState({
                    results: apiResult.results,
                    page: apiResult.page
                })
            })
        });
    }

    handleClick(lat, lng) {
        this.setState({
            center: [lng, lat]
        })
    }

    render() {
        return (
            <Container fluid={true}>
                <Row>
                    <Col md={8}>
                        <OlMap results={this.state.results} updateResults={this.updateResults} center={this.state.center} />
                        <ListPanel id="listResults" className="d-flex flex-row flex-nowrap" results={this.state.results} >
                            {this.state.results.map((result) => {
                                return <CardItem className="card-body" id={result.id} key={result.id} item={result} handleClick={this.handleClick} />
                            })}
                        </ListPanel>
                    </Col>
                    <Col md={4}>
                        <SearchForm updateResults={this.updateResults} handleChange={this.handleChange} />
                    </Col>
                </Row>
            </Container>
        )
    }
}

export default App;
