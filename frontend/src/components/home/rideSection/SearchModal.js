import { Modal, Button, Form } from 'react-bootstrap';
import { Component } from 'react';
import { connect } from 'react-redux';
import { filterRides, getRides } from '../../../actions/rides';

export class SearchModal extends Component {
    state = {
        source: '',
        destination: '',
        startDate: '',
        endDate: '',
    }

    onSubmit = (e) => {
        this.props.filterRides(this.state);
        this.props.close();
      };

    reset = (e) => {
        this.props.getRides();
        this.props.close();
    }
  
      
    onChange = (e) => {this.setState({ [e.target.name]: e.target.value })};

    render() {
        return (
            <>
                <Modal
                    show={this.props.show}
                    onHide={this.props.close}
                    backdrop="static"
                    keyboard={false}
                >
                    <Modal.Header closeButton>
                    <Modal.Title>Search Rides: </Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                    <Form className="gap-3">
                                <Form.Group>
                                    <Form.Label>Source</Form.Label>
                                    <Form.Control as="select" name="source" placeholder="Select starting city" onChange={this.onChange}>
                                        <option>-- Select --</option>
                                        <option>HALIFAX</option>
                                        <option>ANTIGONISH</option>
                                        <option>SYDNEY</option>
                                        <option>MONCTON</option>
                                        <option>TRURO</option>
                                    </Form.Control>
                                </Form.Group>
                                <Form.Group>
                                    <Form.Label>Destination</Form.Label>
                                    <Form.Control placeholder="Select destination city" as="select" name="destination" onChange={this.onChange}>
                                        <option>-- Select --</option>
                                        <option>HALIFAX</option>
                                        <option>ANTIGONISH</option>
                                        <option>SYDNEY</option>
                                        <option>MONCTON</option>
                                        <option>TRURO</option>
                                    </Form.Control>
                                </Form.Group>
                                <Form.Group>
                                    <Form.Label>Start Date</Form.Label>
                                    <Form.Control type="date" name="startDate" onChange={this.onChange} />
                                    <Form.Label>End Date</Form.Label>
                                    <Form.Control type="date" name="endDate" onChange={this.onChange} />
                                </Form.Group>
                            </Form>
                    </Modal.Body>
                    <Modal.Footer>
                    <Button variant="dark" onClick={this.reset}>Reset filters</Button>
                    <Button variant="success" onClick={this.onSubmit}>
                        Search
                    </Button>
                    </Modal.Footer>
                </Modal>
    
            </>
        )
    }
}

export default connect(null, {filterRides, getRides})(SearchModal);