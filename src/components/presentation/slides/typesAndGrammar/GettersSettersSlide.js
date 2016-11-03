import React, { PropTypes } from 'react';
import sections from '../../../../dictionary/sections';

class GettersSettersSlide extends React.Component {
    get id() {
        return 'getters-and-setters';
    }
    get section() {
        return sections.TYPES_AND_GRAMMAR;
    }
    get title() {
        return 'Getters & Setters';
    }

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="slide-container novetta-bg">
                <div className="slide-header">Getters & Setters</div>
                <div className="slide-content">
                    <div className="code-block small">
                        <p>
                            <span>var obj = &#123;</span>
                            <span>    get a() &#123;</span>
                            <span>        return this.b;</span>
                            <span>    &#125;,</span>
                            <span>    set a(num) &#123;</span>
                            <span>        this.b = num;</span>
                            <span>    &#125;</span>
                            <span>&#125;;</span>
                            <span> </span>
                            <span>obj.a = 1;</span>
                            <span>console.log(obj.a); // 1</span>
                        </p>
                    </div>
                    <ul>
                        <li>Getters define functionality for RHS evaluations</li>
                        <li>Setters define functionality for LHS evaluations</li>
                    </ul>
                </div>
            </div>
        );
    }
}

GettersSettersSlide.propTypes = {
    pageNumber: PropTypes.number
};

export default GettersSettersSlide;
