import React, {PropTypes} from 'react'

const { Row } = require('react-flexbox-grid');

class SelectFormComponent extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        let sortOption;

        const handleChange = event => {
            event.preventDefault();
            this.props.firstOnChangeDispatch(sortOption.value);

            if(this.props.secondOnChangeDispatch) {
                this.props.secondOnChangeDispatch(sortOption.value);
            }

        };

        return (
            <Row>
                <form onChange={handleChange} className="selectForm">
                    {this.props.title}
                    <select defaultValue={this.props.defaultOption} ref={node => {
                        sortOption = node
                    }}>
                        <option value={this.props.defaultOption}>{this.props.defaultText}</option>
                        <option value={this.props.optionOne} >{this.props.optionOneText}</option>
                        <option value={this.props.optionTwo} >{this.props.optionTwoText}</option>
                    </select>
                </form>
            </Row>
        )
    }
}

SelectFormComponent.propTypes = {
    defaultOption: PropTypes.string.isRequired,
    optionOne: PropTypes.string.isRequired,
    optionTwo: PropTypes.string.isRequired,
    defaultText: PropTypes.string.isRequired,
    optionOneText: PropTypes.string.isRequired,
    optionTwoText: PropTypes.string.isRequired,
    firstOnChangeDispatch: PropTypes.func.isRequired,
    secondOnChangeDispatch: PropTypes.func
};

export default SelectFormComponent