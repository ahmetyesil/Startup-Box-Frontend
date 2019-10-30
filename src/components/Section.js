import React, {Component} from "react";
import PropTypes from "prop-types";

class Section extends Component {

    render() {
        const {className, children} = this.props;

        return <div className={"section " + className}>
            {
                children
            }
        </div>;
    }
}

Section.propTypes = {
    className: PropTypes.string,
    children: PropTypes.any
};


export default Section;
