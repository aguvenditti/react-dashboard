import React, { Component } from 'react';

class MainCard extends Component {
    constructor(props) {
        super();
        this.state = {
            error: null,
            isLoaded: false,
            props: props,
            value: ''
        };
    };

    componentDidMount() {
        fetch(this.state.props.fetchUrl)
          .then(res => res.json())
          .then(
            (result) => {
              this.setState({
                isLoaded: true,
                value: result
              });
            },
            (error) => {
              this.setState({
                isLoaded: true,
                error
              });
            }
        )
    };

    render() {
        const { error, isLoaded } = this.state;
        if (error) {
            return <div>Error: {error.message}</div>;
        } else if (!isLoaded) {
            return <div>Loading...</div>;
        } else {
            return (
                <div className="col-md-4 mb-4">
                    <div className={this.state.props.borderClass}>
                        <div className="card-body">
                            <div className="row no-gutters align-items-center">
                                <div className="col mr-2">
                                    <div className="text-xs font-weight-bold text-primary text-uppercase mb-1"> {this.state.props.title} </div>
                                    <div className="h5 mb-0 font-weight-bold text-gray-800">{this.state.props.symbol}{this.state.value}</div>
                                </div>
                                <div className="col-auto">
                                    <i className={this.state.props.icon}></i>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            );
        };
    };
};

export default MainCard;
