import React from "react";
import { Button, Form } from "semantic-ui-react";

class SearchBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = { searchTopic: "" };
  }

  handleChange = event => {
    this.setState({ searchTopic: event.target.value });
  };

  handleSubmit = event => {
    event.preventDefault();
    this.props.searchForTopic(this.state.searchTopic);
  };

  render() {
    return (
      <div style={{ display: "flex", justifyContent: "center" }}>
        <Form onSubmit={this.handleSubmit}>
          <Form.Group>
            <Form.Input
              placeholder="Search topic"
              name="topic"
              value={this.state.searchTopic}
              onChange={this.handleChange}
              style={{boxShadow: '5px 5px 10px rgba(0, 0, 0, 0.3)'}}
            />
            <Button type="submit" color="orange" style={{boxShadow: '5px 5px 10px rgba(0, 0, 0, 0.3)'}}>
              Search
            </Button>
          </Form.Group>
        </Form>
      </div>
    );
  }
}

export default SearchBar;
