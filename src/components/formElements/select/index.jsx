import React from 'react';
import PropTypes from 'prop-types';

import './styles.scss';

export class Select extends React.PureComponent {
    constructor(props) {
        super(props);

        this.myRef = React.createRef();

        this.state = {
            active: false,
            value: '',
        }
    }

    componentDidMount() {
        const { value, placeholder } = this.props;
        this.setState({ value: value || placeholder })
    }

    onChange = (current) => {
        this.myRef.current.value = current.value;
        this.setState({ active: false, value: current.name })
        this.props.onChange && this.props.onChange(current)
    }

    toggle = active => {
        console.log(active)
        this.setState({ active })
    }

    renderHiddenSelect = () => {
        const { name, options, placeholder, id } = this.props;

        return (
            <select name={name} id={id} className='form-select__hidden' ref={this.myRef}>
                {placeholder && <option value="">{placeholder}</option>}
                {options.map(option => {
                    return (
                        <option key={option.value} value={option.value} selected={option.selected}>{option.name}</option>
                    );
                })}
            </select>
        );
    }

    renderStyleSelect = () => {
        const { options, placeholder } = this.props;
        const { active, value } = this.state;
        const classStyled = active ? 'active': ''

        return (
            <div className={`form-select__styled ${classStyled}`}
                 tabIndex='0'
                 onBlur={() => this.toggle(false)}
            >
                <div className="form-select__value"
                     onClick={() => this.toggle(true)}
                >{value}</div>
                <div className='form-select__list-options'>
                    {placeholder && (<div className='form-select__option-item default' onClick={() => this.onChange({ value: '', name: placeholder })}>{placeholder}</div>)}
                    {options.map(option => {
                        return (
                            <div key={option.value} className='form-select__option-item' onClick={() => this.onChange(option)}>
                                {option.name}
                            </div>
                        );
                    })}
                </div>
            </div>
        );
    }

    render() {
        return (
            <div className='form-select'>
                {this.renderHiddenSelect()}
                {this.renderStyleSelect()}
            </div>
        );
    }
}

Select.propTypes = {
    name: PropTypes.string,
    value: PropTypes.string,
    options: PropTypes.array.isRequired,
    placeholder: PropTypes.string,
    id: PropTypes.string,
    onChange: PropTypes.func
}