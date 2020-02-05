import React from 'react';
import './SearchForm.css'

import Filter from '../filters/Filters';
import { Form, FormGroup, Button } from 'react-bootstrap'

class SearchForm extends React.Component {
    constructor(props) {
        super(props);

        this.handleSubmit = this.handleSubmit.bind(this);
        this.updateResults = props.updateResults.bind(this);
    }

    handleSubmit(event) {
        event.preventDefault();

        this.updateResults(event);
    }

    render() {
        return (
            <Form className="col-md-12 searchForm" onSubmit={this.handleSubmit}>
                <FormGroup>
                    <Form.Label>Recherche</Form.Label>
                    <Form.Control name="query" value={this.props.query} onChange={this.props.handleChange} />
                </FormGroup>
                <Filter handleChange={this.props.handleChange} />
                <Button variant="primary" type="submit">Rechercher</Button>
            </Form>
        );
    }
}

export default SearchForm