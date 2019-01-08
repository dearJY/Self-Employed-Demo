import React, {Component} from 'react';
import styled from 'styled-components';

const Input = styled.input`
    border-radius: 3px;
  border: 1px solid #babec5;
  display: block;
  margin:10px;
  padding: 10px;
  background-color:white;
  ::placeholder {
    color: #babec5;
  }
  &:focus {
    outline:none;
  }
  width:${props => props.width || ""};
`;

 class SelfInputBox extends Component {
    constructor(props) {
        super(props);
        this.handleInputChange = this.handleInputChange.bind(this);
    }

    handleInputChange(e) {
        this.props.onChange(e.target.value);
    }

    render() {
        return <Input {...this.props.externalStyle} placeholder={this.props.placeholder} type={this.props.type} value={this.props.value} onChange={this.handleInputChange} />
    }
}

export default SelfInputBox;

