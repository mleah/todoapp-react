import React, {PropTypes} from 'react'

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
            <form onChange={handleChange}>
                <select defaultValue={this.props.defaultOption} ref={node => {
                    sortOption = node
                }}>
                    <option value={this.props.defaultOption}>{this.props.defaultText}</option>
                    <option value={this.props.optionOne} >{this.props.optionOneText}</option>
                    <option value={this.props.optionTwo} >{this.props.optionTwoText}</option>
                </select>
            </form>
        )
    }
}

export default SelectFormComponent