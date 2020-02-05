import React from 'react'
import PropTypes from 'prop-types'

import { FormGroup, Form, InputGroup } from 'react-bootstrap'

class Filters extends React.Component {
    static propTypes = {
        results: PropTypes.array
    }

    render() {
        return (
            <div>
                <FormGroup>
                    <Form.Label htmlFor="region">Région</Form.Label>
                    <Form.Control type="text" name="region" onChange={this.props.handleChange} />

                    <Form.Label htmlFor="department">Département</Form.Label>
                    <Form.Control type="text" name="department" onChange={this.props.handleChange} />
                </FormGroup>
                <FormGroup>
                    <Form.Label>Prix</Form.Label>
                    <InputGroup className="mb-3">
                        <Form.Control
                            placeholder="min"
                            aria-label="prix min"
                            aria-describedby="basic-addon1"
                        />
                        <InputGroup.Prepend>
                            <InputGroup.Text id="basic-addon1">-</InputGroup.Text>
                        </InputGroup.Prepend>
                        <Form.Control
                            placeholder="max"
                            aria-label="prix max"
                            aria-describedby="basic-addon1"
                        />
                    </InputGroup>
                </FormGroup>
            </div>
        );
    }
}

export default Filters