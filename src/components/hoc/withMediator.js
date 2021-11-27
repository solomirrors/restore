import React from "react";

function withMediator(WrappedComponent) {
    return class extends React.Component {
        constructor(props) {
            super(props);
            this.state = { rmWidth: 0, rmHeight: 0, crmWidth: 0, crmHeight: 0};
            this.updateWindowDimensions = this.updateWindowDimensions.bind(this);
        }

        componentDidMount() {
            this.updateWindowDimensions();
            window.addEventListener('resize', this.updateWindowDimensions);
        }

        componentWillUnmount() {
            window.removeEventListener('resize', this.updateWindowDimensions);
        }

        updateWindowDimensions() {
            this.setState(function () {
                return{
                    rmWidth: window.innerWidth, rmHeight: window.innerHeight,
                }
            })
        }


        render() {
            const {rmWidth, rmHeight} = this.state;

            return <WrappedComponent {...this.props} rmWidth={rmWidth} rmHeight={rmHeight}/>;
        }
    }
}

export default withMediator;