var Counter = React.createClass({
    getInitialState: function () {
        return {
            counter: 0
        };
    },
    increment: function () {
        this.setState({
            counter: this.state.counter + 1
        });
    },
    decrement: function () {
        this.setState({
            counter: this.state.counter - 1
        })
    },
    getDefaultProps: function () {
        console.log('getDefaultProps')
    },
    componentWillMount: function () {
        console.log('componentWillMount')
    },
    componentWillReceiveProps: function () {
        console.log('componentWillReceiveProps')
    },
    shouldComponentUpdate: function () {
        console.log('shouldComponentUpdate')
    },
    componentWillUpdate: function () {
        console.log('componentWillUpdate')
    },
    componentDidUpdate: function () {
        console.log('componentDidUpdate ')
    },
    componentWillUnmount: function () {
        console.log('componentWillUnmount')
    },

    render: function () {
        return React.createElement('div', {},
            React.createElement('button', {onClick: this.increment}, 'increment'),
            React.createElement('button', {onClick: this.decrement}, 'decrement'),
            React.createElement('span', {}, 'Licznik ' + this.state.counter)
        );
    }
});

var CounterList = React.createClass({

    render: function () {
        return (
            React.createElement('ul', {className: 'countertList'},
                React.createElement('li', {},
                    React.createElement(Counter)
                ),
                React.createElement('li', {},
                    React.createElement(Counter)
                )
            )
        );
    }
});

var element = React.createElement(CounterList);
ReactDOM.render(element, document.getElementById('app'));